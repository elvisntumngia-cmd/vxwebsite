import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import Seo from "@/components/common/Seo";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { services } from "@/data/site";

function Services() {
  return (
    <main>
      <Seo
        title="Services — ViankaX"
        description="Explore ViankaX web design, development, AI automation, CRM, business automation, SEO, AEO, and conversion optimization services."
      />
      <PageHero
        eyebrow="Connected capabilities"
        title="Technology designed around the business."
        description="From the customer-facing experience to the systems operating behind it, ViankaX designs and implements the complete digital infrastructure for growth."
      />
      <Section>
        <Container>
          <div className="border-t border-white/10">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="relative grid gap-8 border-b border-white/10 py-12 lg:grid-cols-[0.72fr_1.28fr] lg:py-16"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center text-cyan-300">
                    <service.icon size={21} />
                  </div>
                  <p className="mt-5 text-xs font-semibold tracking-[0.25em] text-slate-600">
                    0{index + 1}
                  </p>
                  <h2 className="font-display mt-2 text-3xl font-semibold tracking-[-.04em] text-white sm:text-5xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 leading-7 text-slate-300">
                    {service.summary}
                  </p>
                </div>
                <div className="grid gap-8 border-l border-white/[.08] pl-6 sm:grid-cols-2 sm:pl-10">
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      The problem it solves
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {service.problem}
                    </p>
                    <h3 className="mt-6 text-sm font-semibold text-white">
                      Likely outcome
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {service.outcomes}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      What we can implement
                    </h3>
                    <ul className="mt-3 space-y-3">
                      {service.implementations.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm text-slate-400"
                        >
                          <Check
                            size={15}
                            className="mt-1 shrink-0 text-cyan-300"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button
                      href="#strategy-call"
                      variant="secondary"
                      className="mt-7"
                    >
                      Discuss this system <ArrowRight size={15} />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}

export default Services;
