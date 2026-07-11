"use client";

import { FaLinkedin } from "react-icons/fa";

export default function LinkedInCard() {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-5">

      <h3 className="text-lg font-bold text-white">
        💼 LinkedIn
      </h3>

      <p className="mt-2 text-gray-300">
        Connect with Ashutosh Raj and view his professional profile.
      </p>

      <a
        href="https://linkedin.com/in/ashutosh-raj-90740731a"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#0077B5] px-5 py-3 font-semibold text-white"
      >
        <FaLinkedin size={18} />
        Open LinkedIn
      </a>

    </div>
  );
}