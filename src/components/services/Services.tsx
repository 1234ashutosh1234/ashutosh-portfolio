"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Database,
  Globe,
  BarChart3,
  Cpu,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Building intelligent applications using AI concepts, automation, and modern tools.",
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    description:
      "Creating predictive models, data-driven solutions, and ML-powered applications.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Transforming raw data into meaningful insights using Python, SQL, and visualization tools.",
  },
  {
    icon: Code2,
    title: "Python Development",
    description:
      "Developing scalable Python applications, automation scripts, APIs, and dashboards.",
  },
  {
    icon: Globe,
    title: "Full Stack Development",
    description:
      "Building responsive web applications using React, Next.js, TypeScript, and Tailwind CSS.",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Designing and managing SQL databases, data models, and efficient backend systems.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
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
            What I Do
          </p>

          <h2 className="mt-3 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-5xl font-bold text-transparent">
            My Services
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            I enjoy building modern software solutions using Artificial
            Intelligence, Machine Learning, Data Analytics and Full Stack
            Web Development technologies.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
                <service.icon
                  size={34}
                  className="text-cyan-400"
                />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-white">
                {service.title}
              </h3>

              <p className="leading-8 text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}