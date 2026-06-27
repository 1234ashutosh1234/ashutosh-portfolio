"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface Props {
  subtitle: string;
  title: string;
}

export default function SectionTitle({
  subtitle,
  title,
}: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mb-20 text-center"
    >
      <p className="uppercase tracking-[8px] text-cyan-400">
        {subtitle}
      </p>

      <h2 className="mt-3 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-5xl font-bold text-transparent">
        {title}
      </h2>
    </motion.div>
  );
}