import {
  ArrowRight,
  Bot,
  Braces,
  DatabaseZap,
  Palette,
  SearchCheck,
  Workflow,
} from "lucide-react";
import { Link } from "react-router";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
const items = [
  [
    "Website Design & Development",
    Braces,
    "Fast, responsive, conversion-focused websites.",
  ],
  [
    "UI/UX & Digital Products",
    Palette,
    "Interfaces, portals and digital products built for clarity.",
  ],
  [
    "AI Voice & Chatbots",
    Bot,
    "Intelligent conversations that engage visitors and support teams.",
  ],
  [
    "Automation & Workflows",
    Workflow,
    "Streamlined operations with AI, CRM and connected tools.",
  ],
  [
    "SEO & AEO",
    SearchCheck,
    "Search and answer-engine visibility built into the foundation.",
  ],
  [
    "CRM Systems",
    DatabaseZap,
    "Lead pipelines, segmentation, follow-up and revenue workflows.",
  ],
] as const;
function ServicesPreview() {
  return (
    <Section>
      <Container>
        <p className="text-[.58rem] font-semibold uppercase tracking-[.24em] text-blue-400">
          What we do
        </p>
        <h2 className="font-display mt-2 text-2xl font-semibold text-white sm:text-3xl">
          Solutions That <span className="text-blue-400">Drive Growth</span>
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {items.map(([title, Icon, text], index) => (
            <Link
              key={title}
              to="/services"
              className="group flex min-h-52 flex-col rounded-xl border border-white/10 bg-[#060a13]/75 p-5 transition hover:-translate-y-1 hover:border-blue-400/35"
            >
              <Icon
                size={25}
                className={
                  index % 3 === 1
                    ? "text-purple-400"
                    : index % 3 === 2
                      ? "text-cyan-300"
                      : "text-blue-400"
                }
              />
              <h3 className="mt-5 text-sm font-semibold leading-5 text-white">
                {title}
              </h3>
              <p className="mt-3 text-xs leading-5 text-slate-400">{text}</p>
              <span className="mt-auto inline-flex items-center gap-1 pt-5 text-xs text-blue-400">
                Learn more <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
export default ServicesPreview;
