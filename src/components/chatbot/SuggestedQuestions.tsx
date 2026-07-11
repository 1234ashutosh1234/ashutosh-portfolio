"use client";

interface Props {
  onSelect: (text: string) => void;
}

const questions = [
  "🚀 Tell me about N100",
  "📊 Explain Bluestock",
  "💻 What are your skills?",
  "📄 Show Resume",
  "🏆 View Certificates",
  "📧 Contact Information",
];

export default function SuggestedQuestions({
  onSelect,
}: Props) {
  return (
    <div className="space-y-3">

      <p className="text-xs uppercase tracking-widest text-gray-400">
        Suggested Questions
      </p>

      <div className="flex flex-wrap gap-3">

        {questions.map((question) => (

          <button
            key={question}
            onClick={() => onSelect(question)}
            className="rounded-full border border-cyan-500/30 bg-white/5 px-4 py-2 text-sm transition hover:bg-cyan-500/20"
          >
            {question}
          </button>

        ))}

      </div>

    </div>
  );
}