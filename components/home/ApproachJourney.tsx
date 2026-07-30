import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { approachStages } from "@/content/programmes";

export function ApproachJourney() {
  return (
    <section className="border-y border-border bg-secondary/60 py-20 md:py-32">
      <Container>
        <SectionHeading eyebrow="Our Approach">
          From protection to independence.
        </SectionHeading>

        <ol className="mt-16 flex flex-col gap-0 md:mt-20 md:flex-row md:gap-6">
          {approachStages.map((stage, index) => (
            <li key={stage.number} className="relative flex-1 md:pt-10">
              <div
                aria-hidden="true"
                className="absolute left-[15px] top-0 h-full w-px bg-border md:left-0 md:top-[18px] md:h-px md:w-full"
              />
              <Reveal
                as="div"
                delayMs={index * 120}
                className="relative flex gap-5 py-8 md:flex-col md:gap-4 md:py-0"
              >
                <span
                  aria-hidden="true"
                  className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-background font-display text-sm text-primary ring-1 ring-inset ring-border md:h-9 md:w-9"
                >
                  {stage.number}
                </span>
                <div className="md:mt-2">
                  <h3 className="font-display text-2xl">{stage.title}</h3>
                  <p className="mt-2 max-w-[26ch] text-sm leading-relaxed text-muted-foreground">
                    {stage.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
