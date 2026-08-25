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
import IlluminatedPanel from "@/components/ui/IlluminatedPanel";
import Section from "@/components/ui/Section";
import { engagements, projects } from "@/data/site";

const steps = [
  ["Discover", Compass, "Understand the business"],
  ["Architect", DraftingCompass, "Design the system"],
  ["Design", WandSparkles, "Shape every interaction"],
  ["Build", Code2, "Engineer the foundation"],
  ["Grow", Rocket, "Optimize from signals"],
] as const;

function FeaturedWork() {
  const project = projects[3];
  return (
    <Section className="lower-depth">
      <Container>
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-[.62rem] font-semibold uppercase tracking-[.24em] text-purple-400">
              Featured work
            </p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-white sm:text-4xl">
              Commerce, engineered as an experience.
            </h2>
          </div>
          <Button
            to="/portfolio"
            variant="ghost"
            className="hidden sm:inline-flex"
          >
            View portfolio <ArrowRight size={14} />
          </Button>
        </div>
        <IlluminatedPanel
          accent="purple"
          delay={-2.4}
          contentClassName="p-6 sm:p-10"
        >
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-purple-500/[.08] blur-[90px]" />
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
            <div className="relative z-10">
              <p className="text-[.6rem] font-semibold uppercase tracking-[.22em] text-blue-300">
                Furniture e-commerce / WooCommerce
              </p>
              <h3 className="font-display mt-4 text-4xl font-semibold tracking-[-.05em] text-white sm:text-5xl">
                {project.name}
              </h3>
              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300">
                A responsive storefront and online sales foundation built around
                custom furniture, a considered product journey, checkout, and
                payment integration.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "WooCommerce",
                  "Responsive storefront",
                  "Product journey",
                  "Checkout",
                  "Payments",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[.08] bg-white/[.025] px-3 py-1.5 text-[.62rem] text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative min-h-[23rem] sm:min-h-[29rem]">
              <div className="absolute left-[3%] right-[3%] top-[7%] rounded-xl border border-white/10 bg-[#07090e] p-2 shadow-[0_35px_90px_rgba(0,0,0,.72)] sm:p-3">
                <div className="flex h-7 items-center gap-1.5 border-b border-white/[.06] px-2">
                  <i className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <i className="h-1.5 w-1.5 rounded-full bg-white/10" />
                  <span className="ml-auto text-[.45rem] uppercase tracking-[.18em] text-slate-600">
                    Lounge Masters
                  </span>
                </div>
                <div className="relative aspect-[16/9] overflow-hidden rounded-b-lg bg-[linear-gradient(125deg,#12100f,#27221f_48%,#0a0b0e)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_42%,rgba(183,138,102,.25),transparent_34%)]" />
                  <div className="absolute left-[8%] top-[17%] max-w-[44%]">
                    <p className="font-display text-[clamp(.8rem,2vw,1.8rem)] font-semibold leading-tight text-white">
                      Furniture designed for the way you live.
                    </p>
                    <div className="mt-3 h-1.5 w-2/3 rounded bg-white/10" />
                    <div className="mt-2 h-1.5 w-1/2 rounded bg-white/[.06]" />
                    <div className="mt-5 h-6 w-20 rounded bg-white text-[.45rem] text-black" />
                  </div>
                  <div className="absolute bottom-[13%] right-[8%] h-[35%] w-[43%] rounded-t-[45%] border border-white/[.08] bg-gradient-to-b from-[#4b4038] to-[#181715] shadow-2xl" />
                </div>
              </div>
              <div className="absolute bottom-[2%] right-[1%] w-[24%] rounded-[1.1rem] border border-white/15 bg-[#080a0f] p-1.5 shadow-[0_25px_60px_rgba(0,0,0,.75)]">
                <div className="aspect-[9/17] rounded-[.8rem] bg-gradient-to-b from-[#24201e] to-[#090a0c] p-3">
                  <div className="h-1.5 w-1/2 rounded bg-white/15" />
                  <div className="mt-5 h-12 rounded bg-white/[.06]" />
                  <div className="mt-3 h-2 w-3/4 rounded bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </IlluminatedPanel>
      </Container>
    </Section>
  );
}

function Process() {
  return (
    <Section className="lower-depth">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.38fr_.62fr] lg:items-center">
          <div>
            <p className="text-[.62rem] font-semibold uppercase tracking-[.24em] text-blue-400">
              How we work
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-[-.04em] text-white sm:text-4xl">
              A business moves through the system.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Each stage informs the next, carrying strategy into design,
              engineering, automation, and ongoing improvement.
            </p>
          </div>
          <IlluminatedPanel
            accent="cyan"
            delay={-4}
            contentClassName="p-6 sm:p-8"
          >
            <div className="relative grid gap-5 sm:grid-cols-5">
              <div className="absolute left-7 right-7 top-7 hidden h-px overflow-hidden bg-white/[.08] sm:block">
                <span className="process-energy absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
              </div>
              {steps.map(([name, Icon, text], index) => (
                <div
                  key={name}
                  className="relative flex gap-4 sm:block sm:text-center"
                >
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#050913] text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,.1)]">
                    <Icon size={19} />
                    <i
                      className="absolute -right-1 -top-1 h-2 w-2 animate-pulse rounded-full bg-blue-300 shadow-[0_0_12px_#60a5fa]"
                      style={{ animationDelay: `${index * 0.4}s` }}
                    />
                  </span>
                  <div>
                    <p className="mt-1 text-xs font-semibold text-white sm:mt-5">
                      {name}
                    </p>
                    <p className="mt-1 text-[.6rem] leading-4 text-slate-500">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </IlluminatedPanel>
        </div>
      </Container>
    </Section>
  );
}

function Engagements() {
  return (
    <Section className="lower-depth">
      <Container>
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-[.62rem] font-semibold uppercase tracking-[.24em] text-purple-400">
              Engagement models
            </p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-white sm:text-4xl">
              Three system configurations.
            </h2>
          </div>
          <Button to="/pricing" variant="ghost">
            View engagement details <ArrowRight size={14} />
          </Button>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {engagements.map((item, index) => (
            <IlluminatedPanel
              key={item.name}
              accent={index === 0 ? "blue" : index === 1 ? "cyan" : "purple"}
              delay={-index * 1.8}
              contentClassName="flex h-full flex-col p-7 sm:p-8"
            >
              <p className="text-[.58rem] uppercase tracking-[.22em] text-slate-600">
                Configuration 0{index + 1}
              </p>
              <h3 className="font-display mt-4 text-2xl font-semibold text-white">
                {item.name}
              </h3>
              <p className="mt-3 min-h-14 text-sm leading-6 text-slate-400">
                {item.description}
              </p>
              <p className="mt-6 text-lg font-semibold text-white">
                Custom scope
              </p>
              <ul className="mt-5 space-y-3">
                {item.includes.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-xs leading-5 text-slate-300"
                  >
                    <Check
                      size={14}
                      className="mt-0.5 shrink-0 text-cyan-300"
                    />
                    {point}
                  </li>
                ))}
              </ul>
              <Button
                href="#strategy-call"
                variant={index === 1 ? "primary" : "secondary"}
                className="mt-8"
              >
                Let&apos;s Scope It
              </Button>
            </IlluminatedPanel>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function WorkPricingStage() {
  return (
    <>
      <FeaturedWork />
      <Process />
      <Engagements />
    </>
  );
}
export default WorkPricingStage;
