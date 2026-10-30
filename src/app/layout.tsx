import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Fernstay — Boutique Mountain Resort (Concept Project)",
  description:
    "The Fernstay is a fictional concept boutique mountain resort. Concept project for the WanCredence portfolio.",
  openGraph: {
    title: "The Fernstay — Boutique Mountain Resort",
    description: "A fictional concept boutique mountain resort project.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-50 text-stone-900`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
