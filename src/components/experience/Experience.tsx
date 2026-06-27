    "use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Award,
  Code2,
} from "lucide-react";

const experiences = [
  {
    title: "AI & Data Analytics Learner",
    company: "Microsoft Learn",
    year: "2025 - Present",
    description:
      "Learning Artificial Intelligence, Machine Learning, Data Analytics, Azure AI and modern cloud technologies through Microsoft learning programs.",
    icon: Briefcase,
  },
  {
    title: "Technology Job Simulations",
    company: "Deloitte • Tata Group",
    year: "2025",
    description:
      "Completed virtual job simulations focused on software engineering, business analytics, problem solving and real-world projects.",
    icon: Award,
  },
  {
    title: "Full Stack Developer",
    company: "Personal Projects",
    year: "2024 - Present",
    description:
      "Building AI-powered dashboards, portfolio websites, financial analytics platforms and modern web applications using Next.js and Python.",
    icon: Code2,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0F172A] py-24">
      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="uppercase tracking-[8px] text-cyan-400">
            Journey
          </p>

          <h2 className="mt-3 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-5xl font-bold text-transparent">
            Experience
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-cyan-500/30 pl-8">

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12"
            >
              <div className="absolute -left-[46px] flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-[#0F172A]">
                <item.icon size={20} />
              </div>

              <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-cyan-400 font-medium">
                  {item.company}
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  {item.year}
                </p>

                <p className="mt-5 leading-8 text-gray-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}