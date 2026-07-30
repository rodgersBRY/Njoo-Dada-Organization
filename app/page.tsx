import { Hero } from "@/components/home/Hero";
import { StoryIntro } from "@/components/home/StoryIntro";
import { ApproachJourney } from "@/components/home/ApproachJourney";
import { Programmes } from "@/components/home/Programmes";
import { ImpactStats } from "@/components/home/ImpactStats";
import { StoriesOfChange } from "@/components/home/StoriesOfChange";
import { EnterpriseSection } from "@/components/home/EnterpriseSection";
import { GetInvolved } from "@/components/home/GetInvolved";
import { Partners } from "@/components/home/Partners";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StoryIntro />
      <ApproachJourney />
      <Programmes />
      <ImpactStats />
      <StoriesOfChange />
      <EnterpriseSection />
      <GetInvolved />
      <Partners />
      <FinalCTA />
      <ContactSection />
    </>
  );
}
