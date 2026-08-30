"use client";

import Link from "next/link";
import CountUp from "./CountUp";
import PageShell from "./PageShell";
import Reveal from "./Reveal";
import { useLang } from "../lib/i18n";

export default function AboutPageContent() {
  const { t } = useLang();

  return (
    <PageShell>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {t.about.eyebrow}
          </p>
          <h1 className="display text-4xl font-bold text-ink sm:text-6xl">
            {t.about.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">{t.about.p1}</p>
          <p className="mt-4 text-lg leading-relaxed text-muted">{t.about.p2}</p>
        </Reveal>

        {/* Stats */}
        <Reveal delay={2}>
          <div className="mt-14 flex flex-wrap gap-10 sm:gap-14">
            {t.about.stats.map((s) => (
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
      </section>

      {/* Standards */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <Reveal className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {t.why.eyebrow}
          </p>
          <h2 className="display text-3xl font-bold text-ink sm:text-4xl">
            {t.why.title}
          </h2>
          <p className="mt-5 leading-relaxed text-muted">{t.why.intro}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.standards.map((s, i) => (
            <Reveal key={s.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-teal text-[#06222c]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-none stroke-current"
                    strokeWidth="3"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="display mt-4 text-lg font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2} className="mt-14 pb-20 text-center">
          <Link
            href="/contact"
            className="btn-primary inline-block rounded-full px-10 py-4 font-semibold"
          >
            {t.hero.cta1}
          </Link>
        </Reveal>
      </section>
    </PageShell>
  );
}
