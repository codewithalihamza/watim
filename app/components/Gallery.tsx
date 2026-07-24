import Image from "next/image";
import Reveal from "./Reveal";
import Tilt from "./Tilt";

const works = [
  { src: "/portfolio/card1.png", title: "ValueFirst — Instant OTP", tag: "Branding" },
  { src: "/portfolio/card2.png", title: "SNBL Art Campaign", tag: "Social" },
  { src: "/portfolio/card3.png", title: "Meet Value First", tag: "Engagement" },
  { src: "/portfolio/card4.png", title: "Purity Tech — Welcome", tag: "Corporate" },
  { src: "/portfolio/card5.png", title: "SNBL — Culture", tag: "Creative" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-bright">
            Our Gallery
          </p>
          <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">
            Work That Speaks Louder
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
          {works.map((w, i) => (
            <Reveal
              key={w.title}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className="group"
            >
              <Tilt max={9} className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 shadow-lg group-hover:shadow-[0_20px_50px_-15px_rgba(33,121,146,0.6)]">
                <Image
                  src={w.src}
                  alt={w.title}
                  fill
                  quality={95}
                  sizes="(max-width: 768px) 45vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062029] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-xs font-medium uppercase tracking-wider text-teal-bright">
                    {w.tag}
                  </span>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {w.title}
                  </p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
