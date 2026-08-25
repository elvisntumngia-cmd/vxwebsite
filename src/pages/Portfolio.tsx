import PageHero from "@/components/common/PageHero";
import { ArrowUpRight } from "lucide-react";
import Seo from "@/components/common/Seo";
import Container from "@/components/ui/Container";
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
        eyebrow="Selected work"
        title="Systems made for the real world."
        description="A portfolio of customer experiences, intelligent workflows, and business infrastructure—presented without invented performance claims."
      />
      <Section>
        <Container>
          <div className="border-t border-white/10">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="group grid gap-8 border-b border-white/10 py-10 lg:grid-cols-[.55fr_1fr_.25fr] lg:items-start"
              >
                <div>
                  <p className="text-xs uppercase tracking-[.24em] text-slate-600">
                    0{index + 1}
                  </p>
                  <p className="mt-3 text-sm text-cyan-300">{project.sector}</p>
                </div>
                <div>
                  <h2 className="font-display text-3xl font-semibold tracking-[-.04em] text-white sm:text-5xl">
                    {project.name}
                  </h2>
                  <p className="mt-5 max-w-3xl leading-8 text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs text-slate-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight className="text-slate-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300 lg:ml-auto" />
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}

export default Portfolio;
