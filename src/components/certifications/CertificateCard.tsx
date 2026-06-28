"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface CertificateCardProps {
  title: string;
  organization: string;
  image: string;
  description: string;
  link: string;
}

export default function CertificateCard({
  title,
  organization,
  image,
  description,
  link,
}: CertificateCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl shadow-xl"
    >
      <div className="relative h-52 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width:768px)100vw,(max-width:1200px)50vw,25vw"
        />
      </div>

      <div className="p-6">
        <p className="text-cyan-400 text-sm font-semibold">
          {organization}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-4 text-gray-400 leading-7">
          {description}
        </p>

        <a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white transition hover:scale-105"
>
          <ExternalLink size={18} />
          View Certificate
        </a>
      </div>
    </motion.div>
  );
}