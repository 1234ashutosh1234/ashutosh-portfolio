"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, X } from "lucide-react";

import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import WelcomePopup from "./WelcomePopup";

export default function FullScreenAI() {
  const [open, setOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!open) {
        setShowWelcome(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [open]);

  return (
    <>
      {/* Floating Button */}

      {!open && (
        <button
          onClick={() => {
            setOpen(true);
            setShowWelcome(false);
          }}
          className="fixed bottom-8 right-8 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 shadow-2xl transition-all duration-300 hover:scale-110"
        >
          <Bot
            className="text-white"
            size={28}
          />
        </button>
      )}

      {/* Chat */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.97,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed inset-5 z-[99999] flex overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#0F172A] shadow-[0_0_80px_rgba(0,0,0,.35)]"
          >
            <Sidebar />

            <div className="flex flex-1 flex-col">

              {/* Header */}

              <div className="flex h-20 items-center justify-between border-b border-white/10 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-8">

                <div>

                  <h2 className="text-2xl font-bold text-white">

                    🤖 Ashutosh AI Assistant

                  </h2>

                  <p className="text-sm text-white/80">

                    Powered by Gemini AI

                  </p>

                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-white/20 p-3 transition hover:bg-white/30"
                >
                  <X
                    className="text-white"
                    size={24}
                  />
                </button>

              </div>

              {/* Chat */}

              <ChatArea />

            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Welcome */}

      {showWelcome && !open && (
        <WelcomePopup
          onChat={() => {
            setShowWelcome(false);
            setOpen(true);
          }}
          onClose={() => {
            setShowWelcome(false);
          }}
        />
      )}
    </>
  );
}