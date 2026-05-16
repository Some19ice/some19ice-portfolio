import { generateChatResponse } from '../../lib/gemini';
import portfolioProjects from '../../data/portfolio';

// Check if API key is configured
const isConfigured = !!process.env.GOOGLE_API_KEY;

const SYSTEM_PROMPT = `
You are "Orbital Command," the AI assistant embedded in Yakubu T. Umar's portfolio website.
Your personality is professional yet warm — think a helpful mission-control operator with a friendly edge.
You guide visitors through his geospatial and full-stack projects.

## Owner Details
- Name: Yakubu T. Umar
- Role: Senior Full Stack Engineer & Geospatial Specialist
- Organization: National Space Research and Development Agency (NASRDA)
- Resume: [Download Resume](https://drive.google.com/file/d/1JPwwhDbywhn3-F-N-UHsa3dq6BV0ynic/view?usp=drive_link)
- GitHub: https://github.com/some19ice
- LinkedIn: https://linkedin.com/in/some19ice
- Email: some1me247@gmail.com

## Portfolio Projects
${JSON.stringify(portfolioProjects.map(p => ({
  title: p.title,
  desc: p.description,
  tech: p.technologies,
  category: p.category,
  demoUrl: p.demoUrl,
  codeUrl: p.codeUrl,
  stats: p.stats,
  location: p.title.includes('NGDI') || p.title.includes('Navi') ? 'Abuja' :
    p.title.includes('Flood') ? 'Cross River' :
      p.title.includes('Station') ? 'Lagos' : 'Nigeria'
})), null, 2)}

## Coordinates Reference
- Abuja: 9.0765, 7.3986
- Cross River: 5.8702, 8.5988
- Lagos: 6.5244, 3.3792
- Nigeria (General): 9.0820, 8.6753

## Response Rules
1. ALWAYS respond in strict JSON format with this structure:
{
  "text": "Your conversational response (supports markdown formatting).",
  "action": {
    "lat": number,
    "lng": number,
    "altitude": number (0.5 to 2.5),
    "layer": "flood" | "cholera" | null
  } | null
}

2. Keep responses concise (2-3 sentences max) but informative.
3. Use markdown in "text" for links, bold, lists when appropriate.
4. Set "action" to null if the topic doesn't relate to a specific location.
5. For greetings like "hello", "hi" — respond warmly and suggest what the user can explore.
6. For off-topic questions — politely redirect to the portfolio while still being helpful.
7. When asked about CV/resume, provide the download link in markdown.
8. When describing projects, mention specific technologies and impact metrics from the stats.

## Example Interactions
User: "hello"
{"text": "Welcome to **Orbital Command**! I'm here to guide you through Yakubu's work. Try asking about his **GIS projects**, the **Flood Risk Dashboard**, or say *'show me all projects'* to explore.", "action": null}

User: "Show me the flood risk project"
{"text": "Navigating to **Cross River State**. The Flood & Cholera Surveillance Dashboard uses **Sentinel-2/1 imagery** via Google Earth Engine, covering multi-state risk analysis in real-time.", "action": {"lat": 5.8702, "lng": 8.5988, "altitude": 0.8, "layer": "flood"}}
`;

// Rate limiting: simple in-memory store (per-server instance)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 10000; // 10 seconds
const RATE_LIMIT_MAX_REQUESTS = 5;  // max 5 requests per window

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { windowStart: now, count: 1 });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  entry.count++;
  return false;
}

// Clean up stale entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap.entries()) {
    if (now - entry.windowStart > RATE_LIMIT_WINDOW_MS * 2) {
      rateLimitMap.delete(ip);
    }
  }
}, 60000);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Return a helpful message if API key isn't configured
  if (!isConfigured) {
    return res.status(200).json({
      text: "Orbital Command is currently offline. The GOOGLE_API_KEY environment variable is not configured. Check the `.env.example` file for setup instructions.",
      action: null
    });
  }

  // Rate limiting
  const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
  if (isRateLimited(clientIp)) {
    return res.status(429).json({
      text: "You're sending messages too quickly. Please wait a moment before trying again.",
      action: null
    });
  }

  const { message, history } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ message: 'Message is required' });
  }

  // Limit message length
  const sanitizedMessage = message.trim().slice(0, 500);

  try {
    // Convert client history to Gemini format (last 10 exchanges max)
    const geminiHistory = (history || [])
      .slice(-20) // Last 10 user+AI pairs = 20 messages
      .map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

    const text = await generateChatResponse(SYSTEM_PROMPT, geminiHistory, sanitizedMessage);

    // Clean up markdown code blocks if Gemini adds them
    const cleanText = text.replace(/```json\n?|\n?```/g, '').trim();

    try {
      const data = JSON.parse(cleanText);
      res.status(200).json(data);
    } catch (parseError) {
      console.error("Failed to parse AI response:", parseError);
      // Fallback if JSON parsing fails — wrap raw text
      res.status(200).json({
        text: cleanText,
        action: null
      });
    }
  } catch (error) {
    console.error("API Error:", error.message);

    // Handle Google API rate limiting (429)
    if (error.status === 429 || error.message?.includes('429') || error.message?.includes('rate limit')) {
      return res.status(429).json({
        text: "Orbital Command is temporarily overloaded. The AI service rate limit has been reached. Please wait a minute and try again.",
        action: null
      });
    }

    // Handle API key errors (invalid/expired key)
    if (error.status === 403 || error.status === 401 || error.message?.includes('API key')) {
      return res.status(503).json({
        text: "Orbital Command's connection credentials need attention. Please check the API key configuration.",
        action: null
      });
    }

    res.status(500).json({
      text: "Orbital Command encountered an error. Please try again.",
      action: null
    });
  }
}
