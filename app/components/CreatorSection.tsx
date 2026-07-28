import Reveal from "./Reveal";
import CountUp from "./CountUp";
import ProgressBar from "./ProgressBar";
import Tilt from "./Tilt";

const benefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

function Check() {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-teal/25 text-teal-bright">
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="3">
        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function CreatorSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 py-24">
      {/* big faint V/W geometry */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="absolute left-1/2 top-0 h-full w-[70%] -translate-x-1/2 bg-[linear-gradient(180deg,#88d7e1,transparent)] [clip-path:polygon(0_0,15%_0,50%_100%,85%_0,100%_0,50%_60%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        {/* Left: revenue cards */}
        <div className="space-y-8">
          <Reveal>
            <div className="max-w-sm">
              <p className="text-muted">Total Revenue</p>
              <p className="text-xs text-muted/70">July 1–28</p>
              <div className="mt-2 flex items-center gap-3">
                <CountUp
                  value={120.29}
                  decimals={2}
                  prefix="$"
                  className="font-display text-3xl font-bold text-white"
                />
                <span className="rounded-full bg-brand-teal/20 px-3 py-1 text-xs font-medium text-teal-bright">
                  +12$
                </span>
              </div>
              <ProgressBar value={62} className="mt-3" />
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="max-w-sm">
              <p className="text-muted">Year to Date</p>
              <p className="text-xs text-muted/70">2023</p>
              <div className="mt-2 flex items-center gap-3">
                <CountUp
                  value={1200.38}
                  decimals={2}
                  prefix="$"
                  className="font-display text-3xl font-bold text-white"
                />
              </div>
              <span className="mt-3 inline-block rounded-full bg-brand-teal/20 px-3 py-1 text-xs font-medium text-teal-bright">
                +12$
              </span>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <Tilt max={6} className="max-w-sm rounded-3xl border border-brand-teal/40 bg-white/[0.03] p-6 backdrop-blur-sm">
              <p className="text-lg text-white">Happy Students</p>
              <p className="mt-1 flex items-center gap-1 text-sm text-muted">
                4.5 (240)
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-amber-400" aria-hidden>
                  <path d="M12 2l3 6.5 7 .6-5.3 4.6L18.2 21 12 17.3 5.8 21l1.5-7.3L2 9.1l7-.6z" />
                </svg>
              </p>
              <div className="mt-6 flex justify-end">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal text-sm font-bold text-[#0b2735]">
                  2K+
                </span>
              </div>
            </Tilt>
          </Reveal>
        </div>

        {/* Right: copy */}
        <div>
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-bright">
              Be a Creator
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              Create &amp; Manage Courses Easily.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              <span className="font-semibold text-white">WATM</span> supports
              individuals or entities in the creation, and administration of
              educational courses.
            </p>
          </Reveal>

          <ul className="mt-10 space-y-5">
            {benefits.map((b, i) => (
              <Reveal as="li" key={b} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <span className="flex items-center gap-4 text-lg text-ink">
                  <Check />
                  {b}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
