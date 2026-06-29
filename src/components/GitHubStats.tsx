export default function GitHubStats() {
  return (
    <section className="py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-5xl font-bold mb-12">
          GitHub Statistics
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <img
            src="https://github-readme-stats.vercel.app/api?username=1234ashutosh1234&show_icons=true&theme=tokyonight"
            alt="GitHub Stats"
          />

          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=1234ashutosh1234&theme=tokyonight"
            alt="GitHub Streak"
          />

        </div>

      </div>
    </section>
  );
}