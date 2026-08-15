'use client';

import CountUp from "./CountUp";
import ProgressBar from "./ProgressBar";
import Reveal from "./Reveal";
import Tilt from "./Tilt";

const standards = [
  {
    title: "Responsiveness",
    body: "A clear point of contact and a timely reply, always.",
  },
  {
    title: "Transparency",
    body: "Plain reporting: what we did, what it cost, what it delivered.",
  },
  {
    title: "Measured growth",
    body: "We test before we scale, so your budget goes to what is proven.",
  },
  {
    title: "Outcomes above all",
    body: "Pretty campaigns are nice. Profitable campaigns are better.",
  },
  {
    title: "One integrated team",
    body: "Strategist, designer, engineer, media specialist — nothing is lost between disciplines.",
  },
];

// Client logos - update with your actual image names
const clientLogos = [
  { id: 1, src: "/clients/images.png" },
  { id: 2, src: "/clients/mallah.webp" },
  { id: 3, src: "/clients/images (1).png" },
  { id: 4, src: "/clients/tikka.jpg" },
  { id: 5, src: "/clients/bawaai.png" },
  { id: 6, src: "/clients/nevox-logo.avif" },
  { id: 7, src: "/clients/images (2).png" },
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
  return (
    <section className="relative overflow-hidden border-t-2 border-white py-24">
      {/* Keyframes defined in global CSS or tailwind config */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 px-6 lg:grid-cols-2 lg:px-10">
        {/* Left: reporting cards — the transparency we promise, shown */}
        <div className="space-y-8">
          <Reveal>
            <div className="max-w-sm">
              <p className="text-muted">Campaign Revenue</p>
              <p className="text-xs text-muted/70">July 1–28</p>
              <div className="mt-2 flex items-center gap-3">
                <CountUp
                  value={120.29}
                  decimals={2}
                  prefix="$"
                  className="display text-3xl font-bold text-white"
                />
                <span className="rounded-full bg-brand-teal/20 px-3 py-1 text-xs font-medium text-accent">
                  +12%
                </span>
              </div>
              <ProgressBar value={62} className="mt-3" />
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="max-w-sm">
              <p className="text-muted">Year to Date</p>
              <p className="text-xs text-muted/70">2026</p>
              <div className="mt-2 flex items-center gap-3">
                <CountUp
                  value={1200.38}
                  decimals={2}
                  prefix="$"
                  className="display text-3xl font-bold text-white"
                />
              </div>
              <span className="mt-3 inline-block rounded-full bg-brand-teal/20 px-3 py-1 text-xs font-medium text-accent">
                +12%
              </span>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <Tilt max={6} className="max-w-sm rounded-3xl border border-brand-teal/40 bg-white/[0.03] p-6 backdrop-blur-sm">
              <p className="text-lg text-white">Happy Partners</p>
              <p className="mt-1 flex items-center gap-1 text-sm text-muted">
                4.9 (86)
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-amber-400" aria-hidden>
                  <path d="M12 2l3 6.5 7 .6-5.3 4.6L18.2 21 12 17.3 5.8 21l1.5-7.3L2 9.1l7-.6z" />
                </svg>
              </p>
              <div className="mt-6 flex justify-end">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal text-sm font-bold text-white">
                  40+
                </span>
              </div>
            </Tilt>
          </Reveal>

          {/* Client Logos Carousel - clean circular images */}
          <Reveal delay={3}>
            <div className="max-w-lg">
              <LogoCarousel />
            </div>
          </Reveal>
        </div>

        {/* Right: copy */}
        <div>
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Why Watm
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display text-4xl font-bold leading-tight text-white sm:text-5xl">
              The standards our partners rely on.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              We treat your budget like our own money — and hold ourselves to
              standards you can measure.
            </p>
          </Reveal>

          <ul className="mt-10 space-y-5">
            {standards.map((s, i) => (
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