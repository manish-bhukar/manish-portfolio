import { GoogleGenAI } from "@google/genai";
import { systemPrompt } from "../../lib/ai/prompt";
import type { ChatMessage } from "../../types/chatbot.types";

const apiKey = process.env.GEMINI_API_KEY;

const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const MAX_RETRIES = 2;
const INITIAL_RETRY_DELAY_MS = 1000;

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isRetryableError(error: unknown): boolean {
  if (!error || typeof error !== "object") {
    return false;
  }

  const apiError = error as {
    status?: number;
    code?: number | string;
    message?: string;
  };

  const status = Number(apiError.status ?? apiError.code);

  return (
    status === 429 ||
    status === 500 ||
    status === 502 ||
    status === 503 ||
    status === 504 ||
    apiError.message?.includes("ECONNRESET") === true ||
    apiError.message?.includes("ETIMEDOUT") === true
  );
}

export async function POST(request: Request) {
  const requestStartTime = Date.now();

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

    let response;

    for (let attempt = 0; ; attempt++) {
      try {
        console.log(
          `[Chat API] Gemini request attempt ${attempt + 1}`
        );

        response = await ai.models.generateContent({
          model: process.env.GEMINI_MODEL || "gemini-3.8-flash",
          contents,
          config: {
            systemInstruction: systemPrompt,
            maxOutputTokens: 500,
          },
        });

        break;
      } catch (error) {
        if (!isRetryableError(error) || attempt >= MAX_RETRIES) {
          throw error;
        }

        const delay =
          INITIAL_RETRY_DELAY_MS * 2 ** attempt;

        console.warn(
          `[Chat API] Temporary Gemini error. Retrying in ${
            delay / 1000
          }s...`
        );

        await wait(delay);
      }
    }

    const answer = response.text;

    if (!answer) {
      return Response.json(
        { error: "No response was generated. Please try again." },
        { status: 502 }
      );
    }

    console.log(
      `[Chat API] Total request time: ${(
        (Date.now() - requestStartTime) /
        1000
      ).toFixed(2)} seconds`
    );

    return Response.json({
      answer,
      suggestions: [],
    });
  } catch (error) {
    console.error("[Chat API] Gemini error:", error);

    const apiError = error as { status?: number; code?: number | string };
    const status = Number(apiError?.status ?? apiError?.code);

    if (status === 503 || status === 429) {
      return Response.json(
        {
          error:
            "The AI assistant is experiencing high demand. Please try again in a moment.",
        },
        { status }
      );
    }

    return Response.json(
      {
        error:
          "Something went wrong while generating the response. Please try again.",
      },
      { status: status >= 400 && status < 600 ? status : 500 }
    );
  }
}