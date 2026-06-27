"use client";
import FloatingIcons from "./FloatingIcons";
import { motion } from "framer-motion";
import TypingAnimation from "./TypingAnimation";
import ProfileImage from "./ProfileImage";

export default function Hero() {
  return (
    <section
  id="home"
 className="relative min-h-[85vh] bg-[#0F172A] flex items-center pt-24 overflow-hidden"
>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb20,transparent_40%),radial-gradient(circle_at_bottom_left,#7c3aed20,transparent_35%)]" />

<FloatingIcons />

<div className="container mx-auto grid min-h-[85vh] items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

         <p className="inline-flex items-center gap-2 text-cyan-400 uppercase tracking-[6px] font-semibold mb-5">
  👋 Welcome To My Portfolio
</p>

       <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
           Hello, I'm

          <span className="block mt-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
  Ashutosh Raj
</span>

<div className="mt-6 w-full max-w-2xl overflow-hidden">
  <TypingAnimation />
</div>

          </h1>


<div className="mt-8 max-w-xl rounded-3xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-xl shadow-xl">
  <p className="text-lg leading-8 text-gray-300">
  I'm <span className="font-semibold text-cyan-400">Ashutosh Raj</span>,
  a Computer Science Engineering student passionate about
  <span className="text-blue-400"> Artificial Intelligence</span>,
  <span className="text-purple-400"> Machine Learning</span>,
  <span className="text-cyan-400"> Data Analytics</span>, and
  <span className="text-pink-400"> Full Stack Web Development</span>.

  <br />
  <br />

  I enjoy building modern, responsive applications that solve
  real-world problems and continuously learning new technologies.
</p>
</div>

          <div className="mt-10 flex flex-wrap gap-5">

  <a
  href="/resume/Ashutosh_Raj_Resume.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-cyan-500/50"
>
  📄 Download Resume
</a>

  <a
    href="#projects"
    className="rounded-full border border-cyan-400 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-cyan-500/20"
  >
    🚀 View Projects
  </a>

  <a
    href="#contact"
    className="rounded-full border border-purple-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-purple-500/20"
  >
    📩 Contact Me
  </a>

</div>
        </motion.div>


<motion.div
  className="order-1 flex justify-center lg:order-2"
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}

        >
          <ProfileImage />
          

              </motion.div>

      </div>
    </section>
  );
}