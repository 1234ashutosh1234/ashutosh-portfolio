"use client";

interface Props {
  onSelect: (project: "n100" | "bluestock") => void;
}

export default function ProjectSelector({
  onSelect,
}: Props) {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-[#111827] p-5">

      <h2 className="mb-4 text-lg font-bold text-white">
        🚀 Featured Projects
      </h2>

      <div className="space-y-3">

        <button
          onClick={() => onSelect("n100")}
          className="w-full rounded-xl border border-cyan-500/20 bg-white/5 p-4 text-left transition hover:bg-cyan-500/10"
        >
          <h3 className="font-semibold text-white">
            N100 Financial Intelligence
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            AI powered financial analytics platform.
          </p>
        </button>

        <button
          onClick={() => onSelect("bluestock")}
          className="w-full rounded-xl border border-cyan-500/20 bg-white/5 p-4 text-left transition hover:bg-cyan-500/10"
        >
          <h3 className="font-semibold text-white">
            Bluestock MF Capstone
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Mutual Fund Analytics Dashboard.
          </p>
        </button>

      </div>

    </div>
  );
}