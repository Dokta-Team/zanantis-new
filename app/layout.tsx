import type { Metadata } from "next";
import { Quicksand, Nunito, Space_Mono } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-nunito",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zanantis — Africa's Healthcare & Wellness Distribution Platform",
  description:
    "Zanantis connects people, healthcare providers, wellness brands, pharmacies, and diagnostic partners through a technology-enabled distribution platform built for African healthcare realities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${quicksand.variable} ${nunito.variable} ${spaceMono.variable}`}>
      <body className="font-body text-ink-900 bg-ink-50 antialiased">
        {children}
      </body>
    </html>
  );
}
