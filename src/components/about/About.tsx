"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  GraduationCap,
  Brain,
  Code2,
  Trophy,
} from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    value: "B.Tech CSE",
  },
  {
    icon: Brain,
    title: "AI & ML",
    value: "Learning",
  },
  {
    icon: Code2,
    title: "Projects",
    value: "15+",
  },
  {
    icon: Trophy,
    title: "Certificates",
    value: "5+",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0F172A] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="uppercase tracking-[8px] text-cyan-400">
            About Me
          </p>

          <h2 className="mt-3 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-5xl font-bold text-transparent">
            Know Me Better
          </h2>
        </motion.div>

        {/* Main Content */}

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold">
              Hi, I'm
              <span className="text-cyan-400">
                {" "}Ashutosh Raj
              </span>
            </h3>

            <p className="mt-8 text-lg leading-9 text-gray-300">
              I am a passionate Computer Science Engineering student with
              a strong interest in Artificial Intelligence, Machine
              Learning, Data Analytics and Full Stack Web Development.

              <br />
              <br />

              I enjoy solving real-world problems through technology,
              building modern web applications, and continuously learning
              new tools and frameworks.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:scale-105 hover:border-cyan-400"
                >
                  <card.icon
                    size={34}
                    className="text-cyan-400"
                  />

                  <h4 className="mt-4 text-xl font-semibold text-white">
                    {card.title}
                  </h4>

                  <p className="mt-2 text-gray-400">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-cyan-500/20 bg-white/5 p-10 backdrop-blur-xl"
          >
            <h3 className="mb-8 text-3xl font-bold">
              Quick Information
            </h3>

            <div className="space-y-6 text-lg">

              <div className="flex justify-between">
                <span>Name</span>
                <span className="text-cyan-400">
                  Ashutosh Raj
                </span>
              </div>

              <div className="flex justify-between">
                <span>Degree</span>
                <span className="text-cyan-400">
                  B.Tech CSE
                </span>
              </div>

              <div className="flex justify-between">
                <span>University</span>
                <span className="text-cyan-400">
                  Bihar Engineering University
                </span>
              </div>

              <div className="flex justify-between">
                <span>Location</span>
                <span className="text-cyan-400">
                  Bihar, India
                </span>
              </div>

              <div className="flex justify-between">
                <span>Focus</span>
                <span className="text-cyan-400">
                  AI • ML • Full Stack
                </span>
              </div>

              <div className="flex justify-between">
                <span>Status</span>
                <span className="text-green-400">
                  Open to Internship
                </span>
              </div>

            </div>

          </motion.div>

        </div>

        {/* Animated Counter */}

        <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 text-center backdrop-blur-xl">
            <h2 className="text-5xl font-bold text-cyan-400">
              <CountUp end={20} duration={2.5} />+
            </h2>
            <p className="mt-4 text-gray-300">
              Projects
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 text-center backdrop-blur-xl">
            <h2 className="text-5xl font-bold text-cyan-400">
              <CountUp end={10} duration={2.5} />+
            </h2>
            <p className="mt-4 text-gray-300">
              Certificates
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 text-center backdrop-blur-xl">
            <h2 className="text-5xl font-bold text-cyan-400">
              <CountUp end={25} duration={2.5} />+
            </h2>
            <p className="mt-4 text-gray-300">
              Technologies
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 text-center backdrop-blur-xl">
            <h2 className="text-5xl font-bold text-cyan-400">
              <CountUp end={30} duration={2.5} />+
            </h2>
            <p className="mt-4 text-gray-300">
              GitHub Repositories
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}