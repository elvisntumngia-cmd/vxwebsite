import { NavLink } from "react-router";

import { cn } from "@/utils/cn";

type LogoProps = {
  className?: string;
  onClick?: () => void;
  showName?: boolean;
  showTagline?: boolean;
};

function Logo({
  className,
  onClick,
  showName = true,
  showTagline = false,
}: LogoProps) {
  return (
    <NavLink
      to="/"
      aria-label="ViankaX home"
      onClick={onClick}
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-blue-300/25 bg-blue-500/10 shadow-[0_0_26px_rgba(59,130,246,0.2)] transition duration-300 group-hover:border-blue-200/45 group-hover:shadow-[0_0_34px_rgba(59,130,246,0.32)]">
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_48%)]" />

        <span className="font-display relative text-sm font-bold tracking-[-0.06em] text-white">
          VX
        </span>
      </span>

      {showName && (
        <span>
          <span className="font-display block text-lg font-semibold tracking-[-0.04em] text-white">
            Vianka<span className="text-blue-400">X</span>
          </span>
          {showTagline && (
            <span className="mt-0.5 block text-[.42rem] font-semibold uppercase tracking-[.2em] text-slate-400">
              AI. Automation. Growth.
            </span>
          )}
        </span>
      )}
    </NavLink>
  );
}

export default Logo;
