import { ImageOff } from "lucide-react";
import { ImageFrame } from "@/components/ui/ImageFrame";
import type { ImageAsset } from "@/content/types";

type StoryImageProps = {
  image: ImageAsset | null;
  name: string;
  className?: string;
  sizes?: string;
};

// Renders the real photograph once approved, or a clearly-labelled
// placeholder that never implies a stock photo is the named individual.
export function StoryImage({ image, name, className = "", sizes }: StoryImageProps) {
  if (image) {
    return <ImageFrame image={image} className={className} sizes={sizes} />;
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 border border-dashed border-accent/40 bg-secondary/60 text-center ${className}`}
    >
      <ImageOff aria-hidden="true" className="h-6 w-6 text-muted-foreground" strokeWidth={1.5} />
      <p className="max-w-[16ch] text-xs font-medium text-muted-foreground">
        Approved photograph of {name} pending
      </p>
    </div>
  );
}
