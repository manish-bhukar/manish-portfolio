
import { GoogleGenAI } from "@google/genai";
import { systemPrompt } from "../../lib/ai/prompt"
import type { ChatMessage } from "../../types/chatbot.types";

const apiKey = process.env.GEMINI_API_KEY;

const ai = apiKey
  ? new GoogleGenAI({ apiKey })
  : null;

export async function POST(request: Request) {
  try {
    if (!ai) {
      return Response.json(
        { error: "Gemini API key is not configured." },
        { status: 500 }
      );
    }

    const body = await request.json();

    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    const history: ChatMessage[] = Array.isArray(body.history)
      ? body.history
      : [];

    if (!message) {
      return Response.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const recentHistory = history
      .filter(
        (item) =>
          (item.role === "user" || item.role === "assistant") &&
          typeof item.content === "string"
      )
      .slice(-10);

    const contents = [
      ...recentHistory.map((item) => ({
        role: item.role === "assistant" ? "model" : "user",
        parts: [{ text: item.content }],
      })),
      {
        role: "user",
        parts: [{ text: message }],
      },
    ];

    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL || "gemini-3.8-flash",
      contents,
      config: {
        systemInstruction: systemPrompt,
        maxOutputTokens: 500,
      },
    });

    const answer = response.text;

    if (!answer) {
      return Response.json(
        { error: "No response was generated. Please try again." },
        { status: 502 }
      );
    }

    return Response.json({
      answer,
      suggestions: [],
    });
  } catch (error) {
    console.error("Gemini Chat API error:", error);

    return Response.json(
      { error: "Something went wrong while generating the response." },
      { status: 500 }
    );
  }
}
