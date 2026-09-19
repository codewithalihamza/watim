"use client";

import { useState, type FormEvent } from "react";

import Reveal from "./Reveal";

import { useLang } from "../lib/i18n";

import { EMAIL } from "./Footer";

const WHATSAPP_NUMBER = "966554020279";

const inputClass =
  "w-full rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-4 text-ink placeholder:text-muted/60 outline-none transition-all duration-300 focus:border-accent focus:bg-white/[0.08]";

type QuotePageContentProps = {
  embedded?: boolean;
};

export default function QuotePageContent({
  embedded = false,
}: QuotePageContentProps) {
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
      lines.join("\n"),
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const emailBody = encodeURIComponent(
    `${t.quotePage.waIntro}\n\n${t.quotePage.org}: \n${t.quotePage.name}: \n${t.quotePage.phone}: \n${t.quotePage.service}: \n`,
  );

  const content = (
    <section
      className={`relative mx-auto w-full max-w-6xl ${
        embedded ? "py-4" : "px-6 py-16 lg:px-10"
      }`}
    >
      {/* Decorative motion */}
      <div
        className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-brand-teal/10 blur-3xl"
        style={{
          animation: "float 8s ease-in-out infinite",
        }}
      />

      <div
        className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-brand-teal/5 blur-3xl"
        style={{
          animation: "float 10s ease-in-out infinite reverse",
        }}
      />

      {/* Form Header */}
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {t.nav.contact}
        </p>

        <h1 className="display text-4xl font-bold text-ink sm:text-5xl lg:text-6xl">
          {t.quotePage.title}
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {t.quotePage.sub}
        </p>
      </Reveal>

      {/* Note */}
      <Reveal delay={1} className="relative mx-auto mt-8 max-w-4xl">
        <p className="rounded-2xl border border-accent/20 bg-accent/[0.06] px-6 py-4 text-center text-sm leading-relaxed text-ink-soft">
          {t.quotePage.note}
        </p>
      </Reveal>

      {/* Form */}
      <Reveal delay={2} className="relative mx-auto mt-8 max-w-5xl">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 backdrop-blur-sm sm:p-8 lg:p-10">
          <form onSubmit={onSubmit} className="space-y-6">
            {/* Basic information */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
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

            {/* Service */}
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

            {/* Notes */}
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-ink-soft">
                {t.quotePage.notes}
              </span>

              <textarea
                rows={6}
                value={form.notes}
                onChange={(e) => set("notes")(e.target.value)}
                className={`${inputClass} resize-none`}
              />
            </label>

            {/* Submit */}
            <div className="flex flex-col items-center pt-2 text-center">
              <button
                type="submit"
                className="btn-primary rounded-full px-12 py-4 font-semibold transition-transform duration-300 hover:-translate-y-1"
              >
                {t.quotePage.submit}
              </button>

              <p className="mt-4 text-sm text-muted">
                {t.quotePage.submitHint}{" "}
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                    t.quotePage.waIntro,
                  )}&body=${emailBody}`}
                  className="text-accent transition-colors hover:underline"
                >
                  {t.quotePage.emailInstead}
                </a>
              </p>
            </div>
          </form>
        </div>
      </Reveal>
    </section>
  );

  if (embedded) {
    return content;
  }

  return content;
}
