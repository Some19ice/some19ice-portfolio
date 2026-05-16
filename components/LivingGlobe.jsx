import React, { useEffect, useRef, useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import * as THREE from 'three';
import { fetchTLEs, getSatellitePosition, generateOrbitPath } from '../lib/satelliteUtils';

// eslint-disable-next-line no-unused-vars
const Globe = dynamic(() => import('react-globe.gl'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full text-primary animate-pulse">
      Initializing Orbital Systems...
    </div>
  ),
});

// ── Module-level cached geometries ──────────────────────────────────
const SAT_GEO_STATION = new THREE.SphereGeometry(1.5, 16, 12);
const SAT_GEO_SAT = new THREE.SphereGeometry(0.8, 12, 8);
const SAT_GEO_STATION_MOBILE = new THREE.SphereGeometry(2.5, 8, 6);
const SAT_GEO_SAT_MOBILE = new THREE.SphereGeometry(1.5, 6, 4);
const SAT_MAT_STATION = new THREE.MeshLambertMaterial({ color: 0xfacc15 });
const SAT_MAT_SAT = new THREE.MeshLambertMaterial({ color: 0xa855f7 });

// Shared tiny sphere for trail dots
const TRAIL_GEO = new THREE.SphereGeometry(0.2, 6, 4);

// ── Seeded PRNG (mulberry32) ────────────────────────────────────────
function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ── Cosmos helpers ──────────────────────────────────────────────────

function createStars(count) {
  const positions = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const speeds = new Float32Array(count);
  const phases = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const radius = 80 + Math.random() * 50;
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
    sizes[i] = 0.3 + Math.random() * 1.7;
    speeds[i] = 0.3 + Math.random() * 0.7;
    phases[i] = Math.random() * Math.PI * 2;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
  geometry.setAttribute('speed', new THREE.BufferAttribute(speeds, 1));
  geometry.setAttribute('phase', new THREE.BufferAttribute(phases, 1));

  const material = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 1.0,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    sizeAttenuation: true,
  });

  const points = new THREE.Points(geometry, material);
  return { points, geometry, material, sizes, speeds, phases };
}

function animateStars(starData, elapsed) {
  const { material, geometry, speeds, phases } = starData;
  material.opacity =
    0.5 + 0.4 * Math.sin(elapsed * 0.3) + 0.1 * Math.sin(elapsed * 0.7);

  const sizeArr = geometry.attributes.size.array;
  for (let i = 0; i < sizeArr.length; i++) {
    const twinkle = 0.5 + 0.5 * Math.sin(elapsed * speeds[i] + phases[i]);
    sizeArr[i] = (0.3 + (i % 20) * 0.085) * (0.5 + twinkle * 0.5);
  }
  geometry.attributes.size.needsUpdate = true;
}

function createStarDust(count) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 300;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({
    color: 0x8888ff,
    size: 0.5,
    transparent: true,
    opacity: 0.15,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    sizeAttenuation: true,
  });
  const points = new THREE.Points(geometry, material);
  return { points, geometry, material };
}

// ── Project data anchors for seeded flood data ──────────────────────
const FLOOD_ANCHORS = [
  { lat: 7.8, lng: 6.8 },  // Niger-Benue confluence
  { lat: 5.9, lng: 8.6 },  // Cross River
  { lat: 6.5, lng: 3.4 },  // Lagos coast
  { lat: 12.0, lng: 8.5 }, // Northern region
];

/**
 * @typedef {Object} GlobeTarget
 * @property {number} lat
 * @property {number} lng
 * @property {number} [altitude]
 */

/**
 * Interactive 3D globe with satellite tracking and geospatial overlays.
 *
 * @param {Object} props
 * @param {() => void}           [props.onGlobeReady]
 * @param {GlobeTarget | null}   [props.targetLocation]
 * @param {'flood'|'cholera'|null} [props.activeLayer]
 */
export default function LivingGlobe({ onGlobeReady, targetLocation, activeLayer }) {
  const globeEl = useRef();
  const intervalRef = useRef(null);
  const trailRef = useRef({});
  const sceneRef = useRef(null);

  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState(null);
  const [satellites, setSatellites] = useState([]);
  const [trails, setTrails] = useState([]);
  const [orbits, setOrbits] = useState([]);
  const [floodData, setFloodData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [globeReady, setGlobeReady] = useState(false);

  // ── Mobile detection ──────────────────────────────────────────────
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // ── Seeded flood / cholera mock data ──────────────────────────────
  useEffect(() => {
    if (activeLayer === 'flood' || activeLayer === 'cholera') {
      const rng = mulberry32(42);
      const data = [];
      for (let i = 0; i < 400; i++) {
        const anchor = FLOOD_ANCHORS[Math.floor(rng() * FLOOD_ANCHORS.length)];
        data.push({
          lat: anchor.lat + (rng() - 0.5) * 4,
          lng: anchor.lng + (rng() - 0.5) * 4,
          weight: rng(),
        });
      }
      setFloodData(data);
    } else {
      setFloodData([]);
    }
  }, [activeLayer]);

  // ── Project location pins ─────────────────────────────────────────
  const projects = useMemo(() => [
    { id: 'ngdi',    lat: 9.0765, lng: 7.3986, name: 'NGDI Metadata Portal',     color: '#22d3ee', alt: 0.1 },
    { id: 'flood',   lat: 5.8702, lng: 8.5988, name: 'Flood Surveillance',       color: '#f97316', alt: 0.1 },
    { id: 'station', lat: 6.5244, lng: 3.3792, name: 'Station Manager',          color: '#22c55e', alt: 0.1 },
  ], []);

  // ── Satellite initialisation (with error handling + cleanup) ──────
  useEffect(() => {
    let cancelled = false;
    setMounted(true);
    setError(null);

    fetchTLEs()
      .then((tles) => {
        if (cancelled) return;
        if (tles.length === 0) {
          setError('No satellite data received from Celestrak');
          return;
        }

        const now = new Date();
        const orbitPaths = tles.map((tle) => ({
          name: tle.name,
          color: tle.type === 'Station' ? '#facc15' : '#a855f7',
          path: generateOrbitPath(tle, now),
        }));
        setOrbits(orbitPaths);

        intervalRef.current = setInterval(() => {
          if (cancelled) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            return;
          }
          const time = new Date();
          const currentPos = tles
            .map((tle) => {
              const pos = getSatellitePosition(tle, time);
              return pos ? { ...pos, name: tle.name, type: tle.type } : null;
            })
            .filter(Boolean);
          setSatellites(currentPos);
        }, 1000);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      });

    return () => {
      cancelled = true;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  // ── Satellite trails ──────────────────────────────────────────────
  useEffect(() => {
    const maxTrail = isMobile ? 10 : 20;
    const newTrails = [];

    satellites.forEach((sat) => {
      if (!trailRef.current[sat.name]) trailRef.current[sat.name] = [];
      const trail = trailRef.current[sat.name];
      trail.push({ lat: sat.lat, lng: sat.lng, alt: sat.alt });
      if (trail.length > maxTrail) trail.shift();

      trail.forEach((pos, idx) => {
        const t = (idx + 1) / trail.length;
        newTrails.push({
          lat: pos.lat,
          lng: pos.lng,
          alt: pos.alt,
          opacity: t * 0.5,
          radius: t * (isMobile ? 0.5 : 0.3),
        });
      });
    });

    setTrails(newTrails);
  }, [satellites, isMobile]);

  // ── Cosmos effects (twinkling stars + star dust) ──────────────────
  useEffect(() => {
    if (!globeReady || !sceneRef.current) return;

    const scene = sceneRef.current;
    const clock = new THREE.Clock();
    const cosmosObjects = [];

    // Twinkling stars
    const starCount = isMobile ? 1200 : 3000;
    const stars = createStars(starCount);
    scene.add(stars.points);
    cosmosObjects.push({ obj: stars.points, geo: stars.geometry, mat: stars.material });

    // Star dust (desktop only)
    let dust = null;
    if (!isMobile) {
      dust = createStarDust(4000);
      scene.add(dust.points);
      cosmosObjects.push({ obj: dust.points, geo: dust.geometry, mat: dust.material });
    }

    let animFrameId;
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      animateStars(stars, elapsed);
      if (dust) dust.points.rotation.y += 0.0002;
      animFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animFrameId);
      cosmosObjects.forEach(({ obj, geo, mat }) => {
        scene.remove(obj);
        geo.dispose();
        mat.dispose();
      });
    };
  }, [globeReady, isMobile]);

  // ── Target location swoop ─────────────────────────────────────────
  useEffect(() => {
    if (!targetLocation || !globeEl.current) return;
    try {
      const el = globeEl.current;
      if (typeof el.pointOfView === 'function') {
        el.pointOfView(
          { lat: targetLocation.lat, lng: targetLocation.lng, altitude: targetLocation.altitude || 1.5 },
          2000
        );
      }
    } catch (err) {
      console.error('Error moving globe:', err);
    }
  }, [targetLocation]);

  // ── Hex bin colour for flood/cholera layers ──────────────────────
  const hexBinColor = useMemo(() => {
    if (activeLayer === 'flood') return (d) => `rgba(249, 115, 22, ${d.sumWeight * 0.15})`;
    if (activeLayer === 'cholera') return (d) => `rgba(239, 68, 68, ${d.sumWeight * 0.15})`;
    return 'rgba(0,0,0,0)';
  }, [activeLayer]);

  // ── Error state UI ────────────────────────────────────────────────
  if (error) {
    return (
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-destructive/80 text-sm font-mono text-center max-w-md px-4">
          <p className="text-lg mb-2">{'⚠'} Orbital Systems Offline</p>
          <p className="text-muted-foreground">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 border border-border rounded hover:bg-card transition-colors"
          >
            Reconnect
          </button>
        </div>
      </div>
    );
  }

  if (!mounted) return null;

  // Combine satellites + trails for rendering
  const allObjects = useMemo(() => {
    const sats = satellites.map((s) => ({ ...s, _isTrail: false }));
    const trs = trails.map((t) => ({ ...t, _isTrail: true }));
    return [...sats, ...trs];
  }, [satellites, trails]);

  return (
    <div className="absolute inset-0 z-0">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl={!isMobile ? '//unpkg.com/three-globe/example/img/earth-topology.png' : null}
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

        hexBinResolution={isMobile ? 2 : 4}
        pointsMerge

        atmosphereColor="#3a228a"
        atmosphereAltitude={0.15}

        // Flood / cholera hex overlay
        hexBinPointsData={floodData}
        hexBinPointWeight="weight"
        hexTopColor={hexBinColor}
        hexSideColor={hexBinColor}
        hexBinAltitude={(d) => d.sumWeight * 0.05}
        hexTransitionDuration={1000}

        // Project pins
        pointsData={projects}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointAltitude="alt"
        pointRadius={isMobile ? 0.8 : 0.5}
        pointLabel="name"

        // Satellites + trails
        objectsData={allObjects}
        objectLat="lat"
        objectLng="lng"
        objectAltitude="alt"
        objectLabel={(d) => (!d._isTrail ? d.name : undefined)}
        objectThreeObject={(d) => {
          if (d._isTrail) {
            return new THREE.Mesh(
              TRAIL_GEO,
              new THREE.MeshLambertMaterial({
                color: 0xa855f7,
                transparent: true,
                opacity: d.opacity || 0.4,
              })
            );
          }
          const isStation = d.type === 'Station';
          const geo = isStation
            ? isMobile ? SAT_GEO_STATION_MOBILE : SAT_GEO_STATION
            : isMobile ? SAT_GEO_SAT_MOBILE : SAT_GEO_SAT;
          const mat = isStation ? SAT_MAT_STATION : SAT_MAT_SAT;
          return new THREE.Mesh(geo, mat);
        }}

        // Orbit paths
        pathsData={orbits}
        pathPoints="path"
        pathPointLat={(p) => p[0]}
        pathPointLng={(p) => p[1]}
        pathPointAlt={(p) => p[2]}
        pathColor="color"
        pathStroke={isMobile ? 2 : 4}
        pathDashLength={0.5}
        pathDashGap={0.2}
        pathDashAnimateTime={12000}

        // Glow orbit underlay (wider transparent paths behind dashes)
        // Achieved via custom path rendering — boost stroke for visible glow
        pathTransitionDuration={500}

        autoRotate
        autoRotateSpeed={isMobile ? 0.2 : 0.5}

        onPointClick={(point) => {
          if (!globeEl.current) return;
          try {
            globeEl.current.pointOfView(
              { lat: point.lat, lng: point.lng, altitude: isMobile ? 2.5 : 1.5 },
              1000
            );
          } catch (err) {
            console.error('Click move error:', err);
          }
        }}

        onGlobeReady={() => {
          // Store scene reference for cosmos effects
          if (globeEl.current) {
            try {
              const s = globeEl.current.scene();
              if (s) sceneRef.current = s;
            } catch { /* scene access may not be available immediately */ }
          }

          if (onGlobeReady) onGlobeReady();
          setGlobeReady(true);

          setTimeout(() => {
            if (globeEl.current && typeof globeEl.current.pointOfView === 'function') {
              try {
                globeEl.current.pointOfView({
                  lat: 15,
                  lng: 10,
                  altitude: isMobile ? 3.5 : 2.5,
                });
              } catch (e) {
                console.error(e);
              }
            }
          }, 500);
        }}
      />
    </div>
  );
}
