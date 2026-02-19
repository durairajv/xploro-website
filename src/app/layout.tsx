import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xploro — AI Native CX Intelligence Platform",
  description:
    "Turn every customer signal into intelligence. Unify 14+ channels, auto-respond to 60% of queries, and drive 94% faster response times with AI-powered CX agents.",
  keywords: "AI CX platform, customer experience intelligence, AI agents, review management, sentiment analysis, NPS, social media automation, customer intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
