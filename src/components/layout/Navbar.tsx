"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const onScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop - 120;
        const height = (section as HTMLElement).offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          current = section.getAttribute("id") || "home";
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0F172A]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <a
          href="#home"
          className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-3xl font-bold text-transparent"
        >
          Ashutosh Raj
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition duration-300 hover:text-cyan-400 ${
                active === link.href.substring(1)
                  ? "text-cyan-400"
                  : "text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="/resume/Ashutosh_Raj_Resume.pdf"
          target="_blank"
          className="hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 lg:block"
        >
          Resume
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0F172A] lg:hidden">
          <div className="flex flex-col px-6 py-6">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-4 transition ${
                  active === link.href.substring(1)
                    ? "text-cyan-400"
                    : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}

            <a
              href="/resume/Ashutosh_Raj_Resume.pdf"
              className="mt-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 text-center font-semibold text-white"
            >
              Resume
            </a>

          </div>
        </div>
      )}
    </header>
  );
}