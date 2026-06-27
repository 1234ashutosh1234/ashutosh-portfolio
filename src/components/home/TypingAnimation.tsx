"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypingAnimation() {
  return (
    <div className="w-full min-h-[60px] flex items-center">
      <TypeAnimation
        sequence={[
          "Artificial Intelligence Engineer",
          2000,
          "Machine Learning Developer",
          2000,
          "Data Analyst",
          2000,
          "Python Developer",
          2000,
          "Full Stack Web Developer",
          2000,
          "Open Source Learner",
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent whitespace-nowrap"
      />
    </div>
  );
}