import { motion } from "motion/react";

import heroDevices from "@/assets/images/viankax-hero-devices.png";

function HeroVisual() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.9,
        delay: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute right-[-20%] top-1/2 z-10 w-[76%] -translate-y-[62%] sm:right-[-14%] sm:w-[72%] md:right-[-10%] md:w-[69%] lg:right-[-7%] lg:w-[67%] xl:right-[-5%] xl:w-[65%]"
    >
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 0.2, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative origin-center"
      >
        <div className="absolute left-[18%] top-[15%] h-[55%] w-[58%] rounded-full bg-blue-500/12 blur-[90px]" />

        <div className="absolute bottom-[4%] right-[4%] h-[35%] w-[42%] rounded-full bg-purple-500/12 blur-[90px]" />

        <img
          src={heroDevices}
          alt="ViankaX website displayed on a laptop with an automation interface on a smartphone"
          className="relative z-10 h-auto w-full object-contain drop-shadow-[0_28px_48px_rgba(0,0,0,0.72)]"
        />
      </motion.div>
    </motion.div>
  );
}

export default HeroVisual;
