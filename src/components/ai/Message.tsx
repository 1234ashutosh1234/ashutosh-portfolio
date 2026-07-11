"use client";

import { Bot, User } from "lucide-react";

interface Props {
  sender: "user" | "bot";
  text: string;
}

export default function Message({
  sender,
  text,
}: Props) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex max-w-[80%] gap-3 ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full ${
            isUser
              ? "bg-gradient-to-r from-blue-600 to-purple-600"
              : "bg-cyan-500"
          }`}
        >
          {isUser ? (
            <User size={18} />
          ) : (
            <Bot size={18} />
          )}
        </div>

        <div
          className={`rounded-2xl px-5 py-4 leading-8 ${
            isUser
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              : "bg-white/10 text-gray-100"
          }`}
        >
          <p className="whitespace-pre-wrap">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}