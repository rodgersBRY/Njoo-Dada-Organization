import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Reveal } from "@/components/ui/Reveal";
import { whyContent, whyImages } from "@/content/why";

export function StoryIntro() {
  return (
    <section id="our-story" className="py-20 md:py-32">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-8">
        <Reveal as="div" className="relative lg:col-span-5">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-4 -top-10 font-display text-[7rem] leading-none text-primary/10 sm:-top-14 sm:text-[9rem] md:text-[11rem]"
          >
            {whyContent.foundedYear}
          </span>
          <ImageFrame
            image={whyImages.primary}
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="relative aspect-[6/7] w-full"
          />
          <ImageFrame
            image={whyImages.secondary}
            sizes="240px"
            className="absolute -bottom-10 -right-6 aspect-[4/5] w-32 shadow-[0_12px_30px_-12px_rgba(33,31,26,0.35)] sm:w-44 md:w-52"
          />
        </Reveal>

        <div className="lg:col-span-7 lg:pl-8">
          <SectionHeading eyebrow={whyContent.eyebrow}>
            {whyContent.headline}
          </SectionHeading>
          <div className="mt-6 flex max-w-2xl flex-col gap-5">
            {whyContent.body.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
