import Hero from "@/sections/hero/Hero";
import Seo from "@/components/common/Seo";
import GrowthSystem from "@/sections/home/GrowthSystem";
import ProofAndPeople from "@/sections/home/ProofAndPeople";
import ServicesPreview from "@/sections/home/ServicesPreview";
import WorkPricingStage from "@/sections/home/WorkPricingStage";
import Faq from "@/sections/home/Faq";

function Home() {
  return (
    <main>
      <Seo
        title="ViankaX — Websites, AI & Business Automation"
        description="ViankaX builds premium websites, AI systems, CRM infrastructure, and business automation that help companies attract, convert, and grow."
      />
      <Hero />
      <GrowthSystem />
      <ServicesPreview />
      <WorkPricingStage />
      <ProofAndPeople />
      <Faq />
    </main>
  );
}

export default Home;
