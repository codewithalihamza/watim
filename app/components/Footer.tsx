"use client";

import Image from "next/image";
import Reveal from "./Reveal";

const columns = [
  {
    title: "Browse",
    links: ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  },
  {
    title: "Categories",
    links: ["Development", "Marketing", "Photography", "Finance", "Sport"],
  },
  {
    title: "Platform",
    links: ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-[#1a6472] via-[#2f9894] to-[#3197a3] pt-20"
    >
      {/* faint W geometry */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="absolute -left-10 top-10 h-full w-[60%] bg-[#0b2735]/40 [clip-path:polygon(0_0,18%_0,50%_90%,82%_0,100%_0,50%_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: brand + newsletter */}
          <Reveal>
            <Image
              src="/assets/watm-logo-white.png"
              alt="WATM Marketing Solutions"
              width={901}
              height={342}
              unoptimized
              className="h-16 w-auto sm:h-20"
            />
            <p className="mt-6 max-w-sm text-[#dff2f2]">
              Stay up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form
              className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-white placeholder:text-white/70 outline-none transition-all focus:border-white focus:bg-white/20"
              />
              <button
                type="submit"
                className="rounded-full bg-[#0e3144] px-8 py-3.5 font-medium text-white transition-all hover:scale-105 hover:bg-[#0b2735]"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 max-w-md text-xs text-[#cfeaea]">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </Reveal>

          {/* Right: link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col, i) => (
              <Reveal key={col.title} delay={(i + 1) as 1 | 2 | 3}>
                <h4 className="mb-5 display font-semibold text-white">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-[#dff2f2] transition-colors hover:text-white hover:underline"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/25 py-8 sm:flex-row">
          <p className="text-sm text-[#dff2f2]">
            © {new Date().getFullYear()} WATM. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-[#dff2f2]">
            <a href="#" className="transition-colors hover:text-white hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white hover:underline">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-white hover:underline">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
