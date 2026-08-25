import { Check } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import Seo from "@/components/common/Seo";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { engagements } from "@/data/site";
function Pricing() {
  return (
    <main>
      <Seo
        title="Pricing — ViankaX"
        description="Flexible ViankaX engagement models for focused launches, connected growth systems, and custom AI and automation infrastructure."
      />
      <PageHero
        eyebrow="Flexible engagements"
        title="Scope before numbers."
        description="The right investment depends on what needs to connect, how much complexity exists, and where the system can create the most value. We define that together before work begins."
      />
      <Section>
        <Container>
          <div className="border-y border-white/10">
            {engagements.map((item) => (
              <article
                key={item.name}
                className="grid gap-6 border-b border-white/[.08] py-9 last:border-0 lg:grid-cols-[.2fr_.55fr_1fr_.35fr] lg:items-start"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                  0{engagements.indexOf(item) + 1}
                </p>
                <h2 className="font-display text-3xl font-semibold text-white">
                  {item.name}
                </h2>
                <div>
                  <p className="leading-7 text-slate-400">{item.description}</p>
                  <ul className="mt-5 space-y-3">
                    {item.includes.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm text-slate-300"
                      >
                        <Check size={16} className="shrink-0 text-cyan-300" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  href="#strategy-call"
                  className="w-full"
                  variant={item.featured ? "primary" : "secondary"}
                >
                  Define your scope
                </Button>
              </article>
            ))}
          </div>
          <div className="mt-24 grid gap-10 lg:grid-cols-2 lg:items-center">
            <SectionHeading
              eyebrow="What shapes investment"
              title="Complexity, outcomes, and the path to launch."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Number and type of experiences",
                "Content and brand readiness",
                "CRM and platform integrations",
                "AI and workflow complexity",
                "Data migration requirements",
                "Optimization and support needs",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                >
                  <span className="text-xs text-slate-600">0{index + 1}</span>
                  <p className="mt-2 text-sm text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

export default Pricing;
