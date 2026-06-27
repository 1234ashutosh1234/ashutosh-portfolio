"use client";

import { motion } from "framer-motion";

interface ContactCardProps {
  icon: React.ElementType;
  title: string;
  value: string;
  href: string;
}

export default function ContactCard({
  icon: Icon,
  title,
  value,
  href,
}: ContactCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-5 rounded-3xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-xl hover:border-cyan-400"
    >
      <div className="rounded-2xl bg-cyan-500/20 p-4">
        <Icon size={28} className="text-cyan-400" />
      </div>

      <div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-gray-400">{value}</p>
      </div>
    </motion.a>
  );
}