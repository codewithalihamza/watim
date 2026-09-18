"use client";

import Reveal from "./Reveal";
import { useLang } from "../lib/i18n";

export default function OneLiner() {
  const { t, lang } = useLang();

  const isArabic = lang === "ar";

  return (
   <section
  aria-labelledby="one-liner-heading"
  dir={isArabic ? "rtl" : "ltr"}
  className="relative overflow-hidden py-12 sm:py-16"
>
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <h2
            id="one-liner-heading"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-lg font-semibold leading-relaxed text-ink sm:text-xl"
          >
            {t.oneLiner.items.map((item) => (
              <span
                key={item}
                dir={isArabic ? "rtl" : "ltr"}
                className="inline-flex shrink-0 items-center gap-3 whitespace-nowrap"
              >
                <span
                  aria-hidden="true"
                  className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                />

                <span>{item}</span>
              </span>
            ))}
          </h2>
        </Reveal>

        <Reveal delay={1}>
          <p className="mt-4 text-lg text-muted">{t.oneLiner.tail}</p>
        </Reveal>
      </div>
    </section>
  );
}
