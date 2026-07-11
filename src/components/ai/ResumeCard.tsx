"use client";

import { FileDown } from "lucide-react";

export default function ResumeCard() {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-5">

      <h3 className="text-lg font-bold text-white">
        📄 Resume
      </h3>

      <p className="mt-2 text-gray-300">
        Download Ashutosh Raj's latest resume.
      </p>

      <a
        href="/resume.pdf"
        download
        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 font-semibold text-white"
      >
        <FileDown size={18}/>
        Download Resume
      </a>

    </div>
  );
}