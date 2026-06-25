import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";

const revenueStreams = [
  "Commissions",
  "Product margins",
  "Diagnostic referral revenue",
  "Provider referrals",
  "Employer health programs",
  "Wellness packages",
  "Subscriptions",
  "Institutional partnerships",
  "Sponsored health campaigns",
];

export function Investors() {
  return (
    <section
      id="investors"
      className="scroll-mt-24 py-24 text-white sm:py-28"
      style={{ background: "linear-gradient(150deg, #0B1733 0%, #060B1C 130%)" }}
    >
      <div className="mx-auto max-w-content px-6 sm:px-12">
        <SectionHeading
          eyebrow="08 — For Investors"
          tone="dark"
          title="Invest in the future of healthcare distribution in Africa"
          lede="Zanantis is a healthcare and wellness distribution platform for Africa, starting with Nigeria — sitting at the intersection of digital health, telehealth, diagnostics, pharmacy access, wellness, chronic care support, and institutional distribution."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-white/5 p-7">
            <p className="mb-3 font-display text-[15px] font-bold text-white">
              Why This Opportunity Matters
            </p>
            <p className="text-[14.5px] leading-[1.7] text-white/70">
              Healthcare in Africa is large, essential, repetitive, and under-organized. People
              need trust, guidance, affordability, and reliable access — which makes distribution
              more complex, but also more defensible once a trusted platform is built.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-7">
            <p className="mb-3 font-display text-[15px] font-bold text-white">
              Our Commercial Thesis
            </p>
            <p className="text-[14.5px] leading-[1.7] text-white/70">
              Africa&rsquo;s healthcare market needs a platform that can aggregate demand,
              connect users to trusted providers, support transactions, reduce customer
              acquisition friction for vendors, and create institutional distribution channels.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-white/55">
            Revenue Opportunities
          </p>
          <div className="flex flex-wrap gap-[10px]">
            {revenueStreams.map((stream) => (
              <span
                key={stream}
                className="rounded-pill border border-white/15 bg-white/[0.06] px-[14px] py-2 font-mono text-xs tracking-[0.02em] text-white/75"
              >
                {stream}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-lg border border-white/10 bg-white/5 p-8 sm:p-10">
          <p className="mb-3 text-[20px]">
            Zanantis is building infrastructure for how healthcare and wellness products and
            services are discovered, accessed, purchased, and delivered across African markets.
          </p>
          <p className="mb-7 max-w-[64ch] text-[14.5px] leading-[1.7] text-white/70">
            We welcome conversations with investors, strategic partners, healthcare groups, and
            commercial institutions aligned with our mission.
          </p>
          <Button href="#contact" variant="primary" size="lg">
            Talk to Our Team
          </Button>
        </div>
      </div>
    </section>
  );
}
