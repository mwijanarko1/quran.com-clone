import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";

// Initialize the Geist font with Latin subset
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Initialize the Geist Mono font with Latin subset
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define metadata for better SEO
export const metadata: Metadata = {
  title: "Quran.com - Read, Listen, Search, and Reflect on the Quran",
  description: "The Quran translated into many languages in a simple and easy interface. Read, search, listen, and reflect on the Holy Quran.",
  keywords: ["Quran", "Islam", "Holy Quran", "Recitation", "Translation", "Tafsir", "Muslim"],
  authors: [{ name: "Quran.com" }],
  creator: "Quran.com",
  publisher: "Quran Foundation",
  openGraph: {
    title: "Quran.com - Read, Listen, Search, and Reflect on the Quran",
    description: "The Quran translated into many languages in a simple and easy interface. Read, search, listen, and reflect on the Holy Quran.",
    url: "https://quran.com",
    siteName: "Quran.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Quran.com - The Noble Quran",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quran.com - Read, Listen, Search, and Reflect on the Quran",
    description: "The Quran translated into many languages in a simple and easy interface. Read, search, listen, and reflect on the Holy Quran.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 min-h-screen flex flex-col`}
      >
        <TooltipProvider>
          <Navbar />
          <main className="pt-16 flex-1">
            {children}
          </main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
