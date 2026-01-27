import { generateResponse } from '../../lib/gemini';
import portfolioProjects from '../../data/portfolio';

const SYSTEM_PROMPT = `
You are the "Orbital Command" AI for Yakubu T. Umar's portfolio. 
Your role is to guide visitors through his geospatial and full-stack projects.
You control a 3D globe interface.

Here are the projects in the portfolio:
${JSON.stringify(portfolioProjects.map(p => ({
  title: p.title,
  desc: p.description,
  tech: p.technologies,
  location: p.title.includes('NGDI') || p.title.includes('Navi') ? 'Abuja' : 
           p.title.includes('Flood') ? 'Cross River' : 
           p.title.includes('Station') ? 'Lagos' : 'Nigeria' 
})), null, 2)}

When a user asks a question, you must analyze if it relates to a specific location or project.
If it does, you should provide navigation coordinates.

Coordinates Reference:
- Abuja: 9.0765, 7.3986
- Cross River: 5.8702, 8.5988
- Lagos: 6.5244, 3.3792
- Nigeria (General): 9.0820, 8.6753

Return your response in strict JSON format:
{
  "text": "Your conversational response here (keep it professional and brief).",
  "action": {
    "lat": number,
    "lng": number,
    "altitude": number (0.5 to 2.5),
    "layer": "flood" | "cholera" | null  <-- NEW: Include this if topic is flooding or disease
  } | null
}

Example:
User: "Show me the flood risk in Cross River."
Response:
{
  "text": "Navigating to Cross River State. The Flood Risk Dashboard utilizes Sentinel-1 imagery to analyze vulnerability.",
  "action": { "lat": 5.8702, "lng": 8.5988, "altitude": 0.8, "layer": "flood" }
}
`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { message } = req.body;

  try {
    const prompt = `${SYSTEM_PROMPT}\n\nUser: ${message}\nResponse:`;
    const text = await generateResponse(prompt);
    
    // Clean up markdown code blocks if Gemini adds them
    const cleanText = text.replace(/```json\n|\n```/g, '').trim();
    
    try {
      const data = JSON.parse(cleanText);
      res.status(200).json(data);
    } catch (parseError) {
      console.error("Failed to parse AI response:", parseError);
      // Fallback if JSON parsing fails
      res.status(200).json({
        text: cleanText,
        action: null
      });
    }
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}
