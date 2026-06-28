"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  image: string;
  github: string;
  demo: string;
}

export default function ProjectHero({
  title,
  subtitle,
  image,
  github,
  demo,
}: ProjectHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] py-20">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb20,transparent_40%),radial-gradient(circle_at_bottom_left,#06b6d420,transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition"
        >
          <FaArrowLeft size={18} />
          Back to Portfolio
        </Link>

        <div className="mt-10 grid gap-14 lg:grid-cols-2 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              {title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              {subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href={github}
                target="_blank"
                className="flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 px-7 py-4 font-semibold text-white"
              >
                <FaGithub size={20} />
                View Source
              </a>

              {demo !== "#" ? (
  <a
    href={demo}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 rounded-full border border-cyan-500 px-7 py-4 font-semibold text-white hover:bg-cyan-500/10 transition"
  >
    <FaExternalLinkAlt size={20} />
    Live Demo
  </a>
) : (
  <button
    disabled
    className="flex items-center gap-3 rounded-full border border-gray-600 px-7 py-4 font-semibold text-gray-500 cursor-not-allowed"
  >
    <FaExternalLinkAlt size={20} />
    Coming Soon
  </button>
)}


            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="overflow-hidden rounded-3xl border border-cyan-500/20 shadow-[0_0_60px_rgba(6,182,212,.25)]"
          >

            <Image
              src={image}
              alt={title}
              width={1600}
              height={900}
              className="w-full object-cover"
              priority
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
}