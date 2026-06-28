"use client";

import ProjectHero from "@/components/projects/ProjectHero";
import Image from "next/image";

export default function BluestockProject() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-white">

      <ProjectHero
        title="Bluestock MF Capstone"
        subtitle="A comprehensive Mutual Fund Analytics Dashboard built using Python, Streamlit, SQLite and Plotly for NAV tracking, CAGR analysis, risk assessment and performance visualization."
        image="/images/projects/bluestock/dashboard.png"
        github="https://github.com/1234ashutosh1234/bluestock-mf-capstone"
        demo="#"
      />

      {/* Project Overview */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="mb-8 text-4xl font-bold">
          🚀 Project Overview
        </h2>

        <p className="text-lg leading-9 text-gray-300">
          Bluestock MF Capstone is a data analytics project developed to
          analyze mutual fund performance using historical NAV data.
          It provides interactive dashboards, performance comparison,
          CAGR calculations, risk analysis and investment insights
          through a clean and user-friendly interface.
        </p>

      </section>

      {/* Tech Stack */}

      <section className="mx-auto max-w-7xl px-6 pb-20">

        <h2 className="mb-8 text-4xl font-bold">
          🛠 Tech Stack
        </h2>

        <div className="flex flex-wrap gap-4">

          {[
            "Python",
            "Pandas",
            "NumPy",
            "SQLite",
            "Streamlit",
            "Plotly",
            "Matplotlib",
            "GitHub"
          ].map((tech) => (

            <span
              key={tech}
              className="rounded-full border border-cyan-500 bg-cyan-500/10 px-6 py-3"
            >
              {tech}
            </span>

          ))}

        </div>

      </section>

      {/* Features */}

      <section className="mx-auto max-w-7xl px-6 pb-20">

        <h2 className="mb-8 text-4xl font-bold">
          ⭐ Key Features
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          {[
            "Mutual Fund Performance Analysis",
            "NAV Tracking",
            "CAGR Calculation",
            "Risk Analytics",
            "Interactive Dashboard",
            "Performance Comparison",
            "SQLite Database",
            "Data Visualization"
          ].map((feature) => (

            <div
              key={feature}
              className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6"
            >
              ✅ {feature}
            </div>

          ))}

        </div>

      </section>

      {/* Dashboard */}

      <section className="mx-auto max-w-7xl px-6 pb-20">

        <h2 className="mb-8 text-4xl font-bold">
          📊 Dashboard Preview
        </h2>

        <p className="mb-8 text-lg text-gray-300">
          The dashboard provides a consolidated view of mutual fund
          performance, historical NAV trends, risk metrics and
          investment insights in a single interactive interface.
        </p>

        <div className="overflow-hidden rounded-3xl border border-cyan-500/20 shadow-2xl">

          <Image
            src="/images/projects/bluestock/dashboard.png"
            alt="Bluestock Dashboard"
            width={1600}
            height={900}
            className="w-full transition duration-700 hover:scale-105"
            priority
          />

        </div>

      </section>

      {/* Challenges */}

      <section className="mx-auto max-w-7xl px-6 pb-20">

        <h2 className="mb-8 text-4xl font-bold">
          💡 Challenges
        </h2>

        <ul className="space-y-4 text-lg text-gray-300">

          <li>• Collecting and cleaning historical NAV data.</li>

          <li>• Managing financial data efficiently using SQLite.</li>

          <li>• Designing interactive visualizations with Plotly.</li>

          <li>• Calculating CAGR and performance metrics accurately.</li>

        </ul>

      </section>

      {/* Results */}

      <section className="mx-auto max-w-7xl px-6 pb-24">

        <h2 className="mb-8 text-4xl font-bold">
          🎯 Results
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          {[
            "Interactive Dashboard",
            "Real-time Data Visualization",
            "Performance Comparison",
            "Risk Assessment",
            "Historical NAV Analysis",
            "Professional UI"
          ].map((result) => (

            <div
              key={result}
              className="rounded-2xl border border-green-500/20 bg-green-500/10 p-6"
            >
              ✅ {result}
            </div>

          ))}

        </div>

      </section>

    </main>
  );
}