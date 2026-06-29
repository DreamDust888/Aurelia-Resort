import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { siteInfo } from "@/lib/data";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aureliaresort.com"),
  title: {
    default: `${siteInfo.name} — ${siteInfo.tagline}`,
    template: `%s · ${siteInfo.name}`,
  },
  description:
    "A coastal sanctuary of 48 private suites, a forest spa, fine dining and twelve acres of Mediterranean gardens. Aurelia Resort & Spa — where stillness becomes luxury.",
  keywords: [
    "luxury resort",
    "spa",
    "Amalfi Coast",
    "boutique hotel",
    "fine dining",
    "wellness retreat",
  ],
  openGraph: {
    title: `${siteInfo.name} — ${siteInfo.tagline}`,
    description:
      "A coastal sanctuary of private suites, a forest spa and fine dining on the Mediterranean.",
    type: "website",
    siteName: siteInfo.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-white font-inter text-charcoal antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
