"use client";
import { useState, useEffect, useRef, useCallback } from "react";

import ResumeCard from "./ResumeCard";
import GitHubCard from "./GitHubCard";
import LinkedInCard from "./LinkedInCard";
import ContactCard from "./ContactCard";
import ProjectCard from "./ProjectCard";
import TypingIndicator from "./TypingIndicator";
import Message from "./Message";
import InputBar from "./InputBar";

import { useChat } from "@/context/ChatContext";

interface ChatMessage {
  sender: "user" | "bot";
  text?: string;
  card?: "resume" | "github" | "linkedin" | "contact";
  project?: "n100" | "bluestock";
}

export default function ChatArea() {

  const { action, clearAction } = useChat();

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text:
        "👋 Welcome!\n\nI'm Ashutosh Raj's AI Assistant.\n\nAsk me anything about my projects, resume, GitHub, experience or skills.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const [lastTopic, setLastTopic] =
    useState<string | null>(null);

  const bottomRef =
    useRef<HTMLDivElement>(null);

  /* Auto Scroll */

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, loading]);

  /* Handle Welcome Popup Actions */

  

  /* Typing Animation */

  const typeMessage = async (
    text: string
  ) => {

    setMessages(prev => [
      ...prev,
      {
        sender: "bot",
        text: "",
      },
    ]);

    for (let i = 1; i <= text.length; i++) {

      await new Promise(resolve =>
        setTimeout(resolve, 12)
      );

      setMessages(prev => {

        const updated = [...prev];

        updated[updated.length - 1] = {
          sender: "bot",
          text: text.slice(0, i),
        };

        return updated;

      });

    }

  };

  const sendMessage = useCallback(async (text: string) => {

  if (!text.trim()) return;

  const userMessage: ChatMessage = {
    sender: "user",
    text,
  };

 

  setMessages(prev => [
    ...prev,
    userMessage,
  ]);

  setLoading(true);

  try {

    const response = await fetch("/api/chat", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({

        message: text,

        previousTopic: lastTopic,

        history: messages
          .slice(-8)
          .map(m => ({
            sender: m.sender,
            text: m.text,
          })),

      }),

    });

    const data = await response.json();

    if (data.topic) {
      setLastTopic(data.topic);
    }

    if (data.card) {

      setMessages(prev => [
        ...prev,
        {
          sender: "bot",
          card: data.card,
        },
      ]);

    }

    else if (data.project) {

      setMessages(prev => [
        ...prev,
        {
          sender: "bot",
          project: data.project,
        },
      ]);

    }

    else {

      await typeMessage(

        data.reply ??

        "Sorry, I couldn't generate a response."

      );

    }

  }

  catch (error) {

    console.error(error);

    setMessages(prev => [

      ...prev,

      {

        sender: "bot",

        text:
          "❌ Sorry, Gemini AI is currently unavailable.",

      },

    ]);

  }

  finally {

    setLoading(false);

    requestAnimationFrame(() => {

      bottomRef.current?.scrollIntoView({

        behavior: "smooth",

        block: "end",

      });

    });

  }

}, [lastTopic, messages]);

useEffect(() => {
  if (!action) return;

  const timer = setTimeout(() => {
    switch (action.type) {
      case "resume":
        setMessages(prev => [
          ...prev,
          { sender: "bot", card: "resume" },
        ]);
        break;

      case "github":
        setMessages(prev => [
          ...prev,
          { sender: "bot", card: "github" },
        ]);
        break;

      case "linkedin":
        setMessages(prev => [
          ...prev,
          { sender: "bot", card: "linkedin" },
        ]);
        break;

      case "contact":
        setMessages(prev => [
          ...prev,
          { sender: "bot", card: "contact" },
        ]);
        break;

      case "project":
        setMessages(prev => [
          ...prev,
          {
            sender: "bot",
            project: action.payload,
          },
        ]);
        break;

      case "message":
        sendMessage(action.payload);
        break;
    }

    clearAction();
  }, 0);

  return () => clearTimeout(timer);
}, [action, clearAction, sendMessage]);

return (
  <div className="flex h-full flex-col pb-4">

    {/* Messages */}

    <div className="flex-1 overflow-y-auto px-6 py-6">

      <div className="flex flex-col gap-6">

        {messages.map((msg, index) => (
          <div key={index}>

            {/* Resume */}

            {msg.card === "resume" && (
              <ResumeCard />
            )}

            {/* GitHub */}

            {msg.card === "github" && (
              <GitHubCard />
            )}

            {/* LinkedIn */}

            {msg.card === "linkedin" && (
              <LinkedInCard />
            )}

            {/* Contact */}

            {msg.card === "contact" && (
              <ContactCard />
            )}

            {/* N100 */}

            {msg.project === "n100" && (
              <ProjectCard
                title="N100 Financial Intelligence Platform"
                image="/images/projects/n100/dashboard.png"
                description="AI-powered financial analytics platform with company analysis, stock screener, recommendation engine, sector analytics and interactive dashboards."
                github="https://github.com/1234ashutosh1234/n100-financial-intelligence-platform"
                demo="https://n100-financial-intelligence-platform.streamlit.app"
                projectPage="/projects/n100"
              />
            )}

            {/* Bluestock */}

            {msg.project === "bluestock" && (
              <ProjectCard
                title="Bluestock MF Capstone"
                image="/images/projects/bluestock/dashboard.png"
                description="Mutual Fund Analytics Dashboard with NAV analysis, CAGR, Risk Analysis, Portfolio Optimization and Interactive Visualizations."
                github="https://github.com/1234ashutosh1234/bluestock-mf-capstone"
                demo="https://bluestock-mf-capstone.streamlit.app"
                projectPage="/projects/bluestock-mf-capstone"
              />
            )}

            {/* Normal Message */}

            {!msg.card &&
              !msg.project && (
                <Message
                  sender={msg.sender}
                  text={msg.text || ""}
                />
              )}

          </div>
        ))}

        {/* Typing */}

        {loading && (
          <TypingIndicator />
        )}

        <div ref={bottomRef} />

      </div>

    </div>

    {/* Input */}

    <div className="border-t border-white/10 bg-[#0F172A] px-5 pb-10 pt-5">

      <InputBar
        onSend={sendMessage}
      />

    </div>

  </div>
);
}