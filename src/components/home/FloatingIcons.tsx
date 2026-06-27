"use client";

import { FaPython, FaGithub, FaDatabase, FaReact } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";

export default function FloatingIcons() {
  return (
    <>
      {/* Python */}
      <FaPython className="absolute top-20 left-10 text-yellow-400 text-5xl animate-bounce" />

      {/* Database */}
      <FaDatabase className="absolute top-24 right-8 text-cyan-400 text-5xl animate-pulse" />

      {/* React */}
      <FaReact className="absolute bottom-20 right-10 text-blue-400 text-5xl animate-spin" />

      {/* TensorFlow */}
      <SiTensorflow className="absolute bottom-40 right-24 text-orange-400 text-5xl animate-pulse" />

      {/* GitHub */}
     <FaGithub className="absolute bottom-40 left-10 text-white text-4xl animate-bounce" />
    </>
  );
}