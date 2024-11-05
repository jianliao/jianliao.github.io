import Link from "next/link";
import allPosts from "generated/content.json";

/* Same as: getStaticPaths */
export async function generateStaticParams() {
  return [{ slug: "blog" }];
}

export default function Blog() {
  return (
    <>
      <ul>
        {allPosts.map((post: any) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <li
              key={post.slug}
              className="flex flex-col w-full dark:hover:bg-slate-900 border hover:bg-slate-50 rounded p-4 mb-4 dark:border-slate-600 dark:bg-black hover:shadow-sm dark:hover:shadow-sm"
            >
              <span className="font-bold">{post.title}</span>
              <div className="flex justify-between">
                <time className="text-sm text-slate-400 mt-2">
                  {post.publishedAt}
                </time>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
