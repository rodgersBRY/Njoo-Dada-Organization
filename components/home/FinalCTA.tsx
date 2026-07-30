import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { finalCtaContent, finalCtaImage } from "@/content/final-cta";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <ParallaxImage image={finalCtaImage} sizes="100vw" />
      <div className="absolute inset-0 bg-foreground/70" />

      <Container className="relative max-w-3xl text-background">
        <h2 className="font-display text-4xl leading-[1.1] text-balance sm:text-5xl md:text-6xl">
          {finalCtaContent.headline}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-background/85 md:text-xl">
          {finalCtaContent.body}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          {finalCtaContent.ctas.map((cta) => (
            <Button
              key={cta.label}
              href={cta.href}
              variant={cta.variant === "primary" ? "primary" : "secondary"}
            >
              {cta.label}
            </Button>
          ))}
        </div>
      </Container>
    </section>
  );
}
