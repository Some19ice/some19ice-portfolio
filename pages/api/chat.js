import portfolioProjects from "../../data/portfolio"
import config from "../../config"

const HERMES_API_URL = process.env.HERMES_API_URL
const HERMES_API_KEY = process.env.HERMES_API_KEY
const isConfigured = !!(HERMES_API_URL && HERMES_API_KEY)

const SYSTEM_PROMPT = `
You are "Orbital Command," the AI assistant embedded in Yakubu T. Umar's portfolio website.
Your personality is professional yet warm — think a helpful mission-control operator with a friendly edge.
You guide visitors through his geospatial and full-stack projects.

## Owner Details
- Name: Yakubu T. Umar
- Role: Senior Full Stack Engineer & Geospatial Specialist
- Organization: National Space Research and Development Agency (NASRDA)
- Resume: [Download Resume](${config.resumeUrl})
- GitHub: ${config.socialMedia.github}
- LinkedIn: ${config.socialMedia.linkedin}
- Email: ${config.contactEmail}

## Portfolio Projects
${JSON.stringify(
    portfolioProjects.map((p) => ({
        title: p.title,
        description: p.description,
        technologies: p.technologies,
        category: p.category,
        demoUrl: p.demoUrl,
        codeUrl: p.codeUrl,
    })),
    null,
    2
)}

## Coordinates Reference
- Abuja: 9.0765, 7.3986
- Cross River: 5.8702, 8.5988
- Lagos: 6.5244, 3.3792
- Nigeria (General): 9.0820, 8.6753

## Response Rules
1. Your response MUST always be parseable as valid JSON with this structure:
{
  "text": "Your conversational response (supports markdown formatting). Keep it concise (2-3 sentences).",
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
5. For greetings — respond warmly and suggest what the user can explore.
6. When describing projects, mention specific technologies.
7. Return ONLY the JSON object, no additional text or markdown formatting.

## Example Interactions
User: "hello"
{"text": "Welcome to **Orbital Command**! I'm here to guide you through Yakubu's work. Try asking about his **GIS projects**, the **Flood Risk Dashboard**, or say 'show me all projects' to explore.", "action": null}

User: "Show me the flood risk project"
{"text": "Navigating to **Cross River State**. The Flood & Cholera Surveillance Dashboard uses satellite imagery for multi-state risk analysis.", "action": {"lat": 5.8702, "lng": 8.5988, "altitude": 0.8, "layer": "flood"}}
`

// Rate limiting: simple in-memory store
const rateLimitMap = new Map()
const RATE_LIMIT_WINDOW_MS = 10000
const RATE_LIMIT_MAX_REQUESTS = 5

function isRateLimited(ip) {
    const now = Date.now()
    const entry = rateLimitMap.get(ip)
    if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
        rateLimitMap.set(ip, { windowStart: now, count: 1 })
        return false
    }
    if (entry.count >= RATE_LIMIT_MAX_REQUESTS) return true
    entry.count++
    return false
}

// Clean stale entries
setInterval(() => {
    const now = Date.now()
    for (const [ip, entry] of rateLimitMap.entries()) {
        if (now - entry.windowStart > RATE_LIMIT_WINDOW_MS * 2) rateLimitMap.delete(ip)
    }
}, 60000)

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" })
    }

    if (!isConfigured) {
        return res.status(200).json({
            text: "Orbital Command is currently offline. The HERMES_API_URL and HERMES_API_KEY environment variables are not configured.",
            action: null,
        })
    }

    const clientIp = req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "unknown"
    if (isRateLimited(clientIp)) {
        return res.status(429).json({
            text: "You're sending messages too quickly. Please wait a moment before trying again.",
            action: null,
        })
    }

    const { message, history } = req.body
    if (!message || typeof message !== "string") {
        return res.status(400).json({ message: "Message is required" })
    }

    const trimmedMessage = message.trim()
    if (!trimmedMessage) {
        return res.status(400).json({ message: "Message is required" })
    }

    const sanitizedMessage = trimmedMessage.slice(0, 500)

    try {
        // Build OpenAI-compatible messages array
        const messages = [{ role: "system", content: SYSTEM_PROMPT }]

        // Add conversation history (last 10 exchanges max)
        const recentHistory = (history || []).slice(-20)
        for (const msg of recentHistory) {
            if (msg.role === "user" || msg.role === "assistant") {
                messages.push({ role: msg.role, content: msg.content })
            } else if (msg.role === "model") {
                messages.push({ role: "assistant", content: msg.content })
            }
        }

        // Add current user message
        messages.push({ role: "user", content: sanitizedMessage })

        // Special instruction to ensure structured output
        messages.push({
            role: "system",
            content:
                'Respond with a valid JSON object containing "text" (your response) and "action" (location data or null). Return ONLY the JSON object, no other text.',
        })

        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 10000)
        let response

        try {
            response = await fetch(`${HERMES_API_URL}/v1/chat/completions`, {
                method: "POST",
                signal: controller.signal,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${HERMES_API_KEY}`,
                },
                body: JSON.stringify({
                    model: "hermes",
                    messages,
                    temperature: 0.7,
                    max_tokens: 500,
                }),
            })
        } finally {
            clearTimeout(timeoutId)
        }

        if (!response.ok) {
            const errText = await response.text().catch(() => "")
            console.error(`Hermes API error (${response.status}):`, errText)
            return res.status(502).json({
                text: "Orbital Command encountered an error. Please try again.",
                action: null,
            })
        }

        const data = await response.json()
        const content = data.choices?.[0]?.message?.content || ""

        // Try to parse the response as JSON
        try {
            // Remove any markdown code block fences if present
            const clean = content.replace(/```json?\n?|\n?```/g, "").trim()
            const parsed = JSON.parse(clean)
            return res.status(200).json({
                text: parsed.text || content,
                action: parsed.action || null,
            })
        } catch {
            // Fallback: return raw content
            return res.status(200).json({ text: content, action: null })
        }
    } catch (error) {
        if (error.name === "AbortError") {
            return res.status(504).json({
                text: "Orbital Command timed out while contacting Hermes. Please try again.",
                action: null,
            })
        }

        console.error("API Error:", error.message)
        return res.status(500).json({
            text: "Orbital Command encountered an error. Please try again.",
            action: null,
        })
    }
}
