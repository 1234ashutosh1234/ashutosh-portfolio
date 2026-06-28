"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl shadow-xl hover:border-cyan-400 hover:shadow-cyan-500/30"
    >
      {/* Image */}

      <Link href={demo}>
        <div className="relative h-60 overflow-hidden cursor-pointer">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover transition duration-700 group-hover:scale-110"
            sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
        </div>
      </Link>

      {/* Content */}

      <div className="p-7">
        <Link href={demo}>
          <h3 className="cursor-pointer text-2xl font-bold text-white transition hover:text-cyan-400">
            {title}
          </h3>
        </Link>

        <p className="mt-4 leading-8 text-gray-400">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 px-6 py-3 font-semibold text-white transition hover:scale-105"
          >
            <FaGithub size={18} />
            GitHub
          </a>

          <Link
            href={demo}
            className="flex items-center gap-2 rounded-full border border-cyan-400 px-6 py-3 text-white transition hover:bg-cyan-500/20"
          >
            <FaExternalLinkAlt size={18} />
            View Project
          </Link>

        </div>

      </div>
    </motion.div>
  );
}