import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/utils/cn";

type SectionProps<T extends ElementType = "section"> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

function Section<T extends ElementType = "section">({
  as,
  children,
  className,
  ...props
}: SectionProps<T>) {
  const Component = as ?? "section";

  return (
    <Component
      className={cn("relative py-12 sm:py-16 lg:py-20", className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Section;
