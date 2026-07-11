"use client";

export default function TypingIndicator() {
  return (
    <div className="flex justify-start">

      <div className="rounded-2xl bg-white/10 px-5 py-4">

        <div className="flex gap-2">

          <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400" />

          <span
            className="h-2 w-2 animate-bounce rounded-full bg-cyan-400"
            style={{
              animationDelay: ".15s",
            }}
          />

          <span
            className="h-2 w-2 animate-bounce rounded-full bg-cyan-400"
            style={{
              animationDelay: ".3s",
            }}
          />

        </div>

      </div>

    </div>
  );
}