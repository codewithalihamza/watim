import Image from "next/image";
import Reveal from "./Reveal";
import Tilt from "./Tilt";

// Unsplash images are cropped to portrait at request time.
const IMG = "?auto=format&fit=crop&w=900&h=1200&q=85";

const works = [
  {
    src: "/portfolio/camel-embrace.jpg",
    alt: "A happy man in traditional wear embracing his camel in a desert setting",
    title: "Traditional Arabian Culture",
    tag: "Arabian Culture",
  },
  {
    src: "https://images.unsplash.com/photo-1648027753410-31ae2ed611a2" + IMG,
    alt: "Desert landscape lifestyle photography",
    title: "Desert Lifestyle Campaigns",
    tag: "Lifestyle",
  },
  {
    src: "/portfolio/bedouin-portrait.jpg",
    alt: "Woman wearing traditional Bedouin attire with coin jewelry in a desert landscape",
    title: "Women in Arabian Culture",
    tag: "Culture",
  },
  {
    src: "https://images.unsplash.com/photo-1578895101408-1a36b834405b" + IMG,
    alt: "Historic Arabian landmark architecture",
    title: "Landmark Architecture",
    tag: "Heritage",
  },
  {
    src: "/portfolio/uhud-market.jpg",
    alt: "Arab men in traditional clothing at a marketplace near Uhud Mountain",
    title: "Traditional Arabian Market",
    tag: "Creative",
  },
];

export default function Gallery() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Selected Work
          </p>
          <h2 className="display text-4xl font-bold text-ink sm:text-5xl">
            Our results speak on our behalf.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">
            A selection of work delivered for organizations across the public
            and private sectors — real projects with measurable impact.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
          {works.map((w, i) => (
            <Reveal
              key={w.title}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className="group"
            >
              <Tilt max={9} className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 shadow-lg group-hover:shadow-[0_20px_50px_-15px_rgba(47,152,148,0.6)]">
                <Image
                  src={w.src}
                  alt={w.alt}
                  fill
                  quality={95}
                  sizes="(max-width: 768px) 45vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2735] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-xs font-medium uppercase tracking-wider text-accent">
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
