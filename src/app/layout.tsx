import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lillique Training Institute | Esthetic & Permanent Makeup School",
    template: "%s | Lillique Training Institute",
  },
  description:
    "Virginia's premier esthetic training institute. Professional courses in esthetics, permanent cosmetics, microblading, laser training, and more. DPOR licensed.",
  keywords: [
    "esthetics school",
    "permanent makeup training",
    "microblading course",
    "laser training",
    "Fairfax Virginia",
    "beauty school",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
