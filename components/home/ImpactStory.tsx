import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { featuredStory } from "@/content/stories";

export function ImpactStory() {
  return (
    <section id="stories" className="py-20 md:py-32">
      <Container>
        <SectionHeading eyebrow="Stories of Change">
          Behind every number is a story.
        </SectionHeading>

        <Reveal
          as="div"
          className="mt-14 grid grid-cols-1 items-center gap-10 md:mt-16 md:grid-cols-12 md:gap-12"
        >
          <div className="md:col-span-5">
            <ImageFrame
              image={featuredStory.image}
              className="aspect-[4/5] w-full"
              sizes="(min-width: 768px) 40vw, 90vw"
            />
          </div>
          <div className="md:col-span-7">
            <blockquote className="border-l-2 border-accent pl-6 font-display text-2xl leading-snug text-foreground md:text-3xl">
              {featuredStory.quote}
            </blockquote>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              {featuredStory.narrative}
            </p>
            <div className="mt-8">
              <Button href={featuredStory.cta.href} variant={featuredStory.cta.variant}>
                {featuredStory.cta.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
