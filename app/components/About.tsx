"use client";

import CountUp from "./CountUp";
import Reveal from "./Reveal";
import { useLang } from "../lib/i18n";

// Stat figures are placeholders — replace with verified numbers before launch.

export default function About() {
  const { t, lang } = useLang();

  const isArabic = lang === "ar";

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative py-12 sm:py-20 lg:py-24"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl text-center max-sm:text-start">
          <Reveal>
            <p className="mb-3 text-xs font-semibold tracking-[0.12em] text-accent sm:text-sm sm:tracking-[0.18em]">
              {t.about.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={1}>
            <h2
              id="about-heading"
              className="display max-w-4xl text-3xl font-bold leading-[1.25] text-ink sm:mx-auto sm:text-4xl sm:leading-[1.2] lg:text-5xl"
            >
              {t.about.title}
            </h2>
          </Reveal>

          <Reveal delay={2}>
            <p className="mx-auto mt-5 max-w-5xl text-sm leading-7 text-muted sm:mt-7 sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
              {t.about.p1}
            </p>
          </Reveal>

          <Reveal delay={3}>
            <p className="mx-auto mt-4 max-w-5xl text-sm leading-7 text-muted sm:mt-5 sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
              {t.about.p2}
            </p>
          </Reveal>

          <Reveal delay={4}>
            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 items-start gap-2 sm:mt-14 sm:gap-8 lg:mt-16 lg:gap-16">
              {t.about.stats.map((stat) => (
                <div key={stat.label} className="min-w-0 text-center">
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    className="display block whitespace-nowrap text-2xl font-bold leading-none text-accent sm:text-4xl lg:text-5xl"
                  />

                  <p className="mt-2 text-[10px] leading-4 text-muted sm:mt-3 sm:text-sm sm:leading-6 lg:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right: campaign snapshot card */}
        {/* الكود المعلّق الأصلي الموجود عندك يبقى كما هو بدون تعديل */}
      </div>
    </section>
  );
}
