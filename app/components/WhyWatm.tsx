'use client';

import Reveal from "./Reveal";
import { useLang } from "../lib/i18n";

// Client logos - update with your actual image names
const clientLogos = [
  { id: 1, src: "/clients/images.png" },
  { id: 2, src: "/clients/mallah.webp" },
  { id: 3, src: "/clients/tikka.jpg" },
  { id: 4, src: "/clients/bawaai.png" },
  { id: 5, src: "/clients/nevox-logo.avif" },
  { id: 6, src: "/clients/wattam.png" },
  { id: 7, src: "/clients/a-logo.png" },
];

function Check() {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-teal text-[#33070a]">
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="3">
        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

// Logo Carousel - clean version with circular images
function LogoCarousel() {
  // Duplicate logos for seamless infinite scroll
  const allLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-[scroll_20s_linear_infinite] items-center gap-8 py-4 hover:[animation-play-state:paused] [width:max-content]">
        {allLogos.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-white/[0.03] transition-all hover:scale-110 hover:border-brand-teal/40"
          >
            <img
              src={logo.src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WhyWatm() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden py-24">
      {/* dim inset divider, matching the footer's Contact us rule */}
      <div className="mx-auto -mt-24 mb-24 max-w-7xl px-6 lg:px-10">
        <div className="border-t border-white/25" />
      </div>
      {/* Keyframes defined in global CSS or tailwind config */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 px-6 lg:grid-cols-2 lg:px-10">
        {/* Left: client logos carousel */}
        <div className="space-y-8 lg:self-center">
          <Reveal>
            <div className="max-w-lg">
              <LogoCarousel />
            </div>
          </Reveal>
        </div>

        {/* Right: copy */}
        <div>
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {t.why.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display text-4xl font-bold leading-tight text-white sm:text-5xl">
              {t.why.title}
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              {t.why.intro}
            </p>
          </Reveal>

          <ul className="mt-10 space-y-5">
            {t.why.standards.map((s, i) => (
              <Reveal as="li" key={s.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <span className="flex items-start gap-4">
                  <Check />
                  <span>
                    <span className="block text-lg font-semibold text-ink">
                      {s.title}
                    </span>
                    <span className="block text-sm leading-relaxed text-muted">
                      {s.body}
                    </span>
                  </span>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}