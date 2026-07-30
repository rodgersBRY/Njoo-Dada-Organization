import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { Reveal } from "@/components/ui/Reveal";
import { impactStats } from "@/content/impact";

export function ImpactStats() {
  return (
    <section id="impact" className="bg-primary py-20 text-primary-foreground md:py-28">
      <Container>
        <SectionHeading eyebrow="Impact" eyebrowClassName="text-accent-soft">
          Lives transformed. Futures reopened.
        </SectionHeading>

        <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 border-t border-primary-foreground/15 pt-12 md:mt-16 md:grid-cols-4">
          {impactStats.map((stat, index) => (
            <Reveal as="div" key={stat.label} delayMs={index * 80} className="flex flex-col">
              <dd className="font-display text-5xl leading-none sm:text-6xl md:text-7xl">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="mt-2 text-sm text-primary-foreground/70">{stat.label}</dt>
            </Reveal>
          ))}
        </dl>

        <p className="mt-12 max-w-2xl text-sm text-primary-foreground/60">
          Figures reported by Njoo Dada and pending independent verification ahead of
          publication.
        </p>
      </Container>
    </section>
  );
}
