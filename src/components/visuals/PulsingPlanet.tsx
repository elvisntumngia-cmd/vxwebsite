import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/utils/cn";

type PlanetVariant = "blue" | "purple" | "emerald";
type Props = { variant: PlanetVariant; className?: string };
const palettes = {
  blue: {
    core: "from-white via-cyan-200 to-blue-600",
    halo: "bg-blue-500/25",
    ring: "border-cyan-300/35",
    particle: "bg-cyan-100 shadow-[0_0_14px_#22d3ee]",
  },
  purple: {
    core: "from-white via-blue-300 to-purple-700",
    halo: "bg-purple-500/25",
    ring: "border-purple-300/35",
    particle: "bg-purple-100 shadow-[0_0_14px_#a855f7]",
  },
  emerald: {
    core: "from-white via-cyan-200 to-emerald-700",
    halo: "bg-emerald-500/25",
    ring: "border-emerald-300/35",
    particle: "bg-emerald-100 shadow-[0_0_14px_#34d399]",
  },
};

type OrbitProps = {
  className: string;
  duration: number;
  reverse?: boolean;
  color: string;
  particle: string;
  tilt?: number;
  reduced: boolean;
};
function Orbit({
  className,
  duration,
  reverse,
  color,
  particle,
  tilt = 0,
  reduced,
}: OrbitProps) {
  return (
    <motion.div
      className={cn(
        "planet-orbit absolute left-1/2 top-1/2 rounded-[50%] border",
        color,
        className,
      )}
      animate={{
        rotate: reduced
          ? tilt
          : reverse
            ? [tilt + 360, tilt]
            : [tilt, tilt + 360],
      }}
      transition={{ duration, repeat: reduced ? 0 : Infinity, ease: "linear" }}
    >
      <span
        className={cn(
          "absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full",
          particle,
        )}
      />
      <span
        className={cn(
          "planet-particle-secondary absolute -left-1 top-[35%] h-1.5 w-1.5 rounded-full opacity-70",
          particle,
        )}
      />
    </motion.div>
  );
}

function PulsingPlanet({ variant, className }: Props) {
  const p = palettes[variant];
  const reduced = useReducedMotion() ?? false;
  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "planet-system relative aspect-square w-full max-w-[34rem]",
        className,
      )}
      animate={
        reduced
          ? undefined
          : { rotate: [-2, 2, -2], scale: [0.985, 1.015, 0.985] }
      }
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.div
        className={cn(
          "planet-halo absolute inset-[23%] rounded-full blur-[55px] sm:blur-[85px]",
          p.halo,
        )}
        animate={
          reduced
            ? undefined
            : {
                scale: [1, 1.06, 1, 1.1, 1],
                opacity: [0.55, 0.8, 0.58, 0.86, 0.55],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={cn(
          "absolute inset-[31%] rounded-full bg-gradient-to-br shadow-[inset_-18px_-18px_35px_rgba(0,0,0,.45),0_0_55px_rgba(96,165,250,.38)]",
          p.core,
        )}
        animate={reduced ? undefined : { scale: [1, 1.06, 1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-[18%] rounded-full bg-white/70 blur-xl" />
        <div className="absolute left-[20%] top-[16%] h-[18%] w-[18%] rounded-full bg-white blur-md" />
      </motion.div>
      <Orbit
        className="h-[34%] w-[88%] -translate-x-1/2 -translate-y-1/2"
        duration={16}
        color={p.ring}
        particle={p.particle}
        reduced={reduced}
      />
      <Orbit
        className="h-[38%] w-[91%] -translate-x-1/2 -translate-y-1/2"
        duration={21}
        reverse
        color={p.ring}
        particle={p.particle}
        tilt={52}
        reduced={reduced}
      />
      <Orbit
        className="h-[36%] w-[86%] -translate-x-1/2 -translate-y-1/2"
        duration={25}
        color={p.ring}
        particle={p.particle}
        tilt={88}
        reduced={reduced}
      />
    </motion.div>
  );
}
export default PulsingPlanet;
