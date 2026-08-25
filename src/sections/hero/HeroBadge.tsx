import { motion } from "motion/react";
function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
      className="w-max max-w-[calc(100vw-2.5rem)] whitespace-nowrap rounded-full border border-white/15 bg-black/35 px-4 py-2 text-[clamp(.48rem,.9vw,.68rem)] font-semibold uppercase tracking-[.18em] text-slate-200 backdrop-blur-xl"
    >
      AI. Automation. Growth.
    </motion.div>
  );
}
export default HeroBadge;
