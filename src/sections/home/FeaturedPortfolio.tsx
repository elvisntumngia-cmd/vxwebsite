import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/site";

function FeaturedPortfolio() {
  return (
    <Section className="overflow-hidden">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Featured work"
            title="Real systems. Distinct operating realities."
            description="Selected work spanning digital experience, customer acquisition, AI, commerce, and internal operations."
          />
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white"
          >
            View the full portfolio <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="mt-16 border-t border-white/10">
          {projects.slice(0, 4).map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="group grid gap-8 border-b border-white/10 py-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center"
            >
              <div className={index % 2 ? "lg:order-2" : ""}>
                <p className="text-xs font-semibold uppercase tracking-[.25em] text-slate-500">
                  0{index + 1} / {project.sector}
                </p>
                <h3 className="font-display mt-4 text-3xl font-semibold tracking-[-.04em] text-white sm:text-5xl">
                  {project.name}
                </h3>
                <p className="mt-5 max-w-xl leading-8 text-slate-400">
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
              <div
                className={`relative aspect-[16/9] overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${project.accent} ${index % 2 ? "lg:order-1" : ""}`}
              >
                <div className="absolute inset-0 space-grid opacity-50" />
                <div className="absolute inset-[9%] rounded-xl border border-white/10 bg-black/55 shadow-[0_30px_90px_rgba(0,0,0,.6)] backdrop-blur-md transition duration-700 group-hover:scale-[1.025]">
                  <div className="flex h-9 items-center gap-1.5 border-b border-white/[.07] px-4">
                    <i className="h-1.5 w-1.5 rounded-full bg-white/30" />
                    <i className="h-1.5 w-1.5 rounded-full bg-white/15" />
                    <span className="ml-auto text-[.48rem] uppercase tracking-[.2em] text-white/20">
                      ViankaX system
                    </span>
                  </div>
                  <div className="grid h-[calc(100%-2.25rem)] grid-cols-[.28fr_1fr]">
                    <div className="border-r border-white/[.06] p-3">
                      <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
                      <div className="mt-5 space-y-2">
                        {[1, 2, 3, 4].map((n) => (
                          <div
                            key={n}
                            className="h-5 rounded bg-white/[.035]"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="p-[8%]">
                      <div className="h-2 w-1/3 rounded-full bg-cyan-300/30" />
                      <div className="mt-3 h-5 w-2/3 rounded bg-white/10" />
                      <div className="mt-[10%] grid grid-cols-3 gap-3">
                        <div className="col-span-2 h-14 rounded-lg bg-white/[.05]" />
                        <div className="h-14 rounded-lg border border-white/[.07]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
export default FeaturedPortfolio;
