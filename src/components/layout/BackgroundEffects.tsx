"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <>
      {/* Top Glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="fixed left-[-200px] top-[-200px] -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[150px]"
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="fixed bottom-[-200px] right-[-200px] -z-10 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[150px]"
      />
    </>
  );
}