import { knowledge } from "@/data/knowledge";
import { interview } from "@/data/interview";
import { intents } from "@/data/intents";
import { classifyIntent } from "./intentClassifier";

export function findKnowledge(message: string) {
 const text = message.toLowerCase();

const intent = classifyIntent(text);

const item = knowledge[intent];

if (item) {

  return {

    topic: intent,

    answer: item.answer,

    card: item.card,

    project: item.project,

  };

}

  // ---------------------------
  // Intent Detection
  // ---------------------------

  for (const [topic, keywords] of Object.entries(intents)) {
    if (
      keywords.some((keyword) =>
        text.includes(keyword.toLowerCase())
      )
    ) {
      const item = knowledge[topic as keyof typeof knowledge];

      if (item) {
       return {
    topic,

    answer: item.answer ?? null,

    card: item.card ?? null,

    project: item.project ?? null,
};
      }
    }
  }

  // ---------------------------
  // Knowledge Detection
  // ---------------------------

  for (const [topic, item] of Object.entries(knowledge)) {
    if (
      item.keywords.some((keyword) =>
        text.includes(keyword.toLowerCase())
      )
    ) {
      return {
        topic,
        answer: item.answer,
        card: item.card,
        project: item.project,
      };
    }
  }

  // ---------------------------
  // Interview Detection
  // ---------------------------

  for (const [topic, item] of Object.entries(interview)) {
    if (
      item.keywords.some((keyword) =>
        text.includes(keyword.toLowerCase())
      )
    ) {
      return {
        topic,
        answer: item.answer,
      };
    }
  }

  return null;
}