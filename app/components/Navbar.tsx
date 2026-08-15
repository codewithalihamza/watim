"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
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

  // keep the page from scrolling behind the open mobile sheet
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open
        ? "border-b border-white/10 bg-field-dark/85 backdrop-blur-xl"
        : "border-b border-transparent bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-shell items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a
          href="#home"
          aria-label="WATM — home"
          className="transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/assets/icon.png"
            alt="WATM"
            width={324}
            height={342}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="group relative text-[0.95rem] font-medium text-ink/90 transition-colors duration-300 hover:text-accent"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`h-0.5 w-6 bg-ink transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""
              }`}
          />
          <span
            className={`h-0.5 w-6 bg-ink transition-all duration-300 ${open ? "opacity-0" : ""
              }`}
          />
          <span
            className={`h-0.5 w-6 bg-ink transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""
              }`}
          />
        </button>
      </nav>

      {/* mobile sheet */}
      <div
        className={`overflow-hidden bg-field-dark/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden ${open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col gap-1 px-6 pb-6 pt-2 sm:px-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3.5 text-base text-ink/90 transition-colors hover:bg-white/5 hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-3 rounded-full px-6 py-3.5 text-center font-semibold"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
