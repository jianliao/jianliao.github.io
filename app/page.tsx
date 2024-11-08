import Image from "next/image";
import { HomePage } from "@/data/meta-data";

export default function Home() {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col-reverse space-y-4 md:space-y-0 space-y-reverse text-center md:text-right md:flex-row relative item-center justify-between w-full">
        <Image
          className="flex relative mx-auto md:mr-auto rounded-full"
          alt={HomePage.title}
          width={120}
          height={100}
          src={HomePage.avatar_url}
          priority
        />
        <div className="flex flex-col relative w-full space-y-4 justify-center">
          <h1 className="font-extrabold text-2xl tracking-tight">
            {HomePage.title}
          </h1>
          <h2 className="font-bold capitalize">{HomePage.description}</h2>
          <p className="mb-4 text-slate-600 dark:text-slate-400">
            {HomePage.motto}
          </p>
        </div>
      </div>
      <hr className="border-slate-200 dark:border-slate-600" />
      <div className="flex flex-col relative w-full space-y-4"></div>
    </div>
  );
}
