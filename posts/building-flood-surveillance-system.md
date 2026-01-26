---
title: "Building a Real-Time Flood Surveillance System with Satellite Imagery & PostGIS"
date: "2026-01-26"
excerpt: "A deep technical dive into architecting a disaster response platform. We explore integrating Google Earth Engine's petabyte-scale catalog with FastAPI, PostGIS, and React to predict cholera outbreaks in real-time."
coverImage: "/flood-cholera-dashboard.svg"
readTime: "20 min read"
tags: ["GIS", "System Architecture", "Google Earth Engine", "Python", "React", "PostGIS", "Remote Sensing"]
---

# Building a Real-Time Flood Surveillance System: Where GIS Meets Epidemiology

**Disaster response is fundamentally a data problem.** In regions prone to flooding, the aftermath often brings a secondary, silent killer: **Cholera**. The causal link between rising water levels, contaminated wells, and waterborne disease is well-established, but monitoring this risk in real-time across vast territories like Cross River State requires more than manual reports. It requires **Automated Geospatial Intelligence**.

In this technical case study, I'll deconstruct the **Flooding & Cholera Surveillance Dashboard**, a full-stack system I engineered to fuse epidemiological data with real-time satellite imagery. We'll look at the architecture, the specific algorithms used for flood detection, and how to optimize a geospatial React application for performance.

---

## 1. The Architecture: Decoupled & Event-Driven

We needed a system that could ingest massive datasets (satellite imagery) without blocking the user interface. The solution was a decoupled architecture:

![Architecture Diagram](https://mermaid.ink/img/pako:eNp1k01v2zAMhv_KoHMToC9F9rBjA7Zhuw7YMOyqwzA0TbW1yJIg06aB_vcpeaRpkTjAAyWKfPjxEilRClWSpfCXKsvht9L64O8c-MHB0d-D88H7QftwMPjeH_QG_cH54Oug1z8YnP4V-jQOQ6fT0dE4tKq29qZUT9W70vpa3WltS_X-XmkbWlVbe1OqD6X1XantV6XtsbW2X5W2w9bavlXaHltL-1lpO2qt7W2l7bC1tF-VtsPW2n5V2h5bS_tVaTtqre13pe2wtbRflbbD1tJ-VdoOW2v7VWl7bC3tV6XtsLW0X5W2w9ba3lXaDltL-1Vpe2yt7Vel7bC1tl-VtsfW0n5V2g5ba_tVaTtqre13pe2wtbRflbbD1tJ-VdoOW2v7VWl7bC3tV6XtsLW2X5W2w9bSflXaDltr-1Vpe2wt7Vel7ai1treVtsPW0n5V2g5ba_tVaXtsLe1Xpe2wtbZflbbD1tJ-VdoOW0v7VWk7aq3td6XtsLW0X5W2w9bSflXaDltr-1Vpe2wt7Vel7bC1tl-VtsPW2n5V2g5bS_tVaTtqre1tpe2wtbRflbbD1tp-VdoOW2v7VWl7bC3tV6XtsLW2X5W2w9bSflXaDltL-1Vp-1drtV39Bw)

### The Stack
- **Frontend:** Next.js (React) + Leaflet + Recharts
- **Backend:** Python (FastAPI) + SQLAlchemy + Pydantic
- **Database:** PostgreSQL 15 + **PostGIS** extension
- **Compute Engine:** **Google Earth Engine (GEE)** via Python API
- **Task Queue:** Background workers for asynchronous data fetching

### Why Python & FastAPI?
While Node.js is excellent for I/O, Python remains the king of geospatial analysis. Libraries like `earthengine-api`, `shapely`, and `geopandas` have no robust equivalents in the JavaScript ecosystem. FastAPI gives us the best of both worlds: the type safety and async performance of modern web frameworks, with full access to the Python data science stack.

---

## 2. Seeing Through Clouds: The Sentinel-1 SAR Pipeline

One of the biggest ironies in flood monitoring is that **optical satellites are useless when you need them most**. Floods happen during storms, and storms mean clouds. Landsat and Sentinel-2 sensors cannot see through heavy cloud cover.

To solve this, I integrated **Sentinel-1 Synthetic Aperture Radar (SAR)** data. SAR sensors transmit microwave signals that penetrate clouds, rain, and smoke, allowing us to "see" the ground day or night.

### The Algorithm: Change Detection

Identifying water in SAR imagery isn't as simple as "look for blue." We use a **Change Detection** approach based on backscatter intensity.

1.  **Baseline Image:** We fetch a median composite of imagery from a dry reference period.
2.  **Event Image:** We fetch the latest radar pass during the potential flood window.
3.  **Speckle Filtering:** SAR data is noisy ("salt and pepper" effect). We apply a spatial smoothing filter (Boxcar or Refined Lee) to clean the signal.
4.  **Thresholding:** Water surfaces act as specular reflectors, bouncing the radar signal away from the sensor. This results in very low backscatter (appearing dark). A significant drop in decibels (dB) between the baseline and event image indicates new water.

Here is the core logic implemented in our `EarthEngineService`:

```python
def get_sar_flood_mapid(self, geometry, start_date, end_date):
    # 1. Select VV and VH polarization (VH is often better for flood detection)
    collection = ee.ImageCollection('COPERNICUS/S1_GRD') \
        .filterBounds(geometry) \
        .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VH')) \
        .filter(ee.Filter.eq('instrumentMode', 'IW'))

    # 2. Define "Before" and "After" periods
    before_collection = collection.filterDate(start_date_ref, end_date_ref)
    after_collection = collection.filterDate(start_date, end_date)

    # 3. Mosaic and Filter Speckle
    before = before_collection.mosaic().clip(geometry).focal_mean(radius=50, units='meters')
    after = after_collection.mosaic().clip(geometry).focal_mean(radius=50, units='meters')

    # 4. Calculate Difference
    # Sentinel-1 data is log-scaled (dB), so subtraction gives the ratio
    difference = after.subtract(before)

    # 5. Apply Threshold
    # Values < -3dB typically indicate newly submerged land
    threshold = -3.0
    flood_mask = difference.lt(threshold).selfMask()  # selfMask makes 0 values transparent

    # 6. Return MapID for frontend tile layer
    return flood_mask.getMapId({'min': 0, 'max': 1, 'palette': ['0000FF']})
```

By returning a **Tile Layer URL** (`https://earthengine.googleapis.com/...`) instead of raw data, we offload the rendering heavy-lifting to Google's servers. The frontend simply overlays this tile layer on the map, ensuring 60fps performance even with gigabytes of underlying raster data.

---

## 3. Geospatial Risk Modeling with PostGIS

Identifying the water is only step one. The critical question for disaster response is: **Who is at risk?**

We leverage **PostGIS**, the industry-standard spatial extender for PostgreSQL, to answer this. We store:
- **LGA Boundaries:** Administrative regions as `MULTIPOLYGON` geometries.
- **Health Facilities:** Clinics and hospitals as `POINT` geometries.
- **Cholera History:** Time-series data of cases linked to LGAs.

### The Risk Scoring Engine

When new satellite data comes in, we trigger a risk calculation job. This isn't just a simple overlap; it's a weighted multi-factor model:

$$ \text{Risk Score} = (w_1 \times \text{FloodExtent}) + (w_2 \times \text{CaseVelocity}) + (w_3 \times \text{Vulnerability}) $$

Where:
- **FloodExtent:** Percentage of the LGA's area currently inundated.
- **CaseVelocity:** Rate of change in new cholera cases over the last 7 days.
- **Vulnerability:** A static factor based on population density and historical susceptibility.

### Spatial SQL in Action

To calculate the `FloodExtent`, we don't need to download the raster. We can perform vector-raster analysis or use simplified vector intersections if we convert the flood mask to polygons.

Here's how we determine which health facilities are in danger zones using PostGIS:

```sql
-- Find health facilities within 1km of detected flood zones
SELECT 
    hf.name, 
    hf.type,
    lga.name as lga
FROM 
    health_facilities hf
JOIN 
    lgas lga ON hf.lga_id = lga.id
WHERE 
    ST_DWithin(
        hf.location, 
        ST_GeomFromGeoJSON(:flood_polygon_json), 
        1000 -- meters
    );
```

This query runs in milliseconds, allowing us to generate real-time alert lists for field teams.

---

## 4. Frontend Engineering: Performance at Scale

Visualizing geospatial data on the web is notoriously resource-intensive. We used **Next.js** and **Leaflet**, but encountered several performance bottlenecks during development.

### Challenge 1: Heavy GeoJSON Rendering
Rendering detailed boundaries for all LGAs caused main-thread blocking.
**Solution:** We simplified the geometries using the **Douglas-Peucker algorithm** (via Mapshaper) to reduce vertex count by 90% without losing visual fidelity at zoom level 8-10. We also implemented `useMemo` hooks in React to prevent re-parsing the GeoJSON on every render.

### Challenge 2: Dynamic Legend & Symbology
Users needed to understand the map at a glance.
**Solution:** We implemented a Choropleth layer that dynamically recolors LGA polygons based on the live Risk Score.

```typescript
// Choropleth coloring logic
function getStyle(riskLevel: string) {
  return {
    fillColor: riskLevel === 'high' ? '#ef4444' : 
               riskLevel === 'medium' ? '#eab308' : '#22c55e',
    weight: 2,
    opacity: 1,
    color: 'white',
    fillOpacity: 0.7
  };
}
```

### Challenge 3: Time-Travel Analysis
We built a **Time Slider** component that allows epidemiologists to "replay" the last 90 days. This required synchronizing two disparate data streams:
1.  **Daily Case Counts:** Fetched from our API.
2.  **Satellite Imagery:** Fetched dynamically from GEE.

By managing the `selectedDate` state in a global store (Zustand), we ensure that dragging the slider instantly updates both the chart overlays and the map layers, revealing the lag effect where case spikes often follow flood events by 3-5 days.

---

## 5. Deployment & CI/CD

The system is containerized with **Docker** for the backend and deployed on Vercel (frontend) and a VPS (backend/DB).

We use **GitHub Actions** for CI/CD, running:
- **Linting:** Ruff (Python) and ESLint (JS).
- **Type Checking:** Mypy and TypeScript.
- **Migration Checks:** Alembic is used to manage database schema changes, ensuring our PostGIS extensions and geometry columns are correctly versioned.

## Conclusion & Future Work

This project demonstrates the immense potential of combining **Remote Sensing** with **Modern Web Engineering**. By automating the ingestion and analysis of satellite data, we move from reactive "cleanup" to proactive "early warning."

**What's Next?**
- **AI Prediction Models:** Training an LSTM neural network on the historical data to predict outbreaks 2 weeks in advance.
- **SMS Alerts:** Integrating Twilio to send automated SMS warnings to health workers in high-risk LGAs.
- **Drone Integration:** Allowing field teams to upload drone orthomosaics for hyper-local validation.

The stack—**Python, PostGIS, and Google Earth Engine**—has proved to be a robust, scalable foundation for building life-saving geospatial tools.

---

*Check out the code on [GitHub](https://github.com/Some19ice/flooding-cholera) or view the [Live Dashboard](https://flooding-cholera.vercel.app).*
