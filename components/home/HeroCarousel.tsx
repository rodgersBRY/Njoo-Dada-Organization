"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { ImageAsset } from "@/content/types";

type HeroCarouselProps = {
  images: ImageAsset[];
};

const INTERVAL_MS = 6000;

export function HeroCarousel({ images }: HeroCarouselProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || paused || images.length <= 1) return;

    timerRef.current = setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, INTERVAL_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, images.length]);

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {images.map((image, index) => (
        <div
          key={image.src}
          aria-hidden={index !== active}
          className={`absolute inset-0 transition-all duration-[1400ms] ease-out ${
            index === active
              ? "z-10 scale-100 opacity-100"
              : "z-0 scale-110 opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
            style={{ objectPosition: image.focalPoint ?? "center" }}
          />
        </div>
      ))}

      {images.length > 1 ? (
        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show slide ${index + 1} of ${images.length}`}
              aria-current={index === active}
              className="flex min-h-6 min-w-6 items-center justify-center"
            >
              <span
                aria-hidden="true"
                className={`h-2 w-6 rounded-full transition-colors ${
                  index === active ? "bg-background" : "bg-background/40"
                }`}
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
