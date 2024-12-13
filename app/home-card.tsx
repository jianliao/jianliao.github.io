import Image from "next/image";

export default function HomeCard() {
  return (
    <div className="flex flex-col space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full text-center md:text-left space-y-4 md:space-y-0">
        <Image
          className="rounded-full"
          alt="Saint, my pet cat"
          width={120}
          height={120}
          src="/images/avatar.png"
          priority
        />
        <div className="flex flex-col w-96 space-y-4">
          <h1 className="font-bold text-2xl tracking-tight text-gray-900 dark:text-gray-100">Jian Liao</h1>
          <p className="text-gray-800 dark:text-gray-200">
            Passionate full-stack developer, DevOps enthusiast, and GenAI
            explorer based in sunny California.
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-slate-200 dark:border-slate-600" />
    </div>
  );
}
