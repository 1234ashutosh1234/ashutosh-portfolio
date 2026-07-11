"use client";

import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";

interface ChatBubbleProps {
  sender: "bot" | "user";
  text: string;
}

export default function ChatBubble({
  sender,
  text,
}: ChatBubbleProps) {
  const isBot = sender === "bot";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex gap-3 ${
        isBot ? "justify-start" : "justify-end"
      }`}
    >
      {isBot && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600">
          <Bot size={18} />
        </div>
      )}

      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 whitespace-pre-wrap shadow-lg ${
          isBot
            ? "bg-white/10 text-white"
            : "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
        }`}
      >
        {text}
      </div>

      {!isBot && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
          <User size={18} />
        </div>
      )}
    </motion.div>
  );
}