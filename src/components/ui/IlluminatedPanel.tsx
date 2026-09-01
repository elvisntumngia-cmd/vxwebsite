import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "@/utils/cn";

type IlluminatedPanelProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  accent?: "blue" | "cyan" | "purple" | "emerald";
  delay?: number;
};

function IlluminatedPanel({
  children,
  className,
  contentClassName,
  accent = "blue",
  delay = 0,
}: IlluminatedPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { rootMargin: "160px 0px" },
    );
    observer.observe(panel);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={panelRef}
      className={cn(
        "illuminated-panel group",
        `illuminated-panel--${accent}`,
        isActive && "illuminated-panel--active",
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
