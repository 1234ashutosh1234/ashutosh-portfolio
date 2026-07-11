"use client";

interface Props {
  onSelect: (text: string) => void;
}

const actions = [
  "🚀 Projects",
  "💻 Skills",
  "📄 Resume",
  "🏆 Certificates",
  "📈 N100",
  "📊 Bluestock",
  "📧 Contact",
];

export default function QuickActions({
  onSelect,
}: Props) {
  return (
    <div className="flex flex-wrap gap-2">

      {actions.map((item) => (

        <button
          key={item}
          onClick={() => onSelect(item)}
          className="rounded-full border border-cyan-500/30 bg-white/5 px-4 py-2 text-sm hover:bg-cyan-500/20 transition"
        >
          {item}
        </button>

      ))}

    </div>
  );
}