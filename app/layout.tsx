import "./globals.css";
import "katex/dist/katex.min.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import { FaGithub, FaHome, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";
import ThemeSwitcher from "./theme-switcher";

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
      suppressHydrationWarning
      className={`${inter.className}`}
    >
      <body className="antialiased tracking-tight">
        <ThemeProvider enableSystem={true} attribute="class">
          <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 pl-8 pr-8 pb-8">
            <Header />
            <main className="flex-grow max-w-4xl mx-auto w-full space-y-6">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="flex justify-end p-4">
      <ThemeSwitcher />
    </header>
  )
}

function Footer() {
  const links = [
    {
      label: "home",
      href: "/",
      icon: <FaHome className="size-5" />,
      internal: true,
    },
    {
      label: "@jianliao",
      href: "https://x.com/jianliao",
      icon: <FaTwitter className="size-5" />,
      internal: false,
    },
    {
      label: "github",
      href: "https://github.com/jianliao",
      icon: <FaGithub className="size-5" />,
      internal: false,
    },
    {
      label: "huggingface",
      href: "https://huggingface.co/jianliao",
      icon: <SiHuggingface className="size-5" />,
      internal: false,
    },
    {
      label: "linkedin",
      href: "https://www.linkedin.com/in/jianliao",
      icon: <FaLinkedin className="size-5" />,
      internal: false,
    },
  ];

  return (
    <footer className="mt-12">
      <div className="flex justify-between items-center max-w-4xl mx-auto w-full tracking-tight">
        <span className="text-sm text-gray-500">
          © {new Date().getFullYear()} Jian Liao. All rights reserved.
        </span>
        <div className="flex space-x-4">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              title={link.label}
              className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
              aria-label={`Link to my ${link.label}`}
              {...(!link.internal && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
