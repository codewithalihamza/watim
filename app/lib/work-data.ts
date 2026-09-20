/*
  Data for the /our-work page. To add work, append an entry here — the page
  renders whatever is in these arrays, no UI changes needed.

  Drop new images into public/work/ (or public/portfolio/) and reference
  them by path. Keep alt text meaningful for accessibility and SEO.
*/

export type WorkCategory =
  | "campaigns"
  | "branding"
  | "social"
  | "events"
  | "creative"
  | "photography"
  | "other";

export type WorkItem = {
  id: string;
  src: string;
  /** natural dimensions of the file, so the grid can reserve space */
  width: number;
  height: number;
  category: WorkCategory;
  title: { en: string; ar: string };
  alt: { en: string; ar: string };
  /** items marked featured also appear in the Featured Work section */
  featured?: boolean;
};

export const workItems: WorkItem[] = [
  {
    id: "camel-embrace",
    src: "/portfolio/camel-embrace.jpg",
    width: 1280,
    height: 1707,
    category: "photography",
    title: { en: "Desert Heritage Shoot", ar: "جلسة تصوير التراث الصحراوي" },
    alt: {
      en: "A happy man in traditional Saudi dress embracing his camel in a desert setting",
      ar: "رجل سعيد بالزي السعودي التقليدي يحتضن جمله في بيئة صحراوية",
    },
    featured: true,
  },
  {
    id: "bedouin-portrait",
    src: "/portfolio/bedouin-portrait.jpg",
    width: 1280,
    height: 1707,
    category: "creative",
    title: { en: "Bedouin Portrait Series", ar: "سلسلة بورتريه بدوية" },
    alt: {
      en: "Woman wearing traditional Bedouin attire with coin jewelry in a desert landscape",
      ar: "امرأة ترتدي زيًا بدويًا تقليديًا مع حلي معدنية في مشهد صحراوي",
    },
    featured: true,
  },
  {
    id: "uhud-market",
    src: "/portfolio/uhud-market.jpg",
    width: 1280,
    height: 1707,
    category: "campaigns",
    title: { en: "Uhud Marketplace Campaign", ar: "حملة سوق أُحد" },
    alt: {
      en: "Men in traditional Saudi clothing at a marketplace near Uhud Mountain",
      ar: "رجال بملابس سعودية تقليدية في سوق قرب جبل أُحد",
    },
    featured: true,
  },
];

export type Testimonial = {
  id: string;
  /**
   * PLACEHOLDER entries: replace `quote`, `name`, `company`, and `role`
   * with the real client's words before launch. `placeholder: true`
   * renders a visible "sample" badge so a placeholder is never mistaken
   * for a real review.
   */
  placeholder?: boolean;
  quote: { en: string; ar: string };
  name: { en: string; ar: string };
  company: { en: string; ar: string };
  role?: { en: string; ar: string };
  /** optional /public paths */
  photo?: string;
  logo?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "placeholder-1",
    placeholder: true,
    quote: {
      en: "[Sample — replace with a real client testimonial. One or two sentences about a result Watm delivered.]",
      ar: "[نموذج — استبدله برأي عميل حقيقي: جملة أو جملتان عن نتيجة حققتها وتم.]",
    },
    name: { en: "Client Name", ar: "اسم العميل" },
    company: { en: "Company", ar: "اسم الشركة" },
    role: { en: "Position", ar: "المنصب" },
  },
  {
    id: "placeholder-2",
    placeholder: true,
    quote: {
      en: "[Sample — replace with a real client testimonial.]",
      ar: "[نموذج — استبدله برأي عميل حقيقي.]",
    },
    name: { en: "Client Name", ar: "اسم العميل" },
    company: { en: "Company", ar: "اسم الشركة" },
  },
];
