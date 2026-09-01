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
import IlluminatedPanel from "@/components/ui/IlluminatedPanel";
import Section from "@/components/ui/Section";

const items = [
  {
    title: "Website Design & Development",
    icon: Braces,
    text: "Fast, responsive, conversion-focused websites.",
    accent: "blue" as const,
    area: "md:col-span-2 md:row-span-2",
    visual: "browser",
  },
  {
    title: "AI Voice & Chatbots",
    icon: Bot,
    text: "Intelligent conversations that engage visitors and support teams.",
    accent: "cyan" as const,
    area: "md:col-span-2",
    visual: "chat",
  },
  {
    title: "Automation & Workflows",
    icon: Workflow,
    text: "Streamlined operations with AI, CRM and connected tools.",
    accent: "purple" as const,
    area: "md:col-span-2",
    visual: "flow",
  },
  {
    title: "UI/UX & Digital Products",
    icon: Palette,
    text: "Interfaces, portals and products built for clarity.",
    accent: "purple" as const,
    area: "md:col-span-2",
    visual: "interface",
  },
  {
    title: "SEO & AEO",
    icon: SearchCheck,
    text: "Search and answer-engine visibility built into the foundation.",
    accent: "emerald" as const,
    area: "md:col-span-1",
    visual: "search",
  },
  {
    title: "CRM Systems",
    icon: DatabaseZap,
    text: "Lead pipelines, segmentation, follow-up and revenue workflows.",
    accent: "emerald" as const,
    area: "md:col-span-1",
    visual: "pipeline",
  },
];

function MiniVisual({ type }: { type: string }) {
  if (type === "browser")
    return (
      <div className="mt-8 rounded-xl border border-white/[.08] bg-black/35 p-4">
        <div className="flex gap-1.5">
          <i className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <i className="h-1.5 w-1.5 rounded-full bg-white/10" />
        </div>
        <div className="mt-5 grid grid-cols-[.7fr_1.3fr] gap-3">
          <div>
            <div className="h-2 w-2/3 rounded bg-blue-300/25" />
            <div className="mt-3 h-7 rounded bg-white/[.055]" />
            <div className="mt-2 h-12 rounded bg-white/[.03]" />
          </div>
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-500/15 to-purple-500/10">
            <div className="absolute inset-x-3 bottom-3 h-1/2 rounded border border-white/[.07] bg-black/30" />
          </div>
        </div>
      </div>
    );
  if (type === "chat")
    return (
      <div className="mt-6 space-y-2">
        <div className="mr-10 rounded-lg border border-white/[.06] bg-white/[.035] px-3 py-2 text-[.58rem] text-slate-400">
          How can we help you today?
        </div>
        <div className="ml-12 rounded-lg border border-cyan-300/10 bg-cyan-400/[.035] px-3 py-2 text-[.58rem] text-cyan-200/70">
          Qualifying request…
        </div>
      </div>
    );
  if (type === "flow")
    return (
      <div className="relative mt-8 flex items-center justify-between">
        <div className="absolute inset-x-5 top-1/2 h-px bg-gradient-to-r from-blue-500/20 via-purple-400/70 to-cyan-300/20" />
        {[1, 2, 3, 4].map((n) => (
          <span
            key={n}
            className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-purple-300/25 bg-[#050711] text-[.48rem] text-purple-200"
          >
            0{n}
          </span>
        ))}
      </div>
    );
  return (
    <div className="mt-7 flex gap-2">
      {["Signal", "System", "Action"].map((label, index) => (
        <div
          key={label}
          className="flex-1 rounded-md border border-white/[.06] bg-white/[.025] p-2"
        >
          <div
            className={`h-1 rounded ${index === 1 ? "bg-cyan-300/50" : "bg-blue-400/30"}`}
          />
          <p className="mt-2 text-[.48rem] text-slate-600">{label}</p>
        </div>
      ))}
    </div>
  );
}

function ServicesPreview() {
  return (
    <Section className="lower-depth">
      <Container>
        <p className="text-[.62rem] font-semibold uppercase tracking-[.24em] text-blue-400">
          What we do
        </p>
        <h2 className="font-display mt-2 text-3xl font-semibold text-white sm:text-4xl">
          Solutions That <span className="text-blue-400">Drive Growth</span>
        </h2>
        <div className="mt-8 grid auto-rows-[minmax(13rem,auto)] gap-4 md:grid-cols-4">
          {items.map((item, index) => (
            <Link key={item.title} to="/services" className={item.area}>
              <IlluminatedPanel
                accent={item.accent}
                delay={-index * 1.15}
                className="h-full"
                contentClassName="flex h-full flex-col p-6"
              >
                <div className="flex items-start justify-between">
                  <item.icon
                    size={24}
                    className={
                      item.accent === "purple"
                        ? "text-purple-400"
                        : item.accent === "cyan"
                          ? "text-cyan-300"
                          : "text-blue-400"
                    }
                  />
                  <ArrowRight
                    size={14}
                    className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-white"
                  />
                </div>
                <h3 className="mt-5 max-w-xs text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-sm text-xs leading-5 text-slate-400">
                  {item.text}
                </p>
                <MiniVisual type={item.visual} />
              </IlluminatedPanel>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
export default ServicesPreview;
