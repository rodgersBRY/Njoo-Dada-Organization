import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { enterpriseContent, enterpriseImages } from "@/content/enterprise";

export function EnterpriseSection() {
  return (
    <section id="shop" className="bg-secondary/60 py-20 md:py-32">
      <Container className="grid grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-10">
        <Reveal as="div" className="relative md:col-span-6">
          <ImageFrame
            image={enterpriseImages[0]}
            className="aspect-4/5 w-full md:aspect-5/6"
            sizes="(min-width: 768px) 45vw, 90vw"
          />
        </Reveal>

        <div className="md:col-span-6">
          <SectionHeading eyebrow={enterpriseContent.eyebrow}>
            {enterpriseContent.headline}
          </SectionHeading>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {enterpriseContent.body}
          </p>

          <ol className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm font-medium text-foreground">
            {enterpriseContent.steps.map((step, index) => (
              <li key={step} className="flex items-center gap-2">
                <span>{step}</span>
                {index < enterpriseContent.steps.length - 1 ? (
                  <span aria-hidden="true" className="text-accent">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>

          <div className="mt-8">
            <Button href={enterpriseContent.cta.href} variant={enterpriseContent.cta.variant}>
              {enterpriseContent.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
