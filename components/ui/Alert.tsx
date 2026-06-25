import clsx from "clsx";

export type AlertVariant = "info" | "success" | "warn" | "danger";

const styles: Record<AlertVariant, { wrap: string; icon: string }> = {
  info: {
    wrap: "bg-[rgba(40,128,234,0.07)] border-[rgba(40,128,234,0.2)]",
    icon: "bg-zan-blue text-white",
  },
  success: {
    wrap: "bg-[rgba(31,164,90,0.08)] border-[rgba(31,164,90,0.22)]",
    icon: "bg-ui-green text-white",
  },
  warn: {
    wrap: "bg-[rgba(255,184,28,0.1)] border-[rgba(255,184,28,0.34)]",
    icon: "bg-ui-amber text-[#5b3d00]",
  },
  danger: {
    wrap: "bg-[rgba(229,52,43,0.07)] border-[rgba(229,52,43,0.24)]",
    icon: "bg-ui-red text-white",
  },
};

const glyphs: Record<AlertVariant, string> = {
  info: "i",
  success: "✓",
  warn: "!",
  danger: "!",
};

interface AlertProps {
  variant?: AlertVariant;
  title: string;
  description: string;
}

export function Alert({ variant = "info", title, description }: AlertProps) {
  const s = styles[variant];

  return (
    <div className={clsx("flex items-start gap-[13px] rounded-md border p-[15px_17px]", s.wrap)}>
      <span
        className={clsx(
          "flex h-6 w-6 flex-none items-center justify-center rounded-full font-display text-[15px] font-bold",
          s.icon
        )}
        aria-hidden="true"
      >
        {glyphs[variant]}
      </span>
      <div>
        <div className="font-display text-[14.5px] font-bold text-ink-900">{title}</div>
        <div className="text-[13.5px] text-ink-600">{description}</div>
      </div>
    </div>
  );
}
