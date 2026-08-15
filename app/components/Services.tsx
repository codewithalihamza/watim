import Reveal from "./Reveal";
import Tilt from "./Tilt";

const services = [
  {
    title: "Social Media Management",
    body: "We run your channels with the discipline of a newsroom and the care of a brand steward — content crafted for each platform, and a presence that stays consistent and credible.",
  },
  {
    title: "Paid Media",
    body: "Precise, accountable media across Google, Meta, TikTok, and beyond. We invest where performance is proven and account for every riyal with full transparency.",
  },
  {
    title: "Content & Copywriting",
    body: "Words that carry your message with clarity and conviction, in Arabic and English alike — from campaigns and scripts to landing pages that move audiences to act.",
  },
  {
    title: "Website Development",
    body: "Fast, secure, refined websites engineered to perform. Corporate platforms, e-commerce, and campaign pages — mobile-first and optimized for search.",
  },
  {
    title: "Application Development",
    body: "Mobile applications for iOS and Android, designed around the people who will use them. From concept through launch, we own every detail in between.",
  },
  {
    title: "SEO & Digital Growth",
    body: "Sustainable visibility on search, earned through sound technical foundations and genuinely useful content. The right audiences find you — and keep finding you.",
  },
  {
    title: "Brand & Identity",
    body: "Considered brand identities and complete visual systems that signal leadership and earn confidence at first impression.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Our Services
          </p>
          <h2 className="display text-4xl font-bold text-ink sm:text-5xl">
            Integrated capabilities, one standard.
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            Engage us for a single discipline, or entrust us with the full
            journey. Every service is designed to work in concert with the
            rest.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <Tilt
                max={5}
                className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors hover:border-brand-teal/50"
              >
                <h3 className="display text-xl font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
