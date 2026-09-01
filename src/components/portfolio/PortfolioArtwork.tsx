import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

type PortfolioArtworkProps = {
  project: string;
  src: string;
  className?: string;
};

function PortfolioArtwork({ project, src, className }: PortfolioArtworkProps) {
  const [isMissing, setIsMissing] = useState(false);

  useEffect(() => setIsMissing(false), [src]);

  return (
    <div
      className={cn(
        "relative aspect-[8/5] w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#020407] shadow-[0_28px_75px_rgba(0,0,0,.58)]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-[12%] bottom-[-18%] h-[44%] rounded-full bg-blue-500/[0.08] blur-[55px]"
      />
      {isMissing ? (
        <div className="relative flex h-full flex-col items-center justify-center p-6 text-center">
          <p className="font-display text-xl font-semibold text-white sm:text-2xl">
            {project}
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Project visual coming soon
          </p>
        </div>
      ) : (
        <img
          src={src}
          alt={`${project} project presentation`}
          width="1600"
          height="1000"
          loading="lazy"
          decoding="async"
          onError={() => setIsMissing(true)}
          className="relative h-full w-full object-contain transition duration-500 motion-reduce:transition-none group-hover:-translate-y-0.5"
        />
      )}
    </div>
  );
}

export default PortfolioArtwork;
