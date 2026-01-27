from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional, Dict, Any
import os

# Create FastAPI app
app = FastAPI()

# Data (Mock Database)
PROJECTS = [
    {
        "id": "ngdi",
        "name": "NGDI Metadata Portal",
        "location": {"lat": 9.0765, "lng": 7.3986, "altitude": 0.5},
        "tags": ["GIS", "Next.js", "MapLibre"]
    },
    {
        "id": "flood",
        "name": "Flooding & Cholera Surveillance",
        "location": {"lat": 5.8702, "lng": 8.5988, "altitude": 0.8},
        "tags": ["GEE", "Python", "PostGIS"]
    },
    {
        "id": "station",
        "name": "Station Stock Manager",
        "location": {"lat": 6.5244, "lng": 3.3792, "altitude": 0.5},
        "tags": ["React", "Full Stack"]
    }
]

class ChatRequest(BaseModel):
    message: str
    history: List[Dict[str, str]] = []

@app.get("/api/health")
def health_check():
    return {"status": "ok", "agent": "Orbital Command v1.0"}

@app.post("/api/chat")
async def chat_endpoint(request: ChatRequest):
    """
    Simple Orchestrator (Phase 1.5)
    
    Eventually this will use LangGraph + Gemini.
    For now, implementing the Logic logic in Python to prepare for the switch.
    """
    user_msg = request.message.lower()
    
    # Tool: Navigate
    if "abuja" in user_msg or "ngdi" in user_msg:
        project = next(p for p in PROJECTS if p["id"] == "ngdi")
        return {
            "response": "Vectoring to Abuja. The NGDI Metadata Portal streamlines geospatial data sharing for NASRDA.",
            "action": {
                "type": "navigate",
                "payload": project["location"]
            }
        }
        
    if "flood" in user_msg or "cholera" in user_msg or "cross river" in user_msg:
        project = next(p for p in PROJECTS if p["id"] == "flood")
        return {
            "response": "Loading Sentinel-1 SAR imagery for Cross River State. This dashboard correlates flood extent with cholera outbreaks.",
            "action": {
                "type": "navigate",
                "payload": project["location"]
            }
        }

    if "lagos" in user_msg or "station" in user_msg:
        project = next(p for p in PROJECTS if p["id"] == "station")
        return {
            "response": "Navigating to Lagos. The Station Stock Manager boosted revenue by 400%.",
            "action": {
                "type": "navigate",
                "payload": project["location"]
            }
        }

    # Default LLM Fallback (Mock)
    return {
        "response": f"I received: '{request.message}'. I am ready to navigate. Try asking about 'Floods' or 'Abuja'.",
        "action": None
    }
