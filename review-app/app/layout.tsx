import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best of Austin | Curated Austin Recommendations",
  description:
    "Discover the best restaurants, coffee shops, nightlife, neighborhoods, and hidden gems in Austin, Texas.",
  keywords: [
    "Best Austin",
    "Austin Restaurants",
    "Austin Coffee Shops",
    "Things to do in Austin",
  ],
  openGraph: {
    title: "Best of Austin",
    description:
      "The most curated guide to Austin’s top places and experiences.",
    url: "https://yourdomain.com",
    siteName: "Best of Austin",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en" className="scroll-smooth">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
