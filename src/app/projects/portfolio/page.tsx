"use client";

import ProjectHero from "@/components/projects/ProjectHero";

export default function PortfolioProject() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-white">

      <ProjectHero
        title="Personal Portfolio Website"
        subtitle="A premium developer portfolio built using Next.js, React, TypeScript, Tailwind CSS and Framer Motion. Designed with a modern UI, responsive layout, smooth animations and deployed on Vercel using a custom domain."
        image="/images/projects/portfolio/hero.png"
        github="https://github.com/1234ashutosh1234/ashutosh-portfolio"
        demo="https://ashutoshvats.in"
      />

      <section className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="mb-8 text-4xl font-bold">
          🚀 Project Overview
        </h2>

        <p className="text-lg leading-9 text-gray-300">
          This portfolio showcases my skills, projects, certifications,
          education and achievements in one modern responsive website.

          It was built from scratch using Next.js App Router,
          TypeScript, Tailwind CSS and Framer Motion.

          The website is fully responsive, SEO-friendly,
          optimized for performance and deployed on Vercel with
          a custom domain.
        </p>

      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">

        <h2 className="mb-8 text-4xl font-bold">
          🛠 Tech Stack
        </h2>

        <div className="flex flex-wrap gap-4">

          {[
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Vercel",
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

        <h2 className="mb-10 text-4xl font-bold">
          ✨ Key Features
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          {[
            "Responsive Design",
            "Dark / Light Theme",
            "Animated Hero Section",
            "Interactive Project Cards",
            "Resume Download",
            "Contact Form",
            "GitHub Integration",
            "Custom Domain Deployment"
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

      <section className="mx-auto max-w-7xl px-6 pb-20">

        <h2 className="mb-10 text-4xl font-bold">
          📷 Screenshots
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

  <img
    src="/images/projects/portfolio/hero.png"
    className="rounded-2xl border border-cyan-500/20"
    alt="Hero"
  />

  <img
    src="/images/projects/portfolio/projects.png"
    className="rounded-2xl border border-cyan-500/20"
    alt="Projects"
  />

  <img
    src="/images/projects/portfolio/contact.png"
    className="rounded-2xl border border-cyan-500/20"
    alt="Contact"
  />

</div>

      </section>

    </main>
  );
}