import Image from "next/image";
import Reveal from "./Reveal";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Social Media",
  "Paid Media",
  "Content & Copy",
  "Websites & Apps",
  "SEO & Growth",
];

// Social media links with URLs
const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/watm/" },
  { label: "WhatsApp", href: "https://wa.me/966507499351?text=Hello" },
];

export default function Footer() {
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
            Let us build something worth remembering.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-[#dff2f2]">
            Tell us where you intend to be, and we will show you the path —
            and whether Watm is the right partner for the journey. The first
            conversation is always without obligation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="rounded-full bg-[#0e3144] px-8 py-3.5 font-medium text-white transition-all hover:scale-105 hover:bg-[#0b2735]"
            >
              Request a consultation
            </a>
            <a
              href="https://wa.me/966507499351?text=Hello"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/50 px-8 py-3.5 font-medium text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Reach us on WhatsApp
            </a>
          </div>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: brand + tagline */}
          <Reveal>
            <div className="flex flex-col items-center lg:items-start">
              <Image
                src="/brand/footer2.png"
                alt="Watm Marketing Solutions"
                width={1001}
                height={342}
                className="h-36 w-50"
              />
              <p className="mt-4 text-[#dff2f2] text-center lg:text-left">
                Watm — a mark that endures.
              </p>
            </div>
          </Reveal>

          {/* Right: link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <Reveal delay={1}>
              <h4 className="mb-5 display font-semibold text-white">Explore</h4>
              <ul className="space-y-3">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[#dff2f2] transition-colors hover:text-white hover:underline"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={2}>
              <h4 className="mb-5 display font-semibold text-white">Services</h4>
              <ul className="space-y-3">
                {serviceLinks.map((l) => (
                  <li key={l}>
                    <a
                      href="#services"
                      className="text-[#dff2f2] transition-colors hover:text-white hover:underline"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={3}>
              <h4 className="mb-5 display font-semibold text-white">Follow</h4>
              <ul className="space-y-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#dff2f2] transition-colors hover:text-white hover:underline"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/25 py-8 sm:flex-row">
          <p className="text-sm text-[#dff2f2]">
            © 2026 Watm. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-[#dff2f2]">
            <a href="#" className="transition-colors hover:text-white hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}