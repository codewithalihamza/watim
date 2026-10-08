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

/* =========================================================
   WORK LIBRARY
   Development + Creative / Marketing work
   ========================================================= */

export const workItems: WorkItem[] = [
  /* -------------------------
     Development
     ------------------------- */

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
    src: "/work/mallah-app-v2.webp",
    width: 790,
    height: 1618,
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
    id: "thetie-bridge-lib",
    src: "/work/thetie-bridge.webp",
    width: 2000,
    height: 1078,
    category: "technology",
    title: {
      en: "The Tie Bridge — Institutional Messenger",
      ar: "بريدج من The Tie — تطبيق المراسلة المؤسسي",
    },
    alt: {
      en: "The Tie Bridge web messenger showing a team inbox, group chats, and message requests",
      ar: "تطبيق بريدج من The Tie يعرض صندوق وارد للفريق ومحادثات جماعية وطلبات مراسلة",
    },
    featured: true,
  },

  {
    id: "thetie-terminal-lib",
    src: "/work/thetie-terminal.webp",
    width: 2000,
    height: 999,
    category: "technology",
    title: {
      en: "The Tie Terminal — Market Intelligence",
      ar: "تيرمينال The Tie — ذكاء الأسواق",
    },
    alt: {
      en: "The Tie Terminal dashboard with crypto ETF KPIs, flows, news, and an AI digest",
      ar: "لوحة تيرمينال The Tie بمؤشرات وتدفقات صناديق ETF والأخبار وملخص ذكي",
    },
    featured: true,
  },

  /* -------------------------
     Branding
     ------------------------- */

  {
    id: "caraberry",
    src: "/work/caraberry.jpg",
    width: 1600,
    height: 1200,
    category: "branding",
    title: {
      en: "Caraberry Brand Identity",
      ar: "الهوية البصرية لعلامة كارابيري",
    },
    alt: {
      en: "Caraberry brand identity and visual design",
      ar: "الهوية البصرية والتصميم الإبداعي لعلامة كارابيري",
    },
    featured: true,
  },

  {
    id: "company-profile",
    src: "/work/company-profile.jpg",
    width: 1600,
    height: 1200,
    category: "branding",
    title: {
      en: "Corporate Profile Design",
      ar: "تصميم الملف التعريفي للشركة",
    },
    alt: {
      en: "Professional corporate profile and brand presentation design",
      ar: "تصميم احترافي للملف التعريفي وهوية الشركة",
    },
    featured: true,
  },

  /* -------------------------
     Marketing Campaigns
     ------------------------- */

  {
    id: "cavallino",
    src: "/work/cavallino.jpg",
    width: 1600,
    height: 1200,
    category: "campaigns",
    title: {
      en: "Cavallino Marketing Campaign",
      ar: "حملة كافالينو التسويقية",
    },
    alt: {
      en: "Cavallino creative marketing campaign",
      ar: "حملة كافالينو التسويقية والتصميم الإبداعي",
    },
    featured: true,
  },
  {
    id: "snbl-art",
    src: "/work/snbl-art.jpeg",
    width: 1200,
    height: 1200,
    category: "creative",
    title: {
      en: "SNBL ART Creative Campaign",
      ar: "الحملة الإبداعية لـ SNBL ART",
    },
    alt: {
      en: "SNBL ART creative campaign featuring Saudi-inspired visual artwork",
      ar: "تصميم إبداعي لحملة SNBL ART بطابع بصري مستوحى من الثقافة السعودية",
    },
    featured: true,
  },

  {
    id: "valuefirst-campaign-1",
    src: "/work/valuefirst-campaign-1.jpg",
    width: 1200,
    height: 1200,
    category: "campaigns",
    title: {
      en: "ValueFirst Marketing Campaign",
      ar: "حملة ValueFirst التسويقية",
    },
    alt: {
      en: "ValueFirst creative marketing campaign designs",
      ar: "تصاميم إبداعية لحملة ValueFirst التسويقية",
    },
    featured: true,
  },

  {
    id: "valuefirst-campaign-2",
    src: "/work/valuefirst-campaign-2.jpg",
    width: 1200,
    height: 1200,
    category: "campaigns",
    title: {
      en: "ValueFirst Digital Campaign",
      ar: "الحملة الرقمية لـ ValueFirst",
    },
    alt: {
      en: "ValueFirst digital marketing campaign and social media designs",
      ar: "تصاميم الحملة الرقمية والتسويقية لـ ValueFirst",
    },
    featured: true,
  },

  {
    id: "purity-tech",
    src: "/work/purity-tech.jpg",
    width: 1200,
    height: 1200,
    category: "branding",
    title: {
      en: "Purity Tech Branding",
      ar: "الهوية البصرية لـ Purity Tech",
    },
    alt: {
      en: "Purity Tech branding and corporate visual designs",
      ar: "تصاميم الهوية البصرية والعلامة التجارية لـ Purity Tech",
    },
    featured: true,
  },
  {
    id: "marketing-campaign",
    src: "/work/Marketing-campaign.jpg",
    width: 1600,
    height: 1200,
    category: "campaigns",
    title: {
      en: "Marketing Campaign",
      ar: "حملة تسويقية",
    },
    alt: {
      en: "Creative marketing campaign visual",
      ar: "تصميم إبداعي لحملة تسويقية",
    },
    featured: true,
  },

  /* -------------------------
     Events
     ------------------------- */

  {
    id: "mi-event",
    src: "/work/mi-event.jpg",
    width: 1600,
    height: 1200,
    category: "events",
    title: {
      en: "MI Event",
      ar: "فعالية MI",
    },
    alt: {
      en: "Creative event branding and visual content for MI event",
      ar: "الهوية والمحتوى البصري الإبداعي لفعالية MI",
    },
    featured: true,
  },

  /* -------------------------
     Creative
     ------------------------- */

  {
    id: "packaging",
    src: "/work/packaging.jpg",
    width: 1600,
    height: 1200,
    category: "creative",
    title: {
      en: "Packaging Design",
      ar: "تصميم التغليف",
    },
    alt: {
      en: "Creative packaging design and product presentation",
      ar: "تصميم إبداعي للتغليف وعرض المنتجات",
    },
    featured: true,
  },

  {
    id: "watm",
    src: "/work/watm.jpg",
    width: 1600,
    height: 1200,
    category: "creative",
    title: {
      en: "WATM Creative Work",
      ar: "أعمال واتم الإبداعية",
    },
    alt: {
      en: "WATM creative marketing and visual design work",
      ar: "أعمال واتم في التسويق والتصميم الإبداعي",
    },
    featured: true,
  },
];

/* =========================================================
   TESTIMONIALS
   ========================================================= */

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
    id: "watam-logistics",
    quote: {
      en: "Our experience with WATM was truly exceptional. The team was highly professional and incredibly fast throughout the project. They understood our needs from the beginning and turned them into a complete, launch-ready website that truly reflects the quality of our services. Their attention to detail and responsiveness were outstanding, and the final result exceeded our expectations.",
      ar: "تجربتنا مع واتم كانت أكثر من رائعة. الفريق كان احترافيًا جدًا وسريعًا في التنفيذ، وفهم احتياجاتنا من البداية وحوّلها إلى موقع متكامل وجاهز يعكس مستوى خدماتنا بشكل احترافي. الاهتمام بالتفاصيل وسرعة الاستجابة كانت من أكثر الأشياء التي أبهرتنا، والنتيجة تجاوزت توقعاتنا بكثير.",
    },
    name: {
      en: "Naif",
      ar: "نايف",
    },
    company: {
      en: "WATAM Logistics",
      ar: "وتم للنقل والخدمات اللوجستية",
    },
  },

  {
    id: "terrarium-store",
    quote: {
      en: "WATM did an incredible job designing our online store. The design was exceptionally beautiful, modern, and thoughtfully crafted to create a great customer experience. The team also seamlessly integrated the store with Salla and Zid, making it fully ready for business from day one. Honestly, the final result was far beyond what we expected.",
      ar: "واتم أبدعوا في تصميم متجرنا الإلكتروني. التصميم كان جميلًا جدًا وعصريًا، والتفاصيل كلها كانت مرتبة بطريقة تعطي تجربة مميزة للعميل. كما قام الفريق بربط المتجر بشكل متكامل مع سلة وزد، مما جعل المتجر جاهزًا للعمل بشكل احترافي من البداية. بصراحة، النتيجة كانت أجمل بكثير مما كنا نتوقع.",
    },
    name: {
      en: "Nada",
      ar: "ندى",
    },
    company: {
      en: "Terrarium Store",
      ar: "متجر تيراريوم",
    },
  },

  {
    id: "event-solution",
    quote: {
      en: "Working with WATM was one of the best experiences we’ve had with a technology and marketing team. They understood our needs quickly and delivered professional solutions that went far beyond our expectations. The quality of execution, responsiveness, attention to detail, and communication throughout the project were exceptional. With WATM, you genuinely feel that your project is in safe hands.",
      ar: "تعاملنا مع واتم كان من أفضل التجارب التي خضناها مع شركات التقنية والتسويق. الفريق كان سريعًا في فهم احتياجاتنا، وقدم حلولًا احترافية تجاوزت توقعاتنا بشكل كبير. جودة التنفيذ، سرعة الاستجابة، الاهتمام بالتفاصيل، والتواصل المستمر كانت جميعها على مستوى استثنائي. واتم فريق تشعر معه فعلًا أن مشروعك في أيدٍ أمينة.",
    },
    name: {
      en: "Salman Al-Otaibi",
      ar: "سلمان العتيبي",
    },
    company: {
      en: "Event Solution",
      ar: "Event Solution",
    },
  },
];

/* =========================================================
   FEATURED DEVELOPMENT PROJECTS
   ========================================================= */

export type FeaturedProject = {
  id: string;
  /** client / brand name, shown as the headline credit */
  client: { en: string; ar: string };
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  /** discipline chips */
  tags: { en: string; ar: string }[];
  image: string;
  width: number;
  height: number;
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
      en: "An AI platform that turns Panda’s store cameras into live insight — visitor counts, queue monitoring, shelf analytics, and an Arabic AI supervisor.",
      ar: "منصة ذكاء اصطناعي تحوّل كاميرات متاجر بنده إلى رؤى مباشرة — عدّ الزوار ومراقبة الطوابير وتحليلات الأرفف، مع مشرف ذكي بالعربية.",
    },
    tags: [
      { en: "AI & Computer Vision", ar: "ذكاء اصطناعي ورؤية حاسب" },
      { en: "Web Platform", ar: "منصة ويب" },
      { en: "Data & Analytics", ar: "بيانات وتحليلات" },
    ],
    image: "/work/panda-dashboard.webp",
    width: 2000,
    height: 1038,
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
      en: "A food-delivery and price-comparison app built end to end — browse restaurants, compare delivery prices across providers, and order in a few taps.",
      ar: "تطبيق توصيل ومقارنة أسعار بُني بالكامل — تصفّح المطاعم وقارن أسعار التوصيل واطلب بلمسات قليلة.",
    },
    tags: [
      { en: "Mobile App", ar: "تطبيق جوال" },
      { en: "Back-end", ar: "أنظمة خلفية" },
      { en: "UI/UX", ar: "تصميم تجربة وواجهات" },
    ],
    image: "/work/mallah-app-v2.webp",
    width: 790,
    height: 1618,
    imageAlt: {
      en: "Mallah mobile app home screen with restaurants, price comparison, and delivery deals",
      ar: "الشاشة الرئيسية لتطبيق ملاح تعرض المطاعم ومقارنة الأسعار وعروض التوصيل",
    },
    kind: "mobile",
  },

  {
    id: "thetie-bridge",
    client: { en: "The Tie", ar: "The Tie" },
    title: {
      en: "Bridge — Institutional Crypto Messenger",
      ar: "بريدج — تطبيق مراسلة لمؤسسات العملات الرقمية",
    },
    description: {
      en: "A secure messenger for the digital-asset industry on web, Android, and iOS — team inboxes, group chats, and broadcasts with institutional compliance.",
      ar: "تطبيق مراسلة آمن لقطاع الأصول الرقمية على الويب وAndroid وiOS — محادثات فرق وبث جماعي بمعايير التزام مؤسسية.",
    },
    tags: [
      { en: "Web Platform", ar: "منصة ويب" },
      { en: "iOS & Android", ar: "iOS وAndroid" },
      { en: "Real-time Messaging", ar: "مراسلة لحظية" },
    ],
    image: "/work/thetie-bridge.webp",
    width: 2000,
    height: 1078,
    imageAlt: {
      en: "The Tie Bridge web messenger showing a team inbox, group chats, and message requests",
      ar: "تطبيق بريدج من The Tie على الويب يعرض صندوق وارد للفريق ومحادثات جماعية وطلبات مراسلة",
    },
    kind: "web",
  },

  {
    id: "thetie-terminal",
    client: { en: "The Tie", ar: "The Tie" },
    title: {
      en: "The Tie Terminal — Crypto Market Intelligence",
      ar: "تيرمينال The Tie — ذكاء أسواق العملات الرقمية",
    },
    description: {
      en: "An institutional crypto-intelligence dashboard — real-time ETF flows and KPIs, curated news, and AI-generated market digests.",
      ar: "لوحة ذكاء مؤسسية لأسواق العملات الرقمية — تدفقات ومؤشرات ETF لحظية وأخبار منسقة وملخصات مولّدة بالذكاء الاصطناعي.",
    },
    tags: [
      { en: "Web Platform", ar: "منصة ويب" },
      { en: "Data & Analytics", ar: "بيانات وتحليلات" },
      { en: "AI Integration", ar: "تكامل ذكاء اصطناعي" },
    ],
    image: "/work/thetie-terminal.webp",
    width: 2000,
    height: 999,
    imageAlt: {
      en: "The Tie Terminal dashboard with crypto ETF KPIs, flows, news, and an AI narrative digest",
      ar: "لوحة تيرمينال The Tie تعرض مؤشرات وتدفقات صناديق ETF والأخبار وملخصًا سرديًا بالذكاء الاصطناعي",
    },
    kind: "web",
  },
];

/* =========================================================
   AI & INTEGRATION
   ========================================================= */

export type AiUseCase = {
  id: string;
  image: string;
  /** optional Arabic-mode variant of the image (e.g. RTL screenshots) */
  imageAr?: string;
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
    image: "/work/panda-ai-chat-en.webp",
    imageAr: "/work/panda-ai-chat-ar.webp",
    width: 1762,
    height: 1265,
    title: {
      en: "Panda AI Supervisor",
      ar: "مشرف بنده الذكي",
    },
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
    image: "/work/panda-cashier-absence-v2.webp",
    width: 1809,
    height: 1023,
    title: {
      en: "Cashier Absence Detection",
      ar: "كشف غياب الكاشير",
    },
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
    image: "/work/panda-phone-detection-v2.webp",
    width: 1707,
    height: 1339,
    title: {
      en: "Staff Phone-Use Detection",
      ar: "كشف استخدام الجوال أثناء العمل",
    },
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
