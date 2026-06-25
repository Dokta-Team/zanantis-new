import Image from "next/image";
import { SectionHeading } from "../ui/SectionHeading";

const areas = [
  { label: "Access", color: "bg-ui-green" },
  { label: "Affordability", color: "bg-ui-amber" },
  { label: "Trust", color: "bg-ui-green" },
  { label: "Prevention", color: "bg-ink-800" },
  { label: "Chronic care support", color: "bg-ui-amber" },
  { label: "Institutional health", color: "bg-zan-blue" },
  { label: "Economic growth", color: "bg-ui-green" },
];

export function Impact() {
  return (
    <section id="impact" className="scroll-mt-24 bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-12">
        <div className="relative mb-14 overflow-hidden rounded-xl">
          <div className="relative aspect-[16/9] sm:aspect-[21/9]">
            <Image
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1600&q=80"
              alt="Communities across Africa that Zanantis aims to reach"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(150deg, rgba(11,23,51,0.93) 0%, rgba(11,23,51,0.55) 65%, rgba(11,23,51,0.15) 100%)",
              }}
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-end p-7 sm:p-12">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-white/55">
              07 — Impact
            </p>
            <h2 className="max-w-[26ch] text-[clamp(26px,3.6vw,38px)] text-white">
              Expanding Healthcare Access Across Africa
            </h2>
            <p className="mt-4 max-w-[60ch] text-[15px] leading-[1.7] text-white/75">
              Our impact is both social and commercial — helping users find care more easily,
              vendors reach customers more efficiently, and healthcare products and services move
              through better distribution channels.
            </p>
          </div>
        </div>

        <SectionHeading
          eyebrow="Areas of Impact"
          accent="green"
          title="Where Zanantis moves the needle"
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {areas.map((area) => (
            <div
              key={area.label}
              className="flex flex-col items-start gap-3 rounded-lg border border-ink-200 bg-white p-5 shadow-sm"
            >
              <span className={`h-2.5 w-2.5 rounded-full ${area.color}`} aria-hidden="true" />
              <span className="font-display text-[14.5px] font-bold text-ink-900">
                {area.label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-[70ch] text-[15px] leading-[1.7] text-ink-600">
          By organizing fragmented supply, guiding user demand, and supporting trusted
          transactions, Zanantis can help reshape how healthcare is accessed, distributed, and
          paid for across the continent.
        </p>
      </div>
    </section>
  );
}
