"use client";

import { FaGithub } from "react-icons/fa";

export default function GitHubCard() {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-[#111827] p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <FaGithub size={30} className="text-white" />

        <div>
          <h2 className="text-xl font-bold text-white">
            GitHub Profile
          </h2>

          <p className="text-sm text-gray-400">
            Explore Ashutosh Raj&apos;s repositories, AI projects and open-source work.
          </p>
        </div>
      </div>

      <a
        href="https://github.com/1234ashutosh1234"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 font-semibold text-white transition hover:scale-105"
      >
        <FaGithub />
        Open GitHub
      </a>
    </div>
  );
}