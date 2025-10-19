import * as React from "react";

type Props = {
  src: string;
  poster?: string;
  width?: number;
  height?: number;
  captions?: { src: string; srcLang: string; label: string; default?: boolean }[];
  title?: string; // aria-label
};

export default function VideoPlayer({
  src,
  poster,
  width = 1280,
  height = 720,
  captions = [],
  title = "Demo video",
}: Props) {
  // Respect reduced motion (don’t autoplay if user prefers reduced motion)
  const prefersReduced = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  return (
    <div
      className="video-wrapper"
      style={{
        position: "relative",
        maxWidth: "100%",
        aspectRatio: `${width} / ${height}`,
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
      }}
    >
      <video
        src={src}
        poster={poster}
        controls
        preload="metadata"
        playsInline
        aria-label={title}
        style={{ width: "100%", height: "100%", display: "block", background: "#000" }}
        {...(prefersReduced ? {} : {})}
      >
        {captions.map((c, i) => (
          <track key={i} kind="captions" src={c.src} srcLang={c.srcLang} label={c.label} {...(c.default ? { default: true } : {})} />
        ))}
        Sorry, your browser doesn’t support embedded videos.
      </video>
    </div>
  );
}
