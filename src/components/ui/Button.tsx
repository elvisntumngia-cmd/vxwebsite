import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";
import { Link } from "react-router";

import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type SharedButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type NativeButtonProps = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
    to?: never;
  };

type ExternalLinkProps = SharedButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    to?: never;
  };

type RouterLinkProps = SharedButtonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "children" | "className"> & {
    to: string;
    href?: never;
  };

type ButtonProps = NativeButtonProps | ExternalLinkProps | RouterLinkProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border border-blue-300/30 bg-blue-500/20 text-white shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:border-blue-200/45 hover:bg-blue-500/30 hover:shadow-[0_0_42px_rgba(59,130,246,0.3)]",
  secondary:
    "border border-white/15 bg-white/[0.045] text-white hover:border-white/25 hover:bg-white/[0.085]",
  ghost:
    "border border-transparent bg-transparent text-slate-300 hover:bg-white/5 hover:text-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-11 px-5 py-2.5 text-sm",
  lg: "min-h-13 px-7 py-3.5 text-sm sm:text-base",
};

function Button(props: ButtonProps) {
  const { className, variant = "primary", size = "md" } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020305] disabled:pointer-events-none disabled:opacity-50",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if ("to" in props && typeof props.to === "string") {
    const {
      children: linkChildren,
      className: _className,
      variant: _variant,
      size: _size,
      ...linkProps
    } = props;

    return (
      <Link className={classes} {...linkProps}>
        {linkChildren}
      </Link>
    );
  }

  if ("href" in props && typeof props.href === "string") {
    const {
      children: anchorChildren,
      className: _className,
      variant: _variant,
      size: _size,
      ...anchorProps
    } = props;

    return (
      <a className={classes} {...anchorProps}>
        {anchorChildren}
      </a>
    );
  }

  const {
    children: buttonChildren,
    className: _className,
    variant: _variant,
    size: _size,
    type = "button",
    ...buttonProps
  } = props as NativeButtonProps;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {buttonChildren}
    </button>
  );
}

export default Button;
