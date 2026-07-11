"use client";

import {
  Home,
  FolderKanban,
  BrainCircuit,
  FileText,
  Award,
  Mail,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

const menu = [
  {
    icon: <Home size={20} />,
    title: "Home",
  },
  {
    icon: <FolderKanban size={20} />,
    title: "Projects",
  },
  {
    icon: <BrainCircuit size={20} />,
    title: "Skills",
  },
  {
    icon: <FileText size={20} />,
    title: "Resume",
  },
  {
    icon: <Award size={20} />,
    title: "Certificates",
  },
  {
    icon: <FaGithub size={20} />,
    title: "GitHub",
  },
  {
    icon: <Mail size={20} />,
    title: "Contact",
  },
];

export default function Sidebar() {
  return (
    <aside className="flex w-72 flex-col border-r border-white/10 bg-[#111827]">

      {/* Profile */}

      <div className="border-b border-white/10 p-8">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-4xl font-bold text-white shadow-xl">

          AR

        </div>

        <h2 className="mt-5 text-center text-2xl font-bold text-white">
          Ashutosh Raj
        </h2>

        <p className="mt-2 text-center text-sm text-cyan-400">
          AI • ML • Full Stack Developer
        </p>

      </div>

      {/* Menu */}

      <div className="flex-1 space-y-2 p-6">

        {menu.map((item) => (

          <button
            key={item.title}
            className="flex w-full items-center gap-4 rounded-xl px-5 py-4 text-left text-gray-300 transition hover:bg-cyan-500/10 hover:text-cyan-400"
          >
            {item.icon}

            <span>{item.title}</span>

          </button>

        ))}

      </div>

      {/* Footer */}

      <div className="border-t border-white/10 p-6">

        <div className="rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 p-4 text-center">

          <p className="text-sm text-white">
            🚀 Ask me anything about my career,
            projects and experience.
          </p>

        </div>

      </div>

    </aside>
  );
}