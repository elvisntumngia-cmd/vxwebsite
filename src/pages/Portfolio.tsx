import PageHero from "@/components/common/PageHero";
import { ArrowUpRight } from "lucide-react";
import PortfolioArtwork from "@/components/portfolio/PortfolioArtwork";
import Seo from "@/components/common/Seo";
import Container from "@/components/ui/Container";
import IlluminatedPanel from "@/components/ui/IlluminatedPanel";
import Section from "@/components/ui/Section";
import { projects } from "@/data/site";
function Portfolio() {
  return (
    <main>
      <Seo
        title="Portfolio — ViankaX"
        description="Explore selected ViankaX websites, AI automation, CRM, e-commerce, and operations systems."
      />
      <PageHero
        planet="purple"
        eyebrow="Selected work"
        title="Systems made for the real world."
        description="A portfolio of customer experiences, intelligent workflows, and business infrastructure—presented without invented performance claims."
      />
      <Section>
        <Container>
          <div className="space-y-10 sm:space-y-16">
            {projects.map((project, index) => (
              <IlluminatedPanel
                key={project.name}
                accent={
                  index % 3 === 1 ? "cyan" : index % 3 === 2 ? "purple" : "blue"
                }
                delay={-index * 1.2}
                contentClassName="p-6 sm:p-9 lg:p-11"
              >
                <article
                  className={`grid gap-9 lg:grid-cols-[.72fr_1.28fr] lg:items-center ${index % 2 ? "lg:grid-cols-[1.28fr_.72fr]" : ""}`}
                >
                  <div className={index % 2 ? "lg:order-2" : ""}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[.24em] text-slate-600">
                          0{index + 1}
                        </p>
                        <p className="mt-3 text-sm text-cyan-300">
                          {project.sector}
                        </p>
                      </div>
                      <ArrowUpRight className="text-slate-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300" />
                    </div>
                    <h2 className="font-display mt-7 text-3xl font-semibold tracking-[-.04em] text-white sm:text-5xl">
                      {project.name}
                    </h2>
                    <p className="mt-5 max-w-xl leading-8 text-slate-400">
                      {project.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[.08] bg-white/[.025] px-3 py-1.5 text-xs text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <PortfolioArtwork
                    project={project.name}
                    src={project.image}
                    className={index % 2 ? "lg:order-1" : ""}
                  />
                </article>
              </IlluminatedPanel>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}

export default Portfolio;
