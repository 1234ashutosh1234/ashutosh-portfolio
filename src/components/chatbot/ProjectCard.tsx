"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
interface Props {
  title: string;
  image: string;
  description: string;
  demo: string;
  github: string;
}

export default function ProjectCard({
  title,
  image,
  description,
  demo,
  github,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5">

      <div className="relative h-44">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

      </div>

      <div className="p-5">

        <h3 className="text-xl font-bold">
          {title}
        </h3>

        <p className="mt-3 text-gray-400">
          {description}
        </p>

        <div className="mt-5 flex gap-3">

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2"
          >
            <FaExternalLinkAlt size={18} />
            Live Demo
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-cyan-500 px-5 py-2"
          >
            <FaGithub size={18} />
            Source
          </a>

        </div>

      </div>

    </div>
  );
}