import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat, Inter, Luckiest_Guy, Cairo } from "next/font/google";
import CookieConsent from "./components/CookieConsent";

import "./globals.css";

import { LanguageProvider } from "./lib/i18n";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import WhatsAppFloat from "./components/WhatsAppFloat";

/**
 * Headline uses Montserrat 800 ExtraBold.
 * WATM wordmark uses Luckiest Guy.
 * Inter carries body copy.
 * Cairo carries Arabic text.
 */

const montserrat = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["800", "900"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const luckiestGuy = Luckiest_Guy({
  variable: "--font-wordmark",
  subsets: ["latin"],
  weight: ["400"],
});

const cairo = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://watm.com.sa"),

  title: "Watm — Digital Marketing & Technology Partner, KSA",

  description:
    "Watm is a Saudi digital marketing and technology partner. Strategy, media, content, websites, apps, and AI solutions that build trusted brands and measurable growth.",

  keywords: [
    "واتم",
    "التسويق الرقمي",
    "التسويق الإلكتروني",
    "التسويق في السعودية",
    "تطوير المواقع",
    "تطوير التطبيقات",
    "الإعلانات المدفوعة",
    "صناعة المحتوى",
    "العلامة التجارية",
    "النمو الرقمي",
  ],

  alternates: {
    canonical: "https://watm.com.sa",
  },

  openGraph: {
    title: "Watm — Digital Marketing & Technology Partner, KSA",
    description:
      "Watm is a Saudi digital marketing and technology partner. Strategy, media, content, websites, apps, and AI solutions that build trusted brands and measurable growth.",
    url: "https://watm.com.sa",
    siteName: "واتم",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Watm — Digital Marketing & Technology Partner, KSA",
    description:
      "Watm is a Saudi digital marketing and technology partner. Strategy, media, content, websites, apps, and AI solutions that build trusted brands and measurable growth.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} ${luckiestGuy.variable} ${cairo.variable} h-full antialiased`}
    >
      <head>
        {/* Consent Mode defaults — optional storage denied */}
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function() {
              window.dataLayer.push(arguments);
            };

            window.gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              functionality_storage: 'granted',
              security_storage: 'granted',
              personalization_storage: 'denied'
            });
          `}
        </Script>
      </head>

      <body className="min-h-full" suppressHydrationWarning>
        <LanguageProvider>
          <CursorGlow />
          <Navbar />
          {children}
          <Footer />
          <WhatsAppFloat />
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
