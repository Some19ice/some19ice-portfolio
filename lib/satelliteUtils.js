import { twoline2satrec, propagate, gstime, eciToGeodetic } from 'satellite.js';

export const SATELLITES = [
  { name: 'NigeriaSat-2', id: 37792, type: 'EO' },
  { name: 'NigeriaSat-X', id: 37793, type: 'EO' },
  { name: 'Sentinel-1A', id: 39634, type: 'SAR' },
  { name: 'ISS', id: 25544, type: 'Station' }
];

export async function fetchTLEs() {
  const ids = SATELLITES.map(s => s.id).join(',');
  try {
    const response = await fetch(`https://celestrak.org/NORAD/elements/gp.php?CATNR=${ids}&FORMAT=TLE`);
    const text = await response.text();
    const lines = text.split('\n');
    const tles = [];
    
    // Parse TLEs (3 lines per satellite: Name, Line 1, Line 2)
    // Sometimes Celestrak returns Name, L1, L2. Sometimes just L1, L2? 
    // GP.php usually returns Name, L1, L2.
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      // Heuristic: If line doesn't start with 1 or 2, it's a name
      if (!line.startsWith('1 ') && !line.startsWith('2 ') && i + 2 < lines.length) {
        const name = line;
        const line1 = lines[i+1].trim();
        const line2 = lines[i+2].trim();
        
        // Find matching metadata
        const meta = SATELLITES.find(s => s.name.toUpperCase() === name.toUpperCase()) || 
                     SATELLITES.find(s => name.includes(s.name.toUpperCase()));
        
        if (line1.startsWith('1 ') && line2.startsWith('2 ')) {
          tles.push({
            name: name.trim(),
            line1,
            line2,
            type: meta?.type || 'Unknown'
          });
          i += 2;
        }
      }
    }
    return tles;
  } catch (e) {
    console.error("Failed to fetch TLEs", e);
    return [];
  }
}

export function getSatellitePosition(tle, date = new Date()) {
  const satrec = twoline2satrec(tle.line1, tle.line2);
  const positionAndVelocity = propagate(satrec, date);
  const positionEci = positionAndVelocity.position;
  
  if (!positionEci) return null;

  const gmst = gstime(date);
  const positionGd = eciToGeodetic(positionEci, gmst);

  // Convert radians to degrees
  const lng = positionGd.longitude * 180 / Math.PI;
  const lat = positionGd.latitude * 180 / Math.PI;
  const alt = positionGd.height / 6371; // Normalized altitude (Earth radius = 1)

  return { lat, lng, alt };
}

export function generateOrbitPath(tle, startTime, durationMinutes = 90, steps = 100) {
  const path = [];
  const stepMs = (durationMinutes * 60 * 1000) / steps;
  
  for (let i = 0; i <= steps; i++) {
    const t = new Date(startTime.getTime() + (i * stepMs));
    const pos = getSatellitePosition(tle, t);
    if (pos) path.push([pos.lat, pos.lng, pos.alt]);
  }
  return path;
}
