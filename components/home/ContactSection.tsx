import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/home/ContactForm";
import { contactContent } from "@/content/contact";
import { orgIdentity } from "@/content/site";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <Container>
        <SectionHeading eyebrow={contactContent.eyebrow} supporting={contactContent.supporting}>
          {contactContent.headline}
        </SectionHeading>

        <div className="mt-14 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-12 md:gap-10">
          <Reveal as="div" className="md:col-span-5">
            <dl className="flex flex-col gap-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {orgIdentity.email.label}
                </dt>
                <dd
                  className={`mt-2 text-lg ${orgIdentity.email.isPlaceholder ? "italic text-muted-foreground" : "text-foreground"}`}
                >
                  {orgIdentity.email.value}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {orgIdentity.phone.label}
                </dt>
                <dd
                  className={`mt-2 text-lg ${orgIdentity.phone.isPlaceholder ? "italic text-muted-foreground" : "text-foreground"}`}
                >
                  {orgIdentity.phone.value}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {orgIdentity.physicalAddress.label}
                </dt>
                <dd
                  className={`mt-2 text-lg ${orgIdentity.physicalAddress.isPlaceholder ? "italic text-muted-foreground" : "text-foreground"}`}
                >
                  {orgIdentity.physicalAddress.value}
                </dd>
              </div>
            </dl>

            <div className="mt-10 border-l-2 border-accent/40 pl-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {contactContent.safeguardingNotice}{" "}
                <span
                  className={
                    orgIdentity.phone.isPlaceholder
                      ? "italic text-muted-foreground"
                      : "font-medium text-foreground"
                  }
                >
                  {orgIdentity.phone.value}
                </span>
              </p>
            </div>
          </Reveal>

          <Reveal as="div" delayMs={80} className="md:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
