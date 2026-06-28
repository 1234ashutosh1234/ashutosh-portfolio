"use client";

import ProjectHero from "@/components/projects/ProjectHero";
import Image from "next/image";

export default function N100Project() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-white">

      <ProjectHero
        title="N100 Financial Intelligence Platform"
        subtitle="An AI-powered financial intelligence platform for analyzing Nifty 100 companies with interactive dashboards, financial ratios, sector insights, stock analysis and data visualization."
        image="/images/projects/n100/dashboard.png"
        github="https://github.com/1234ashutosh1234/N100-Financial-Intelligence-Platform"
        demo="https://n100-financial-intelligence-platform-hhchh7t8mwhbhdwwj4bj2p.streamlit.app/"
      />

      <section className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="mb-8 text-4xl font-bold">
          🚀 Project Overview
        </h2>

        <p className="text-lg leading-9 text-gray-300">
          The N100 Financial Intelligence Platform is a complete stock
          market analytics application that helps users analyze Nifty 100
          companies using financial ratios, company fundamentals,
          AI-powered recommendations and interactive dashboards.
        </p>

      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">

        <h2 className="mb-8 text-4xl font-bold">
          🛠 Tech Stack
        </h2>

        <div className="flex flex-wrap gap-4">

          {[
            "Python",
            "Streamlit",
            "SQLite",
            "Pandas",
            "Plotly",
            "NumPy",
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

      <section className="mx-auto max-w-7xl px-6 pb-20">

        <h2 className="mb-8 text-4xl font-bold">
          ⭐ Key Features
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          {[
            "Nifty 100 Company Analysis",
            "Financial Ratios",
            "ROE Analysis",
            "Sector Analytics",
            "Health Score",
            "Investment Recommendation",
            "Interactive Charts",
            "SQLite Database"
          ].map((item) => (

            <div
              key={item}
              className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6"
            >
              ✅ {item}
            </div>

          ))}

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">

        <h2 className="mb-10 text-4xl font-bold">
          📷 Project Gallery
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

          <Image
            src="/images/projects/n100/dashboard.png"
            alt="Dashboard"
            width={900}
            height={600}
            className="rounded-2xl"
          />

          <Image
            src="/images/projects/n100/company-analysis.png"
            alt="Company Analysis"
            width={900}
            height={600}
            className="rounded-2xl"
          />

          <Image
            src="/images/projects/n100/roe-chart.png"
            alt="ROE Trend"
            width={900}
            height={600}
            className="rounded-2xl"
          />

          <Image
            src="/images/projects/n100/recommendation.png"
            alt="Recommendation"
            width={900}
            height={600}
            className="rounded-2xl"
          />

          <Image
            src="/images/projects/n100/health-score.png"
            alt="Health Score"
            width={900}
            height={600}
            className="rounded-2xl"
          />

          <Image
            src="/images/projects/n100/summary.png"
            alt="Summary"
            width={900}
            height={600}
            className="rounded-2xl"
          />

        </div>

      </section>

    </main>
  );
}