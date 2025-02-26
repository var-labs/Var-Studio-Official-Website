import FooterSection from "@/components/home/footer-section";
import ImageSection from "@/components/home/image-section";
import LandingSection from "@/components/home/landing-section";
import ProjectsSection from "@/components/home/projects-section";
import ServiceSection from "@/components/home/service-section";
import TeamSection from "@/components/home/teams-section";
import TestimonySection from "@/components/home/testimony-section";

export default function Home() {
  return (
    <>
      <div className="px-[5rem]">
        <LandingSection />
        <ImageSection />
        <TeamSection />
      </div>
      <div className="bg-background-black px-[5rem]">
        <ServiceSection />
        <ProjectsSection />
      </div>
      <div className="px-[5rem]">
        <TestimonySection />
      </div>
      <div className="bg-background-black px-[5rem]">
        <FooterSection />
      </div>
    </>
  )
}