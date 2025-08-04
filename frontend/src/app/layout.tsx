import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UWShuffle - Quest. But Actually Usable.",
  description:
    "The Chrome extension that transforms your UW course registration experience. No more refreshing, no more stress. Just seamless course selection.",
  keywords:
    "UW, University of Washington, course registration, Quest, Chrome extension, UWShuffle",
  authors: [{ name: "UWShuffle Team" }],
  openGraph: {
    title: "UWShuffle - Quest. But Actually Usable.",
    description:
      "The Chrome extension that transforms your UW course registration experience.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
