import Hero from "@/sections/hero/Hero";
import Seo from "@/components/common/Seo";
import GrowthSystem from "@/sections/home/GrowthSystem";
import ProofAndPeople from "@/sections/home/ProofAndPeople";
import ServicesPreview from "@/sections/home/ServicesPreview";
import WorkPricingStage from "@/sections/home/WorkPricingStage";

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
    </main>
  );
}

export default Home;
