"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ImageAsset } from "@/content/types";

type ParallaxImageProps = {
  image: ImageAsset;
  strength?: number;
  sizes?: string;
  className?: string;
};

export function ParallaxImage({
  image,
  strength = 80,
  sizes = "100vw",
  className = "",
}: ParallaxImageProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const update = () => {
      frameRef.current = null;
      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight;

      // Skip work while the section is nowhere near the viewport.
      if (rect.bottom < 0 || rect.top > viewport) return;

      // 0 as the section enters from below, 1 as it leaves past the top.
      const progress = (viewport - rect.top) / (viewport + rect.height);
      setOffset((progress - 0.5) * strength);
    };

    const onScroll = () => {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frameRef.current !== null)
        window.cancelAnimationFrame(frameRef.current);
    };
  }, [strength]);

  return (
    <div
      ref={sectionRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        // Overscan vertically so the drift never exposes an edge.
        className="absolute inset-x-0 top-[-12%] h-[124%] will-change-transform"
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          className="object-cover"
          style={{ objectPosition: image.focalPoint ?? "center" }}
        />
      </div>
    </div>
  );
}
