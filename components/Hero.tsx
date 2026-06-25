import { Button } from "./ui/Button";

const pillars = ["Healthcare Access", "Product Distribution", "Partner Growth"];

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pb-24 pt-36 text-white sm:pb-28 sm:pt-40"
      style={{ background: "linear-gradient(150deg, #0B1733 0%, #060B1C 130%)" }}
    >
      {/* Soft neutral highlight layer — no brand blue in the background */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(1200px 600px at 78% -10%, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 55%)",
        }}
        aria-hidden="true"
      />

      {/* Oversized helix glyph bleeding off the right edge.
          Plain <img> on purpose: percentage-based height for this
          decorative bleed doesn't map cleanly onto next/image's
          fixed-dimension / fill model. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo/zan-icon.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-60px] top-1/2 z-[1] h-[118%] -translate-y-1/2 opacity-[0.14] brightness-[3]"
      />

      <div className="relative z-[2] mx-auto max-w-content px-6 sm:px-12">
        <p className="mb-7 font-mono text-xs uppercase tracking-[0.22em] text-white/55">
          Healthcare &amp; Wellness Distribution
        </p>

        <h1 className="max-w-[24ch] text-[clamp(38px,6vw,68px)] leading-[1.05] tracking-[-0.02em] text-white">
          Zanantis is an Africa-Focused Healthcare &amp; Wellness{" "}
          <em className="font-bold not-italic text-ui-green">Distribution</em> Platform
        </h1>

        <p className="mt-6 max-w-[58ch] text-lg text-white/70 sm:text-xl">
          Zanantis connects people, healthcare providers, wellness brands, pharmacies,
          diagnostic partners, employers, and institutions through a technology-enabled
          distribution platform designed for African healthcare realities.
        </p>

        <div className="mt-10 flex flex-wrap gap-[10px]">
          {pillars.map((pillar) => (
            <span
              key={pillar}
              className="rounded-pill border border-white/15 bg-white/[0.06] px-[14px] py-2 font-mono text-xs uppercase tracking-[0.04em] text-white/75"
            >
              {pillar}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="#partners" variant="primary" size="lg">
            Partner With Us
          </Button>
          <Button href="#investors" variant="outline" size="lg">
            For Investors
          </Button>
        </div>

        <p className="mt-7 max-w-[48ch] font-mono text-[13px] italic text-white/40">
          &ldquo;Partner with us to distribute healthcare and wellness at scale across
          Africa.&rdquo;
        </p>
      </div>
    </section>
  );
}
