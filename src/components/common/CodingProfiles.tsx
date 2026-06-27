"use client";

import { motion } from "framer-motion";
import { codingProfiles } from "@/data/codingProfiles";

export default function CodingProfiles() {
  return (
    <section className="bg-[#0F172A] py-24">
      <div className="container mx-auto px-6">

        <div className="mb-16 text-center">
          <p className="uppercase tracking-[6px] text-cyan-400">
            Coding Platforms
          </p>

          <h2 className="mt-3 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-5xl font-bold text-transparent">
            Coding Profiles
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {codingProfiles.map((profile, index) => {
            const Icon = profile.icon;

            return (
              <motion.a
                key={index}
                href={profile.url}
                target="_blank"
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 text-center backdrop-blur-xl"
              >
                <Icon
                  size={50}
                  className={`mx-auto ${profile.color}`}
                />

                <h3 className="mt-5 text-2xl font-bold">
                  {profile.title}
                </h3>

                <p className="mt-3 text-gray-400">
                  {profile.username}
                </p>
              </motion.a>
            );
          })}

        </div>
      </div>
    </section>
  );
}