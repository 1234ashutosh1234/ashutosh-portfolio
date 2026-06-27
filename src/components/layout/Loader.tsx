"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0F172A]">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "linear",
        }}
        className="h-20 w-20 rounded-full border-4 border-cyan-400 border-t-transparent"
      />

      <h1 className="absolute mt-36 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-3xl font-bold text-transparent">
        Ashutosh Raj
      </h1>
    </div>
  );
}