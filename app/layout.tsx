import "./globals.css";
import "katex/dist/katex.min.css";

import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { ThemeProvider } from "next-themes";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { HomePage } from "@/data/meta-data";

export const metadata: Metadata = HomePage.metadata;

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`flex flex-col h-screen ${inter.className}`}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Header />
          <main className="max-w-4xl container text-black dark:text-white mx-auto px-6 py-6 flex-1 leading-6">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
