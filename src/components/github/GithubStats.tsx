"use client";

import { motion } from "framer-motion";

export default function GithubStats() {
  return (
    <section
      id="github"
      className="bg-[#0F172A] py-24"
    >
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[6px] text-cyan-400">
            Open Source
          </p>

          <h2 className="mt-3 text-5xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            GitHub Statistics
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">

          <motion.img
            whileHover={{ scale: 1.02 }}
            src="https://github-readme-stats.vercel.app/api?username=1234ashutosh1234&show_icons=true&theme=tokyonight&hide_border=true"
            alt="GitHub Stats"
            className="rounded-3xl w-full"
          />

          <motion.img
            whileHover={{ scale: 1.02 }}
            src="https://github-readme-streak-stats.herokuapp.com/?user=1234ashutosh1234&theme=tokyonight&hide_border=true"
            alt="GitHub Streak"
            className="rounded-3xl w-full"
          />

        </div>

      </div>
    </section>
  );
}