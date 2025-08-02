import type { Metadata } from "next";
import { Lexend, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UWShuffle - Quest Class Schedule Helper",
  description:
    "Preview class conflicts when swapping courses in the University of Waterloo Quest portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${hankenGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}
