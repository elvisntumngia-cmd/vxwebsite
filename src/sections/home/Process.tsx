import { motion } from "motion/react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
const steps = [
  ["Discover", "Understand the business system."],
  ["Architect", "Map experience, data, and tools."],
  ["Build", "Create the working foundation."],
  ["Automate", "Connect intelligent workflows."],
  ["Optimize", "Improve from real signals."],
];
function Process() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title="From operating reality to operating system."
          description="A continuous path from understanding the business to improving the technology around it."
        />
        <div className="relative mt-16">
          <div className="absolute left-5 top-5 h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-blue-400 via-cyan-300 to-purple-400 md:left-5 md:right-5 md:top-5 md:h-px md:w-auto" />
          <motion.div
            aria-hidden="true"
            className="absolute left-[1.05rem] top-4 h-3 w-3 rounded-full bg-white shadow-[0_0_18px_#22d3ee] md:top-[.95rem]"
            animate={{ top: ["1rem", "calc(100% - 1.5rem)"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <ol className="grid gap-10 md:grid-cols-5">
            {steps.map(([name, text], index) => (
              <li key={name} className="relative pl-14 md:pl-0 md:pt-14">
                <span className="absolute left-3 top-3 z-10 flex h-4 w-4 items-center justify-center rounded-full border border-cyan-200/50 bg-[#020305] md:left-3 md:top-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                </span>
                <p className="text-xs font-semibold tracking-[.22em] text-slate-600">
                  0{index + 1}
                </p>
                <h3 className="font-display mt-2 text-xl font-semibold text-white">
                  {name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
export default Process;
