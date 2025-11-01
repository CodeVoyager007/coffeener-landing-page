import type { Metadata } from "next";
import { Italiana, Inter } from "next/font/google";
import "./globals.css";

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italiana",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Coffeener - The Best Coffee in Your Stunning World",
  description: "The best Coffee in your stunning world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${italiana.variable} ${inter.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}
