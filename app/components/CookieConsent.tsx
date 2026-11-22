
"use client";

import { useEffect, useState } from "react";
import { useLang } from "../lib/i18n";
import { Cookie } from "lucide-react";

import {
  DEFAULT_CONSENT,
  readConsent,
  saveConsent,
  updateGoogleConsent,
  type CookieConsent as ConsentType,
} from "../lib/consent";

const GTM_ID = "GTM-TB22BH63";

function loadGoogleTagManager() {
  const gtmWindow = window as Window & {
    dataLayer?: unknown[];
    __watmGtmLoaded?: boolean;
  };

  if (gtmWindow.__watmGtmLoaded) return;

  gtmWindow.dataLayer = gtmWindow.dataLayer || [];

  gtmWindow.dataLayer.push({
    "gtm.start": Date.now(),
    event: "gtm.js",
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;

  const firstScript = document.getElementsByTagName("script")[0];

  if (firstScript?.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else {
    document.head.appendChild(script);
  }

  gtmWindow.__watmGtmLoaded = true;
}

export default function CookieConsent() {
  const { lang } = useLang();
  const isArabic = lang === "ar";

  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [consent, setConsent] = useState<ConsentType>(DEFAULT_CONSENT);
  const [gtmEnabled, setGtmEnabled] = useState(false);

  useEffect(() => {
    const stored = readConsent();

    if (stored) {
      setConsent(stored.consent);
      updateGoogleConsent(stored.consent);

      if (stored.consent.analytics || stored.consent.marketing) {
        setGtmEnabled(true);
      }
    } else {
      setVisible(true);
    }

    const openSettings = () => {
      const current = readConsent();

      if (current) {
        setConsent(current.consent);
      }

      setCustomizing(true);
      setVisible(true);
    };

    window.addEventListener("watm:open-cookie-settings", openSettings);

    return () => {
      window.removeEventListener("watm:open-cookie-settings", openSettings);
    };
  }, []);

  useEffect(() => {
    if (!gtmEnabled) return;

    loadGoogleTagManager();
  }, [gtmEnabled]);

  const save = (nextConsent: ConsentType) => {
    saveConsent(nextConsent);
    setConsent(nextConsent);
    setGtmEnabled(nextConsent.analytics || nextConsent.marketing);
    setVisible(false);
    setCustomizing(false);
  };

  const content = isArabic
    ? {
        label: "موافقة ملفات تعريف الارتباط",
        title: "نستخدم ملفات تعريف الارتباط",
        description:
          "نستخدم ملفات تعريف الارتباط الضرورية لتشغيل الموقع. وبموافقتك، نستخدم ملفات إضافية لتحليل الزيارات وتحسين تجربتك وقياس أداء حملاتنا.",
        accept: "قبول جميع الكوكيز",
        reject: "رفض الكل",
        customize: "تخصيص التفضيلات",
        save: "حفظ اختياراتي",
        necessary: "ملفات ضرورية",
        necessaryDesc: "تضمن عمل الموقع ووظائفه الأساسية.",
        analytics: "ملفات التحليلات",
        analyticsDesc: "تساعدنا على فهم استخدام الموقع وتحسين أدائه.",
        marketing: "ملفات التسويق",
        marketingDesc: "تساعدنا على قياس أداء الحملات التسويقية.",
        preferences: "ملفات التفضيلات",
        preferencesDesc: "تساعدنا على تذكر اختياراتك.",
        always: "مفعّلة دائماً",
        privacy: "سياسة الخصوصية",
      }
    : {
        label: "COOKIE CONSENT",
        title: "We use cookies.",
        description:
          "We use essential cookies to keep this website running. With your permission, we also use additional cookies to analyze visits, improve your experience, and measure our campaigns.",
        accept: "Accept All Cookies",
        reject: "Reject All",
        customize: "Customize Preferences",
        save: "Save My Choices",
        necessary: "Essential Cookies",
        necessaryDesc: "Keep the website and its core features working.",
        analytics: "Analytics Cookies",
        analyticsDesc:
          "Help us understand website usage and improve performance.",
        marketing: "Marketing Cookies",
        marketingDesc: "Help us measure our marketing campaigns.",
        preferences: "Preference Cookies",
        preferencesDesc: "Help us remember your choices.",
        always: "Always active",
        privacy: "Privacy Policy",
      };

  const categories = [
    {
      key: "analytics" as const,
      title: content.analytics,
      description: content.analyticsDesc,
    },
    {
      key: "marketing" as const,
      title: content.marketing,
      description: content.marketingDesc,
    },
    {
      key: "preferences" as const,
      title: content.preferences,
      description: content.preferencesDesc,
    },
  ];

  return (
    <>
      {!visible && null}

      {visible && (
        <div
          dir={isArabic ? "rtl" : "ltr"}
          className="fixed inset-x-0 bottom-0 z-[9999] p-3 sm:p-4"
        >
          <section
            role="dialog"
            aria-modal="false"
            aria-labelledby="watm-cookie-title"
            className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-[#36C3C9]/30 bg-gradient-to-br from-[#102D37] via-[#0A222C] to-[#071A23] text-[#F5FAFA] shadow-[0_12px_55px_rgba(0,0,0,0.38)]"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#36C3C9] to-transparent" />

            <div className="p-4 sm:p-5">
              <div className="grid gap-3 md:grid-cols-[1fr_176px] md:items-center md:gap-5">
                <div>
                  <div className="mb-2 flex items-center gap-2.5">
                    <Cookie
                      size={24}
                      strokeWidth={2}
                      className="shrink-0 text-[#36C3C9]"
                      aria-hidden="true"
                    />

                    <span className="text-[10px] font-bold tracking-[0.18em] text-[#55C9CD]">
                      {content.label}
                    </span>
                  </div>

                  <h2
                    id="watm-cookie-title"
                    className="mb-1 text-lg font-bold leading-snug sm:text-xl"
                  >
                    {content.title}
                  </h2>

                  <p className="max-w-2xl text-xs leading-5 text-[#C0D3D8] sm:text-[13px]">
                    {content.description}
                  </p>
                </div>

                <div className="flex w-full flex-col gap-2">
                  <button
                    onClick={() =>
                      save({
                        necessary: true,
                        analytics: true,
                        marketing: true,
                        preferences: true,
                      })
                    }
                    className="rounded-lg bg-[#36C3C9] px-3 py-2.5 text-sm font-semibold text-[#071D25] transition duration-300 hover:bg-[#65D6D9]"
                  >
                    {content.accept}
                  </button>

                  <button
                    onClick={() => save(DEFAULT_CONSENT)}
                    className="rounded-lg border border-[#6B8990]/40 bg-white/[0.035] px-3 py-2.5 text-sm font-medium text-white transition duration-300 hover:border-[#36C3C9]/60 hover:bg-white/[0.07]"
                  >
                    {content.reject}
                  </button>
                </div>
              </div>

              {customizing && (
                <div className="mt-4 border-t border-[#36C3C9]/20 pt-3">
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="rounded-xl border border-[#36C3C9]/20 bg-[#36C3C9]/[0.06] p-3">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-semibold">
                          {content.necessary}
                        </p>

                        <span className="text-[10px] text-[#55C9CD]">
                          {content.always}
                        </span>
                      </div>

                      <p className="mt-1 text-xs text-[#A7C1C7]">
                        {content.necessaryDesc}
                      </p>
                    </div>

                    {categories.map((category) => (
                      <label
                        key={category.key}
                        className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] p-3 transition hover:border-[#36C3C9]/30"
                      >
                        <span>
                          <span className="block text-sm font-medium">
                            {category.title}
                          </span>

                          <span className="mt-1 block text-xs text-[#A7C1C7]">
                            {category.description}
                          </span>
                        </span>

                        <input
                          type="checkbox"
                          checked={consent[category.key]}
                          onChange={(event) =>
                            setConsent((current) => ({
                              ...current,
                              [category.key]: event.target.checked,
                            }))
                          }
                          className="h-4 w-4 shrink-0 cursor-pointer accent-[#36C3C9]"
                        />
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-3 flex items-center justify-between gap-3 border-t border-[#36C3C9]/15 pt-2.5">
                <button
                  onClick={() => {
                    if (customizing) {
                      save(consent);
                    } else {
                      setCustomizing(true);
                    }
                  }}
                  className="text-xs font-medium text-[#49C9CE] transition hover:text-[#8BE5E6]"
                >
                  {customizing ? content.save : content.customize}
                </button>

                <a
                  href="/privacy-policy"
                  className="text-xs text-[#91ADB4] transition hover:text-[#49C9CE]"
                >
                  {content.privacy}
                </a>
              </div>
            </div>

            <div className="h-[2px] bg-gradient-to-r from-transparent via-[#36C3C9]/50 to-transparent" />
          </section>
        </div>
      )}
    </>
  );
}
