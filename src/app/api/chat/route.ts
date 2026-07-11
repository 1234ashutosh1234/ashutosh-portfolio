import { NextResponse } from "next/server";

import { askGemini } from "@/lib/gemini";
import { findKnowledge } from "@/lib/chatMatcher";

interface ChatHistory {
  sender: "user" | "bot";
  text?: string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const message =
      typeof body.message === "string"
        ? body.message
        : "";

    const history: ChatHistory[] = Array.isArray(body.history)
      ? body.history
      : [];

    // -----------------------------
    // 1. LOCAL KNOWLEDGE
    // -----------------------------

   const local = findKnowledge(message);

if (local) {

  // Resume / GitHub / LinkedIn / Contact cards
  if (local.card) {
    return NextResponse.json({
      topic: local.topic,
      card: local.card,
    });
  }

  // Project cards
  if (local.project) {
    return NextResponse.json({
      topic: local.topic,
      project: local.project,
    });
  }

  // Text answers
  if (local.answer) {
    return NextResponse.json({
      topic: local.topic,
      reply: local.answer,
    });
  }

}

  // -----------------------------
// 2. GEMINI AI
// -----------------------------

const conversation = history
  .map((item) => {
    const role = item.sender === "user" ? "User" : "Assistant";
    return `${role}: ${item.text ?? ""}`;
  })
  .join("\n");

const prompt = `
Previous Conversation:

${conversation}

Current User Message:
${message}

Reply naturally while keeping the conversation context.
`;

const reply = await askGemini(prompt);

return NextResponse.json({
  reply,
});

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );

  }
}