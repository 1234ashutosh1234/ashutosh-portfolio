"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  icon: React.ElementType;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl"
    >
      <div className="mb-6 inline-flex rounded-2xl bg-cyan-500/20 p-4">
        <Icon size={34} className="text-cyan-400" />
      </div>

      <h3 className="mb-4 text-2xl font-bold">
        {title}
      </h3>

      <p className="leading-8 text-gray-400">
        {description}
      </p>
    </motion.div>
  );
}