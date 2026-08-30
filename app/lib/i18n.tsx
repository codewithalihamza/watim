"use client";

import {
  createContext,
  startTransition,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "ar";

/*
  All user-facing copy for both languages lives here. The Arabic is written
  as native copy (not a literal translation) per the brand guidance.
*/
export const dict = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
      getInTouch: "Get in Touch",
    },
    hero: {
      line1: "We build the brands",
      line2: "the Kingdom remembers.",
      sub: "Watm is a Saudi digital marketing and technology partner — strategy, creativity, and engineering under one roof, making the marketing people actually stop scrolling for. No fluff. No vanity metrics. Only results you can measure.",
      cta1: "Begin a partnership",
      cta2: "Explore our services",
      alt: "A man in traditional Saudi dress standing before the Riyadh skyline",
    },
    oneLiner: {
      items: ["Strategy", "Content", "Media", "Websites", "Applications", "Growth"],
      tail: "One partner, one vision, one measurable standard.",
    },
    about: {
      eyebrow: "About Watm",
      title: "A Saudi partner built for ambition.",
      p1: "Our name carries meaning — WATM is a mark that endures, and that is what we set out to leave behind for every brand we serve. We are strategists, creatives, and engineers who understand the Saudi market and the standard the Kingdom now sets for itself.",
      p2: "We do not chase trends. We start with your objectives, study your audience, and build every campaign, platform, and product around the outcomes that matter — then we stay until the numbers move.",
      stats: [
        { value: 40, suffix: "+", label: "Organizations served" },
        { value: 120, suffix: "+", label: "Campaigns delivered" },
        { value: 8, suffix: "M+", label: "Audiences reached" },
      ],
    },
    services: {
      eyebrow: "Our Services",
      title: "Integrated capabilities, one standard.",
      intro:
        "Engage us for a single discipline, or entrust us with the full journey. Every service is designed to work in concert with the rest.",
      items: [
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
      ],
    },
    why: {
      eyebrow: "Why Watm",
      title: "The standards our partners rely on.",
      intro:
        "We treat your budget like our own money — and hold ourselves to standards you can measure.",
      standards: [
        {
          title: "Responsiveness",
          body: "A clear point of contact and a timely reply, always.",
        },
        {
          title: "Transparency",
          body: "Plain reporting: what we did, what it cost, what it delivered.",
        },
        {
          title: "Measured growth",
          body: "We test before we scale, so your budget goes to what is proven.",
        },
        {
          title: "Outcomes above all",
          body: "Pretty campaigns are nice. Profitable campaigns are better.",
        },
        {
          title: "One integrated team",
          body: "Strategist, designer, engineer, media specialist — nothing is lost between disciplines.",
        },
      ],
    },
    process: {
      eyebrow: "How We Work",
      title: "A clear methodology, from first conversation to lasting result.",
      steps: [
        {
          title: "Understand",
          body: "We take the time to learn your organization, your audience, and your ambitions before proposing a single idea.",
        },
        {
          title: "Plan",
          body: "We define a clear strategy with measurable objectives and a timeline you can hold us to.",
        },
        {
          title: "Deliver",
          body: "Campaigns launch, platforms and applications go live, and execution proceeds with precision.",
        },
        {
          title: "Optimize",
          body: "We monitor performance continuously and refine what works. Growth, for us, is a discipline — not a single milestone.",
        },
      ],
    },
    servicesPage: {
      title: "Everything you need to grow.",
      sub: "Delivered to one standard, by one integrated team — engage us for a single discipline, or entrust us with the full journey.",
      cta: "Discuss your project",
    },
    contactPage: {
      title: "Let's talk.",
      sub: "Tell us where you intend to be, and we will show you the path — and whether Watm is the right partner for the journey. The first conversation is always without obligation.",
      emailCard: "Email us",
      whatsappCard: "Chat on WhatsApp",
      linkedinCard: "Follow on LinkedIn",
      locationCard: "Our base",
      location: "Riyadh, Kingdom of Saudi Arabia",
      whatsappNote: "Fastest reply during business hours",
      emailNote: "For proposals and partnerships",
      linkedinNote: "Company news and work",
    },
    footer: {
      ctaTitle: "Let us build something worth remembering.",
      ctaBody:
        "Tell us where you intend to be, and we will show you the path — and whether Watm is the right partner for the journey. The first conversation is always without obligation.",
      consult: "Request a consultation",
      whatsapp: "Reach us on WhatsApp",
      tagline: "Watm — a mark that endures.",
      explore: "Explore",
      servicesCol: "Services",
      follow: "Follow",
      serviceLinks: [
        "Social Media",
        "Paid Media",
        "Content & Copy",
        "Websites & Apps",
        "SEO & Growth",
      ],
      contactUs: "Contact us",
      location: "Riyadh, Kingdom of Saudi Arabia",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "© 2026 Watm. All rights reserved.",
    },
    whatsappHref:
      "https://wa.me/966554020279?text=Hello%20Watm%20team%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services%20and%20discuss%20how%20we%20can%20work%20together.",
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      contact: "تواصل معنا",
      getInTouch: "تواصل معنا",
    },
    hero: {
      line1: "نبني العلامات",
      line2: "التي تبقى في ذاكرة المملكة.",
      sub: "وتم شريك سعودي في التسويق الرقمي والتقنية — استراتيجية وإبداع وهندسة تحت سقف واحد، نصنع تسويقًا يستحق أن يتوقف عنده الجمهور. بلا حشو، بلا أرقام شكلية، نتائج تُقاس فقط.",
      cta1: "ابدأ شراكتك",
      cta2: "استكشف خدماتنا",
      alt: "رجل بالزي السعودي التقليدي أمام أفق مدينة الرياض",
    },
    oneLiner: {
      items: ["استراتيجية", "محتوى", "ميديا", "مواقع", "تطبيقات", "نمو"],
      tail: "شريك واحد، رؤية واحدة، ومعيار واحد يُقاس.",
    },
    about: {
      eyebrow: "عن وتم",
      title: "شريك سعودي بُني للطموح.",
      p1: "اسمنا يحمل معنى — فوتم أثرٌ يدوم، وهذا ما نسعى لتركه في كل علامة نخدمها. نحن استراتيجيون ومبدعون ومهندسون نفهم السوق السعودي والمعيار الذي ترسمه المملكة لنفسها اليوم.",
      p2: "لا نلاحق الصيحات. نبدأ من أهدافك، وندرس جمهورك، ونبني كل حملة ومنصة ومنتج حول النتائج التي تهمّك — ثم نبقى حتى تتحرك الأرقام.",
      stats: [
        { value: 40, suffix: "+", label: "جهة خدمناها" },
        { value: 120, suffix: "+", label: "حملة أطلقناها" },
        { value: 8, suffix: "M+", label: "جمهور وصلنا إليه" },
      ],
    },
    services: {
      eyebrow: "خدماتنا",
      title: "قدرات متكاملة، بمعيار واحد.",
      intro:
        "اعمل معنا في تخصص واحد، أو أوكل إلينا الرحلة كاملة — كل خدمة مصممة لتعمل بتناغم مع البقية.",
      items: [
        {
          title: "إدارة وسائل التواصل الاجتماعي",
          body: "ندير قنواتك بانضباط غرفة الأخبار وعناية حارس العلامة — محتوى مصمم لكل منصة، وحضور ثابت وموثوق.",
        },
        {
          title: "الإعلانات المدفوعة",
          body: "إعلانات دقيقة وخاضعة للمساءلة عبر Google وMeta وTikTok وغيرها. نستثمر حيث يثبت الأداء، ونحاسب أنفسنا على كل ريال بشفافية كاملة.",
        },
        {
          title: "المحتوى وكتابة النصوص",
          body: "كلمات تحمل رسالتك بوضوح وإقناع، بالعربية والإنجليزية — من الحملات والسيناريوهات إلى صفحات الهبوط التي تدفع الجمهور إلى الفعل.",
        },
        {
          title: "تطوير المواقع",
          body: "مواقع سريعة وآمنة ومتقنة صُممت لتحقق الأداء. منصات شركات ومتاجر إلكترونية وصفحات حملات — تُبنى للجوال أولًا ومحسّنة لمحركات البحث.",
        },
        {
          title: "تطوير التطبيقات",
          body: "تطبيقات iOS وAndroid مصممة حول من سيستخدمها. من الفكرة إلى الإطلاق وما بعده، نتولى كل تفصيلة في الطريق.",
        },
        {
          title: "تحسين محركات البحث والنمو الرقمي",
          body: "ظهور مستدام في نتائج البحث، بأسس تقنية سليمة ومحتوى مفيد فعلًا. الجمهور الصحيح يجدك — ويستمر في العثور عليك.",
        },
        {
          title: "العلامة والهوية",
          body: "هويات بصرية مدروسة وأنظمة متكاملة تمنح مؤسستك حضورًا يوحي بالريادة ويكسب الثقة من أول نظرة.",
        },
      ],
    },
    why: {
      eyebrow: "لماذا وتم",
      title: "المعايير التي يعتمد عليها شركاؤنا.",
      intro: "نتعامل مع ميزانيتك كأنها أموالنا — ونلزم أنفسنا بمعايير يمكنك قياسها.",
      standards: [
        {
          title: "سرعة الاستجابة",
          body: "جهة تواصل واضحة ورد في الوقت المناسب، دائمًا.",
        },
        {
          title: "الشفافية",
          body: "تقارير واضحة: ماذا فعلنا، وكم كلّف، وماذا حقق.",
        },
        {
          title: "نمو مدروس",
          body: "نختبر قبل أن نتوسع، لتذهب ميزانيتك إلى ما ثبت نجاحه.",
        },
        {
          title: "النتائج قبل كل شيء",
          body: "الحملات الجميلة جيدة. الحملات المربحة أفضل.",
        },
        {
          title: "فريق واحد متكامل",
          body: "استراتيجي ومصمم ومهندس ومختص ميديا — لا شيء يضيع بين التخصصات.",
        },
      ],
    },
    process: {
      eyebrow: "كيف نعمل",
      title: "منهجية واضحة، من أول حديث إلى أثر يدوم.",
      steps: [
        {
          title: "نفهم",
          body: "نتعرف على مؤسستك وجمهورك وطموحك قبل أن نقترح فكرة واحدة.",
        },
        {
          title: "نخطط",
          body: "نضع استراتيجية واضحة بأهداف قابلة للقياس وجدول زمني تحاسبنا عليه.",
        },
        {
          title: "ننفّذ",
          body: "تنطلق الحملات، وتُطلق المنصات والتطبيقات، ويسير التنفيذ بدقة.",
        },
        {
          title: "نحسّن",
          body: "نراقب الأداء باستمرار ونطوّر ما ينجح. النمو عندنا منهج مستمر، لا محطة واحدة.",
        },
      ],
    },
    servicesPage: {
      title: "كل ما تحتاجه لتنمو.",
      sub: "بمعيار واحد وفريق واحد متكامل — اعمل معنا في تخصص واحد، أو أوكل إلينا الرحلة كاملة.",
      cta: "تحدث معنا عن مشروعك",
    },
    contactPage: {
      title: "لنتحدث.",
      sub: "أخبرنا أين تريد أن تصل، وسنريك الطريق — وما إذا كانت وتم الشريك الصحيح للرحلة. الحديث الأول دائمًا دون أي التزام.",
      emailCard: "راسلنا بالبريد",
      whatsappCard: "تواصل عبر واتساب",
      linkedinCard: "تابعنا على لينكدإن",
      locationCard: "مقرنا",
      location: "الرياض، المملكة العربية السعودية",
      whatsappNote: "أسرع وسيلة للرد خلال ساعات العمل",
      emailNote: "للعروض والشراكات",
      linkedinNote: "أخبار الشركة وأعمالنا",
    },
    footer: {
      ctaTitle: "لنبنِ معًا أثرًا يستحق أن يُذكر.",
      ctaBody:
        "أخبرنا أين تريد أن تصل، وسنريك الطريق — وما إذا كانت وتم الشريك الصحيح للرحلة. الحديث الأول دائمًا دون أي التزام.",
      consult: "اطلب استشارة",
      whatsapp: "تواصل عبر واتساب",
      tagline: "وتم — أثرٌ يدوم.",
      explore: "استكشف",
      servicesCol: "خدماتنا",
      follow: "تابعنا",
      serviceLinks: [
        "وسائل التواصل",
        "الإعلانات المدفوعة",
        "المحتوى والنصوص",
        "المواقع والتطبيقات",
        "السيو والنمو",
      ],
      contactUs: "تواصل معنا",
      location: "الرياض، المملكة العربية السعودية",
      privacy: "سياسة الخصوصية",
      terms: "شروط الاستخدام",
      rights: "© 2026 وتم. جميع الحقوق محفوظة.",
    },
    whatsappHref:
      "https://wa.me/966554020279?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%20%D9%81%D8%B1%D9%8A%D9%82%20%D9%88%D8%AA%D9%85%D8%8C%20%D8%A3%D9%88%D8%AF%20%D9%85%D8%B9%D8%B1%D9%81%D8%A9%20%D8%A7%D9%84%D9%85%D8%B2%D9%8A%D8%AF%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85%20%D9%88%D9%85%D9%86%D8%A7%D9%82%D8%B4%D8%A9%20%D8%B3%D8%A8%D9%84%20%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D9%88%D9%86.",
  },
} as const;

export type Dict = (typeof dict)["en"] | (typeof dict)["ar"];

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
}>({ lang: "en", setLang: () => {}, t: dict.en });

const STORAGE_KEY = "watm-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // restore the saved choice once on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "ar" || saved === "en") {
        startTransition(() => setLangState(saved));
      }
    } catch {}
  }, []);

  // reflect the language on <html> so direction, alignment, and fonts follow
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (l: Lang) => {
    if (l !== lang) {
      // sweep the page toward the new reading direction (see globals.css);
      // re-setting the attribute restarts the animation on rapid toggles
      const root = document.documentElement;
      root.removeAttribute("data-lang-anim");
      void root.offsetWidth; // flush so the animation can restart
      root.setAttribute("data-lang-anim", l === "ar" ? "to-ar" : "to-en");
      window.setTimeout(() => {
        if (root.getAttribute("data-lang-anim") === (l === "ar" ? "to-ar" : "to-en")) {
          root.removeAttribute("data-lang-anim");
        }
      }, 650);
    }
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {}
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
