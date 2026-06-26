import clsx from "clsx";
import type { ReactNode } from "react";

export function Card({
  className,
  padded = true,
  children,
}: {
  className?: string;
  padded?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={clsx("rounded-lg border border-ink-200 bg-white shadow-sm", padded && "p-6", className)}>
      {children}
    </div>
  );
}

export function FeatureCard({
  icon,
  iconBg = "bg-zan-blue",
  title,
  description,
}: {
  icon: ReactNode;
  iconBg?: string;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <div
        className={clsx(
          "mb-4 flex h-[46px] w-[46px] items-center justify-center rounded-[13px] text-white",
          iconBg
        )}
        aria-hidden="true"
      >
        {icon}
      </div>
      <h4 className="mb-[7px] text-lg">{title}</h4>
      <p className="text-[14.5px] text-ink-600">{description}</p>
    </Card>
  );
}

export function StatCard({
  value,
  label,
  colorClassName = "text-primary-400",
}: {
  value: ReactNode;
  label: string;
  colorClassName?: string;
}) {
  return (
    <Card>
      <div className={clsx("font-display text-[40px] font-bold leading-none tracking-tight", colorClassName)}>
        {value}
      </div>
      <div className="mt-2 text-sm text-ink-600">{label}</div>
    </Card>
  );
}
