import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { StoryImage } from "@/components/home/StoryImage";
import { StoryJourney } from "@/components/home/StoryJourney";
import type { BeneficiaryStory } from "@/content/types";

export function FeaturedStory({ story }: { story: BeneficiaryStory }) {
  return (
    <Reveal
      as="div"
      className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-14"
    >
      <div className="md:col-span-5">
        <StoryImage
          image={story.image}
          name={story.name}
          className="aspect-4/5 w-full"
          sizes="(min-width: 768px) 40vw, 90vw"
        />
      </div>

      <div className="md:col-span-7">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Story of Change
        </p>
        <h3 className="mt-3 font-display text-3xl text-foreground md:text-4xl">
          {story.headline}
        </h3>
        <p className="mt-2 text-lg text-muted-foreground">{story.subheadline}</p>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          {story.summary}
        </p>

        <StoryJourney steps={story.journey} className="mt-10" />

        <div className="mt-10">
          <Button href={story.href} variant="primary">
            {story.ctaLabel}
          </Button>
          <p className="mt-2 text-xs text-muted-foreground">Story published by KCDF</p>
        </div>
      </div>
    </Reveal>
  );
}
