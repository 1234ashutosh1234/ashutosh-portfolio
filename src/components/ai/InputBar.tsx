"use client";

import { useState } from "react";
import { Send } from "lucide-react";

interface Props {
  onSend: (text: string) => void;
}

export default function InputBar({
  onSend,
}: Props) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  return (
    <div className="border-t border-white/10 bg-[#111827] p-5">

      <div className="flex items-center gap-4">

        <input
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          placeholder="Ask me anything..."
          className="flex-1 rounded-2xl bg-white/10 px-5 py-4 text-white outline-none focus:ring-2 focus:ring-cyan-500"
        />

        <button
          onClick={handleSend}
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 transition hover:scale-105"
        >
          <Send size={22} className="text-white" />
        </button>

      </div>

    </div>
  );
}