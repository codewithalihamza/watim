"use client";

import { useState, type FormEvent } from "react";

import Reveal from "./Reveal";

import { useLang } from "../lib/i18n";

const inputClass =
  "w-full rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-4 text-ink placeholder:text-muted/60 outline-none transition-all duration-300 focus:border-accent focus:bg-white/[0.08]";

type QuotePageContentProps = {
  embedded?: boolean;
};

export default function QuotePageContent({
  embedded = false,
}: QuotePageContentProps) {
  const { t } = useLang();

  const emptyForm = {
    org: "",
    name: "",
    email: "",
    phone: "",
    service: "",
    notes: "",
    website: "", // honeypot — hidden from real users, only bots fill it
  };

  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const set = (k: keyof typeof form) => (v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  // Submissions POST to /api/quote, which emails the company mailbox over
  // SMTP — the visitor stays on the page and sees an inline status message.
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      setForm(emptyForm);
    } catch {
      setStatus("error");
    }
  };

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

            {/* Honeypot — visually hidden, ignored by the server if empty */}
            <label className="sr-only" aria-hidden="true">
              Website
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(e) => set("website")(e.target.value)}
              />
            </label>

            {/* Submit */}
            <div className="flex flex-col items-center pt-2 text-center">
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary rounded-full px-12 py-4 font-semibold transition-transform duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending"
                  ? t.quotePage.sending
                  : t.quotePage.submit}
              </button>

              <div aria-live="polite" className="mt-4 w-full max-w-xl">
                {status === "success" && (
                  <p className="rounded-2xl border border-brand-teal/40 bg-brand-teal/15 px-5 py-3 text-sm leading-relaxed text-ink">
                    {t.quotePage.successMsg}
                  </p>
                )}
                {status === "error" && (
                  <p className="rounded-2xl border border-red-400/40 bg-red-400/10 px-5 py-3 text-sm leading-relaxed text-ink">
                    {t.quotePage.errorMsg}
                  </p>
                )}
                {(status === "idle" || status === "sending") && (
                  <p className="text-sm text-muted">{t.quotePage.afterNote}</p>
                )}
              </div>
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
