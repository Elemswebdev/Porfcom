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
  title: "Porfcom - Raising a people of faith, power, and purpose",
  description:
    "Welcome to Porfcom, a modern church community dedicated to raising a people of faith, power, and purpose",
  // generator: 'v0.app',
  icons: {
    icon: [
      {
        url: "/porfcom logo-cropped.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/porfcom logo-cropped.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/porfcom logo-cropped.png",
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
