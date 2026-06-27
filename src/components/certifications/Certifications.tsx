"use client";

import { motion } from "framer-motion";
import { certificates } from "../../data/certificates";
import CertificateCard from "./CertificateCard";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-[#0F172A] py-24"
    >
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="uppercase tracking-[6px] text-cyan-400">
            Achievements
          </p>

          <h2 className="mt-3 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-5xl font-bold text-transparent">
            Certifications
          </h2>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={index}
              {...certificate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}