import { ImageFrame } from "@/components/ui/ImageFrame";
import { Reveal } from "@/components/ui/Reveal";
import type { Programme } from "@/content/types";

type ProgrammeFeatureProps = {
  programme: Programme;
  reverse?: boolean;
};

function ServicesList({ services }: { services: string[] }) {
  return (
    <ul className="mt-6 flex flex-col gap-2">
      {services.map((service) => (
        <li key={service} className="flex items-start gap-3 text-sm text-muted-foreground">
          <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
          {service}
        </li>
      ))}
    </ul>
  );
}

export function ProgrammeFeature({ programme, reverse = false }: ProgrammeFeatureProps) {
  if (programme.layout === "full") {
    return (
      <Reveal as="div" className="border-y border-border bg-primary py-16 text-primary-foreground md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
              Programme
            </p>
            <h3 className="mt-3 font-display text-4xl md:text-5xl">{programme.title}</h3>
            <p className="mt-2 text-lg text-primary-foreground/80">{programme.tagline}</p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
              {programme.description}
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {programme.services.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 text-sm text-primary-foreground/80"
                >
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-soft" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    );
  }

  if (programme.layout === "collage" && programme.image && programme.secondaryImage) {
    return (
      <Reveal as="div" className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:px-10 md:gap-8">
          <div className={`relative md:col-span-6 ${reverse ? "md:order-2" : ""}`}>
            <ImageFrame
              image={programme.image}
              className="relative aspect-[4/5] w-4/5"
              sizes="(min-width: 768px) 35vw, 80vw"
            />
            <ImageFrame
              image={programme.secondaryImage}
              className={`absolute bottom-[-2.5rem] aspect-square w-2/5 border-4 border-background ${
                reverse ? "left-[-1.5rem]" : "right-[-1.5rem]"
              }`}
              sizes="220px"
            />
          </div>
          <div className={`md:col-span-6 ${reverse ? "md:order-1" : ""}`}>
            <ProgrammeText programme={programme} />
          </div>
        </div>
      </Reveal>
    );
  }

  if (programme.layout === "feature" && programme.image) {
    return (
      <Reveal as="div" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-[21/9]">
            <ImageFrame image={programme.image} className="absolute inset-0" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-background md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-background/80">
                Programme
              </p>
              <h3 className="mt-2 font-display text-4xl md:text-5xl">{programme.title}</h3>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-12">
            <p className="text-lg text-muted-foreground md:col-span-4">{programme.tagline}</p>
            <div className="md:col-span-7 md:col-start-6">
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {programme.description}
              </p>
              <ServicesList services={programme.services} />
            </div>
          </div>
        </div>
      </Reveal>
    );
  }

  // split (default) layout
  return (
    <Reveal as="div" className="py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:gap-8 md:px-10">
        {programme.image ? (
          <div className={`md:col-span-6 ${reverse ? "md:order-2" : ""}`}>
            <ImageFrame
              image={programme.image}
              className="aspect-[4/5] w-full md:aspect-[5/6]"
              sizes="(min-width: 768px) 45vw, 90vw"
            />
          </div>
        ) : null}
        <div className={`md:col-span-6 ${reverse ? "md:order-1" : ""}`}>
          <ProgrammeText programme={programme} />
        </div>
      </div>
    </Reveal>
  );
}

function ProgrammeText({ programme }: { programme: Programme }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Programme</p>
      <h3 className="mt-3 font-display text-4xl md:text-5xl">{programme.title}</h3>
      <p className="mt-2 text-lg text-muted-foreground">{programme.tagline}</p>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
        {programme.description}
      </p>
      <ServicesList services={programme.services} />
    </div>
  );
}
