import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgrammeFeature } from "@/components/home/ProgrammeFeature";
import { programmes } from "@/content/programmes";

export function Programmes() {
  return (
    <section id="programmes" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Work"
          supporting="Five interconnected programmes carry a girl from crisis toward an independent future."
        >
          Five programmes. One path forward.
        </SectionHeading>
      </Container>

      <div className="mt-8 flex flex-col divide-y divide-border">
        {programmes.map((programme, index) => (
          <ProgrammeFeature
            key={programme.slug}
            programme={programme}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}
