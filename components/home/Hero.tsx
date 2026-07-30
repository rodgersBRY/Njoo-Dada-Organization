import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { heroContent, heroImages } from "@/content/hero";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-14 md:pb-28 md:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-accent-soft/20 blur-3xl md:h-96 md:w-96"
      />

      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col gap-7 lg:col-span-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {heroContent.eyebrow}
          </span>

          <h1 className="font-display text-5xl leading-[1.05] text-balance sm:text-6xl md:text-7xl">
            {heroContent.headline}
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {heroContent.subhead}
          </p>

          <div className="mt-2 flex flex-wrap gap-4">
            {heroContent.ctas.map((cta) => (
              <Button key={cta.label} href={cta.href} variant={cta.variant}>
                {cta.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-border sm:aspect-[5/4] lg:aspect-[4/5]">
            <HeroCarousel images={heroImages} />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -left-6 hidden h-24 w-24 border border-accent-soft sm:block md:h-32 md:w-32"
          />
        </div>
      </Container>
    </section>
  );
}
