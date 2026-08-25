import Container from "@/components/ui/Container";

type Props = { eyebrow: string; title: string; description: string };

function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden pb-16 pt-40 sm:pb-24 sm:pt-48">
      <Container>
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="absolute left-1/2 top-0 -z-10 h-52 w-2/3 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[100px]" />
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
            {eyebrow}
          </p>
          <h1 className="font-display mt-5 text-balance text-[clamp(2.8rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-white">
            {title}
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-xl sm:leading-9">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}

export default PageHero;
