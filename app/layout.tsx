import "./globals.css";
import "katex/dist/katex.min.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  metadataBase: new URL("https://jianliao.github.io"),
  title: {
    default: "Jian Liao's Blog",
    template: `%s | Jian Liao's Blog`,
  },
  description:
    "Passionate full-stack developer, DevOps enthusiast, and GenAI explorer based in sunny California.",
  openGraph: {
    title: "Jian Liao",
    description:
      "Passionate full-stack developer, DevOps enthusiast, and GenAI explorer based in sunny California.",
    url: "https://jianliao.github.io",
    siteName: "Jian Liao",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Jian Liao",
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/icon.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${inter.className}`}
    >
      <body className="antialiased tracking-tight">
        <ThemeProvider enableSystem={true} attribute="class">
          <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-white text-gray-900">
            {/* <Header /> */}
            <main className="max-w-[60ch] mx-auto w-full space-y-6">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

function Footer() {
  const links = [
    { label: "@jianliao", href: "https://x.com/jianliao" },
    { label: "github", href: "https://github.com/jianliao" },
    { label: "linkedin", href: "https://www.linkedin.com/in/jianliao" },
    { label: "huggingface", href: "https://huggingface.co/jianliao" },
  ];
  return (
    <footer className="mt-12 text-center">
      <div className="flext justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
