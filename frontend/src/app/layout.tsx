import type { Metadata } from "next";
import { Gabarito, Outfit } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
const gabarito = Gabarito({
  variable: "--font-gabarito",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UW Shuffle - making Quest easier to use",
  description:
    "The Chrome extension that transforms your UW course registration experience. No more refreshing, no more stress. Just seamless course selection.",
  keywords:
    "UW, University of Waterloo, course registration, Quest, Chrome extension, UW Shuffle",
  authors: [{ name: "UW Shuffle " }],
  openGraph: {
    title: "UW Shuffle - making Quest easier to use",
    description:
      "Preview your schedule, plan with friends, dodge bad professors, and make your Quest experience easier.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </head>
      <body className={`${gabarito.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
