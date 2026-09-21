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
        "Six disciplines, one integrated team. Explore any of them in depth on the services page.",
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
      testimonialsIntro:
        "Real words from the organizations we serve.",
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
      line2: "يتذكرها الجميع.",

      sub: "واتم شريكك السعودي في بناء العلامات التجارية وصناعة التجارب الرقمية. نجمع الاستراتيجية، والإبداع، والتقنية، والابتكار تحت سقف واحد، لنساعد المؤسسات الطموحة على تعزيز حضورها، وكسب ثقة جماهيرها، وتحقيق نتائج ملموسة تواكب طموحات رؤية المملكة العربية السعودية 2030.",

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
        "الذكاء الاصطناعي ورؤية الحاسب",
        "الحملات الإعـلانية",
      ],
      tail: "شريك واحد، رؤية واحدة، معيار واحد قابل للقياس",
    },
    about: {
      eyebrow: "عن واتم",
      title: "شريك سعودي بُني للطموح.",
      p1: "تأسست واتم على قناعة واضحة بأن كل منظمة تستحق تواصلاً طموحاً بقدر أهدافها وهذا بالضبط ما نسعى لتركه مع كل علامة تجارية نخدمها",
      p2: "نحن استراتيجيون ومبدعون ومهندسون نفهم السوق السعودي وجمهوره والمعايير العالية التي تضعها المملكة لنفسها. نبدأ بأهدافك، ندرس جمهورك بعناية، ونبني كل حملة لهـدف واضح والنتائج التي تهم عملك فعلاً.",
      stats: [
        { value: 40, suffix: "+", label: "جهة خدمناها" },
        { value: 120, suffix: "+", label: "حملة أطلقناها" },
        { value: 8, suffix: "M+", label: "جمهور وصلنا إليه" },
      ],
      cta: "تعرّف على واتم أكثر",
    },
    services: {
      eyebrow: "خدماتنا",

      title: "قدرات متكاملة، يتم تقديمها بمعيار واحد.",

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
          title: "الذكاء الاصطناعي ورؤية الحاسب",

          body: "تحليلات ذكية للمتاجر عبر الكاميرات — عدّ الزوار، ومراقبة الطوابير، ومتابعة الأرفف والموظفين. نحوّل البث المباشر إلى قرارات بنماذج يبنيها وينشرها مهندسونا.",
        },

        {
          title: "وكلاء الذكاء الاصطناعي والأتمتة",

          body: "وكلاء صوتيون ووكلاء لخدمة العملاء ومساعدون أذكياء يجيبون من بيانات منشأتك — يؤتمتون الأعمال المتكررة بالعربية والإنجليزية.",
        },

        {
          title: "البحث عن المحتوى والنمو الرقمي",

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

      title: "المعايير التي يعتمد عليها شركاؤنا.",

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
      title: "فريق يصنع أثرًا يتجاوز الحدود.",
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
      title: "منهجية واضحة، من أول محادثة إلى نتيجة دائمة.",
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
      title: "نمو نبنيه مع شركاء نثق بهم.",
      intro:
        "نعمل إلى جانب جهات طموحة وشركاء موثوقين لبناء تجارب رقمية مؤثرة وتحقيق نمو قابل للقياس.",
    },
    servicesPage: {
      title: "كل ما تحتاجه لتنمو.",
      sub: "بمعيار واحد وفريق واحد متكامل — اعمل معنا في تخصص واحد، أو أوكل إلينا الرحلة كاملة.",
      cta: "تحدث معنا عن مشروعك",
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
      ctaTitle: "دعنا نبني شيئاً يستحق التذكر.",
      ctaBody:
        "أخبرنا أين تنوي أن تكون، وسنريك الطريق — وما إذا كانت واتم الشريك المناسب للرحلة، المحادثة الأولى دائماً متعتنا، وبدون التزام.",
      consult: "اطلب استشارة",
      whatsapp: "تواصل معنا على واتس آب",
      tagline: "واتم — حين تبحث عن الكمال والتمـام .",
      explore: "استكشف",
      servicesCol: "خدماتنا",
      follow: "تابعنا",
      serviceLinks: [
        "إدارة وسائل التواصل الاجتماعي",
        "الإعلانات المدفوعة (تسويق الأداء)",
        "المحتوى والكتابة",
        " تطوير المواقع الإلكترونية",
        "تطوير التطبيقات",
        "البحث عن المحتوى والنمو الرقمي",
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
      errorMsg: "حدث خطأ ولم يُرسل طلبك. حاول مرة أخرى أو راسلنا على hello@watm.com.sa.",
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
        "نظرة أقرب على ما نقدمه — حملات وهويات ومنصات وأعمال إبداعية بُنيت لمنشآت في مختلف أنحاء المملكة.",
      whatWeDoTitle: "ماذا نفعل",
      whatWeDoIntro:
        "تخصصات متكاملة يقدمها فريق واحد. استكشف أيًا منها بالتفصيل في صفحة الخدمات.",
      featuredTitle: "أعمال مختارة",
      featuredIntro: "منتجات حقيقية صممناها وبنيناها وأطلقناها مع عملائنا.",
      builtFor: "بنيناه لـ",
      devTitle: "التطوير",
      devIntro:
        "منتجات ويب وجوال بنيناها من البداية إلى النهاية — واجهات أمامية وأنظمة خلفية وكل ما بينهما.",
      aiTitle: "الذكاء الاصطناعي والتكامل",
      aiIntro:
        "حالات استخدام لرؤية الحاسب ووكلاء ذكاء اصطناعي نبنيها وندمجها في عمليات عملائنا — ومنها بوتات محادثة وصوت تجيب من بيانات العمل مباشرة.",
      libraryTitle: "مكتبة أعمالنا",
      libraryIntro:
        "تصفح المكتبة حسب الفئة — كل ما يُعرض هنا من أعمالنا الخاصة.",
      testimonialsTitle: "ماذا يقول عملاؤنا",
      testimonialsIntro: "كلمات حقيقية من الجهات التي نخدمها.",
      ctaTitle: "جاهز لنصنع شيئًا ذا أثر؟",
      ctaBtn: "ابدأ مشروعك",
      filters: {
        all: "الكل",
        technology: "التقنية",
        campaigns: "حملات",
        branding: "هوية بصرية",
        social: "وسائل التواصل",
        events: "فعاليات",
        creative: "إبداعي",
        photography: "تصوير",
        other: "أخرى",
      },
      lightbox: {
        close: "إغلاق عارض الصور",
        prev: "الصورة السابقة",
        next: "الصورة التالية",
      },
      carousel: { prev: "الرأي السابق", next: "الرأي التالي" },
      empty: "لا توجد أعمال في هذه الفئة بعد.",
    },
    waFloatLabel: "تحدث مع واتم عبر واتساب",
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
