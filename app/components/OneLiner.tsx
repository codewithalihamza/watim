"use client";

import Reveal from "./Reveal";
import { useLang } from "../lib/i18n";

export default function OneLiner() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-lg font-semibold text-ink sm:text-xl">
            {t.oneLiner.items.map((d, i) => (
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
          <p className="mt-4 text-lg text-muted">{t.oneLiner.tail}</p>
        </Reveal>
      </div>
    </section>
  );
}
