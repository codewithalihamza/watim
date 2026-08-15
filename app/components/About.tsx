import CountUp from "./CountUp";
import Reveal from "./Reveal";

// Placeholder figures — replace with verified numbers before launch.
const stats = [
  { value: 40, suffix: "+", label: "Organizations served" },
  { value: 120, suffix: "+", label: "Campaigns delivered" },
  { value: 8, suffix: "M+", label: "Audiences reached" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        {/* Left text + stats */}
        <div>
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              About Watm
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              A Saudi partner built for ambition.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-lg leading-relaxed text-muted">
              Our name carries meaning — a <em>wasm</em> is a mark that
              endures, and that is what we set out to leave behind for every
              brand we serve. We are strategists, creatives, and engineers who
              understand the Saudi market and the standard the Kingdom now
              sets for itself.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p className="mt-4 max-w-lg leading-relaxed text-muted">
              We do not chase trends. We start with your objectives, study
              your audience, and build every campaign, platform, and product
              around the outcomes that matter — then we stay until the
              numbers move.
            </p>
          </Reveal>

          <Reveal delay={4}>
            <div className="mt-12 flex gap-10 sm:gap-14">
              {stats.map((s) => (
                <div key={s.label}>
                  <CountUp
                    value={s.value}
                    suffix={s.suffix}
                    className="display text-4xl font-bold text-accent sm:text-5xl"
                  />
                  <p className="mt-1 text-sm text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right: campaign snapshot card */}
        {/* <Reveal delay={2} className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 scale-95 rounded-3xl bg-[radial-gradient(circle,rgba(255,255,255,0.35),rgba(136,215,225,0.18)_45%,transparent_70%)] blur-3xl" />
          <Tilt max={7} className="group rounded-3xl border border-white/10 bg-[#113b49]/70 p-4 shadow-[0_0_60px_-15px_rgba(47,152,148,0.55)] backdrop-blur-md">
            <div className="relative h-52 overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a6472] to-[#1ca1ac]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,255,255,0.22),transparent_60%)]" />
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 3.5s linear infinite",
                }}
              />
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                {["Strategy", "Content", "Paid Media"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/15 px-3 py-1 text-xs text-white backdrop-blur-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="px-2 pb-2 pt-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="display text-xl font-bold text-white">
                    Integrated Brand Campaign
                  </h3>
                  <p className="text-sm text-accent">for a Riyadh retail brand</p>
                </div>
                <span className="flex items-center gap-1 text-sm text-white">
                  4.9
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-amber-400"
                    aria-hidden
                  >
                    <path d="M12 2l3 6.5 7 .6-5.3 4.6L18.2 21 12 17.3 5.8 21l1.5-7.3L2 9.1l7-.6z" />
                  </svg>
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full border border-amber-400/80 bg-amber-400/15 px-4 py-1.5 text-sm text-amber-300">
                  Performance
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-teal/40 text-xs font-semibold text-white ring-2 ring-[#113b49]">
                  6 wks
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-2xl font-bold text-accent">
                  3.8×
                  <span className="text-base font-normal text-muted">
                    {" "}
                    return on ad spend
                  </span>
                </span>
                <a
                  href="#work"
                  className="rounded-full bg-brand-teal px-6 py-2.5 text-sm font-medium text-[#0b2735] transition-all hover:scale-105 hover:bg-accent"
                >
                  See the work
                </a>
              </div>
            </div>
          </Tilt>

          <Reveal delay={3} className="mt-8">
            <p className="mb-3 text-sm text-muted">Campaign progress</p>
            <div className="flex items-center gap-4">
              <CountUp
                value={55}
                suffix="%"
                className="display text-2xl font-bold text-white"
              />
              <ProgressBar value={55} className="flex-1" />
            </div>
          </Reveal>
        </Reveal> */}
      </div>
    </section>
  );
}
