"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  primary?: boolean;
}

export default function AnimatedButton({
  children,
  href = "#",
  primary = true,
}: AnimatedButtonProps) {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      className={`px-7 py-3 rounded-full font-semibold transition-all duration-300 ${
        primary
          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
          : "border border-cyan-400 text-cyan-400 hover:bg-cyan-500/10"
      }`}
    >
      {children}
    </motion.a>
  );
}