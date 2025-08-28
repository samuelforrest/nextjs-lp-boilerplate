// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // custom CSS variable
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Sitro.io Generated Landing Page",
    template: "Sitro.io Generated Landing Page", // dynamic title support
  },
  description: "This webpage was made with Sitro.io, the free AI-landing page generator.",
  keywords: [
    "AI landing page",
    "landing page generator",
    "marketing automation",
    "website builder",
  ],
  authors: [{ name: "Sitro.io", url: "https://sitro.io" }],

  // Open Graph (for social media link previews)
  openGraph: {
    title: "Sitro.io Generated Landing Page",
    description: "Create high-converting landing pages instantly with AI.",
    url: "https://sitro.io", // replace with your domain
    siteName: "Sitro.io",
    images: [
      {
        url: "/og-image.png", // add your OG preview image in /public
        width: 1200,
        height: 630,
        alt: "AI Landing Page Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "AI Generated Landing Page",
    description: "Build landing pages with AI in seconds.",
    creator: "@yourhandle", // replace with your Twitter handle
    images: ["/og-image.png"],
  },

  // Favicon & manifest
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}