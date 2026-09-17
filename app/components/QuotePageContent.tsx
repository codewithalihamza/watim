"use client";

import { useState, type FormEvent } from "react";
import PageShell from "./PageShell";
import Reveal from "./Reveal";
import { useLang } from "../lib/i18n";
import { EMAIL } from "./Footer";

const WHATSAPP_NUMBER = "966554020279";

const inputClass =
  "w-full rounded-2xl border border-white/20 bg-white/5 px-5 py-3.5 text-ink placeholder:text-muted/60 outline-none transition-all duration-300 focus:border-accent focus:bg-white/10";

export default function QuotePageContent() {
  const { t } = useLang();
  const [form, setForm] = useState({
    org: "",
    name: "",
    email: "",
    phone: "",
    service: "",
    notes: "",
  });

  const set = (k: keyof typeof form) => (v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  // The site has no backend: submitting composes a structured WhatsApp
  // message to the business number, so the lead lands where the team works.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const q = t.quotePage;
    const lines = [
      q.waIntro,
      `${q.org}: ${form.org}`,
      `${q.name}: ${form.name}`,
      `${q.email}: ${form.email}`,
      `${q.phone}: ${form.phone}`,
      `${q.service}: ${form.service}`,
      form.notes ? `${q.notes}: ${form.notes}` : "",
    ].filter(Boolean);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const emailBody = encodeURIComponent(
    `${t.quotePage.waIntro}\n\n${t.quotePage.org}: \n${t.quotePage.name}: \n${t.quotePage.phone}: \n${t.quotePage.service}: \n`
  );

  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {t.nav.contact}
          </p>
          <h1 className="display text-4xl font-bold text-ink sm:text-6xl">
            {t.quotePage.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {t.quotePage.sub}
          </p>
        </Reveal>

        <Reveal delay={1}>
          <p className="mt-8 rounded-2xl border border-accent/30 bg-accent/10 px-5 py-4 text-sm leading-relaxed text-ink-soft">
            {t.quotePage.note}
          </p>
        </Reveal>

        <Reveal delay={2}>
          <form onSubmit={onSubmit} className="mt-8 space-y-5 pb-24">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink-soft">
                  {t.quotePage.org}
                </span>
                <input
                  type="text"
                  required
                  value={form.org}
                  onChange={(e) => set("org")(e.target.value)}
                  className={inputClass}
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink-soft">
                  {t.quotePage.name}
                </span>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => set("name")(e.target.value)}
                  className={inputClass}
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink-soft">
                  {t.quotePage.email}
                </span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => set("email")(e.target.value)}
                  className={inputClass}
                  dir="ltr"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink-soft">
                  {t.quotePage.phone}
                </span>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => set("phone")(e.target.value)}
                  className={inputClass}
                  dir="ltr"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-ink-soft">
                {t.quotePage.service}
              </span>
              <select
                required
                value={form.service}
                onChange={(e) => set("service")(e.target.value)}
                className={`${inputClass} appearance-none [&>option]:bg-field-dark`}
              >
                <option value="" disabled>
                  {t.quotePage.servicePlaceholder}
                </option>
                {t.services.items.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-ink-soft">
                {t.quotePage.notes}
              </span>
              <textarea
                rows={4}
                value={form.notes}
                onChange={(e) => set("notes")(e.target.value)}
                className={inputClass}
              />
            </label>

            <div className="pt-2">
              <button
                type="submit"
                className="btn-primary rounded-full px-10 py-4 font-semibold"
              >
                {t.quotePage.submit}
              </button>
              <p className="mt-4 text-sm text-muted">
                {t.quotePage.submitHint}{" "}
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                    t.quotePage.waIntro
                  )}&body=${emailBody}`}
                  className="text-accent hover:underline"
                >
                  {t.quotePage.emailInstead}
                </a>
              </p>
            </div>
          </form>
        </Reveal>
      </section>
    </PageShell>
  );
}
