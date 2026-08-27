"use client";

import Reveal from "./Reveal";
import Tilt from "./Tilt";
import { useLang } from "../lib/i18n";

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {t.services.eyebrow}
          </p>
          <h2 className="display text-4xl font-bold text-ink sm:text-5xl">
            {t.services.title}
          </h2>
          <p className="mt-5 leading-relaxed text-muted">{t.services.intro}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => (
            <Reveal key={s.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <Tilt
                max={5}
                className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors hover:border-brand-teal/50"
              >
                <h3 className="display text-xl font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
