import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GOOGLE_API_KEY;

if (!apiKey) {
  console.warn("GOOGLE_API_KEY is not defined");
}

const genAI = new GoogleGenerativeAI(apiKey);

/**
 * Generate a single response from Gemini (no conversation context).
 */
export async function generateResponse(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
}

/**
 * Generate a response with multi-turn conversation history.
 * @param {string} systemPrompt - The system instructions for the AI
 * @param {Array<{role: string, parts: Array<{text: string}>}>} history - Previous conversation turns
 * @param {string} userMessage - The current user message
 * @returns {Promise<string>} The AI response text
 */
export async function generateChatResponse(systemPrompt, history, userMessage) {
  try {
    // systemInstruction must be set at model level, not in startChat
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: systemPrompt,
    });

    const chat = model.startChat({
      history: history,
    });

    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating chat content:", error);
    throw error;
  }
}
