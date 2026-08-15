import Reveal from "./Reveal";

const disciplines = [
  "Strategy",
  "Content",
  "Media",
  "Websites",
  "Applications",
  "Growth",
];

export default function OneLiner() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-lg font-semibold text-ink sm:text-xl">
            {disciplines.map((d, i) => (
              <span key={d} className="flex items-center gap-4">
                {i > 0 && (
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/70" aria-hidden />
                )}
                {d}
              </span>
            ))}
          </p>
        </Reveal>
        <Reveal delay={1}>
          <p className="mt-4 text-lg text-muted">
            One partner, one vision, one measurable standard.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
