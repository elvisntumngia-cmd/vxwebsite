import { Bot, ShoppingBag, Workflow } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
const proof = [
  [
    "VALO Legal",
    Workflow,
    "Landing experience, CRM, AI receptionist, booking, segmentation and automated follow-up.",
  ],
  [
    "Securemedy",
    Bot,
    "AI reception concepts, chatbots, recruitment automation and workforce operations technology.",
  ],
  [
    "Lounge Masters",
    ShoppingBag,
    "Responsive furniture e-commerce, WooCommerce, checkout and online sales infrastructure.",
  ],
] as const;
function ProofAndPeople() {
  return (
    <>
      <Section className="lower-depth">
        <Container>
          <div className="rounded-2xl border border-white/[.08] bg-black/35 p-6 sm:p-8">
            <p className="text-[.58rem] font-semibold uppercase tracking-[.24em] text-blue-400">
              What our work demonstrates
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {proof.map(([name, Icon, text]) => (
                <article
                  key={name}
                  className="rounded-lg border border-white/[.08] bg-black/20 p-5"
                >
                  <Icon size={19} className="text-purple-400" />
                  <p className="mt-4 text-sm font-semibold text-white">
                    {name}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <Section className="lower-depth py-10 sm:py-12">
        <Container>
          <div className="grid gap-6 border-y border-white/10 py-9 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
            <div>
              <p className="text-[.58rem] font-semibold uppercase tracking-[.24em] text-purple-400">
                The People Behind ViankaX
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-[-.04em] text-white">
                Human judgment.
                <br />
                Intelligent systems.
              </h2>
            </div>
            <p className="max-w-3xl text-sm leading-7 text-slate-300">
              ViankaX combines strategy, design, engineering, automation, and
              business understanding so technology stays accountable to real
              people, real decisions, and the way a business actually works.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
export default ProofAndPeople;
