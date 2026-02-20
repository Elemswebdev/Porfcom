import React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#3b82f6",
  width: "device-width",
  initialScale: 1,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "Power of Redemption Fire Covenant Ministry - Redemption House",
  description:
    "Empowered to liberate, restore, and reposition lives in their lost freedoms. Recovering of destinies, raising righteous Kings, menand women into their rightful places",
  // generator: 'v0.app',
  icons: {
    icon: [
      {
        url: "/images/porfcom logo-cropped.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/porfcom logo-cropped.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/images/porfcom logo-cropped.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
