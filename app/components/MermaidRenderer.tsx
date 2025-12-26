"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

/**
 * MermaidRenderer handles theme switching for SSR-rendered Mermaid diagrams.
 * 
 * rehype-mermaid with `img-svg` + `dark` option generates:
 * <picture>
 *   <source media="(prefers-color-scheme: dark)" srcset="...dark svg...">
 *   <img src="...light svg..." alt="">
 * </picture>
 * 
 * Since the site uses `data-theme` attribute instead of `prefers-color-scheme`,
 * this component swaps the img src based on the current theme.
 */
export default function MermaidRenderer() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // Find all picture elements that contain mermaid source
    const pictures = document.querySelectorAll(
      'picture:has(source[media="(prefers-color-scheme: dark)"])'
    );

    pictures.forEach((picture) => {
      const source = picture.querySelector(
        'source[media="(prefers-color-scheme: dark)"]'
      ) as HTMLSourceElement | null;
      const img = picture.querySelector("img") as HTMLImageElement | null;

      if (!source || !img) return;

      // Store original light src if not already stored
      if (!img.dataset.lightSrc) {
        img.dataset.lightSrc = img.src;
      }
      if (!img.dataset.darkSrc) {
        img.dataset.darkSrc = source.srcset;
      }

      // Swap src based on theme
      if (resolvedTheme === "dark") {
        img.src = img.dataset.darkSrc;
      } else {
        img.src = img.dataset.lightSrc;
      }
    });
  }, [resolvedTheme]);

  return null;
}
