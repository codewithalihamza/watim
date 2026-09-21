/*
  Data for the /our-work page. To add work, append an entry here — the page
  renders whatever is in these arrays, no UI changes needed.

  Drop new images into public/work/ (or public/portfolio/) and reference
  them by path. Keep alt text meaningful for accessibility and SEO.
*/

export type WorkCategory =
  | "technology"
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
    id: "panda-retail-intelligence",
    src: "/work/panda-dashboard.webp",
    width: 2000,
    height: 1038,
    category: "technology",
    title: {
      en: "Panda Retail Intelligence — AI Store Analytics",
      ar: "بنده لتحليلات المتاجر — ذكاء اصطناعي ورؤية حاسب",
    },
    alt: {
      en: "Panda Retail Intelligence dashboard showing live store visitors, queue analytics, and AI-detected events",
      ar: "لوحة تحكم بنده لتحليلات المتاجر تعرض الزوار المباشرين وتحليلات الطوابير والأحداث المكتشفة بالذكاء الاصطناعي",
    },
    featured: true,
  },
  {
    id: "mallah-delivery-app",
    src: "/work/mallah-app.webp",
    width: 720,
    height: 1600,
    category: "technology",
    title: {
      en: "Mallah — Food Delivery & Price Comparison App",
      ar: "ملاح — تطبيق توصيل الطعام ومقارنة الأسعار",
    },
    alt: {
      en: "Mallah mobile app home screen with restaurant listings, price comparison, and delivery deals",
      ar: "الشاشة الرئيسية لتطبيق ملاح تعرض المطاعم ومقارنة الأسعار وعروض التوصيل",
    },
    featured: true,
  },
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

export type FeaturedProject = {
  id: string;
  /** client / brand name, shown as the headline credit */
  client: { en: string; ar: string };
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  /** discipline chips */
  tags: { en: string; ar: string }[];
  image: string;
  imageAlt: { en: string; ar: string };
  /** controls the device framing of the screenshot */
  kind: "web" | "mobile";
};

/* Featured client projects — shown as spotlight rows on /our-work. */
export const featuredProjects: FeaturedProject[] = [
  {
    id: "panda",
    client: { en: "Panda", ar: "بنده" },
    title: {
      en: "Retail Intelligence Platform",
      ar: "منصة ذكاء المتاجر",
    },
    description: {
      en: "An AI platform built for Panda stores that turns existing store cameras into live insight — visitor counting, queue monitoring, shelf and staff analytics, and an AI supervisor the team can question in plain Arabic.",
      ar: "منصة ذكاء اصطناعي بُنيت لمتاجر بنده تحوّل كاميرات المتجر الحالية إلى رؤى مباشرة — عدّ الزوار، ومراقبة الطوابير، وتحليلات الأرفف والموظفين، مع مشرف ذكي يجيب فريق العمل بالعربية.",
    },
    tags: [
      { en: "AI & Computer Vision", ar: "ذكاء اصطناعي ورؤية حاسب" },
      { en: "Web Platform", ar: "منصة ويب" },
      { en: "Data & Analytics", ar: "بيانات وتحليلات" },
    ],
    image: "/work/panda-dashboard.webp",
    imageAlt: {
      en: "Panda Retail Intelligence dashboard with live visitors, queue analytics, and AI-detected events",
      ar: "لوحة تحكم ذكاء المتاجر لبنده تعرض الزوار المباشرين وتحليلات الطوابير والأحداث المكتشفة",
    },
    kind: "web",
  },
  {
    id: "mallah",
    client: { en: "Mallah", ar: "ملاح" },
    title: {
      en: "Food Delivery & Price Comparison App",
      ar: "تطبيق توصيل الطعام ومقارنة الأسعار",
    },
    description: {
      en: "A delivery app built end to end for Mallah — customers browse restaurants, compare delivery prices across providers, and order in a few taps, backed by a full admin platform.",
      ar: "تطبيق توصيل بُني بالكامل لملاح — يتصفح العملاء المطاعم ويقارنون أسعار التوصيل بين المزودين ويطلبون بلمسات قليلة، مدعومًا بمنصة إدارة متكاملة.",
    },
    tags: [
      { en: "Mobile App", ar: "تطبيق جوال" },
      { en: "Back-end", ar: "أنظمة خلفية" },
      { en: "UI/UX", ar: "تصميم تجربة وواجهات" },
    ],
    image: "/work/mallah-app.webp",
    imageAlt: {
      en: "Mallah mobile app home screen with restaurants, price comparison, and delivery deals",
      ar: "الشاشة الرئيسية لتطبيق ملاح تعرض المطاعم ومقارنة الأسعار وعروض التوصيل",
    },
    kind: "mobile",
  },
];

export type AiUseCase = {
  id: string;
  image: string;
  width: number;
  height: number;
  title: { en: string; ar: string };
  body: { en: string; ar: string };
  alt: { en: string; ar: string };
};

/* AI & Integration use cases — shown as cards on /our-work. */
export const aiUseCases: AiUseCase[] = [
  {
    id: "ai-supervisor",
    image: "/work/panda-ai-chat.png",
    width: 1008,
    height: 767,
    title: { en: "Panda AI Supervisor", ar: "مشرف بنده الذكي" },
    body: {
      en: "An Arabic AI assistant the store team can ask anything — it answers from the live database with real numbers and photo evidence.",
      ar: "مساعد ذكي بالعربية يسأله فريق المتجر عن أي شيء — فيجيب من قاعدة البيانات مباشرة بالأرقام والأدلة المصورة.",
    },
    alt: {
      en: "Arabic AI supervisor chat answering a question about staff phone use with data and photo evidence",
      ar: "محادثة المشرف الذكي بالعربية تجيب عن سؤال حول استخدام الجوال بالبيانات والأدلة المصورة",
    },
  },
  {
    id: "cashier-absence",
    image: "/work/panda-cashier-absence.webp",
    width: 1201,
    height: 859,
    title: { en: "Cashier Absence Detection", ar: "كشف غياب الكاشير" },
    body: {
      en: "Alerts the moment a cashier station is left unattended beyond a set window — straight from the store's own cameras.",
      ar: "تنبيه فوري عندما تبقى محطة الكاشير شاغرة أكثر من المدة المحددة — مباشرة من كاميرات المتجر نفسها.",
    },
    alt: {
      en: "Live camera view of an empty cashier station with an automatic 'work area vacant' alert",
      ar: "لقطة مباشرة لمحطة كاشير شاغرة مع تنبيه آلي بأن منطقة العمل خالية",
    },
  },
  {
    id: "phone-detection",
    image: "/work/panda-phone-detection.webp",
    width: 1319,
    height: 1045,
    title: { en: "Staff Phone-Use Detection", ar: "كشف استخدام الجوال أثناء العمل" },
    body: {
      en: "A vision model spots phone use on duty and logs each case with visual evidence and a plain-language description.",
      ar: "نموذج رؤية يرصد استخدام الجوال أثناء الدوام ويسجل كل حالة بدليل مرئي ووصف واضح.",
    },
    alt: {
      en: "AI detection view flagging phone use at a control-room desk with a confidence score and description",
      ar: "شاشة كشف بالذكاء الاصطناعي ترصد استخدام الجوال في غرفة التحكم مع درجة الثقة والوصف",
    },
  },
];
