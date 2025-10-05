import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhanya Shaji | Fullstack Engineer",
  description:
    "Portfolio of Dhanya Shaji — Fullstack Engineer (React, Next.js, TypeScript, Node.js)",
  metadataBase: new URL("https://dhanya.dev"),
  openGraph: {
    title: "Dhanya Shaji | Fullstack Engineer",
    description:
      "Fullstack Engineer with 6+ years experience in React, Next.js, TypeScript, Node.js",
    url: "https://dhanya.dev",
    siteName: "Dhanya Shaji",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanya Shaji | Fullstack Engineer",
    description:
      "Fullstack Engineer with 6+ years experience in React, Next.js, TypeScript, Node.js",
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
        {/* <div className="max-w-5xl mx-auto px-6 py-4 flex justify-end">
          <ThemeToggle />
        </div> */}
        {children}
      </body>
    </html>
  );
}
