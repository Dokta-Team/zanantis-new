import clsx from "clsx";
import type { ReactNode } from "react";

export type PillVariant = "neutral" | "new" | "info" | "success" | "warn" | "danger";

const variantClasses: Record<PillVariant, string> = {
  neutral: "bg-ink-100 text-ink-700",
  new: "bg-zan-navy text-white",
  info: "bg-[rgba(37,181,244,0.16)] text-[#0c80b8]",
  success: "bg-[rgba(31,164,90,0.14)] text-ui-green",
  warn: "bg-[rgba(255,184,28,0.18)] text-[#a06a00]",
  danger: "bg-[rgba(229,52,43,0.12)] text-ui-red",
};

const dotClasses: Record<PillVariant, string> = {
  neutral: "bg-ink-400",
  new: "bg-white",
  info: "bg-[#0c80b8]",
  success: "bg-ui-green",
  warn: "bg-[#a06a00]",
  danger: "bg-ui-red",
};

interface PillProps {
  variant?: PillVariant;
  withDot?: boolean;
  children: ReactNode;
  className?: string;
}

export function Pill({ variant = "info", withDot = false, children, className }: PillProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-[7px] font-display font-bold text-[12.5px] px-3 py-[5px] rounded-pill",
        variantClasses[variant],
        className
      )}
    >
      {withDot && <span className={clsx("w-[7px] h-[7px] rounded-full", dotClasses[variant])} />}
      {children}
    </span>
  );
}
