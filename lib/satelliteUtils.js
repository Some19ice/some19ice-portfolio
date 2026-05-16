import { twoline2satrec, propagate, gstime, eciToGeodetic } from 'satellite.js';

/**
 * @typedef {{ name: string, id: number, type: 'EO' | 'SAR' | 'Station' }} SatelliteMeta
 * @typedef {{ name: string, line1: string, line2: string, type: string }} TLESatellite
 * @typedef {{ lat: number, lng: number, alt: number }} SatellitePosition
 */

/** @type {SatelliteMeta[]} */
export const SATELLITES = [
  { name: 'NigeriaSat-2', id: 37792, type: 'EO' },
  { name: 'NigeriaSat-X', id: 37793, type: 'EO' },
  { name: 'Sentinel-1A', id: 39634, type: 'SAR' },
  { name: 'ISS', id: 25544, type: 'Station' }
];

/**
 * Fetches TLE data from Celestrak with timeout.
 * @param {number} [timeoutMs=10000]
 * @returns {Promise<TLESatellite[]>}
 */
export async function fetchTLEs(timeoutMs = 10000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  const ids = SATELLITES.map(s => s.id).join(',');
  try {
    const response = await fetch(
      `https://celestrak.org/NORAD/elements/gp.php?CATNR=${ids}&FORMAT=TLE`,
      { signal: controller.signal }
    );
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Celestrak returned ${response.status}: ${response.statusText}`);
    }

    const text = await response.text();
    const lines = text.split('\n');
    /** @type {TLESatellite[]} */
    const tles = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      if (!line.startsWith('1 ') && !line.startsWith('2 ') && i + 2 < lines.length) {
        const name = line;
        const line1 = lines[i + 1].trim();
        const line2 = lines[i + 2].trim();

        const meta = SATELLITES.find(s => s.name.toUpperCase() === name.toUpperCase())
          || SATELLITES.find(s => name.includes(s.name.toUpperCase()));

        if (line1.startsWith('1 ') && line2.startsWith('2 ')) {
          tles.push({ name: name.trim(), line1, line2, type: meta?.type || 'Unknown' });
          i += 2;
        }
      }
    }
    return tles;
  } catch (e) {
    clearTimeout(timeoutId);
    if (e.name === 'AbortError') {
      throw new Error('TLE fetch timed out after 10s');
    }
    throw new Error(`Failed to fetch TLEs: ${e.message}`);
  }
}

/**
 * Get satellite position at a given date.
 * @param {TLESatellite} tle
 * @param {Date} [date]
 * @returns {SatellitePosition | null}
 */
export function getSatellitePosition(tle, date = new Date()) {
  const satrec = twoline2satrec(tle.line1, tle.line2);
  const positionAndVelocity = propagate(satrec, date);
  const positionEci = positionAndVelocity.position;

  if (!positionEci) return null;

  const gmst = gstime(date);
  const positionGd = eciToGeodetic(positionEci, gmst);

  const lng = positionGd.longitude * 180 / Math.PI;
  const lat = positionGd.latitude * 180 / Math.PI;
  const alt = positionGd.height / 6371;

  return { lat, lng, alt };
}

/**
 * Generate orbit path points for visualization.
 * @param {TLESatellite} tle
 * @param {Date} startTime
 * @param {number} [durationMinutes=90]
 * @param {number} [steps=100]
 * @returns {number[][]}
 */
export function generateOrbitPath(tle, startTime, durationMinutes = 90, steps = 100) {
  const path = [];
  const stepMs = (durationMinutes * 60 * 1000) / steps;

  for (let i = 0; i <= steps; i++) {
    const t = new Date(startTime.getTime() + i * stepMs);
    const pos = getSatellitePosition(tle, t);
    if (pos) path.push([pos.lat, pos.lng, pos.alt]);
  }
  return path;
}
