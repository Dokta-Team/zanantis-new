import Link from "next/link";
import clsx from "clsx";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

// "outline" is not in the original spec's button set (which assumes light
// surfaces) — added so CTAs have a legible secondary style on the dark
// hero/navy sections. Same shape/size/transition rules as the rest.
// "soft-green" / "soft-amber" extend the spec's "soft" pattern (tinted bg,
// colored text) to the other Kara accents, so CTAs aren't all default-blue.
export type ButtonVariant =
  | "primary"
  | "deep"
  | "soft"
  | "soft-green"
  | "soft-amber"
  | "ghost"
  | "danger"
  | "outline";
export type ButtonSize = "sm" | "default" | "lg";

const base =
  "inline-flex items-center gap-2 font-display font-semibold rounded-pill leading-none transition-all duration-150 active:translate-y-px disabled:opacity-50 disabled:cursor-not-allowed";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-400 text-white shadow-[0_6px_14px_rgba(40,128,234,0.3)] hover:bg-primary-500",
  deep: "bg-zan-navy text-white hover:bg-[#0a1d6e]",
  soft: "bg-[rgba(40,128,234,0.12)] text-primary-400 hover:bg-[rgba(40,128,234,0.18)]",
  "soft-green": "bg-[rgba(31,164,90,0.12)] text-ui-green hover:bg-[rgba(31,164,90,0.18)]",
  "soft-amber": "bg-[rgba(255,184,28,0.16)] text-[#a06a00] hover:bg-[rgba(255,184,28,0.22)]",
  ghost:
    "bg-transparent text-zan-navy border-[1.5px] border-ink-300 hover:border-primary-400 hover:text-primary-400",
  danger: "bg-ui-red text-white hover:bg-[#c92920]",
  outline:
    "bg-transparent text-white border-[1.5px] border-white/30 hover:border-white/70",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[13.5px]",
  default: "px-[22px] py-3 text-[15px]",
  lg: "px-7 py-[15px] text-[17px]",
};

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = clsx(base, variantClasses[variant], sizeClasses[size], className);

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
