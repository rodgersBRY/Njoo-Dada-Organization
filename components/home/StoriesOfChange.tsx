import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeaturedStory } from "@/components/home/FeaturedStory";
import { SupportingStoryBlock } from "@/components/home/SupportingStoryBlock";
import { storiesIntro, featuredStory, supportingStories } from "@/content/stories";

export function StoriesOfChange() {
  return (
    <section id="stories" className="py-20 md:py-32">
      <Container>
        <SectionHeading eyebrow={storiesIntro.eyebrow} supporting={storiesIntro.supporting}>
          {storiesIntro.headline}
        </SectionHeading>

        <div className="mt-14 md:mt-16">
          <FeaturedStory story={featuredStory} />
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10">
          {supportingStories.map((story, index) => (
            <SupportingStoryBlock
              key={story.slug}
              story={story}
              delayMs={index * 100}
              offset={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
