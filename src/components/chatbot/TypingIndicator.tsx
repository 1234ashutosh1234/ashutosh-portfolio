"use client";

import { motion } from "framer-motion";

export default function TypingIndicator() {
  return (
    <div className="flex justify-start">

      <div className="rounded-2xl bg-white/10 px-5 py-4">

        <div className="flex gap-2">

          {[0, 1, 2].map((dot) => (

            <motion.div
              key={dot}
              className="h-2 w-2 rounded-full bg-cyan-400"
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                delay: dot * 0.2,
              }}
            />

          ))}

        </div>

      </div>

    </div>
  );
}