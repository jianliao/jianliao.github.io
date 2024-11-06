const HeaderNavLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

const HomePage = {
  metadata: {
    metadataBase: new URL("https://jianliao.github.io"),
    title: {
      default: "Jian Liao's Blog",
      template: `%s | Jian Liao's Blog`,
    },
    description: "Software engineer",
    openGraph: {
      title: "Jian Liao",
      description: "Software engineer",
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
  },
  title: "Jian Liao",
  description: "Software engineer",
  motto: "Software engineer",
  url: "https://jianliao.github.io",
  avatar_url: "/images/avatar.png",
};

export { HeaderNavLinks, HomePage };
