# Portfolio Upgrade Plan: The "Orbital Command" Interface

## Executive Summary
This upgrade transforms the static portfolio into an immersive **Geospatial Command Center**. It unifies the user's identity as a Senior Engineer at NASRDA by placing the visitor in orbit, allowing them to explore projects spatially (The Living Globe) and interact with data conversationally (The Chat-with-Map Agent).

---

## 1. Feature Specifications

### Feature A: The Living Globe (Hero Section)
**Concept:** A photorealistic, interactive 3D Earth replaces the standard hero landing. It serves as the primary navigation interface.

**User Experience:**
1.  **Initial View:** Slow-rotating Earth with day/night cycles and real-time cloud layers.
2.  **Project Pins:** Glowing pulsars mark project locations (e.g., Abuja for NGDI, Cross River for Flood Dashboard).
3.  **Interaction:** 
    - Hovering a pin pauses rotation and shows a tooltip.
    - Clicking a pin triggers a **camera swoop** (smooth transition) down to the location.
    - A "Project Card" overlay appears with details and links.
4.  **Data Layers (Eye Candy):** 
    - Real-time satellite tracks (TLE data) orbiting the globe.
    - Subtle hex-grid overlay to signify "Data/Tech".

### Feature B: The "Chat-with-Map" Agent
**Concept:** An embedded AI assistant that doesn't just talk—it **controls the map**. It proves expertise in Agentic AI + GIS.

**User Experience:**
1.  **Interface:** A floating "Command Terminal" window at the bottom right.
2.  **Interaction:**
    - User: *"Show me the flood risk in Cross River."*
    - **Agent Action:** The globe rotates to Nigeria, zooms into Cross River, and overlays the specific GeoJSON/Tile layer.
    - **Agent Reply:** *"I've loaded the latest Sentinel-1 flood analysis for Cross River. You can see high-risk zones in red."*
3.  **Capabilities:**
    - Navigation ("Take me to Abuja").
    - Data Retrieval ("What technologies were used for the NGDI Portal?").
    - Layer Toggling ("Turn on the population density heat map").

---

## 2. Technical Architecture

### High-Level System Diagram

```mermaid
graph TD
    User[Visitor] -->|Interacts| FE[Frontend (Next.js)]
    
    subgraph "Frontend Layer"
        FE -->|Renders| Globe[React Three Fiber / Globe.gl]
        FE -->|Inputs| Chat[Chat Widget]
        Globe -->|Visualizes| Pins[Project Pins]
        Globe -->|Visualizes| Layers[GIS Overlays]
    end
    
    subgraph "Backend Layer (Python/FastAPI)"
        Chat -->|Sends Prompt| Agent[AI Agent Orchestrator]
        Agent -->|Decides Action| Tools[Tool Registry]
        
        Tools -->|Query| GEE[Google Earth Engine]
        Tools -->|Query| DB[(PostGIS DB)]
        Tools -->|Query| Portfolio[Portfolio Data JSON]
        
        GEE -->|Returns Tiles| FE
        Agent -->|Returns Response + ViewState| FE
    end
```

### Component Breakdown

**1. The Globe Component (`components/LivingGlobe.tsx`)**
*   **Library:** `react-globe.gl` (Wrapper around Three.js).
    *   *Why:* Built-in support for hex-bins, labels, arcs (satellite tracks), and custom layer texturing. Much faster to implement than raw R3F.
*   **Performance:**
    *   Dynamic texture resolution loading.
    *   `React.memo` to prevent re-renders during chat typing.

**2. The AI Agent Service (`backend/app/routers/agent.py`)**
*   **Framework:** `LangChain` or simple OpenAI/Gemini Function Calling.
*   **State:** Stateless (for simplicity) or simple session-based in memory.
*   **Tools:**
    *   `navigate_to(lat, lon, zoom)`: Returns view coordinates to frontend.
    *   `get_project_info(query)`: RAG search over `portfolio.js`.
    *   `load_layer(layer_id)`: Returns tile URL from GEE service.

---

## 3. Implementation Phases

### Phase 1: The Foundation (Frontend)
1.  **Install Dependencies:** `react-globe.gl`, `three`.
2.  **Create Globe Component:** Implement the base Earth with day/night texture.
3.  **Add Project Pins:** Map the existing `portfolio.js` items to lat/lon coordinates.
4.  **Implement "Swoop":** Connect click events to camera controls (`globeEl.current.pointOfView(...)`).

### Phase 2: The Agent (Backend)
1.  **New Endpoint:** `POST /api/chat`.
2.  **Agent Logic:** Setup a system prompt defining the persona ("NASRDA AI Assistant").
3.  **Tool Binding:** Create structured tools for navigation and data retrieval.
4.  **Frontend Widget:** Build the chat UI and connect it to the API.

### Phase 3: Integration & Polish
1.  **Action Handling:** Frontend listener that reacts to Agent "tool calls" (e.g., if Agent returns `navigate_to`, the Globe automatically moves).
2.  **Satellite Orbits:** Fetch TLE data for 3-5 key satellites and render paths.
3.  **Mobile Fallback:** Ensure a graceful 2D map or list view for mobile users where WebGL might be heavy.

---

## 4. UI/UX Design Elements

### Visual Theme
*   **Palette:** Deep Space Blue (`#0f172a`), Holographic Cyan (`#22d3ee`) for active elements, Signal Orange (`#f97316`) for alerts/flood layers.
*   **Typography:** Monospace (e.g., `JetBrains Mono`) for the Chat Terminal to emphasize "Engineering"; Sans-serif (`Inter`) for the clean UI overlays.

### Interaction Flow (The "Swoop")
1.  User lands. Globe is slowly spinning.
2.  User asks: *"Where is the Station Manager project?"*
3.  **Agent:** *"That project was deployed in [Location]. Taking you there."*
4.  **Globe:** Spins faster, tilts to 45°, zooms in to street level (simulated).
5.  **UI:** A card slides in from the right: **"Station Stock Manager"** with a [View Code] button.

---

## 5. Approval & Next Steps

If this plan is approved, I will begin with **Phase 1**: Getting the 3D Globe running on your landing page with your current projects pinned.
