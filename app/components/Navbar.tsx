"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-[#0a2536]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="transition-transform hover:scale-105">
          <Logo />
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="group relative text-[15px] font-medium text-ink/90 transition-colors hover:text-cyan"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-cyan transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-white/40 px-7 py-2.5 text-[15px] font-medium text-ink transition-all duration-300 hover:border-cyan hover:bg-cyan hover:text-[#06212e] hover:shadow-[0_0_24px_-4px] hover:shadow-cyan"
          >
            Login
          </a>
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-ink transition-all duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-ink transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-ink transition-all duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/5 bg-[#0a2536]/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-ink/90 transition-colors hover:bg-white/5 hover:text-cyan"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full border border-white/40 px-4 py-3 text-center text-ink transition-colors hover:bg-cyan hover:text-[#06212e]"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
}
