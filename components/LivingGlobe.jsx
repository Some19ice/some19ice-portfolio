// @ts-nocheck
import React, { useEffect, useRef, useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import * as THREE from 'three';
import { fetchTLEs, getSatellitePosition, generateOrbitPath } from '../lib/satelliteUtils';

// Dynamically import Globe to avoid SSR issues with WebGL
const Globe = dynamic(() => import('react-globe.gl'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full text-primary animate-pulse">
      Initializing Orbital Systems...
    </div>
  ),
});

export default function LivingGlobe({ onGlobeReady, targetLocation }) {
  const globeEl = useRef();
  const [mounted, setMounted] = useState(false);
  const [satellites, setSatellites] = useState([]);
  const [orbits, setOrbits] = useState([]);

  // Project Pins Data
  const projects = useMemo(() => [
    {
      id: 'ngdi',
      lat: 9.0765, // Abuja
      lng: 7.3986,
      name: "NGDI Metadata Portal",
      color: "#22d3ee",
      alt: 0.1
    },
    {
      id: 'flood',
      lat: 5.8702, // Cross River
      lng: 8.5988,
      name: "Flood Surveillance",
      color: "#f97316", // Alert Orange
      alt: 0.1
    },
    {
      id: 'station',
      lat: 6.5244, // Lagos
      lng: 3.3792,
      name: "Station Manager",
      color: "#22c55e",
      alt: 0.1
    }
  ], []);

  useEffect(() => {
    setMounted(true);
    
    // Initialize Satellites
    fetchTLEs().then(tles => {
      // 1. Generate Orbit Paths (Static for the session)
      const now = new Date();
      const orbitPaths = tles.map(tle => ({
        name: tle.name,
        color: tle.type === 'Station' ? '#facc15' : '#a855f7',
        path: generateOrbitPath(tle, now)
      }));
      setOrbits(orbitPaths);

      // 2. Start Animation Loop for Live Position
      const interval = setInterval(() => {
        const time = new Date();
        const currentPos = tles.map(tle => {
          const pos = getSatellitePosition(tle, time);
          return pos ? { ...pos, name: tle.name, type: tle.type } : null;
        }).filter(Boolean);
        setSatellites(currentPos);
      }, 1000); // Update every second

      return () => clearInterval(interval);
    });
  }, []);

  // Handle Target Location Updates (The "Swoop")
  useEffect(() => {
    if (targetLocation && globeEl.current) {
      try {
        if (typeof globeEl.current.pointOfView === 'function') {
          globeEl.current.pointOfView({
            lat: targetLocation.lat,
            lng: targetLocation.lng,
            altitude: targetLocation.altitude || 1.5
          }, 2000);
        } else {
          console.warn("Globe method pointOfView not found");
        }
      } catch (err) {
        console.error("Error moving globe:", err);
      }
    }
  }, [targetLocation]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        
        // Atmosphere
        atmosphereColor="#3a228a"
        atmosphereAltitude={0.15}
        
        // Pins
        pointsData={projects}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointAltitude="alt"
        pointRadius={0.5}
        pointsMerge={true}
        pointLabel="name"
        
        // Satellites (Objects)
        objectsData={satellites}
        objectLat="lat"
        objectLng="lng"
        objectAltitude="alt"
        objectLabel="name"
        objectThreeObject={d => {
          const color = d.type === 'Station' ? 0xfacc15 : 0xa855f7;
          return new THREE.Mesh(
            new THREE.SphereGeometry(d.type === 'Station' ? 1.5 : 0.8),
            new THREE.MeshLambertMaterial({ color })
          );
        }}
        
        // Orbit Paths
        pathsData={orbits}
        pathPoints="path"
        pathPointLat={p => p[0]}
        pathPointLng={p => p[1]}
        pathPointAlt={p => p[2]}
        pathColor="color"
        pathStroke={2} 
        pathDashLength={0.5}
        pathDashGap={0.2}
        pathDashAnimateTime={12000}
        
        // Auto-rotate
        autoRotate={true}
        autoRotateSpeed={0.5}
        
        // Interaction
        onPointClick={(point) => {
          if (globeEl.current) {
            try {
              globeEl.current.pointOfView({
                lat: point.lat,
                lng: point.lng,
                altitude: 1.5
              }, 1000);
            } catch (err) {
              console.error("Click move error:", err);
            }
          }
        }}
        
        onGlobeReady={() => {
          if(onGlobeReady) onGlobeReady();
          // Initial view
          setTimeout(() => {
             if (globeEl.current && typeof globeEl.current.pointOfView === 'function') {
               try {
                 globeEl.current.pointOfView({ lat: 15, lng: 10, altitude: 2.5 });
               } catch (e) { console.error(e); }
             }
          }, 500);
        }}
      />
    </div>
  );
}
