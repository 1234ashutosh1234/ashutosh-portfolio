"use client";

import { Mail } from "lucide-react";

export default function ContactCard() {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-5">

      <h3 className="text-lg font-bold text-white">
        📧 Contact
      </h3>

      <div className="mt-4 space-y-2 text-gray-300">

        <p>Email</p>

        <a
          href="mailto:ashu953442@gmail.com"
          className="text-cyan-400"
        >
          ashu953442@gmail.com
        </a>

      </div>

      <button className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 font-semibold text-white">
        <Mail size={18} />
        Contact Now
      </button>

    </div>
  );
}