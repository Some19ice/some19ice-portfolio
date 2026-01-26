---
title: "Building a Real-Time Flood Surveillance System with Satellite Imagery & PostGIS"
date: "2026-01-26"
excerpt: "How we built a comprehensive disaster response dashboard integrating Google Earth Engine, Sentinel-1 SAR imagery, and epidemiological data to predict cholera outbreaks."
coverImage: "/flood-cholera-dashboard.svg"
readTime: "12 min read"
tags: ["GIS", "Full Stack", "Google Earth Engine", "Python", "React", "PostGIS"]
---

# Building a Real-Time Flood Surveillance System: Where GIS Meets Epidemiology

Disaster response is a race against time. In regions prone to flooding, the aftermath often brings a secondary, silent killer: **Cholera**.

The link between water levels and waterborne disease is well-established, but monitoring it in real-time across vast territories like Cross River State requires more than manual reports. It requires **Automated Geospatial Intelligence**.

In this post, I'll break down how I built the **Flooding & Cholera Surveillance Dashboard**, a full-stack system that fuses epidemiological data with real-time satellite imagery to predict and visualize risk.

## The Architecture

The system is built on a modern, decoupled architecture designed for scale and geospatial heavy-lifting:

- **Frontend:** Next.js (React) + Leaflet for interactive mapping.
- **Backend:** Python (FastAPI) for data processing and API.
- **Database:** PostgreSQL + **PostGIS** for vector storage and spatial queries.
- **Satellite Engine:** **Google Earth Engine (GEE)** for processing petabytes of Sentinel-2 (optical) and Sentinel-1 (radar) imagery.

## 1. Seeing Through Clouds with Sentinel-1 SAR

One of the biggest challenges in flood monitoring is that *floods happen when it rains*, and rain means *clouds*. Traditional optical satellites (like Landsat or Sentinel-2) are blind during the storm.

To solve this, I integrated **Sentinel-1 Synthetic Aperture Radar (SAR)** data via Google Earth Engine. SAR transmits microwave signals that penetrate cloud cover, allowing us to "see" the ground day or night, rain or shine.

### The Algorithm: Change Detection

We use a "change detection" approach to identify flooded areas:

1.  **Baseline Image:** We fetch a composite of imagery from a dry period (pre-event).
2.  **Event Image:** We fetch the latest radar pass during the potential flood window.
3.  **Backscatter Analysis:** Water surfaces reflect radar signals away from the sensor (specular reflection), appearing dark. A significant drop in backscatter intensity (dB) indicates newly inundated areas.

The backend performs this analysis on-the-fly using the `earthengine-api`:

```python
# Simplified snippet from our GEE service
difference = after_filtered.subtract(before_filtered)
change_threshold = -3.0  # Decibels
water_mask = difference.lt(change_threshold)
```

This generates a dynamic tile layer that overlays directly onto our Leaflet map, showing exactly where the water is *right now*.

## 2. Geospatial Risk Modeling with PostGIS

Identifying water is only half the battle. We need to know **who is at risk**.

We store health facility locations and LGA (Local Government Area) boundaries in **PostGIS**, the industry-standard spatial extender for PostgreSQL.

When a flood is detected, the backend calculates a **Risk Score** for each region based on:
- **Flood Extent:** Percentage of land area inundated.
- **Vulnerability:** Population density and proximity to water bodies.
- **Epidemiological History:** Recent case rates of cholera.

```sql
-- Spatial query example
SELECT name, ST_Area(geometry) as area
FROM lgas
WHERE ST_Intersects(geometry, ST_GeomFromGeoJSON(:flood_polygon));
```

This allows us to color-code the map (Choropleth) dynamically: **Red** for high-risk zones requiring immediate intervention, **Yellow** for warning zones.

## 3. The Frontend Experience

Data is useless if decision-makers can't understand it. The frontend is built with **Next.js** for performance and SEO.

- **Interactive Map:** Users can drill down from the state level to specific LGAs.
- **Time-Lapse Mode:** A slider allows replaying historical data to see how outbreaks correlate with past flood events.
- **Dual-Axis Charts:** We visualize the correlation between rainfall (bars) and case rates (lines) to reveal lag effects—cases often spike *after* the rain stops and stagnant water remains.

## Conclusion

This project demonstrates the power of combining **Remote Sensing** with **Modern Web Engineering**. By automating the ingestion of satellite data, we move from reactive "cleanup" to proactive "early warning."

The stack—**Python, PostGIS, and Google Earth Engine**—proved to be a robust foundation for building scalable, life-saving geospatial tools.

---

*Check out the code on [GitHub](https://github.com/Some19ice/flooding-cholera) or view the [Live Dashboard](https://flooding-cholera.vercel.app).*
