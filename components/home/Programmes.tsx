import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProgrammeAnchor, ProgrammeBlock } from "@/components/home/ProgrammeBlock";
import { ProgrammeSpotlight } from "@/components/home/ProgrammeSpotlight";
import { programmes, programmesIntro } from "@/content/programmes";
import { programmeImages } from "@/content/programme-imagery";

export function Programmes() {
  const [anchor, ...rest] = programmes;
  const [education, psychosocial, economic, community] = rest;

  return (
    <section id="programmes" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow={programmesIntro.eyebrow}
          supporting={programmesIntro.supporting}
        >
          {programmesIntro.headline}
        </SectionHeading>
      </Container>

      <Reveal as="div" className="mt-10 md:mt-12">
        <ProgrammeSpotlight />
      </Reveal>

      <Container>
        <div className="relative mt-10 md:mt-14">
          {/* Curved thread echoing the logo arc, linking the programmes without
              implying they are mandatory sequential steps. */}
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 4 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-0 top-0 hidden h-full w-1 text-accent-soft/40 lg:block"
          >
            <path
              d="M2 0 C0 25 4 45 2 60 C0 78 3 90 2 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>

          <div className="flex flex-col gap-6 lg:pl-10">
            <Reveal as="div">
              <ProgrammeAnchor programme={anchor} />
            </Reveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Reveal as="div" delayMs={80}>
                <ProgrammeBlock
                  programme={education}
                  image={programmeImages.beneficiary1}
                  className="h-full"
                />
              </Reveal>
              <Reveal as="div" delayMs={160}>
                <ProgrammeBlock
                  programme={psychosocial}
                  image={programmeImages.skillsTraining}
                  className="h-full bg-secondary/30 md:mt-10"
                />
              </Reveal>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              <Reveal as="div" delayMs={80} className="md:col-span-7">
                <ProgrammeBlock
                  programme={economic}
                  image={programmeImages.beneficiary}
                  className="h-full"
                />
              </Reveal>
              <Reveal as="div" delayMs={160} className="md:col-span-5">
                <ProgrammeBlock
                  programme={community}
                  className="h-full bg-secondary/30"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
