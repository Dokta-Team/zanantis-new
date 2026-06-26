import clsx from "clsx";
import type { InputHTMLAttributes, LabelHTMLAttributes, ReactNode, SelectHTMLAttributes } from "react";

const fieldBase =
  "w-full font-body text-[15px] px-[14px] py-3 rounded-md border-[1.5px] border-ink-200 bg-white text-ink-900 placeholder:text-ink-400 transition-colors duration-150 focus:outline-none focus:border-zan-blue focus:ring-4 focus:ring-[rgba(40,128,234,0.14)]";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={clsx(fieldBase, className)} {...props} />;
}

export function Select({
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={clsx(fieldBase, className)} {...props}>
      {children}
    </select>
  );
}

export function SearchInput({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <svg
        className="pointer-events-none absolute left-[13px] top-1/2 -translate-y-1/2"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        stroke="#8893A8"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="8" cy="8" r="6" />
        <path d="M13 13l4 4" />
      </svg>
      <input className={clsx(fieldBase, "pl-10", className)} {...props} />
    </div>
  );
}

export function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor?: string;
  children: ReactNode;
} & Pick<LabelHTMLAttributes<HTMLLabelElement>, "htmlFor">) {
  return (
    <div className="flex flex-col gap-[7px]">
      <label htmlFor={htmlFor} className="font-display font-bold text-[13.5px] text-ink-800">
        {label}
      </label>
      {children}
    </div>
  );
}
