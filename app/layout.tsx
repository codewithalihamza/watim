import type { Metadata } from "next";
import { Montserrat, Inter, Luckiest_Guy } from "next/font/google";
import "./globals.css";

/*
  Headline ("MARKETING SOLUTIONS START WITH") uses Montserrat 800 ExtraBold.
  The "WATM" wordmark uses a wobbly comic/sticker display face per the
  reference art — Luckiest Guy is the closest widely-available match.
  Inter carries body copy.
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
      className={`${montserrat.variable} ${inter.variable} ${luckiestGuy.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
