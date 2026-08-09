import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const gamilia = localFont({
  src: "../public/fonts/GamiliademoRegular.otf",
  variable: "--font-gamilia",
  display: "swap",
});

export const cobe = localFont({
  src: "../public/fonts/Cobe-Regular.ttf",
  variable: "--font-cobe",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Unaiza Zafar | Full-Stack Developer",
  description:
    "Full-Stack Developer based in Rawalpindi, Pakistan. Building scalable web applications with React, Next.js, TypeScript, Supabase, and PostgreSQL. Project lead for RBAC portal dashboards.",
  openGraph: {
    title: "Unaiza Zafar | Full-Stack Developer",
    description:
      "Full-Stack Developer building scalable web applications with React, Next.js, TypeScript, Supabase, and PostgreSQL.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cobe.variable} ${gamilia.variable} ${jetbrainsMono.variable} font-cobe antialiased`}
      >
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-bg focus-ring"
        >
          Skip to content
        </a>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
