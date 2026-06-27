"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  name: string;
  level: number;
}

export default function ProgressBar({
  name,
  level,
}: ProgressBarProps) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{name}</span>
        <span className="text-cyan-400">{level}%</span>
      </div>

      <div className="w-full h-3 rounded-full bg-slate-700 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500"
        />
      </div>
    </div>
  );
}