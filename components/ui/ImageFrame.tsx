import Image from "next/image";
import type { ImageAsset } from "@/content/types";
import { cn } from "@/lib/cn";

type ImageFrameProps = {
  image: ImageAsset;
  sizes?: string;
  priority?: boolean;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
};

export function ImageFrame({
  image,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  className = "",
  fill = true,
  width,
  height,
}: ImageFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border border-border bg-muted",
        className,
      )}
    >
      {fill ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          style={{ objectPosition: image.focalPoint ?? "center" }}
        />
      ) : (
        <Image
          src={image.src}
          alt={image.alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className="h-auto w-full object-cover"
          style={{ objectPosition: image.focalPoint ?? "center" }}
        />
      )}
    </div>
  );
}
