import { motion } from "motion/react";
import type { IconType } from "react-icons";
import { BsOpenai } from "react-icons/bs";
import { FaAws } from "react-icons/fa6";
import {
  SiHubspot,
  SiNextdotjs,
  SiReact,
  SiSupabase,
  SiWebflow,
  SiWordpress,
} from "react-icons/si";

type Technology = {
  name: string;
  logo: IconType;
  color: string;
};

const technologies: Technology[] = [
  {
    name: "React",
    logo: SiReact,
    color: "#61DAFB",
  },
  { name: "Next.js", logo: SiNextdotjs, color: "#CBD5E1" },
  { name: "WordPress", logo: SiWordpress, color: "#94A3B8" },
  { name: "Webflow", logo: SiWebflow, color: "#94A3B8" },
  {
    name: "Supabase",
    logo: SiSupabase,
    color: "#3FCF8E",
  },
  {
    name: "HubSpot",
    logo: SiHubspot,
    color: "#FF7A59",
  },
  {
    name: "OpenAI",
    logo: BsOpenai,
    color: "#F8FAFC",
  },
  {
    name: "AWS",
    logo: FaAws,
    color: "#FF9900",
  },
];

function TechnologyGroup() {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14 lg:gap-16 lg:pr-16">
      {technologies.map((technology) => {
        const TechnologyLogo = technology.logo;
        return (
          <div
            key={technology.name}
            className="group flex shrink-0 items-center gap-2.5 text-slate-400 transition duration-300 hover:text-white"
          >
            <TechnologyLogo
              aria-hidden="true"
              color={technology.color}
              className="h-5 w-5 shrink-0 opacity-80 transition duration-300 group-hover:scale-110 group-hover:opacity-100 sm:h-6 sm:w-6"
            />

            <span className="whitespace-nowrap text-xs font-medium sm:text-sm">
              {technology.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function TechStrip() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 16,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay: 0.8,
        ease: "easeOut",
      }}
      className="relative z-20"
    >
      <p className="mb-4 text-center text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-slate-500 sm:text-[0.65rem]">
        Powered by industry-leading technologies
      </p>

      <div className="relative overflow-hidden border-y border-white/[0.06] bg-black/30 py-5 backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#020305] to-transparent sm:w-24" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#020305] to-transparent sm:w-24" />

        <motion.div
          className="flex w-max items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <TechnologyGroup />
          <TechnologyGroup />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default TechStrip;
