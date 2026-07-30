import { ProgrammeVisual } from "@/components/home/ProgrammeVisual";
import { cn } from "@/lib/cn";
import type { Programme } from "@/content/types";

function ServiceVocabulary({
  services,
  className = "",
}: {
  services: string[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-x-3 gap-y-2", className)}>
      {services.map((service, index) => (
        <li key={service} className="flex items-center gap-x-3">
          {index > 0 ? (
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent-soft" />
          ) : null}
          <span className="text-sm text-muted-foreground">{service}</span>
        </li>
      ))}
    </ul>
  );
}

function ProgrammeNumber({
  number,
  className = "",
}: {
  number: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn("block font-display leading-none text-[#f7c948]", className)}
    >
      {number}
    </span>
  );
}

/** Editorial anchor block — larger type and a full-width composition. */
export function ProgrammeAnchor({ programme }: { programme: Programme }) {
  return (
    <article className="group relative rounded-sm border border-border bg-secondary/40 p-8 transition-colors duration-300 hover:bg-secondary/70 md:p-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <ProgrammeNumber number={programme.number} className="text-6xl md:text-7xl" />
          <h3 className="mt-4 font-display text-4xl leading-[1.05] text-primary md:text-5xl">
            {programme.title}
          </h3>
          <p className="mt-3 text-lg text-foreground/80">{programme.tagline}</p>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <ProgrammeVisual
            visual={programme.visual}
            className="h-14 w-14 text-primary/70 transition-transform duration-300 group-hover:-translate-y-0.5"
          />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {programme.description}
          </p>
          <ServiceVocabulary services={programme.services} className="mt-8" />
        </div>
      </div>
    </article>
  );
}

/** Standard editorial block used for the remaining programmes. */
export function ProgrammeBlock({
  programme,
  className = "",
}: {
  programme: Programme;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-sm border border-border p-8 transition-colors duration-300 hover:bg-secondary/40 md:p-10",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-6">
        <ProgrammeNumber number={programme.number} className="text-4xl md:text-5xl" />
        <ProgrammeVisual
          visual={programme.visual}
          className="h-10 w-10 shrink-0 text-primary/60 transition-transform duration-300 group-hover:-translate-y-0.5"
        />
      </div>

      <h3 className="mt-5 font-display text-3xl leading-[1.1] text-primary md:text-4xl">
        {programme.title}
      </h3>
      <p className="mt-2 text-base text-foreground/80">{programme.tagline}</p>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
        {programme.description}
      </p>
      <ServiceVocabulary services={programme.services} className="mt-7" />
    </article>
  );
}
