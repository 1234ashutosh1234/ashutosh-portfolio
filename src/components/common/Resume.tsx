"use client";

import { motion } from "framer-motion";
import { Download, Eye, FileText } from "lucide-react";

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume/Ashutosh_Raj_Resume.pdf";
    link.download = "Ashutosh_Raj_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="bg-[#0F172A] pt-36 pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="uppercase tracking-[6px] text-cyan-400">
            Resume
          </p>

          <h2 className="mt-3 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-5xl font-bold text-transparent">
            My Resume
          </h2>

          <p className="mt-6 text-gray-400">
            View or download my latest resume.
          </p>
        </motion.div>

        <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-10 text-center backdrop-blur-xl">

          <FileText
            size={80}
            className="mx-auto mb-6 text-cyan-400"
          />

          <h3 className="text-3xl font-bold text-white">
            Ashutosh Raj Resume
          </h3>

          <p className="mt-4 text-gray-400">
            Click below to preview or download the PDF.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            {/* Preview */}

            <a
              href="/resume/Ashutosh_Raj_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              <Eye size={20} />
              Preview Resume
            </a>

            {/* Download */}

            <button
              onClick={handleDownload}
              className="flex items-center gap-2 rounded-full border border-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-500/20"
            >
              <Download size={20} />
              Download Resume
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}