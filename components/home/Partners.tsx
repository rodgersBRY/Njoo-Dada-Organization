import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { partnerCategories } from "@/content/get-involved";

export function Partners() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Partners &amp; Trust"
          supporting="Njoo Dada collaborates with communities, schools, healthcare providers, government agencies, and development partners to make lasting change possible."
        >
          Change happens together.
        </SectionHeading>

        <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-y border-border py-8 md:mt-14">
          {partnerCategories.map((category) => (
            <li
              key={category.label}
              className="font-display text-lg text-muted-foreground md:text-xl"
            >
              {category.label}
            </li>
          ))}
        </ul>
{/* 
        <p className="mt-6 text-sm italic text-muted-foreground">
          Verified partner names and logos to follow as they are confirmed by Njoo Dada.
        </p> */}
      </Container>
    </section>
  );
}
