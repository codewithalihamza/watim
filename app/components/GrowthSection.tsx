import Reveal from "./Reveal";
import CountUp from "./CountUp";
import ProgressBar from "./ProgressBar";
import Tilt from "./Tilt";

const stats = [
  { value: 12, suffix: "K", label: "Students" },
  { value: 70, suffix: "+", label: "Courses" },
  { value: 16, suffix: "", label: "Creators" },
];

export default function GrowthSection() {
  return (
    <section id="about" className="relative py-24">
      {/* subtle W watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center overflow-hidden opacity-[0.04]">
        <div className="mt-20 h-[600px] w-[900px] bg-[conic-gradient(from_180deg,transparent,#6fe3e3_30%,transparent_60%)] [clip-path:polygon(0_0,20%_0,50%_100%,80%_0,100%_0,65%_100%,35%_100%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        {/* Left text + stats */}
        <div>
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-bright">
              Start Learning Today
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Your Path to Professional Growth Starts Here!
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-lg leading-relaxed text-muted">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-12 flex gap-10 sm:gap-14">
              {stats.map((s) => (
                <div key={s.label}>
                  <CountUp
                    value={s.value}
                    suffix={s.suffix}
                    className="font-display text-4xl font-bold text-teal-bright sm:text-5xl"
                  />
                  <p className="mt-1 text-sm text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right: course card */}
        <Reveal delay={2} className="relative">
          <Tilt max={7} className="group rounded-3xl border border-white/10 bg-[#0f3b4a]/70 p-4 shadow-[0_0_60px_-15px_rgba(33,121,146,0.55)] backdrop-blur-md">
            {/* thumbnail */}
            <div className="relative h-52 overflow-hidden rounded-2xl bg-gradient-to-br from-teal/80 to-[#123f4b]">
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
                {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((t) => (
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
                  <h3 className="font-display text-xl font-bold text-white">
                    Build Digital Asset
                  </h3>
                  <p className="text-sm text-teal-bright">by purepearl studio</p>
                </div>
                <span className="flex items-center gap-1 text-sm text-white">
                  4.5
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
                <span className="rounded-full border border-amber-400/80 px-4 py-1.5 text-sm text-amber-300">
                  Intermediate
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal/40 text-xs font-semibold text-white ring-2 ring-[#0f3b4a]">
                  26+
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-2xl font-bold text-teal-bright">
                  $12
                  <span className="text-base font-normal text-muted">/month</span>
                </span>
                <button className="rounded-full bg-teal px-6 py-2.5 text-sm font-medium text-[#062029] transition-all hover:scale-105 hover:bg-cyan">
                  Enroll Now
                </button>
              </div>
            </div>
          </Tilt>

          {/* learning progress */}
          <Reveal delay={3} className="mt-8">
            <p className="mb-3 text-sm text-muted">Learning Progress</p>
            <div className="flex items-center gap-4">
              <CountUp
                value={55}
                suffix="%"
                className="font-display text-2xl font-bold text-white"
              />
              <ProgressBar value={55} className="flex-1" />
            </div>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
