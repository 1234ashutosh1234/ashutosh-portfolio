"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";

import ChatHeader from "./ChatHeader";
import ChatBubble from "./ChatBubble";
import TypingIndicator from "./TypingIndicator";
import QuickActions from "./QuickActions";
import SuggestedQuestions from "./SuggestedQuestions";
import ProjectPreviewCard from "./ProjectPreviewCard";

import { chatbotData } from "@/data/chatbot";
import { cardsAI } from "@/data/cardsAI";
import { projectsAI } from "@/data/projectsAI";

interface Message {
  sender: "bot" | "user";
  text?: string;
  type?: "text" | "project" | "card";
  project?: "n100" | "bluestock";
  card?: "resume" | "github" | "contact" | "certificates";
}

export default function AIChatbot() {

  const [open, setOpen] = useState(false);

  const [typing, setTyping] = useState(false);

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      type: "text",
      text:
        "👋 Welcome!\n\nI'm Ashutosh Raj's AI Assistant.\n\nAsk me anything about my projects, resume, certifications or skills.",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const timer = setTimeout(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, 50);

  return () => clearTimeout(timer);
}, [messages, typing]); 

  const sendMessage = async (text?: string) => {
           console.log("sendMessage called");
    const message = text || input;

    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        type: "text",
        text: message,
      },
    ]);

    setInput("");

    setTyping(true);

    try {

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await response.json();

      setTyping(false);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          type: "text",
          text: data.reply,
        },
      ]);

    } catch (error) {

      console.error(error);

      setTyping(false);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          type: "text",
          text: "❌ Something went wrong.",
        },
      ]);

    }

  };

  return (
    <>
    
          {/* Floating Chat Button */}
      {!open && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setOpen(true)}
          className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 shadow-2xl"
        >
          <MessageCircle size={28} />
        </motion.button>
      )}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.3 }}
         className="fixed top-24 right-6 z-[99999] flex h-[calc(100vh-120px)] max-h-[700px] w-[430px] flex-col rounded-3xl border border-cyan-500/20 bg-[#111827] shadow-2xl"
          >

            <ChatHeader
              onClose={() => setOpen(false)}
            />

            <div className="border-b border-white/10 p-3">

  <QuickActions
    onSelect={(text) => sendMessage(text)}
  />

</div>
<div className="flex-1 min-h-0 overflow-y-auto">
  <div className="space-y-5 p-5 pb-36">
              {messages.map((msg, index) => {

                if (msg.type === "card") {

                  const card = cardsAI[msg.card!];

                  return (
                    <ProjectPreviewCard
                      key={index}
                      title={card.title}
                      image={card.image}
                      description={card.description}
                      demo={card.demo}
                      github={card.github}
                    />
                  );

                }

                if (msg.type === "project") {

                  const project = projectsAI[msg.project!];

                  return (
                    <ProjectPreviewCard
                      key={index}
                      title={project.title}
                      image={project.image}
                      description={project.description}
                      demo={project.demo}
                      github={project.github}
                    />
                  );

                }

                return (
                  <ChatBubble
                    key={index}
                    sender={msg.sender}
                    text={msg.text || ""}
                  />
                );

              })}

              {typing && <TypingIndicator />}

              <div ref={bottomRef} />

            </div>
            </div>

                      <div className="border-t border-white/10 p-4 shrink-0">
  <div className="flex items-center gap-3">

    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          sendMessage();
        }
      }}
      placeholder="Ask me anything..."
      className="flex-1 rounded-xl bg-white/10 px-4 py-3 text-white outline-none"
    />

    <button
      type="button"
      onClick={() => sendMessage()}
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600"
    >
      <Send size={20} />
    </button>

  </div>
</div>

          </motion.div>

        )}

      </AnimatePresence>

    </>

  );

}
