import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/utils/cn";

type IlluminatedPanelProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  accent?: "blue" | "cyan" | "purple";
  delay?: number;
};

function IlluminatedPanel({
  children,
  className,
  contentClassName,
  accent = "blue",
  delay = 0,
}: IlluminatedPanelProps) {
  return (
    <div
      className={cn(
        "illuminated-panel group",
        `illuminated-panel--${accent}`,
        className,
      )}
      style={{ "--panel-delay": `${delay}s` } as CSSProperties}
    >
      <div className={cn("illuminated-panel__content", contentClassName)}>
        {children}
      </div>
    </div>
  );
}

export default IlluminatedPanel;
