"use client";
import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { LuSun, LuMoon } from "react-icons/lu";
import { useTheme } from "next-themes";

const ThemeSwitcher: NextPage = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  
  // Don't render anything if not mounted to avoid the react-hydration-error
  if (!mounted) return null;

  const IconToUse = resolvedTheme === "light" ? LuMoon : LuSun;

  return (
    <button
      type="button"
      aria-label="Theme Switcher"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex items-center outline-none rounded-full text-slate-600 hover:bg-slate-600 hover:text-white dark:text-white dark:hover:bg-slate-200 dark:hover:text-black"
    >
      <IconToUse className="size-5" />
    </button>
  );
};

export default ThemeSwitcher;