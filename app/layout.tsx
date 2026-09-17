import type { Metadata } from "next";

import { Montserrat, Inter, Luckiest_Guy, Cairo } from "next/font/google";

import "./globals.css";

import { LanguageProvider } from "./lib/i18n";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import CursorGlow from "./components/CursorGlow";

/**
 * Headline ("MARKETING SOLUTIONS START WITH") uses Montserrat 800 ExtraBold.
 *
 * The "WATM" wordmark uses a wobbly comic/sticker display face per the
 * reference art — Luckiest Guy is the closest widely-available match.
 *
 * Inter carries body copy. Cairo carries all Arabic text (body + display)
 * when the site is switched to العربية.
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

  title: "واتم | شريك التسويق الرقمي والتكنولوجيا في السعودية",

  description:
    "واتم هو شريك التسويق الرقمي والتطوير السعودي. الاستراتيجية، الإعلانات، المحتوى، المواقع، والتطبيقات التي تبني علامات تجارية موثوقة ونموًا قابلًا للقياس.",

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
    title: "واتم | شريك التسويق الرقمي والتكنولوجيا في السعودية",
    description:
      "واتم هو شريك التسويق الرقمي والتطوير السعودي. الاستراتيجية، الإعلانات، المحتوى، المواقع، والتطبيقات التي تبني علامات تجارية موثوقة ونموًا قابلًا للقياس.",
    url: "https://watm.com.sa",
    siteName: "واتم",
    locale: "ar_SA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "واتم | شريك التسويق الرقمي والتكنولوجيا في السعودية",
    description:
      "شريكك في الاستراتيجية، الإعلانات، المحتوى، المواقع، والتطبيقات في السعودية.",
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
      <body className="min-h-full" suppressHydrationWarning>
        <LanguageProvider>
          <CursorGlow />
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
