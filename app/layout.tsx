import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

/*
  The comp sets its headline in a tight geometric sans with near-flat
  terminals; Sora is the closest widely-available match, with Inter carrying
  body copy.
*/
const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
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
      className={`${sora.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
