"use client";

import PageShell from "./PageShell";
import Reveal from "./Reveal";
import Tilt from "./Tilt";
import { useLang } from "../lib/i18n";
import {
  EMAIL,
  LINKEDIN_URL,
  LinkedInIcon,
  MailIcon,
  WhatsAppIcon,
} from "./Footer";

const PinIcon = (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
  </svg>
);

export default function ContactPageContent() {
  const { t } = useLang();

  const cards = [
    {
      label: t.contactPage.whatsappCard,
      value: "+966 55 402 0279",
      note: t.contactPage.whatsappNote,
      href: t.whatsappHref,
      icon: WhatsAppIcon,
      external: true,
      ltr: true,
    },
    {
      label: t.contactPage.emailCard,
      value: EMAIL,
      note: t.contactPage.emailNote,
      href: `mailto:${EMAIL}`,
      icon: MailIcon,
      external: false,
      ltr: true,
    },
    {
      label: t.contactPage.linkedinCard,
      value: "linkedin.com/company/watm",
      note: t.contactPage.linkedinNote,
      href: LINKEDIN_URL,
      icon: LinkedInIcon,
      external: true,
      ltr: true,
    },
    {
      label: t.contactPage.locationCard,
      value: t.contactPage.location,
      note: "",
      href: null,
      icon: PinIcon,
      external: false,
      ltr: false,
    },
  ];

  return (
    <PageShell>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {t.nav.contact}
          </p>
          <h1 className="display text-4xl font-bold text-ink sm:text-6xl">
            {t.contactPage.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {t.contactPage.sub}
          </p>
        </Reveal>
      </section>

      {/* Contact cards */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => {
            const inner = (
              <Tilt
                max={5}
                className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors hover:border-brand-teal/50"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal/20 text-accent">
                  {c.icon}
                </span>
                <h2 className="display mt-4 text-lg font-bold text-white">
                  {c.label}
                </h2>
                <p
                  className="mt-1 break-words text-sm font-medium text-accent"
                  {...(c.ltr ? { dir: "ltr" } : {})}
                >
                  {c.value}
                </p>
                {c.note && (
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {c.note}
                  </p>
                )}
              </Tilt>
            );
            return (
              <Reveal key={c.label} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                {c.href ? (
                  <a
                    href={c.href}
                    {...(c.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="block h-full"
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </Reveal>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
