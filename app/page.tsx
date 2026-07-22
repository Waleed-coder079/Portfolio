import { Hero } from "@/components/sections/hero";
import { ProofStats } from "@/components/sections/proof-stats";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ExperienceHighlights } from "@/components/sections/experience-highlights";
import { SkillsPreview } from "@/components/sections/skills-preview";
import { ContactTeaser } from "@/components/sections/contact-teaser";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStats />
      <FeaturedProjects />
      <ExperienceHighlights />
      <SkillsPreview />
      <ContactTeaser />
    </>
  );
}
