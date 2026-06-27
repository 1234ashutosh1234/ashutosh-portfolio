"use client";

import { Heart, Mail } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 bg-[#0B1120]">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}

          <div>
            <h2 className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-3xl font-bold text-transparent">
              Ashutosh Raj
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Computer Science Engineering student passionate about
              Artificial Intelligence, Machine Learning,
              Data Analytics and Full Stack Development.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <div className="space-y-3">

              <a href="#home" className="block text-gray-400 hover:text-cyan-400">
                Home
              </a>

              <a href="#about" className="block text-gray-400 hover:text-cyan-400">
                About
              </a>

              <a href="#projects" className="block text-gray-400 hover:text-cyan-400">
                Projects
              </a>

              <a href="#contact" className="block text-gray-400 hover:text-cyan-400">
                Contact
              </a>

            </div>
          </div>

          {/* Social */}

          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Connect
            </h3>

            <div className="flex gap-5">

              <a
                href="https://github.com/1234ashutosh1234"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-cyan-500 p-4 transition hover:bg-cyan-500/20"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/ashutosh-raj-90740731a/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-cyan-500 p-4 transition hover:bg-cyan-500/20"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:ashu953442@gmail.com"
                className="rounded-full border border-cyan-500 p-4 transition hover:bg-cyan-500/20"
              >
                <Mail />
              </a>

            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-cyan-500/20 pt-8 text-center text-gray-400">

          <p className="flex items-center justify-center gap-2">
            Made with
            <Heart className="text-red-500" size={18} />
            by Ashutosh Raj
          </p>

          <p className="mt-3 text-sm">
            © {new Date().getFullYear()} Ashutosh Raj. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}