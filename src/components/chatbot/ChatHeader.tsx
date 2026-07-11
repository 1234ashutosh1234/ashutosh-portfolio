"use client";

import { X } from "lucide-react";

interface Props {
  onClose: () => void;
}

export default function ChatHeader({ onClose }: Props) {
  return (
   <div className="sticky top-0 z-50 flex h-16 items-center justify-between bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 px-5">

      <h2 className="text-lg font-bold text-white">
        AI Assistant
      </h2>

      <button
        onClick={onClose}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition hover:bg-red-500"
        aria-label="Close chatbot"
      >
        <X size={22} className="text-white" />
      </button>

    </div>
  );
}