"use client";

import GitHubCalendar from "react-github-calendar";

export default function GithubContributions() {
  return (
    <section className="py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          GitHub Contributions
        </h2>

        <div className="rounded-3xl p-8 bg-white/5 border border-cyan-500/20 backdrop-blur-xl overflow-auto">

          <GitHubCalendar
            username="1234ashutosh1234"
            colorScheme="dark"
            blockSize={15}
            blockMargin={5}
            fontSize={14}
          />

        </div>

      </div>
    </section>
  );
}