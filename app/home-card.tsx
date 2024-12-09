import Image from "next/image";

export default function HomeCard() {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col-reverse space-y-4 md:space-y-0 space-y-reverse text-center md:text-right md:flex-row relative item-center justify-between w-full">
        <Image
          className="flex relative mx-auto md:mr-auto rounded-full"
          alt="Saint, my pet cat"
          width={120}
          height={120}
          src="/images/avatar.png"
          priority
        />
        <div className="flex flex-col relative w-96 space-y-4 justify-center">
          <h1 className="font-bold text-2xl tracking-tight">Jian Liao</h1>
          <p className="mb-4">
            Passionate full-stack developer, DevOps enthusiast, and GenAI
            explorer based in sunny California.
          </p>
        </div>
      </div>
      <hr className="border-slate-200 dark:border-slate-600" />
      <div className="flex flex-col relative w-full space-y-4"></div>
    </div>
  );
}
