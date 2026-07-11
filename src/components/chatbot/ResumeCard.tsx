"use client";

import { FileDown } from "lucide-react";

export default function ResumeCard() {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-[#111827] p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-3xl">📄</div>

        <div>
          <h2 className="text-xl font-bold text-white">
            Resume
          </h2>

          <p className="text-sm text-gray-400">
            Download Ashutosh Raj&apos;s latest resume.
          </p>
        </div>
      </div>

      <a
        href="/resume/Ashutosh_Raj_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white transition hover:scale-105"
      >
        <FileDown size={18} />
        Download Resume
      </a>
    </div>
  );
}