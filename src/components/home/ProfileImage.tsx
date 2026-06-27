"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileImage() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-3xl opacity-30"></div>

      {/* Profile Image */}
      <div className="relative h-[340px] w-[340px] overflow-hidden rounded-full border-[5px] border-cyan-400 shadow-[0_0_90px_rgba(59,130,246,0.65)] md:h-[420px] md:w-[420px]">
        <Image
          src="/images/profile.png"
          alt="Ashutosh Raj"
          fill
          priority
          className="object-cover"
          sizes="(max-width:768px) 340px, 420px"
        />
      </div>
    </motion.div>
  );
}