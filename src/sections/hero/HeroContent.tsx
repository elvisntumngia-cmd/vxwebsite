import { ArrowRight, Play } from "lucide-react";
import { motion } from "motion/react";

import Button from "@/components/ui/Button";
import HeroBadge from "@/sections/hero/HeroBadge";

function HeroContent() {
  return (
    <div className="relative z-20 flex min-h-[clamp(27rem,48vw,38rem)] w-[58%] max-w-[38rem] flex-col justify-center pb-10 sm:w-[52%] lg:w-[43%]">
      <HeroBadge />

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.65,
          delay: 0.12,
          ease: "easeOut",
        }}
        className="font-display mt-[clamp(0.8rem,1.7vw,1.35rem)] text-[clamp(2.15rem,5.2vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-white"
      >
        Websites That
        <br />
        Grow Your
        <br />
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
          Business.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.65,
          delay: 0.25,
          ease: "easeOut",
        }}
        className="mt-[clamp(0.9rem,2vw,1.5rem)] max-w-xl text-[clamp(0.78rem,1.5vw,1.1rem)] leading-[1.7] text-slate-300"
      >
        We build high-performing websites, automate business processes, and
        implement intelligent systems that help you attract more customers,
        convert more leads, and operate more efficiently.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.65,
          delay: 0.38,
          ease: "easeOut",
        }}
        className="mt-[clamp(1rem,2.2vw,1.75rem)] grid w-[calc(100vw-2.5rem)] grid-cols-2 gap-2 sm:w-full sm:max-w-xl sm:gap-4"
      >
        <Button
          href="#strategy-call"
          size="lg"
          className="min-h-11 min-w-0 whitespace-nowrap px-2 py-2 text-[0.62rem] sm:min-h-[clamp(2.5rem,4.5vw,3.25rem)] sm:px-[clamp(0.9rem,2vw,1.75rem)] sm:py-[clamp(0.55rem,1vw,0.875rem)] sm:text-[clamp(0.67rem,1.15vw,1rem)]"
        >
          <span className="truncate">Get a Free Quote</span>

          <ArrowRight className="h-3.5 w-3.5 shrink-0 sm:h-[clamp(0.8rem,1.3vw,1.1rem)] sm:w-[clamp(0.8rem,1.3vw,1.1rem)]" />
        </Button>

        <Button
          to="/portfolio"
          variant="secondary"
          size="lg"
          className="min-h-11 min-w-0 whitespace-nowrap px-2 py-2 text-[0.62rem] sm:min-h-[clamp(2.5rem,4.5vw,3.25rem)] sm:px-[clamp(0.9rem,2vw,1.75rem)] sm:py-[clamp(0.55rem,1vw,0.875rem)] sm:text-[clamp(0.67rem,1.15vw,1rem)]"
        >
          <span className="truncate">View Our Work</span>

          <Play
            fill="currentColor"
            className="h-3 w-3 shrink-0 sm:h-[clamp(0.7rem,1.1vw,0.95rem)] sm:w-[clamp(0.7rem,1.1vw,0.95rem)]"
          />
        </Button>
      </motion.div>
    </div>
  );
}

export default HeroContent;
