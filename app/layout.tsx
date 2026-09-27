import type { Metadata } from "next";
import { Archivo_Black, Inter, Caveat, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const hand = Caveat({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const title = "Arish Qadri — Social Media Manager, Video Editor & Cinematographer";
const description =
  "Arish Qadri is a Social Media Manager, Video Editor and Cinematographer based in Jhalawar, Rajasthan — crafting reels, shorts, cinematic edits and social strategy for brands and personal creators.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://arishqadri.com"),
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
    <html lang="en">
      <body
        className={`${display.variable} ${sans.variable} ${hand.variable} ${mono.variable} bg-paper font-sans text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
