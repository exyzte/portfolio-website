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
  title: "David Cicery | Full Stack AI Developer",
  description: "Transitioning from Modern Languages to AI-driven Full Stack development. Showcasing technical mastery through modern web experiences.",
  keywords: ["Next.js", "React", "AI Integration", "Full Stack", "Modern Languages", "Developer Portfolio"],
  authors: [{ name: "David" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

import GsapInitializer from "@/components/GsapInitializer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-[#050505]">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-neutral-200 selection:bg-yellow-400 selection:text-black`}
      >
        <GsapInitializer />
        <CustomCursor />
        <div className="noise-overlay" />
        <SmoothScroll>
          <main className="relative z-10 min-h-screen">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
