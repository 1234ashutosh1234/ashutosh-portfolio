"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return true;

    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);

    localStorage.setItem(
      "theme",
      dark ? "dark" : "light"
    );
  }, [dark]);

  return (
    <button
      onClick={() => setDark((prev) => !prev)}
      className="fixed right-8 top-24 z-50 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 p-3 shadow-xl"
    >
      {dark ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
}