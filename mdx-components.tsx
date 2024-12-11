import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const components = {
  h1: (props: HeadingProps) => (
    <h1
      className="text-gray-900 font-extrabold text-3xl mt-12 mb-6 leading-tight"
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className="text-gray-900 font-semibold text-2xl mt-10 mb-4 leading-snug"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className="text-gray-900 font-medium text-xl mt-8 mb-3 leading-snug"
      {...props}
    />
  ),
  h4: (props: HeadingProps) => (
    <h4 className="text-gray-900 font-medium text-lg mt-6 mb-2" {...props} />
  ),
  p: (props: ParagraphProps) => (
    <p className="text-gray-800 leading-relaxed mb-4" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol className="list-decimal pl-6 space-y-2 text-gray-800 mb-4" {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className="list-disc pl-6 space-y-2 text-gray-800 mb-4" {...props} />
  ),
  li: (props: ListItemProps) => (
    <li className="pl-1 leading-relaxed" {...props} />
  ),
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="font-semibold text-gray-900" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-gray-900" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      "text-blue-600 hover:text-blue-700 transition-colors";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 italic text-gray-700 my-6"
      {...props}
    />
  ),
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table className="w-full border-collapse border border-gray-200 my-4 text-gray-800 text-sm">
      <thead>
        <tr className="bg-gray-100">
          {data.headers.map((header, index) => (
            <th
              key={index}
              className="border border-gray-200 px-3 py-2 font-semibold text-left"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index} className="even:bg-gray-50">
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className="border border-gray-200 px-3 py-2 align-top"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
