import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { StoryImage } from "@/components/home/StoryImage";
import type { BeneficiaryStory } from "@/content/types";

type SupportingStoryBlockProps = {
  story: BeneficiaryStory;
  delayMs?: number;
  offset?: boolean;
};

export function SupportingStoryBlock({
  story,
  delayMs = 0,
  offset = false,
}: SupportingStoryBlockProps) {
  return (
    <Reveal
      as="div"
      delayMs={delayMs}
      className={`flex flex-col gap-5 ${offset ? "md:mt-14" : ""}`}
    >
      <StoryImage
        image={story.image}
        name={story.name}
        className="aspect-4/3 w-full"
        sizes="(min-width: 768px) 30vw, 90vw"
      />
      <div>
        <h4 className="font-display text-2xl text-foreground">{story.headline}</h4>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {story.summary}
        </p>
        <ol className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-foreground">
          {story.journey.map((step, index) => (
            <li key={step} className="flex items-center gap-2">
              <span>{step}</span>
              {index < story.journey.length - 1 ? (
                <span aria-hidden="true" className="text-[#f7c948]">
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
        <div className="mt-4">
          <Button href={story.href} variant="ghost">
            {story.ctaLabel}
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
