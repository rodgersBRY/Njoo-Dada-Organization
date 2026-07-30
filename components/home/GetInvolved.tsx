import { HeartHandshake, Users, Briefcase, Megaphone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { getInvolvedActions } from "@/content/get-involved";
import type { GetInvolvedAction } from "@/content/types";

const icons: Record<GetInvolvedAction["icon"], typeof HeartHandshake> = {
  "heart-handshake": HeartHandshake,
  users: Users,
  briefcase: Briefcase,
  megaphone: Megaphone,
};

export function GetInvolved() {
  return (
    <section id="get-involved" className="py-20 md:py-32">
      <Container>
        <SectionHeading eyebrow="Get Involved">
          There are many ways to make a difference.
        </SectionHeading>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {getInvolvedActions.map((action, index) => {
            const Icon = icons[action.icon];
            return (
              <Reveal
                as="div"
                key={action.title}
                delayMs={index * 90}
                className="flex flex-col gap-4 bg-background p-8"
              >
                <Icon aria-hidden="true" className="h-7 w-7 text-accent" strokeWidth={1.5} />
                <h3 className="font-display text-2xl">{action.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {action.description}
                </p>
                <Button href={action.cta.href} variant="ghost" className="self-start">
                  {action.cta.label}
                </Button>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
