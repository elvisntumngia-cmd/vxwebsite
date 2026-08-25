import {
  ArrowRight,
  Check,
  Code2,
  Compass,
  DraftingCompass,
  Rocket,
  WandSparkles,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { engagements, projects } from "@/data/site";

const steps = [
  ["Discover", Compass, "Learn the business"],
  ["Plan", DraftingCompass, "Create the roadmap"],
  ["Design", WandSparkles, "Shape the experience"],
  ["Develop", Code2, "Build the system"],
  ["Grow", Rocket, "Optimize and scale"],
] as const;

function WorkPricingStage() {
  const project = projects[3];
  return (
    <Section>
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <p className="text-[.58rem] font-semibold uppercase tracking-[.24em] text-blue-400">
              How we work
            </p>
            <div className="relative mt-5 grid grid-cols-5 gap-2">
              <div className="absolute left-[10%] right-[10%] top-5 border-t border-dashed border-blue-400/40" />
              {steps.map(([name, Icon, text]) => (
                <div key={name} className="relative text-center">
                  <span className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/35 bg-[#060a14] text-blue-300">
                    <Icon size={16} />
                  </span>
                  <p className="mt-3 text-xs font-semibold text-white">
                    {name}
                  </p>
                  <p className="mt-2 hidden text-[.58rem] leading-4 text-slate-500 sm:block">
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-[#060a13]/80">
              <div className="grid md:grid-cols-[.82fr_1.18fr]">
                <div className="p-6">
                  <p className="text-[.55rem] font-semibold uppercase tracking-[.2em] text-purple-400">
                    Featured project
                  </p>
                  <h3 className="font-display mt-3 text-xl font-semibold text-white">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-xs leading-5 text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[.55rem] text-blue-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className={`relative min-h-56 bg-gradient-to-br ${project.accent}`}
                >
                  <div className="absolute inset-6 rounded-lg border border-white/10 bg-black/40 p-4 shadow-2xl">
                    <div className="h-2 w-1/3 rounded bg-white/15" />
                    <div className="mt-4 h-5 w-3/4 rounded bg-white/10" />
                    <div className="mt-6 grid grid-cols-3 gap-2">
                      <div className="col-span-2 h-20 rounded bg-white/[.05]" />
                      <div className="h-20 rounded border border-white/[.08]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[.58rem] font-semibold uppercase tracking-[.24em] text-purple-400">
              Engagement models
            </p>
            <h2 className="font-display mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Simple ways to start
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {engagements.map((item) => (
                <article
                  key={item.name}
                  className="flex min-h-[23rem] flex-col rounded-xl border border-white/10 bg-[#060a13]/80 p-5"
                >
                  <h3 className="text-base font-semibold text-blue-300">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-[.64rem] leading-5 text-slate-400">
                    {item.description}
                  </p>
                  <p className="mt-5 text-lg font-semibold text-white">
                    Custom scope
                  </p>
                  <ul className="mt-5 space-y-3">
                    {item.includes.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-[.62rem] leading-4 text-slate-300"
                      >
                        <Check size={11} className="mt-0.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="#strategy-call"
                    size="sm"
                    className="mt-auto w-full"
                  >
                    Let&apos;s Scope It
                  </Button>
                </article>
              ))}
            </div>
            <Button to="/pricing" variant="ghost" className="mt-4 w-full">
              View engagement details <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
export default WorkPricingStage;
