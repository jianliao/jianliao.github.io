import { Metadata } from "next";
import { ReactNode } from "react";
import allPosts from "generated/content.json";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const params = await props.params;
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) return;
  const { title, slug, publishedAt: publishedTime, thumbnail } = post;
  const ogImage = `${thumbnail}`;
  return {
    title,
    description: title,
    openGraph: {
      title,
      description: title,
      type: "article",
      publishedTime,
      url: `https://jianliao.github.io/blog/${slug}`,
      images: [
        {
          url: ogImage,
          type: "image/png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: title,
      images: [
        {
          url: ogImage,
          type: "image/png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

export default async function BlogLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
