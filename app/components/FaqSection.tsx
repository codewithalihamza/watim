"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { useLang } from "../lib/i18n";

type FaqItem = { q: string; a: string };

/*
  Reusable FAQ accordion. Each page passes its own items from the
  dictionary (t.faq.home / services / work / contact), so the questions
  stay page-specific while the look and behavior stay consistent.

  The open/close animation uses the CSS grid-rows trick (0fr -> 1fr),
  which animates height smoothly without measuring. Emits schema.org
  FAQPage JSON-LD in the current language for SEO rich results.
*/
export default function FaqSection({ items }: { items: readonly FaqItem[] }) {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className="mx-auto max-w-4xl px-6 py-16 lg:px-10"
    >
      <Reveal className="mb-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {t.faq.eyebrow}
        </p>
        <h2 id="faq-heading" className="display text-3xl font-bold text-ink sm:text-4xl">
          {t.faq.title}
        </h2>
      </Reveal>

      <Reveal delay={1}>
        <div className="space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={it.q}
                className={`overflow-hidden rounded-2xl border backdrop-blur-sm transition-colors duration-300 ${
                  isOpen
                    ? "border-brand-teal/50 bg-white/[0.06]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/25"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-button-${i}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent sm:px-6 sm:py-5"
                >
                  <span className="font-semibold leading-snug text-ink sm:text-lg">
                    {it.q}
                  </span>
                  <span
                    aria-hidden
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 border-brand-teal/60 bg-brand-teal/20 text-accent"
                        : "border-white/20 text-muted"
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2.5">
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  className="grid transition-[grid-template-rows] duration-400 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p
                      className={`px-5 pb-5 leading-relaxed text-muted transition-opacity duration-300 sm:px-6 ${
                        isOpen ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {it.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>

      {/* FAQPage structured data for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
