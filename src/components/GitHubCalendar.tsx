"use client";

import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then((mod) => ({
      default: mod.GitHubCalendar,
    })),
  {
    ssr: false,
  }
);

export default function GithubContributions() {
  return (
    <section className="py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-12 text-white">
          GitHub Contributions
        </h2>

        <div className="rounded-3xl p-8 bg-white/5 border border-cyan-500/20 overflow-auto">

          <GitHubCalendar
            username="1234ashutosh1234"
          />

        </div>

      </div>
    </section>
  );
}