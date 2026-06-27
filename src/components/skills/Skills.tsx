"use client";

import { motion } from "framer-motion";
import { skillCategories } from "../../data/skills";
import ProgressBar from "./ProgressBar";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-[#0F172A]"
    >
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[6px] text-cyan-400">
            Technical Expertise
          </p>

          <h2 className="text-5xl font-bold mt-3 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Skills
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-8">
                {category.title}
              </h3>

              {category.skills.map((skill, i) => (
                <ProgressBar
                  key={i}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}