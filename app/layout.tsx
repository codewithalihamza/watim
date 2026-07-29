import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

/*
  Headline ("MARKETING SOLUTIONS START WITH") and the "WATM" wordmark both
  use Montserrat per spec — 800 ExtraBold for the headline, 900 Black for
  the wordmark — with Inter carrying body copy.
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

export const metadata: Metadata = {
  title: "WATM — Marketing Solutions Start With WATM",
  description:
    "WATM Marketing Solutions. Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses, digital products, and physical products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
