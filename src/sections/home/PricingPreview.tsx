import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { engagements } from "@/data/site";
function PricingPreview() {
  return (
    <Section>
      <Container>
        <div className="rounded-[2rem] border border-white/[.09] bg-[#03050a]/70 p-6 backdrop-blur-xl sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
            <div>
              <SectionHeading
                eyebrow="Ways to engage"
                title="Start at the right layer."
                description="No invented package pricing. We scope around the actual system, the complexity involved, and the outcome it needs to create."
              />
              <Button to="/pricing" className="mt-8">
                Let&apos;s Scope Your Project <ArrowRight size={16} />
              </Button>
            </div>
            <div className="divide-y divide-white/[.08] border-y border-white/[.08]">
              {engagements.map((item, index) => (
                <div
                  key={item.name}
                  className="group grid gap-4 py-7 sm:grid-cols-[2rem_9rem_1fr] sm:items-start"
                >
                  <span className="text-xs text-cyan-300">0{index + 1}</span>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {item.name}
                  </h3>
                  <div>
                    <p className="leading-7 text-slate-400">
                      {item.description}
                    </p>
                    <p className="mt-3 text-xs text-slate-600">
                      {item.includes.slice(0, 3).join("  ·  ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
export default PricingPreview;
