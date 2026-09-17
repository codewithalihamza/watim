"use client";

import PageShell from "./PageShell";
import Reveal from "./Reveal";
import { useLang } from "../lib/i18n";

export default function PrivacyPageContent() {
  const { t } = useLang();

  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <Reveal>
          <h1 className="display text-4xl font-bold text-ink sm:text-6xl">
            {t.privacyPage.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {t.privacyPage.sub}
          </p>
          <p className="mt-2 text-sm text-muted/70">{t.privacyPage.updated}</p>
        </Reveal>

        <div className="mt-12 space-y-10 pb-24">
          {t.privacyPage.sections.map((s, i) => (
            <Reveal key={s.h} delay={((i % 2) + 1) as 1 | 2}>
              <h2 className="display text-xl font-bold text-white sm:text-2xl">
                {s.h}
              </h2>
              <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
