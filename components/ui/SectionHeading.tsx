import clsx from "clsx";
import type { ReactNode } from "react";

type Accent = "neutral" | "blue" | "green" | "amber";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  /** Defaults to "neutral" — blue is reserved for buttons/links, not section labels. */
  accent?: Accent;
  className?: string;
}

const accentLight: Record<Accent, string> = {
  neutral: "text-ink-600",
  blue: "text-zan-blue",
  green: "text-ui-green",
  amber: "text-[#a06a00]",
};

const accentDark: Record<Accent, string> = {
  neutral: "text-white/55",
  blue: "text-zan-sky",
  green: "text-ui-green",
  amber: "text-ui-amber",
};

const barLight: Record<Accent, string> = {
  neutral: "bg-ink-400",
  blue: "bg-zan-blue",
  green: "bg-ui-green",
  amber: "bg-[#a06a00]",
};

const barDark: Record<Accent, string> = {
  neutral: "bg-white/40",
  blue: "bg-zan-sky",
  green: "bg-ui-green",
  amber: "bg-ui-amber",
};

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "light",
  accent = "neutral",
  className,
}: SectionHeadingProps) {
  const eyebrowColor = tone === "light" ? accentLight[accent] : accentDark[accent];
  const barColor = tone === "light" ? barLight[accent] : barDark[accent];

  return (
    <div className={clsx(align === "center" && "mx-auto text-center", className)}>
      <div
        className={clsx(
          "mb-[14px] flex items-center gap-[10px] font-mono text-xs uppercase tracking-[0.18em]",
          eyebrowColor,
          align === "center" && "justify-center"
        )}
      >
        <span className={clsx("inline-block h-[2px] w-[26px] rounded-full", barColor)} />
        {eyebrow}
      </div>

      <h2
        className={clsx(
          "text-[clamp(30px,4vw,42px)]",
          tone === "light" ? "text-ink-900" : "text-white"
        )}
      >
        {title}
      </h2>

      {lede && (
        <p
          className={clsx(
            "mt-[14px] max-w-[62ch] text-lg",
            tone === "light" ? "text-ink-600" : "text-white/70",
            align === "center" && "mx-auto"
          )}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
