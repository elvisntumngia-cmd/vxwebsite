import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import type { projects } from "@/data/site";

type Props = { project: (typeof projects)[number]; index: number };

function ProjectCard({ project, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.06 }}
      className="group overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-[#070a10]/80 transition duration-500 hover:-translate-y-1 hover:border-white/20"
    >
      <div
        className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${project.accent}`}
      >
        <div className="absolute inset-0 space-grid opacity-60" />
        <div className="absolute inset-5 rounded-2xl border border-white/10 bg-black/35 p-5 shadow-2xl backdrop-blur-md transition duration-500 group-hover:scale-[1.02] sm:inset-8">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/30" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/10" />
          </div>
          <div className="mt-8 h-2 w-1/3 rounded-full bg-white/20" />
          <div className="mt-3 h-5 w-2/3 rounded-md bg-white/10" />
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="col-span-2 h-14 rounded-lg bg-white/[0.06]" />
            <div className="h-14 rounded-lg border border-white/10 bg-black/30" />
          </div>
        </div>
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              {project.sector}
            </p>
            <h3 className="font-display mt-2 text-2xl font-semibold tracking-tight text-white">
              {project.name}
            </h3>
          </div>
          <ArrowUpRight className="mt-1 text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300" />
        </div>
        <p className="mt-4 leading-7 text-slate-400">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
