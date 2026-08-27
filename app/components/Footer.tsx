"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { useLang } from "../lib/i18n";

export const LinkedInIcon = (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

export const WhatsAppIcon = (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export const MailIcon = (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

export const LINKEDIN_URL = "https://www.linkedin.com/company/watm/";
export const EMAIL = "hello@watm.com.sa";

export default function Footer() {
  const { t } = useLang();

  const quickLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.contact, href: "/contact" },
  ];

  const socials = [
    { label: "LinkedIn", href: LINKEDIN_URL, icon: LinkedInIcon },
    { label: "WhatsApp", href: t.whatsappHref, icon: WhatsAppIcon },
    { label: "Email", href: `mailto:${EMAIL}`, icon: MailIcon },
  ];

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-[#2f9894] to-[#3197a3] pt-20"
    >
      {/* faint W geometry */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="absolute -left-10 top-10 h-full w-[60%] bg-[#0b2735]/40 [clip-path:polygon(0_0,18%_0,50%_90%,82%_0,100%_0,50%_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Final call to action */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="display text-4xl font-bold text-white sm:text-5xl">
            {t.footer.ctaTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-[#dff2f2]">
            {t.footer.ctaBody}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-full bg-[#0e3144] px-8 py-3.5 font-medium text-white transition-all hover:scale-105 hover:bg-[#0b2735]"
            >
              {t.footer.consult}
            </a>
            <a
              href={t.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/50 px-8 py-3.5 font-medium text-white transition-colors hover:border-white hover:bg-white/10"
            >
              {t.footer.whatsapp}
            </a>
          </div>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left: brand + tagline */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex flex-col items-center lg:items-start">
                <Image
                  src="/brand/footer2.png"
                  alt="Watm Marketing Solutions"
                  width={1001}
                  height={342}
                  className="h-36 w-50"
                />
                <p className="mt-4 text-center text-[#dff2f2] lg:text-start">
                  {t.footer.tagline}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: link columns */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <Reveal delay={1}>
                <h4 className="mb-5 display font-semibold text-white">
                  {t.footer.explore}
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-[#dff2f2] transition-colors hover:text-white hover:underline"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={2}>
                <h4 className="mb-5 display font-semibold text-white">
                  {t.footer.servicesCol}
                </h4>
                <ul className="space-y-3">
                  {t.footer.serviceLinks.map((l) => (
                    <li key={l}>
                      <Link
                        href="/services"
                        className="text-[#dff2f2] transition-colors hover:text-white hover:underline"
                      >
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={3}>
                <h4 className="mb-5 display font-semibold text-white">
                  {t.footer.follow}
                </h4>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      {...(s.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      aria-label={s.label}
                      title={s.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 text-[#dff2f2] transition-all hover:scale-110 hover:border-white hover:bg-white/20 hover:text-white"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Contact us */}
        <div className="mt-16 border-t border-white/25 py-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-center sm:text-start">
              <h4 className="display font-semibold text-white">
                {t.footer.contactUs}
              </h4>
              <p className="mt-2 flex items-center justify-center gap-2 text-sm text-[#dff2f2] sm:justify-start">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                </svg>
                {t.footer.location}
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-2 flex items-center justify-center gap-2 text-sm text-[#dff2f2] transition-colors hover:text-white hover:underline sm:justify-start"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                {EMAIL}
              </a>
            </div>
            <div className="flex flex-col items-center gap-4 sm:items-end">
              <div className="flex gap-8 text-sm text-[#dff2f2]">
                <a href="#" className="transition-colors hover:text-white hover:underline">
                  {t.footer.privacy}
                </a>
                <a href="#" className="transition-colors hover:text-white hover:underline">
                  {t.footer.terms}
                </a>
              </div>
              <p className="text-sm text-[#dff2f2]">{t.footer.rights}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
