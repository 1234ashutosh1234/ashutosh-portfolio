"use client";

import CountUp from "react-countup";

interface CounterProps {
  end: number;
  suffix?: string;
  title: string;
}

export default function Counter({
  end,
  suffix = "+",
  title,
}: CounterProps) {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 text-center backdrop-blur-xl transition duration-300 hover:scale-105 hover:border-cyan-400">
      <h2 className="text-5xl font-bold text-cyan-400">
        <CountUp end={end} duration={2.5} />
        {suffix}
      </h2>

      <p className="mt-4 text-lg text-gray-300">
        {title}
      </p>
    </div>
  );
}