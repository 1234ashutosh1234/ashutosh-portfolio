import { GoogleGenerativeAI } from "@google/generative-ai";
import { SYSTEM_PROMPT } from "./systemPrompt";

const apiKey = process.env.GEMINI_API_KEY!;

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export async function askGemini(prompt: string) {
  try {
    const result = await model.generateContent([
  SYSTEM_PROMPT,
  prompt,
]);

    return result.response.text();

  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
}