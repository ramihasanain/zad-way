import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const cairo = Cairo({ subsets: ["arabic"], variable: '--font-cairo' });

export const metadata: Metadata = {
  title: "Zad Way | Premium Seafood Export",
  description: "Zad Way is a trusted import and export company specializing in high-quality sea food products for international markets.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Default to 'en' and 'ltr', will be updated by LanguageProvider on mount for client side
    <html lang="en" dir="ltr" className={`${inter.variable} ${cairo.variable}`}>
      <body className="font-sans bg-ocean-900 text-white min-h-screen flex flex-col antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
