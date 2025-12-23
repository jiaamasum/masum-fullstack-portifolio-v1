import { Section } from "@/components/shared/Section";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { TechStackMarquee } from "@/components/sections/TechStackMarquee";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Experience } from "@/components/sections/Experience";
import { CertificationsPreview } from "@/components/sections/CertificationsPreview";
import { ResumeActions } from "@/components/sections/ResumeActions";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { CodingPhilosophy } from "@/components/sections/CodingPhilosophy";

export const metadata = {
  title: "Masum Jia | Backend Developer",
  description: "Portfolio of Masum Jia, a Final Year CSE Student and Backend Developer specializing in Python and Django.",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-8 md:gap-12 pb-20 overflow-x-hidden">
      <Hero />
      <Highlights />
      <About />
      <CodingPhilosophy />
      <Skills />
      <TechStackMarquee />
      <FeaturedProjects />
      <Experience />
      <CertificationsPreview />
      <ResumeActions />
      <ContactCTA />
    </div>
  );
}
