"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  title: string;
  image: string;
  description: string;
  github: string;
  demo: string;
  projectPage: string;
}

export default function ProjectCard({
  title,
  image,
  description,
  github,
  demo,
  projectPage,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5">

      <Image
        src={image}
        alt={title}
        width={700}
        height={400}
        className="h-52 w-full object-cover"
      />

      <div className="p-5">

        <h3 className="text-xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-3 text-gray-300">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">

          <a
            href={github}
            target="_blank"
            className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-white"
          >
            <FaGithub className="inline mr-2" />
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            className="rounded-xl border border-green-500 px-4 py-2 text-green-400"
          >
            <FaExternalLinkAlt className="inline mr-2" />
            Live Demo
          </a>

          <Link
            href={projectPage}
            className="rounded-xl border border-cyan-500 px-4 py-2 text-cyan-400"
          >
            View Project
          </Link>

        </div>

      </div>

    </div>
  );
}