import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jsluxblinds.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE_NAME} — Custom Korean Window Blinds`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "korean window blinds",
    "custom blinds philippines",
    "roller blinds",
    "roman blinds",
    "zebra blinds",
    "motorized blinds",
    "window blinds manila",
    "js lux blinds",
    "affordable window blinds",
  ],
  authors: [{ name: "JS Lux Blinds" }],
  creator: "JS Lux Blinds",
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: siteUrl,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Custom Korean Window Blinds`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "JS Lux Blinds — Elegance & Style on your windows",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Custom Korean Window Blinds`,
    description: SITE_DESCRIPTION,
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} font-body bg-brand-cream text-brand-brown antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
