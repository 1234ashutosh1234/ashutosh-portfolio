"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  title: string;
  image: string;
  description: string;
  github: string;
  demo: string;
}

export default function ProjectPreviewCard({
  title,
  image,
  description,
  github,
  demo,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl">

      <div className="relative h-44">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

      </div>

      <div className="p-5">

        <h3 className="text-xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-3 text-gray-400 text-sm leading-7">
          {description}
        </p>

        <div className="mt-5 flex gap-3">

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-white"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-cyan-500 px-4 py-2 text-white"
          >
            <FaGithub />
            GitHub
          </a>

        </div>

      </div>

    </div>
  );
}