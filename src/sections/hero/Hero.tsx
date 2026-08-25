import Container from "@/components/ui/Container";
import HeroContent from "@/sections/hero/HeroContent";
import HeroVisual from "@/sections/hero/HeroVisual";
import TechStrip from "@/sections/hero/TechStrip";

function Hero() {
  return (
    <section className="relative overflow-hidden pb-4 pt-[6.5rem] sm:pt-[7rem]">
      <Container>
        <div className="relative min-h-[clamp(27rem,48vw,38rem)]">
          <HeroContent />
          <HeroVisual />
        </div>
      </Container>

      <div className="-mt-6 sm:-mt-8 lg:-mt-12">
        <TechStrip />
      </div>
    </section>
  );
}

export default Hero;
