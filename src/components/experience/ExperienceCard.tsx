"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface ExperienceProps {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
}

export default function ExperienceCard({
  role,
  company,
  duration,
  location,
  description,
}: ExperienceProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl"
    >
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-cyan-500/20 p-3">
          <Briefcase className="text-cyan-400" />
        </div>

        <div>
          <h3 className="text-2xl font-bold">{role}</h3>
          <p className="text-cyan-400">{company}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-6 text-gray-400">

        <div className="flex items-center gap-2">
          <Calendar size={18} />
          {duration}
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={18} />
          {location}
        </div>

      </div>

      <p className="mt-6 leading-8 text-gray-300">
        {description}
      </p>
    </motion.div>
  );
}