import type { Metadata } from "next";
import { Gabarito, Outfit, Anton } from "next/font/google";
import "./globals.css";

const gabarito = Gabarito({
  variable: "--font-gabarito",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
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
        className={`${gabarito.variable} ${outfit.variable} ${anton.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
