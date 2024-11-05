import Link from "next/link";
import { FaGithub, FaXTwitter, FaDiscord } from "react-icons/fa6";

const SocialIcons = [
  {
    title: "Discord",
    href: "https://discordapp.com/users/JianL#5198",
    icon: <FaDiscord className="size-6" />,
    target: "_blank",
  },
  {
    title: "X",
    href: "https://x.com/jianliao",
    icon: <FaXTwitter className="size-6" />,
    target: "_blank",
  },
  {
    title: "GitHub",
    href: "https://github.com/jianliao",
    icon: <FaGithub className="size-6" />,
    target: "_blank",
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col-reverse md:flex-row space-y-reverse space-y-4 md:space-y-0 text-center justify-between max-w-4xl container mx-auto p-6 text-slate-400 tracking-tight">
      <p className="text-slate-600 dark:text-slate-400">
        {`© ${new Date().getFullYear()}`}
        <Link
          className="hover:underline hover:text-black dark:hover:text-white underline-offset-[3px]"
          href={"https://github.com/jianliao"}
          target={"_blank"}
        >
          {" "}
          Jian Liao
        </Link>
        . All rights reserved.
      </p>
      <ul className="flex justify-center items-center space-x-2">
        {SocialIcons.map((social) => (
          <Link
            className="flex hover:text-black dark:hover:text-white"
            title={social.title}
            key={social.title}
            href={social.href}
            target={social.target}
          >
            {social.icon}
          </Link>
        ))}
      </ul>
    </footer>
  );
}
