import type { Metadata } from "next";
import { Montserrat, Inter, Luckiest_Guy, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./lib/i18n";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";

/*
  Headline ("MARKETING SOLUTIONS START WITH") uses Montserrat 800 ExtraBold.
  The "WATM" wordmark uses a wobbly comic/sticker display face per the
  reference art — Luckiest Guy is the closest widely-available match.
  Inter carries body copy. Cairo carries all Arabic text (body + display)
  when the site is switched to العربية.
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
  title: "Watm — Digital Marketing & Technology Partner, KSA",
  description:
    "Watm is a Saudi digital marketing and development partner. Strategy, media, content, websites, and apps that build trusted brands and measurable growth.",
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
