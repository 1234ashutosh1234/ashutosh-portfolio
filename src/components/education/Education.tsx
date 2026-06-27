"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, BrainCircuit } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-gradient-to-b from-[#0F172A] to-[#111827]"
    >
      <div className="max-w-5xl mx-auto px-6">

        <SectionHeading
          title="Education"
          subtitle="Academic Journey"
        />

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full" />

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="relative ml-20 mb-16"
          >

            <div className="absolute -left-[62px] w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg">

              <GraduationCap size={24} />

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl p-8">

              <h3 className="text-3xl font-bold">
                Bachelor of Technology (B.Tech)
              </h3>

              <p className="text-cyan-400 mt-2">
                Computer Science & Engineering
              </p>

              <p className="text-gray-300 mt-3">
                Bihar Engineering University, Patna
              </p>

              <p className="text-gray-400 mt-2">
                Expected Graduation : 2027
              </p>

              <div className="grid md:grid-cols-3 gap-5 mt-8">

                <Skill
                  icon={<BookOpen />}
                  title="Programming"
                />

                <Skill
                  icon={<BrainCircuit />}
                  title="Artificial Intelligence"
                />

                <Skill
                  icon={<GraduationCap />}
                  title="Machine Learning"
                />

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

function Skill({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="rounded-xl bg-slate-800 p-5 flex items-center gap-4">

      <div className="text-cyan-400">

        {icon}

      </div>

      <span>{title}</span>

    </div>
  );
}