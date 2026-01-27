from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Dict, Any, TypedDict, Annotated
import os
import operator

# LangChain / LangGraph Imports
from langchain_core.messages import BaseMessage, SystemMessage, HumanMessage, ToolMessage, AIMessage
from langchain_google_genai import ChatGoogleGenerativeAI
from langgraph.graph import StateGraph, END
from langgraph.prebuilt import ToolNode, tools_condition
from langchain_core.tools import tool

# Create FastAPI app
app = FastAPI()

# --- Data (Mock Database) ---
PROJECTS = [
    {
        "id": "ngdi",
        "name": "NGDI Metadata Portal",
        "location": {"lat": 9.0765, "lng": 7.3986, "altitude": 0.5},
        "description": "A centralized geospatial platform for NASRDA using OGC standards.",
        "technologies": "Next.js, Server Actions, OGC WMS/WFS, MapLibre",
        "category": "GIS"
    },
    {
        "id": "flood",
        "name": "Flooding & Cholera Surveillance",
        "location": {"lat": 5.8702, "lng": 8.5988, "altitude": 0.8},
        "description": "Real-time epidemiological and environmental monitoring dashboard. Integrates Sentinel-2/1 imagery via Google Earth Engine with PostGIS for risk modeling.",
        "technologies": "Next.js, Python (FastAPI), Google Earth Engine, PostGIS, Leaflet",
        "category": "Full Stack"
    },
    {
        "id": "station",
        "name": "Station Stock Manager",
        "location": {"lat": 6.5244, "lng": 3.3792, "altitude": 0.5},
        "description": "Inventory tracking system driving 400% revenue growth.",
        "technologies": "React, Clerk (RBAC), Shadcn UI, Recharts",
        "category": "Full Stack"
    }
]

# --- Tools ---

@tool
def navigate_to_project(project_id: str):
    """
    Moves the 3D globe to view a specific project.
    Args:
        project_id: The ID of the project (e.g., 'ngdi', 'flood', 'station').
    Returns:
        Confirmation message and metadata for the frontend to execute the move.
    """
    project = next((p for p in PROJECTS if p["id"] == project_id), None)
    if not project:
        return "Project not found."
    
    # We return a special marker that the frontend parser (or final response generator) can use
    # But strictly, the tool just returns text to the LLM.
    # The LLM will then describe the action.
    # To trigger the frontend, we need to pass structured data out.
    # We'll attach the action to the final response.
    return f"Navigating to {project['name']} at {project['location']}."

@tool
def search_projects(query: str):
    """
    Searches the portfolio for projects matching the query (tech stack, name, description).
    Args:
        query: The search keywords.
    """
    results = []
    q = query.lower()
    for p in PROJECTS:
        blob = f"{p['name']} {p['description']} {p['technologies']} {p['category']}".lower()
        if q in blob:
            results.append(p)
    
    if not results:
        return "No matching projects found."
    
    return f"Found {len(results)} projects: " + ", ".join([f"{p['name']} (ID: {p['id']})" for p in results])

@tool
def get_project_details(project_id: str):
    """Get detailed information about a specific project by ID."""
    project = next((p for p in PROJECTS if p["id"] == project_id), None)
    if not project:
        return "Project not found."
    return str(project)

# --- Agent Graph ---

class AgentState(TypedDict):
    messages: Annotated[List[BaseMessage], operator.add]

# Define Tools
tools = [navigate_to_project, search_projects, get_project_details]

# Define Model (Gemini)
# Vercel sets GOOGLE_API_KEY in env
def get_model():
    if not os.environ.get("GOOGLE_API_KEY"):
        return None
    return ChatGoogleGenerativeAI(model="gemini-1.5-flash", temperature=0).bind_tools(tools)

# Define Nodes
def call_model(state: AgentState):
    model = get_model()
    if not model:
        return {"messages": [AIMessage(content="System Error: Neural Link Offline (API Key Missing)")]}
    
    response = model.invoke(state["messages"])
    return {"messages": [response]}

# Build Graph
workflow = StateGraph(AgentState)
workflow.add_node("agent", call_model)
workflow.add_node("tools", ToolNode(tools))

workflow.set_entry_point("agent")
workflow.add_conditional_edges("agent", tools_condition)
workflow.add_edge("tools", "agent")

app_graph = workflow.compile()

# --- API Endpoints ---

class ChatRequest(BaseModel):
    message: str
    history: List[Dict[str, str]] = []

@app.get("/api/health")
def health_check():
    return {"status": "ok", "agent": "LangGraph Orbital Command"}

@app.post("/api/chat")
async def chat_endpoint(request: ChatRequest):
    # Convert history to LangChain messages
    messages = [SystemMessage(content="""
You are the AI Co-Pilot for Yakubu T. Umar's portfolio. 
You control the 'Orbital Command' interface.
Your goal is to guide visitors to relevant projects and demonstrate technical competence.

CAPABILITIES:
1. You can move the 3D globe using 'navigate_to_project'.
2. You can search the project database using 'search_projects'.

BEHAVIOR:
- Be concise, professional, and slightly futuristic/technical in tone (like a ship's computer).
- When a user asks about a specific project or location, ALWAYS use 'navigate_to_project' to show it.
- If asking about skills (React, GIS), use 'search_projects' to find evidence.
""")]
    
    # We simplify history for the prototype (just last few turns or fresh start)
    # Ideally we'd map the request.history, but for stateless Vercel, we can rely on client passing context
    # or just treat every request as fresh + current message for simplicity if history is complex.
    # Let's map the history.
    for msg in request.history:
        if msg["type"] == "user":
            messages.append(HumanMessage(content=msg["content"]))
        elif msg["type"] == "ai":
            messages.append(AIMessage(content=msg["content"]))
            
    messages.append(HumanMessage(content=request.message))

    # Run Graph
    final_state = await app_graph.ainvoke({"messages": messages})
    
    # Extract response
    last_message = final_state["messages"][-1]
    response_text = last_message.content
    
    # Extract Action (Side Effect) for Frontend
    # If the agent called a tool, we want to tell the frontend to perform the visual effect.
    # We look at the tool calls in the message history.
    action = None
    
    # Iterate backwards to find the last tool call execution or intent
    # Actually, simpler: check if the LAST AI message *wanted* to navigate, OR if a tool was executed.
    # Since we are in a loop (Agent -> Tool -> Agent), the final message is usually the Agent summarizing the tool output.
    # We need to find if 'navigate_to_project' was successfully called in this turn.
    
    for msg in reversed(final_state["messages"]):
        if isinstance(msg, ToolMessage) and msg.name == "navigate_to_project":
            # Extract project ID from the artifact or deduce it?
            # ToolMessage doesn't store the args easily, the preceding AIMessage does.
            pass
        if isinstance(msg, AIMessage) and msg.tool_calls:
            for tool_call in msg.tool_calls:
                if tool_call["name"] == "navigate_to_project":
                    project_id = tool_call["args"].get("project_id")
                    project = next((p for p in PROJECTS if p["id"] == project_id), None)
                    if project:
                        action = {
                            "type": "navigate",
                            "payload": project["location"]
                        }
            if action:
                break

    return {
        "response": response_text,
        "action": action
    }
