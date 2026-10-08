"use client";

import { usePathname } from "next/navigation";
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
      ourWork: "Our Work",
      contact: "Contact",
      getInTouch: "Get in Touch",
    },
    hero: {
      line1: "WE BUILD BRANDS",
      line2: "THE KINGDOM REMEMBERS.",
      sub: "Watm is a Saudi digital marketing and technology partner — strategy, creativity, and engineering under one roof, making the marketing people actually stop scrolling for. No fluff. No vanity metrics. Only results you can measure.",
      cta1: "Begin a partnership",
      cta2: "Explore our services",
      alt: "A man in traditional Saudi dress standing before the Riyadh skyline",
    },
    oneLiner: {
      items: [
        "Strategy",
        "Content",
        "Media",
        "Websites",
        "Applications",
        "AI & Computer Vision",
        "Growth",
      ],
      tail: "One partner, one vision, one measurable standard.",
    },
    about: {
      eyebrow: "ABOUT WATIM",

      title: "A Saudi partner built for ambition.",

      p1: "Our name carries meaning — WATM is a mark that endures, and that is what we set out to leave behind for every brand we serve. We are strategists, creatives, and engineers who understand the Saudi market and the standard the Kingdom now sets for itself.",

      p2: "We do not chase trends. We start with your objectives, study your audience, and build every campaign, platform, and product around the outcomes that matter — then we stay until the numbers move.",

      stats: [
        { value: 40, suffix: "+", label: "Organizations served" },
        { value: 120, suffix: "+", label: "Campaigns delivered" },
        { value: 8, suffix: "M+", label: "Audiences reached" },
      ],

      cta: "Learn more about Watim",
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
          body: "Fast, secure, refined websites engineered end to end — front-end and back-end. Corporate platforms, e-commerce, ERP and internal systems, and campaign pages — mobile-first and optimized for search.",
        },
        {
          title: "Application Development",
          body: "Mobile applications for iOS and Android, designed around the people who will use them. From concept through launch, we own the design and the full-stack engineering — every detail in between.",
        },
        {
          title: "AI & Computer Vision",
          body: "Camera-based retail intelligence and analytics — people counting, queue monitoring, shelf and staff insights. We turn live video into decisions with models our own engineers build and deploy.",
        },
        {
          title: "AI Agents & Automation",
          body: "Voice agents, customer-support agents, and AI assistants that answer from your own business data — automating routine work in Arabic and English alike.",
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
    partners: {
      eyebrow: "Our Partners",
      title: "Built on trusted partnerships.",
      intro:
        "We work alongside ambitious organizations and trusted partners to create meaningful digital experiences and measurable growth.",
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
    team: {
      eyebrow: "Our Team",
      title: "A team creating impact beyond boundaries.",
      intro:
        "Our team brings together creativity, experience, and technology to create meaningful digital experiences and solutions.",

      showDetails: "View full bio",
      hideDetails: "Back to profile",
      members: [
        {
          id: 1,
          name: "Wadha Alharbi",
          role: "Founder & CEO of WATM",
          bio: "Founder of WATM for Digital Marketing and Information Technology Solutions. Through WATM, she aims to provide innovative marketing and technology solutions focused on developing brands and strengthening their market presence. WATM believes that originality comes first, creating unique and distinctive work tailored to each brand’s identity and needs.",
          image: "/team/watim-female.png",
        },

        {
          id: 2,
          name: "Mohammed Almutari",
          role: "Marketing Consultant",
          bio: "Marketing Consultant contributing to the development of marketing strategies and plans that support brand growth and strengthen market presence. Focused on understanding audience needs and translating business objectives into clear and actionable marketing initiatives.",
          image: "/team/watim-male.png",
        },

        {
          id: 3,
          name: "Malak Sadek",
          role: "Graphic Designer & Marketing Strategist",
          bio: "I have a creative and marketing-driven vision that allows me to transform ideas into impactful visual solutions that serve brand objectives. I believe that design is a means of communication and influence, not merely a visual element.",
          image: "/team/Malak-Sadek.jpeg",
        },

        {
          id: 4,
          name: "Mohammed Nasser",
          role: "Creative Graphic Designer & Social Media and Branding Specialist",
          bio: "Creative Graphic Designer and Social Media & Branding Specialist with 6+ years of experience in Photoshop, Illustrator, and Premiere. Helping brands tell their stories through meaningful and impactful visual communication.",
          image: "/team/Mohammed-Nasser.jpeg",
        },

        {
          id: 5,
          name: "Roua Smisem",
          role: "UI/UX & QA Specialist",
          bio: "UI/UX and QA Specialist focused on transforming ideas into clear, intuitive, and user-friendly digital experiences. Combining visual design thinking with detailed product testing to improve usability, consistency, and overall digital product quality.",
          image: "/team/Roua-Smisem.png",
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
    techStack: {
      eyebrow: "Tech Stack",
      title: "The tools behind our work.",
      intro:
        "We use a carefully selected ecosystem of marketing, analytics, design, development, and AI tools to deliver efficient, measurable, and scalable solutions for our clients.",
      categories: {
        marketing: "Marketing & Analytics",
        design: "Design & Content",
        engineering: "Engineering & AI",
      },
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
    quotePage: {
      title: "Get a quote.",
      sub: "Tell us about your organization and what you need — we will come back with a clear, obligation-free proposal.",
      note: "This form is for organizations requesting a service quote. For anything else, use the contact page.",
      org: "Organization name",
      name: "Full name",
      email: "Email",
      phone: "Mobile number",
      service: "Required service",
      servicePlaceholder: "Choose a service…",
      notes: "Notes or inquiries (optional)",
      submit: "Send Request",
      sending: "Sending…",
      afterNote: "We\u2019ll review your request and get back to you shortly.",
      successMsg:
        "Thank you — your request has been sent. We\u2019ll review it and get back to you shortly.",
      errorMsg:
        "Something went wrong and your request was not sent. Please try again, or email us at hello@watm.com.sa.",
      waIntro: "Quote request from the website",
    },
    privacyPage: {
      title: "Privacy Policy",
      sub: "How Watm collects, uses, and protects your information on watm.com.sa.",
      sections: [
        {
          h: "Our commitment",
          body: "Watm respects the privacy of every visitor to this website. This policy explains what information we collect, why we collect it, and how we protect it. By using this website you consent to the practices described here.",
        },
        {
          h: "Information we collect",
          body: "We only collect personal information you choose to share with us — such as your name, organization, email address, and phone number when you request a quote or contact us by email or WhatsApp. We do not require personal information to browse the website.",
        },
        {
          h: "How we use it",
          body: "Information you share is used to respond to your inquiry, prepare proposals, and deliver the services you request. We do not sell or rent personal information to anyone.",
        },
        {
          h: "Cookies and analytics",
          body: "We use Google Analytics to understand how visitors use the website — pages visited, time on site, and general location. This data is aggregated and does not identify you personally. You can disable cookies in your browser settings at any time.",
        },
        {
          h: "Protection of personal information",
          body: "Access to personal information is restricted to authorized team members who need it to serve you. We apply reasonable technical and organizational safeguards, in line with the Kingdom's Personal Data Protection Law (PDPL).",
        },
        {
          h: "Third parties",
          body: "We share information only with the service providers required to operate this website and our services — such as hosting and analytics providers — and only to the extent necessary. We never sell your data.",
        },
        {
          h: "Your rights and contact",
          body: "You may request access to, correction of, or deletion of your personal information at any time by writing to hello@watm.com.sa.",
        },
      ],
      updated: "Last updated: September 2026",
    },
    termsPage: {
      title: "Terms of Service",
      sub: "The terms that govern your use of watm.com.sa and our services.",
      sections: [
        {
          h: "Acceptance of terms",
          body: "By accessing or using this website, you agree to these Terms of Service. If you do not agree with any part of them, please do not use the website.",
        },
        {
          h: "Use of the website",
          body: "This website and its content are provided for lawful purposes only. You agree not to misuse the website, attempt to disrupt its operation, or use its content in any way that infringes the rights of Watm or others.",
        },
        {
          h: "Services and proposals",
          body: "Descriptions of our services on this website are for general information. The scope, pricing, and terms of any engagement are defined only in a written proposal or agreement signed between Watm and the client. A quote request through this website does not create a contractual obligation on either side.",
        },
        {
          h: "Intellectual property",
          body: "All content on this website — including the Watm name, logo, designs, text, and imagery — is the property of Watm or its licensors. It may not be copied, reproduced, or used commercially without prior written permission.",
        },
        {
          h: "Third-party links and tools",
          body: "The website may link to external platforms such as WhatsApp, LinkedIn, and analytics providers. Watm is not responsible for the content or practices of third-party services, which are governed by their own terms.",
        },
        {
          h: "Limitation of liability",
          body: "The website is provided on an as-is basis. While we work to keep its content accurate and available, Watm makes no warranties of any kind and is not liable for any damages arising from the use of, or inability to use, this website.",
        },
        {
          h: "Changes to these terms",
          body: "We may update these Terms of Service from time to time. The latest version will always be published on this page, and continued use of the website constitutes acceptance of the updated terms.",
        },
        {
          h: "Governing law and contact",
          body: "These terms are governed by the laws of the Kingdom of Saudi Arabia. For any questions about them, contact us at hello@watm.com.sa.",
        },
      ],
      updated: "Last updated: September 2026",
    },
    ourWork: {
      eyebrow: "Our Work",
      title: "Our Work",
      heroSub:
        "A closer look at what we deliver — campaigns, brands, platforms, and creative work built for organizations across the Kingdom.",
      whatWeDoTitle: "What we do",
      whatWeDoIntro:
        "Eight disciplines. One integrated team. Explore our areas of expertise and services in more detail on our Services page.",
      featuredTitle: "Featured Work",
      featuredIntro:
        "Real products we designed, engineered, and shipped with our clients.",
      builtFor: "Built for",
      devTitle: "Development",
      devIntro:
        "Web and mobile products we engineered end to end — front-end, back-end, and everything between.",
      aiTitle: "AI & Integration",
      aiIntro:
        "Computer-vision use cases and AI agents we build and integrate into our clients' operations — including chat and voice bots that answer from live business data.",
      libraryTitle: "Our Work Library",
      libraryIntro:
        "Browse the library by category — every piece shown here is our own work.",
      testimonialsTitle: "What Our Clients Say",
      testimonialsIntro: "Real words from the organizations we serve.",
      ctaTitle: "Ready to create something meaningful?",
      ctaBtn: "Start a Project",
      filters: {
        all: "All",
        technology: "Technology",
        campaigns: "Campaigns",
        branding: "Branding",
        social: "Social Media",
        events: "Events",
        creative: "Creative",
        photography: "Photography",
        other: "Other",
      },
      lightbox: {
        close: "Close image viewer",
        prev: "Previous image",
        next: "Next image",
      },
      carousel: { prev: "Previous testimonial", next: "Next testimonial" },
      empty: "No work in this category yet.",
    },
    waFloatLabel: "Chat with WATM on WhatsApp",
    faq: {
      eyebrow: "FAQ",
      title: "Frequently Asked Questions",
      home: [
        {
          q: "What services does WATM provide?",
          a: "WATM is a Saudi digital marketing and technology partner. We handle social media management, paid media, content and copywriting, branding, SEO, and full web and mobile app development — plus AI and computer-vision solutions — all delivered by one integrated team in Riyadh.",
        },
        {
          q: "Where is WATM located and which markets do you serve?",
          a: "We are based in Riyadh and serve organizations across the Kingdom of Saudi Arabia, with full support in both Arabic and English. We also work with regional and international clients remotely.",
        },
        {
          q: "What makes WATM different from other marketing agencies?",
          a: "We combine marketing and engineering under one roof. Beyond campaigns, we build real technology — AI retail analytics, mobile apps, and web platforms — and we measure everything, so you always know what your budget delivered.",
        },
        {
          q: "How do I start working with WATM?",
          a: "Request a quote through the website or message us on WhatsApp. The first consultation is free and without obligation — we listen to your goals and come back with a clear, scoped proposal.",
        },
        {
          q: "Do you work in Arabic and English?",
          a: "Yes. Our strategists and writers produce native Arabic and English content, and every campaign, website, and report we deliver can be fully bilingual.",
        },
      ],
      services: [
        {
          q: "Can I hire WATM for a single service only?",
          a: "Yes. Engage us for one discipline — for example social media management or SEO — or entrust us with the full journey. Every service is designed to work on its own or in concert with the rest.",
        },
        {
          q: "How much do your services cost?",
          a: "Pricing depends on scope. Tell us what you need through the Get a Quote form and we will reply with a transparent, itemized proposal — no hidden fees and no obligation.",
        },
        {
          q: "How long does a website or mobile app take to build?",
          a: "A campaign landing page typically takes 1–2 weeks, a full corporate website 4–8 weeks, and mobile apps from 8 weeks upward depending on features. We agree on a timeline you can hold us to before we start.",
        },
        {
          q: "Do you build AI solutions for businesses?",
          a: "Yes. We build and deploy AI and computer-vision systems — such as camera-based retail analytics, and AI chat and voice agents that answer from your own business data in Arabic and English.",
        },
        {
          q: "Will I receive reports on results?",
          a: "Always. We report in plain language on a regular schedule: what we did, what it cost, and what it delivered — with the numbers to back it up.",
        },
      ],
      work: [
        {
          q: "What kinds of projects has WATM delivered?",
          a: "Both marketing and technology: AI retail-intelligence platforms, food-delivery apps, institutional messaging and data platforms, brand campaigns, and creative production — for clients ranging from retail chains to fintech companies.",
        },
        {
          q: "Are the projects shown here real client work?",
          a: "Yes. Everything in our work library was designed, engineered, or produced by the WATM team for real clients. We never present stock or borrowed work as our own.",
        },
        {
          q: "Can WATM build something similar for my company?",
          a: "Absolutely. The same team behind these projects will work on yours. Start with the Get a Quote form, tell us your goal, and we will propose the right approach.",
        },
        {
          q: "Do you share detailed results and case studies?",
          a: "We share what our clients approve publicly, and in a private consultation we can walk you through relevant case details, numbers, and lessons that match your industry.",
        },
      ],
      contact: [
        {
          q: "What is the fastest way to reach WATM?",
          a: "WhatsApp is fastest — message us at +966 55 402 0279. You can also email hello@watm.com.sa or send the quote form, and your request goes straight to our team inbox.",
        },
        {
          q: "How quickly do you respond?",
          a: "Within one business day, and usually much faster during Saudi business hours. Responsiveness is one of the standards we hold ourselves to.",
        },
        {
          q: "Is the first consultation free?",
          a: "Yes. The first conversation is always free and without obligation — we use it to understand your goals and whether we are the right partner for the journey.",
        },
        {
          q: "Do you work with clients outside Riyadh?",
          a: "Yes. We are based in Riyadh and work with clients across the Kingdom and beyond — meetings, reporting, and collaboration all work smoothly remotely.",
        },
      ],
    },
    whatsappHref:
      "https://wa.me/966554020279?text=Hello%20Watm%20team%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services%20and%20discuss%20how%20we%20can%20work%20together.",
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      ourWork: "أعمالنا",
      contact: "تواصل معنا",
      getInTouch: "تواصل معنا",
    },
    hero: {
      line1: "نصنع علامات تجارية",
      line2: "يتذكرها الجميع",

      sub: " واتم شريك سعودي استوحى اسمه من الكَمال والتمَام. نجمع الاستراتيجية، والإبداع، والتقنية، والابتكار تحت سقف واحد، لنساعد المؤسسات الطموحة على تعزيز حضورها، وكسب ثقة جماهيرها، وتحقيق نتائج ملموسة تواكب طموحات رؤية المملكة العربية السعودية 2030.",

      cta1: "ابدأ شراكتك معنا",
      cta2: "اكتشف أعمالنا",

      alt: "رجل بالزي السعودي التقليدي أمام أفق مدينة الرياض",
    },
    oneLiner: {
      items: [
        "الاستراتيجيات والخطط التسويقية",
        "المحتوى الإبداعي",
        "بنـاء وتطوير المواقع الإلكترونية التفاعـلية",
        "بناء وتطوير التطبيقات",
        "الذكاء الاصطناعي والتحليل الذكي",
        "الحملات الإعـلانية",
      ],
      tail: "شريك واحد، رؤية واحدة، معيار واحد قابل للقياس",
    },
    about: {
      eyebrow: "عن واتم",
      title: "شريك سعودي بُني للطموح",
      p1: "تأسست واتم على قناعة واضحة بأن كل منظمة تستحق تواصلاً طموحاً بقدر أهدافها وهذا بالضبط ما نسعى لتركه مع كل علامة تجارية نخدمها",
      p2: "نحن استراتيجيون ومبدعون ومبتكرون نفهم السوق السعودي وجمهوره والمعايير العالية التي تضعها المملكة لنفسها. نبدأ بأهدافك، ندرس جمهورك بعناية، ونبني كل حملة لهـدف واضح والنتائج التي تهم عملك فعلاً.",
      stats: [
        { value: 40, suffix: "+", label: "جهة خدمناها" },
        { value: 120, suffix: "+", label: "حملة أطلقناها" },
        { value: 8, suffix: "M+", label: "جمهور وصلنا إليه" },
      ],
      cta: "تعرّف على واتم أكثر",
    },
    services: {
      eyebrow: "خدماتنا",

      title: "قدرات متكاملة، يتم تقديمها بمعيار واحد",

      intro:
        "تعامل معنا لخدمة واحدة، أو ائتمـنّا بالرحلة كاملة، كل خدمة مصممة للعمل بتناغم مع البقية.",

      items: [
        {
          title: "إدارة وسائل التواصل الاجتماعي",

          body: "ندير قنواتك بكل سلاسة من التصميم الى كتابة المحتوى لكل منصة وجمهور، تفاعل المجتمع يعكس قيمك، وحضور ثابت وموثوق.",
        },

        {
          title: "الإعلانات المدفوعة (تسويق الأداء)",

          body: "إعلانات دقيقة وقابلة للقياس عبر Google و Meta و TikTok وغيرها. نستثمر حيث تثبت الأداء، نعدّل بانضباط، ونحاسب على كل ريال برؤية كاملة.",
        },

        {
          title: "المحتوى والكتابة",

          body: "كلمات تحمل رسالتك بوضوح واقتناع، بالعربية والإنجليزية، من الحملات والمقالات إلى النصوص وصفحات الهبوط، نكتب لنؤثر ونحرك الجمهور الى اتخاذ القرار.",
        },

        {
          title: "تطوير المواقع الإلكترونية",

          body: "مواقع سريعة وآمنة وتفاعلية مصممة للأداء، نبنيها من الطرفين — الواجهات الأمامية والأنظمة الخلفية. منصات المؤسسات والتجارة الإلكترونية وأنظمة ERP الداخلية وصفحات الحملات — مبنية للجوال أولًا ومحسّنة للبحث.",
        },

        {
          title: "تطوير التطبيقات",

          body: "تطبيقات الهاتف الذكي لـ iOS و Android مصممة حول الأشخاص الذين سيستخدمونها، من المفهوم إلى الإطلاق وما بعده، نمتلك التصميم والهندسة وكل تفصيل بينهما.",
        },

        {
          title: " الذكاء الاصطناعي والتحليل الذكي",

          body: "تحليلات ذكية للمتاجر عبر الكاميرات — عدّ الزوار، ومراقبة الطوابير، ومتابعة الأرفف والموظفين. نحوّل البث المباشر إلى قرارات بنماذج يبنيها وينشرها مهندسونا.",
        },

        {
          title: "وكلاء الذكاء الاصطناعي والأتمتة",

          body: "وكلاء صوتيون ووكلاء لخدمة العملاء ومساعدون أذكياء يجيبون من بيانات منشأتك — يؤتمتون الأعمال المتكررة بالعربية والإنجليزية.",
        },

        {
          title: "تحسين محركات البحث والتسويق الرقمي",

          body: "الرؤية المستدامة في البحث، محققة عبر أسس تقنية سليمة ومحتوى حقيقي مفيد، نساعد الجمهور الصحيح في العثور عليك — والاستمرار في العثور عليك وبينهما فرق شاسع.",
        },

        {
          title: "العلامة التجارية والهوية",

          body: "هويات العلامة التجارية مدروسة وأنظمة بصرية كاملة، نعطي منظمتك حضوراً يُشير إلى الريادة ويكسب الثقة من النظرة الأولى.",
        },
      ],
    },
    why: {
      eyebrow: "لماذا واتم",

      title: "المعايير التي يعتمد عليها شركاؤنا",

      intro:
        "نتعامل مع ميزانيتك كأنها أموالنا، ونلزم أنفسنا بمعايير واضحة يمكنك قياسها.",

      standards: [
        {
          title: "الاستجابة السريعة",

          body: "ستحصل دائمًا على نقطة اتصال واضحة ورد سريع. نعتبر التواصل أساس كل شراكة، وليس فكرة ثانوية.",
        },

        {
          title: "الشفافية",

          body: "نقدم التقارير بلغة واضحة. ستفهم دائمًا ما فعلناه، وما كلفه، وما حققه.",
        },

        {
          title: "النمو المقاس",

          body: "نتحقق قبل أن نُوسّع، موجهين استثمارك نحو ما ثبت أداؤه.",
        },

        {
          title: "نتائج الأعمال قبل كل شيء",

          body: "الاعتراف مرحب، لكن النتائج ضرورية. نقيس نجاحنا بنجاحك.",
        },

        {
          title: "فريق واحد متكامل",

          body: "الاستراتيجي والمصمم والمهندس ومتخصص الإعلانات يعملون كواحد. لا شيء يضيع بين التخصصات.",
        },
      ],
    },
    team: {
      eyebrow: "فريقنا",
      title: "فريق يصنع أثرًا يتجاوز الحدود",
      intro:
        "يجمع فريقنا بين الإبداع والخبرة والتقنية لصناعة تجارب وحلول تصنع أثرًا حقيقيًا.",

      showDetails: "عرض التفاصيل",
      hideDetails: "العودة إلى الملف",

      members: [
        {
          id: 1,
          name: "وضحى الحربي",
          role: "المؤسسة والرئيسة التنفيذية لشركة واتم",
          bio: "مؤسسة شركة واتم لحلول التسويق الرقمي وتقنية المعلومات، تسعى من خلال واتم إلى تقديم حلول تسويقية وتقنية مبتكرة تركز على تطوير العلامات التجارية والارتقاء بحضورها في السوق. وتؤمن واتم بأن الأصالة تأتي أولًا؛ لذلك تحرص على تقديم أعمال منفردة وغير مكررة، بعيدة عن التقليد، ومصممة بما يتناسب مع هوية كل علامة تجارية واحتياجاتها.",
          image: "/team/watim-female.png",
        },

        {
          id: 2,
          name: "محمد المطيري",
          role: "استشاري تسويق",
          bio: "استشاري تسويق يساهم في تطوير الاستراتيجيات التسويقية وبناء الخطط التي تدعم نمو العلامات التجارية وتعزز حضورها في السوق. يركز على فهم احتياجات الجمهور، وتحويل الأهداف التجارية إلى مبادرات تسويقية واضحة وقابلة للتنفيذ.",
          image: "/team/watim-male.png",
        },

        {
          id: 3,
          name: "ملك صادق",
          role: "مصممة جرافيك واستراتيجية تسويق",
          bio: "أمتلك رؤية إبداعية وتسويقية تمكّنني من تحويل الأفكار إلى حلول بصرية مؤثرة تخدم أهداف العلامة التجارية، انطلاقًا من إيماني بأن التصميم هو وسيلة للتواصل والتأثير وليس مجرد عنصر بصري.",
          image: "/team/Malak-Sadek.jpeg",
        },

        {
          id: 4,
          name: "محمد ناصر",
          role: "مصمم جرافيك إبداعي ومتخصص في السوشال ميديا والهوية البصرية",
          bio: "مصمم جرافيك إبداعي ومتخصص في وسائل التواصل الاجتماعي وبناء الهويات البصرية، يمتلك خبرة تزيد عن 6 سنوات في Photoshop وIllustrator وPremiere، ويساعد العلامات التجارية على سرد قصصها بطريقة بصرية مؤثرة.",
          image: "/team/Mohammed-Nasser.jpeg",
        },

        {
          id: 5,
          name: "رؤى سميسم",
          role: "أخصائية UI/UX وضمان الجودة",
          bio: "أخصائية في تصميم تجارب المستخدم وواجهات الاستخدام وضمان الجودة، تهتم بتحويل الأفكار إلى تجارب رقمية واضحة وسهلة الاستخدام. تجمع بين الحس البصري والدقة في اختبار المنتجات، مع التركيز على التفاصيل وتحسين تجربة المستخدم وجودة الحلول الرقمية.",
          image: "/team/Roua-Smisem.png",
        },
      ],
    },
    process: {
      eyebrow: "كيف نعمل",
      title: "منهجية واضحة، من أول محادثة إلى نتيجة دائمة",
      steps: [
        {
          title: "الفهم",
          body: ". نأخذ الوقت لندرس أهدافك ومنتجك وجمهورك وطموحاتك قبل أن نقترح فكرة واحدة.",
        },
        {
          title: "التخطيط",
          body: "نحدد استراتيجية واضحة مع أهداف قابلة للقياس وجدول زمني يمكنك محاسبتنا عليه.",
        },
        {
          title: "التسليم",
          body: "نراقب الأداء بشكل مستمر ونُحسّن ما يعمل ،النمو بالنسبة لنا هو انضباط واستمرارية  — وليس مرحلة واحدة.",
        },
        {
          title: "التحسين",
          body: "نراقب الأداء باستمرار ونطوّر ما ينجح. النمو عندنا منهج مستمر، لا محطة واحدة.",
        },
      ],
    },
    partners: {
      eyebrow: "شركاؤنا",
      title: "نمو نبنيه مع شركاء نثق بهم",
      intro:
        "نعمل إلى جانب جهات طموحة وشركاء موثوقين لبناء تجارب رقمية مؤثرة وتحقيق نمو قابل للقياس.",
    },
    servicesPage: {
      title: "كل ما تحتاجه لتنمو.",
      sub: "بمعيار واحد وفريق واحد متكامل — اعمل معنا في تخصص واحد، أو أوكل إلينا الرحلة كاملة.",
      cta: "تحدث معنا عن مشروعك",
    },
    techStack: {
      eyebrow: "التقنيات والأدوات",
      title: "الأدوات التي نبني بها أعمالنا.",
      intro:
        "نعتمد منظومة مختارة بعناية من أدوات التسويق والتحليلات والتصميم والتطوير والذكاء الاصطناعي، لنقدّم لعملائنا حلولاً فعّالة وقابلة للقياس والتوسّع.",
      categories: {
        marketing: "التسويق والتحليلات",
        design: "التصميم والمحتوى",
        engineering: "الهندسة والذكاء الاصطناعي",
      },
    },
    contactPage: {
      title: "لنتحدث.",
      sub: "أخبرنا أين تريد أن تصل، وسنوضح لك الطريق — وما إذا كانت واتم الشريك المناسب لهذه الرحلة. الحديث الأول دائمًا دون أي التزام.",

      emailCard: "راسلنا بالبريد",
      whatsappCard: "تواصل عبر واتساب",
      linkedinCard: "تابعنا على لينكدإن",
      locationCard: "مقرنا",

      location: "الرياض، المملكة العربية السعودية",

      whatsappNote: "أسرع رد خلال ساعات العمل",
      emailNote: "للعروض والشراكات",
      linkedinNote: "أخبار الشركة وأعمالنا",
    },
    footer: {
      ctaTitle: "دعنا نبني شيئاً يستحق التذكر",
      ctaBody:
        "أخبرنا أين تنوي أن تكون، وسنريك الطريق — وما إذا كانت واتم الشريك المناسب للرحلة، المحادثة الأولى دائماً متعتنا، وبدون التزام.",
      consult: "اطلب استشارة",
      whatsapp: "تواصل معنا على واتس آب",
      tagline: "واتم — حين تبحث عن الكمال والتمـام ",
      explore: "استكشف",
      servicesCol: "خدماتنا",
      follow: "تابعنا",
      serviceLinks: [
        "إدارة وسائل التواصل الاجتماعي",
        "الإعلانات المدفوعة (تسويق الأداء)",
        "المحتوى والكتابة",
        " تطوير المواقع الإلكترونية",
        "تطوير التطبيقات",
        "تحسين محركات البحث والتسويق الرقمي",
        "العلامة التجارية والهوية",
      ],
      contactUs: "تواصل معنا",
      location: "الرياض، المملكة العربية السعودية",
      privacy: "سياسة الخصوصية",
      terms: "شروط الاستخدام",
      rights: "© 2026 واتم. جميع الحقوق محفوظة.",
    },
    quotePage: {
      title: "لنبدأ مشروعك",
      sub: "أخبرنا بما تريد بناءه أو تطويره، وسنراجع احتياجك ونعود إليك بالخطوة التالية.",
      note: "أكمل النموذج بالتفاصيل الأساسية عن منشأتك واحتياجك، وسيتواصل معك فريق واتم لمناقشة المشروع.",
      org: "اسم المنشأة",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الجوال",
      service: "ما الخدمة التي تحتاجها؟",
      servicePlaceholder: "اختر الخدمة…",
      notes: "حدثنا عن مشروعك (اختياري)",
      submit: "أرسل الطلب",
      sending: "جارٍ الإرسال…",
      afterNote: "سنراجع طلبك ونعود إليك قريبًا.",
      successMsg: "شكرًا لك — تم إرسال طلبك بنجاح، وسنراجعه ونعود إليك قريبًا.",
      errorMsg:
        "حدث خطأ ولم يُرسل طلبك. حاول مرة أخرى أو راسلنا على hello@watm.com.sa.",
      waIntro: "طلب عرض سعر من موقع واتم",
    },
    privacyPage: {
      title: "سياسة الخصوصية",
      sub: "كيف تجمع واتم معلوماتك وتستخدمها وتحميها على موقع watm.com.sa.",
      sections: [
        {
          h: "التزامنا",
          body: "تحترم واتم خصوصية كل زائر لهذا الموقع. توضح هذه السياسة ما نجمعه من معلومات، ولماذا نجمعه، وكيف نحميه. باستخدامك لهذا الموقع فإنك توافق على الممارسات الموضحة هنا.",
        },
        {
          h: "المعلومات التي نجمعها",
          body: "لا نجمع إلا المعلومات الشخصية التي تختار مشاركتها معنا — مثل اسمك واسم منشأتك وبريدك الإلكتروني ورقم جوالك عند طلب عرض سعر أو التواصل معنا عبر البريد أو واتساب. تصفح الموقع لا يتطلب أي معلومات شخصية.",
        },
        {
          h: "كيف نستخدمها",
          body: "تُستخدم المعلومات التي تشاركها للرد على استفسارك وإعداد العروض وتقديم الخدمات التي تطلبها. لا نبيع المعلومات الشخصية ولا نؤجرها لأي جهة.",
        },
        {
          h: "ملفات تعريف الارتباط والتحليلات",
          body: "نستخدم Google Analytics لفهم كيفية استخدام الزوار للموقع — الصفحات التي تُزار ومدة التصفح والموقع الجغرافي العام. هذه البيانات مجمّعة ولا تحدد هويتك شخصيًا، ويمكنك تعطيل ملفات تعريف الارتباط من إعدادات متصفحك في أي وقت.",
        },
        {
          h: "حماية المعلومات الشخصية",
          body: "الاطلاع على المعلومات الشخصية مقصور على أعضاء الفريق المصرح لهم ممن يحتاجونها لخدمتك. ونطبق ضوابط تقنية وتنظيمية مناسبة بما يتوافق مع نظام حماية البيانات الشخصية في المملكة.",
        },
        {
          h: "الجهات الخارجية",
          body: "لا نشارك المعلومات إلا مع مزودي الخدمات اللازمين لتشغيل هذا الموقع وخدماتنا — مثل الاستضافة والتحليلات — وبالقدر الضروري فقط. ولا نبيع بياناتك أبدًا.",
        },
        {
          h: "حقوقك والتواصل",
          body: "يمكنك في أي وقت طلب الاطلاع على معلوماتك الشخصية أو تصحيحها أو حذفها بمراسلتنا على hello@watm.com.sa.",
        },
      ],
      updated: "آخر تحديث: سبتمبر 2026",
    },
    termsPage: {
      title: "شروط الاستخدام",
      sub: "الشروط التي تحكم استخدامك لموقع watm.com.sa وخدماتنا.",
      sections: [
        {
          h: "قبول الشروط",
          body: "بدخولك إلى هذا الموقع أو استخدامك له فإنك توافق على شروط الاستخدام هذه. إذا كنت لا توافق على أي جزء منها، فنرجو عدم استخدام الموقع.",
        },
        {
          h: "استخدام الموقع",
          body: "يُتاح هذا الموقع ومحتواه للأغراض المشروعة فقط. وتوافق على عدم إساءة استخدام الموقع أو محاولة تعطيل عمله أو استخدام محتواه بأي شكل ينتهك حقوق واتم أو حقوق الآخرين.",
        },
        {
          h: "الخدمات والعروض",
          body: "أوصاف خدماتنا في هذا الموقع هي للتعريف العام. ولا يُحدد نطاق أي تعاقد وأسعاره وشروطه إلا في عرض أو اتفاقية مكتوبة وموقعة بين واتم والعميل. وطلب عرض السعر عبر الموقع لا ينشئ أي التزام تعاقدي على أي من الطرفين.",
        },
        {
          h: "الملكية الفكرية",
          body: "جميع محتويات هذا الموقع — بما فيها اسم واتم وشعارها والتصاميم والنصوص والصور — ملك واتم أو للمرخصين لها، ولا يجوز نسخها أو إعادة إنتاجها أو استخدامها تجاريًا دون إذن كتابي مسبق.",
        },
        {
          h: "الروابط والأدوات الخارجية",
          body: "قد يتضمن الموقع روابط لمنصات خارجية مثل واتساب ولينكدإن ومزودي التحليلات. ولا تتحمل واتم مسؤولية محتوى الخدمات الخارجية أو ممارساتها، إذ تحكمها شروطها الخاصة.",
        },
        {
          h: "حدود المسؤولية",
          body: "يُقدَّم الموقع كما هو. ومع حرصنا على دقة محتواه وتوافره، لا تقدم واتم أي ضمانات من أي نوع، ولا تتحمل مسؤولية أي أضرار تنشأ عن استخدام الموقع أو تعذر استخدامه.",
        },
        {
          h: "تعديل الشروط",
          body: "قد نحدّث شروط الاستخدام هذه من وقت لآخر، وتُنشر النسخة الأحدث دائمًا في هذه الصفحة. ويُعد استمرارك في استخدام الموقع قبولًا بالشروط المحدثة.",
        },
        {
          h: "القانون المعمول به والتواصل",
          body: "تخضع هذه الشروط لأنظمة المملكة العربية السعودية. ولأي استفسار عنها، راسلنا على hello@watm.com.sa.",
        },
      ],
      updated: "آخر تحديث: سبتمبر 2026",
    },
    ourWork: {
      eyebrow: "أعمالنا",
      title: "أعمالنا",
      heroSub:
        "نظرة أقرب على ما نقدمه — حملات، علامات تجارية، منصات، وأعمال إبداعية صممناها للجهات والمؤسسات في مختلف أنحاء المملكة.",

      whatWeDoTitle: "ماذا نقدم",
      whatWeDoIntro:
        "ثمانية تخصصات. فريق واحد متكامل. استكشف مجالات خبرتنا وخدماتنا بمزيد من التفاصيل عبر صفحة الخدمات.",

      featuredTitle: "أعمال مختارة",
      featuredIntro: "منتجات حقيقية صممناها وطوّرناها وأطلقناها مع عملائنا.",

      builtFor: "صُمم لـ",

      devTitle: "التطوير",
      devIntro:
        "منتجات للويب والجوال طوّرناها بالكامل من البداية إلى النهاية — من الواجهة الأمامية والخلفية وكل ما بينهما.",

      aiTitle: "الذكاء الاصطناعي والتقنيات الذكية",
      aiIntro:
        "حالات استخدام لرؤية الحاسب ووكلاء ذكاء اصطناعي نبنيها وندمجها في عمليات عملائنا — بما في ذلك روبوتات المحادثة والصوت التي تجيب من بيانات العمل المباشرة.",

      libraryTitle: "مكتبة أعمالنا",
      libraryIntro:
        "تصفح المكتبة حسب الفئة — كل عمل معروض هنا هو من أعمالنا الخاصة.",

      testimonialsTitle: "ماذا يقول عملاؤنا",
      testimonialsIntro: "كلمات حقيقية من الجهات التي نخدمها.",

      ctaTitle: "جاهز لصنع شيء ذي معنى؟",
      ctaBtn: "ابدأ مشروعًا",

      filters: {
        all: "الكل",
        technology: "التقنية",
        campaigns: "الحملات",
        branding: "الهوية والعلامة التجارية",
        social: "وسائل التواصل الاجتماعي",
        events: "الفعاليات",
        creative: "الإبداع",
        photography: "التصوير الفوتوغرافي",
        other: "أخرى",
      },

      lightbox: {
        close: "إغلاق عارض الصور",
        prev: "الصورة السابقة",
        next: "الصورة التالية",
      },

      carousel: {
        prev: "التقييم السابق",
        next: "التقييم التالي",
      },

      empty: "لا توجد أعمال في هذه الفئة حتى الآن.",
    },
    waFloatLabel: "تحدث مع واتم عبر واتساب",
    faq: {
      eyebrow: "الأسئلة الشائعة",
      title: "أسئلة يكثر طرحها",
      home: [
        {
          q: "ما الخدمات التي تقدمها واتم؟",
          a: "واتم شريك سعودي في التسويق الرقمي والتقنية. نقدم إدارة وسائل التواصل الاجتماعي، والإعلانات المدفوعة، والمحتوى وكتابة النصوص، والهوية البصرية، وتحسين محركات البحث، وتطوير المواقع والتطبيقات بالكامل — إضافة إلى حلول الذكاء الاصطناعي ورؤية الحاسب — عبر فريق واحد متكامل في الرياض.",
        },
        {
          q: "أين يقع مقر واتم وما المجالات التي تخدمونها؟",
          a: "مقرنا في الرياض، ونخدم المنشآت في جميع أنحاء المملكة العربية السعودية باللغتين العربية والإنجليزية. كما نعمل عن بُعد مع عملاء إقليميين ودوليين، ونقدم خدماتنا للقطاعين الحكومي والخاص، وللشركات الناشئة والمنشآت المتوسطة.",
        },
        {
          q: "ما الذي يميز واتم عن وكالات التسويق الأخرى؟",
          a: "نجمع التسويق والهندسة تحت سقف واحد. فإلى جانب الحملات، نبني تقنية حقيقية — تحليلات ذكاء اصطناعي للمتاجر وتطبيقات ومنصات ويب — ونقيس كل شيء، لتعرف دائمًا ما الذي حققته ميزانيتك.",
        },
        {
          q: "كيف أبدأ العمل مع واتم؟",
          a: "اطلب عرض سعر عبر الموقع أو راسلنا على واتساب. الاستشارة الأولى مجانية ودون أي التزام — نستمع لأهدافك ثم نعود إليك بعرض واضح ومحدد.",
        },
        {
          q: "هل تعملون بالعربية والإنجليزية؟",
          a: "نعم. يكتب فريقنا محتوى عربيًا وإنجليزيًا أصيلًا، وكل حملة أو موقع أو تقرير نقدمه يمكن أن يكون ثنائي اللغة بالكامل.",
        },
      ],
      services: [
        {
          q: "هل يمكنني التعاقد مع واتم لخدمة واحدة فقط؟",
          a: "نعم. يمكنك العمل معنا في تخصص واحد — كإدارة وسائل التواصل أو تحسين محركات البحث — أو أن توكل إلينا الرحلة كاملة. كل خدمة مصممة لتعمل منفردة أو بتناغم مع البقية.",
        },
        {
          q: "كم تبلغ تكلفة خدماتكم؟",
          a: "تعتمد التكلفة على نطاق العمل. أخبرنا بما تحتاجه عبر نموذج طلب عرض السعر وسنرد بعرض شفاف ومفصّل البنود — بلا رسوم خفية وبلا أي التزام.",
        },
        {
          q: "كم يستغرق بناء موقع إلكتروني أو تطبيق؟",
          a: "صفحة الهبوط للحملة عادة من أسبوع إلى أسبوعين، والموقع المؤسسي الكامل من 4 إلى 8 أسابيع، والتطبيقات من 8 أسابيع فأكثر حسب المزايا. نتفق على جدول زمني تحاسبنا عليه قبل البدء.",
        },
        {
          q: "هل تبنون حلول ذكاء اصطناعي للشركات؟",
          a: "نعم. نبني وننشر أنظمة ذكاء اصطناعي ورؤية حاسب — مثل تحليلات المتاجر عبر الكاميرات، ووكلاء محادثة وصوت يجيبون من بيانات منشأتك بالعربية والإنجليزية.",
        },
        {
          q: "هل سأحصل على تقارير بالنتائج؟",
          a: "دائمًا. نرفع تقارير دورية بلغة واضحة: ماذا فعلنا، وكم كلّف، وماذا حقق — مع الأرقام التي تثبت ذلك.",
        },
      ],
      work: [
        {
          q: "ما نوع المشاريع التي نفذتها واتم؟",
          a: "تسويق وتقنية معًا: منصات ذكاء اصطناعي لتحليلات المتاجر، وتطبيقات توصيل، ومنصات مراسلة وبيانات مؤسسية، وحملات علامات تجارية وإنتاج إبداعي — لعملاء من سلاسل التجزئة إلى شركات التقنية المالية.",
        },
        {
          q: "هل المشاريع المعروضة هنا أعمال حقيقية لعملاء؟",
          a: "نعم. كل ما في مكتبة أعمالنا صممه أو برمجه أو أنتجه فريق واتم لعملاء حقيقيين، ولا نعرض أبدًا أعمالًا جاهزة أو مستعارة على أنها أعمالنا.",
        },
        {
          q: "هل تستطيع واتم بناء مشروع مشابه لمنشأتي؟",
          a: "بالتأكيد. الفريق نفسه الذي أنجز هذه المشاريع سيعمل على مشروعك. ابدأ بنموذج طلب عرض السعر وأخبرنا بهدفك وسنقترح النهج الأنسب.",
        },
        {
          q: "هل تشاركون نتائج ودراسات حالة مفصلة؟",
          a: "نعرض علنًا ما يوافق عليه عملاؤنا، وفي استشارة خاصة يمكننا استعراض تفاصيل وأرقام الحالات المشابهة لقطاعك وما تعلمناه منها.",
        },
      ],
      contact: [
        {
          q: "ما أسرع طريقة للتواصل مع واتم؟",
          a: "واتساب هو الأسرع — راسلنا على ‎+966 55 402 0279. ويمكنك أيضًا مراسلتنا على hello@watm.com.sa أو إرسال نموذج عرض السعر، وسيصل طلبك مباشرة إلى بريد الفريق.",
        },
        {
          q: "كم تستغرقون في الرد؟",
          a: "خلال يوم عمل واحد، وغالبًا أسرع بكثير خلال ساعات العمل في السعودية. سرعة الاستجابة من المعايير التي نلزم أنفسنا بها.",
        },
        {
          q: "هل الاستشارة الأولى مجانية؟",
          a: "نعم. الحديث الأول دائمًا مجاني ودون أي التزام — نستخدمه لفهم أهدافك ومعرفة ما إذا كنا الشريك الصحيح لرحلتك.",
        },
        {
          q: "هل تعملون مع عملاء خارج الرياض؟",
          a: "نعم. مقرنا الرياض ونعمل مع عملاء في جميع مناطق المملكة وخارجها — فالاجتماعات والتقارير والتعاون تتم كلها عن بُعد بسلاسة.",
        },
      ],
    },
    whatsappHref:
      "https://wa.me/966554020279?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%20%D9%81%D8%B1%D9%8A%D9%82%20%D9%88%D8%AA%D9%85%D8%8C%20%D8%A3%D9%88%D8%AF%20%D9%85%D8%B9%D8%B1%D9%81%D8%A9%20%D8%A7%D9%84%D9%85%D8%B2%D9%8A%D8%AF%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85%20%D9%88%D9%85%D9%86%D8%A7%D9%82%D8%B4%D8%A9%20%D8%B3%D8%A8%D9%84%20%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D9%88%D9%86.",
  },
} as const;

export type Dict = (typeof dict)["en"] | (typeof dict)["ar"];

/* Browser-tab titles per route, per language — applied by LanguageProvider
   so the tab always matches the active site language. */
export const pageTitles: Record<string, { en: string; ar: string }> = {
  "/": {
    en: "Watm — Digital Marketing & Technology Partner, KSA",
    ar: "واتم | شريك التسويق الرقمي والتكنولوجيا في السعودية",
  },
  "/about": { en: "About Us — Watm", ar: "من نحن | واتم" },
  "/services": { en: "Our Services — Watm", ar: "خدماتنا | واتم" },
  "/our-work": { en: "Our Work — Watm", ar: "أعمالنا | واتم" },
  "/contact": { en: "Contact Us — Watm", ar: "تواصل معنا | واتم" },
  "/get-a-quote": { en: "Get a Quote — Watm", ar: "اطلب عرض سعر | واتم" },
  "/privacy-policy": { en: "Privacy Policy — Watm", ar: "سياسة الخصوصية | واتم" },
  "/terms-of-service": { en: "Terms of Service — Watm", ar: "شروط الاستخدام | واتم" },
};

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

  const pathname = usePathname();

  // reflect the language on <html> so direction, alignment, and fonts follow
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  // keep the browser-tab title in the active language for every page.
  // Next.js re-applies the static metadata title after hydration, so we
  // also observe the <title> element and re-assert the localized one.
  useEffect(() => {
    const apply = () => {
      const titles = pageTitles[pathname ?? ""];
      if (titles && document.title !== titles[lang]) {
        document.title = titles[lang];
      }
    };
    apply();
    // Next replaces the <title> node itself, so watch the whole <head>
    const observer = new MutationObserver(apply);
    observer.observe(document.head, {
      subtree: true,
      childList: true,
      characterData: true,
    });
    return () => observer.disconnect();
  }, [lang, pathname]);

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
