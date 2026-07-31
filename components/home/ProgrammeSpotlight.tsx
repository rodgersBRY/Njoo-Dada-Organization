import { ImageFrame } from "@/components/ui/ImageFrame";
import { programmeImages, programmeSpotlightCaption } from "@/content/programme-imagery";

/**
 * Full-bleed photographic band between the section intro and the programme
 * grid. The image sits `absolute inset-0` inside a `relative`, aspect-ratio
 * sized wrapper — ImageFrame merges classes with `cn()` (tailwind-merge) so
 * `absolute` correctly wins over its own default `relative`, rather than the
 * two colliding and collapsing the image to zero height.
 */
export function ProgrammeSpotlight() {
  return (
    <div className="relative aspect-16/10 w-full overflow-hidden md:aspect-21/9">
      <ImageFrame
        image={programmeImages.graduation}
        className="absolute inset-0 border-0"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-primary/85 via-primary/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
        <p className="max-w-2xl font-display text-2xl leading-snug text-primary-foreground md:text-3xl">
          {programmeSpotlightCaption}
        </p>
      </div>
    </div>
  );
}
