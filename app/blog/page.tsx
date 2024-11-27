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
              <div className="flex flex-row justify-between">
                {/* Stack title and time vertically */}
                <div className="flex flex-col">
                  <span className="font-bold">{post.title}</span>
                  <time className="text-sm text-slate-400 mt-2">
                    {post.publishedAt}
                  </time>
                </div>
                {/* Thumbnail on the far right */}
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-16 h-16 object-cover ml-4 rounded"
                />
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
