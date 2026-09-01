import Container from "@/components/ui/Container";
import PulsingPlanet from "@/components/visuals/PulsingPlanet";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  planet: "blue" | "purple" | "emerald";
};

function PageHero({ eyebrow, title, description, planet }: Props) {
  return (
    <section className="relative overflow-hidden pb-14 pt-32 sm:pb-20 sm:pt-40">
      <Container>
        <div className="relative grid min-h-[34rem] items-center gap-2 md:grid-cols-[.9fr_1.1fr] md:gap-6">
          <div className="relative z-10 text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
              {eyebrow}
            </p>
            <h1 className="font-display mt-5 text-balance text-[clamp(2.8rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-white">
              {title}
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-xl sm:leading-9 md:mx-0">
              {description}
            </p>
          </div>
          <div className="flex min-h-72 items-center justify-center md:min-h-[32rem]">
            <PulsingPlanet variant={planet} className="max-md:max-w-[22rem]" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default PageHero;
