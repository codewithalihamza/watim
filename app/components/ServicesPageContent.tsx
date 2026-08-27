"use client";

import Link from "next/link";
import PageShell from "./PageShell";
import Reveal from "./Reveal";
import Tilt from "./Tilt";
import { useLang } from "../lib/i18n";

export default function ServicesPageContent() {
  const { t } = useLang();

  return (
    <PageShell>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {t.services.eyebrow}
          </p>
          <h1 className="display text-4xl font-bold text-ink sm:text-6xl">
            {t.servicesPage.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {t.servicesPage.sub}
          </p>
        </Reveal>
      </section>

      {/* Service cards */}
      <section className="mx-auto max-w-7xl px-6 pb-8 lg:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => (
            <Reveal key={s.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <Tilt
                max={5}
                className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors hover:border-brand-teal/50"
              >
                <span className="display text-sm font-bold text-accent/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="display mt-2 text-xl font-bold text-white">
                  {s.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <Reveal className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {t.process.eyebrow}
          </p>
          <h2 className="display text-3xl font-bold text-ink sm:text-4xl">
            {t.process.title}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((s, i) => (
            <Reveal key={s.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-teal font-bold text-[#06222c]">
                  {i + 1}
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

        <Reveal delay={2} className="mt-14 text-center">
          <Link
            href="/contact"
            className="btn-primary inline-block rounded-full px-10 py-4 font-semibold"
          >
            {t.servicesPage.cta}
          </Link>
        </Reveal>
      </section>
    </PageShell>
  );
}
