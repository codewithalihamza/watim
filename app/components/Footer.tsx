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
      className="relative overflow-hidden bg-gradient-to-b from-[#2f9894] to-[#3197a3] pt-20"
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

        {/* Bottom bar with copyright, legal links, and social icons */}
        <div className="mt-16 flex flex-col gap-6 border-t border-white/25 py-8">
          {/* Row 1: Copyright + Legal Links + Social Icons */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-sm text-[#dff2f2]">
              © {new Date().getFullYear()} WATM. All rights reserved.
            </p>

            {/* Legal Links - centered on mobile, left on desktop */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-[#dff2f2] sm:gap-6">
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

            {/* Social Icons - smaller size */}
            <div className="flex items-center gap-2">
              {/* WhatsApp */}
              <a
                href="https://wa.me/966507499351?text=Hello"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#dff2f2] transition-all hover:bg-white/20 hover:text-white hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/watm/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#dff2f2] transition-all hover:bg-white/20 hover:text-white hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}