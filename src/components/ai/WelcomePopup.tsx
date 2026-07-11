"use client";

import { motion } from "framer-motion";
import {
  Bot,
  X,
  FolderOpen,
  FileText,
  Mail,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useChat } from "@/context/ChatContext";

interface Props {
  onChat: () => void;
  onClose: () => void;
}

export default function WelcomePopup({
  onChat,
  onClose,
}: Props) {
  const { dispatch } = useChat();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 40, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className="fixed bottom-24 right-6 lg:right-24 z-[100000] w-[330px] rounded-2xl border border-cyan-500/20 bg-[#111827]/95 shadow-[0_10px_60px_rgba(0,0,0,.45)] backdrop-blur-xl"
    >
      {/* Arrow */}

      <div className="absolute -bottom-3 right-8 h-6 w-6 rotate-45 border-r border-b border-cyan-500/20 bg-[#111827]" />

      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 p-4">
        <div className="flex items-center gap-3">
          <div className="relative">

            <div className="absolute inset-0 animate-ping rounded-full bg-cyan-500/30"></div>

            <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600">

              <Bot size={22} className="text-white" />

            </div>

            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-[#111827]" />

          </div>

          <div>
            <h3 className="font-semibold text-white">
              AI Assistant
            </h3>

            <p className="text-xs text-green-400">
              ● Online
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="rounded-full p-1 hover:bg-white/10"
        >
          <X
            className="text-gray-400"
            size={18}
          />
        </button>
      </div>

      {/* Body */}

      <div className="space-y-4 p-5">

        <div>

          <h2 className="text-lg font-bold text-white">
            👋 Welcome Recruiter!
          </h2>

          <p className="mt-2 text-sm text-gray-300">
            Need help exploring my portfolio?
          </p>

        </div>

        <div className="grid grid-cols-2 gap-3">

          {/* Resume */}

          <button
            onClick={() => {
             onChat();

setTimeout(() => {
  dispatch({
    type: "resume",
  });
}, 300);
            }}
            className="rounded-xl border border-cyan-500/20 bg-white/5 p-3 text-left transition hover:bg-cyan-500/10"
          >
            <FileText
              className="mb-2 text-cyan-400"
              size={18}
            />

            <p className="text-sm font-semibold text-white">
              Resume
            </p>

          </button>

          {/* Projects */}

          <button
            onClick={() => {
              dispatch({
                type: "project",
                payload: "n100",
              });

              onChat();
            }}
            className="rounded-xl border border-cyan-500/20 bg-white/5 p-3 text-left transition hover:bg-cyan-500/10"
          >
            <FolderOpen
              className="mb-2 text-cyan-400"
              size={18}
            />

            <p className="text-sm font-semibold text-white">
              Projects
            </p>

          </button>

          {/* GitHub */}

          <button
            onClick={() => {
              dispatch({
                type: "github",
              });

              onChat();
            }}
            className="rounded-xl border border-cyan-500/20 bg-white/5 p-3 text-left transition hover:bg-cyan-500/10"
          >
            <FaGithub
              className="mb-2 text-cyan-400"
              size={18}
            />

            <p className="text-sm font-semibold text-white">
              GitHub
            </p>

          </button>

          {/* Contact */}

          <button
            onClick={() => {
              dispatch({
                type: "contact",
              });

              onChat();
            }}
            className="rounded-xl border border-cyan-500/20 bg-white/5 p-3 text-left transition hover:bg-cyan-500/10"
          >
            <Mail
              className="mb-2 text-cyan-400"
              size={18}
            />

            <p className="text-sm font-semibold text-white">
              Contact
            </p>

          </button>

        </div>

        <button
          onClick={onChat}
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 py-3 font-semibold text-white transition hover:scale-[1.02]"
        >
          <Sparkles
            size={18}
            className="transition group-hover:rotate-12"
          />

          Start Chat

        </button>

      </div>
    </motion.div>
  );
}