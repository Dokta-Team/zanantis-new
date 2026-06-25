import { SectionHeading } from "../ui/SectionHeading";

const problems = [
  "Limited access to reliable healthcare products",
  "Affordable consultations are hard to find",
  "Diagnostics and specialist referrals are disconnected",
  "Vendors struggle to reach customers beyond their physical locations",
];

const solutions = [
  "Digital access",
  "Healthcare guidance",
  "Distribution",
  "Vendor partnerships",
  "Institutional channels",
];

export function WhyZanantis() {
  return (
    <section className="bg-ink-900 py-24 sm:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-12">
        <SectionHeading
          eyebrow="02 — Why Zanantis"
          tone="dark"
          align="center"
          title={
            <>
              Healthcare in Africa is not only an access problem.
              <br className="hidden sm:block" /> It is also a distribution problem.
            </>
          }
          lede="Millions of people need reliable healthcare products, affordable consultations, trusted diagnostics, preventive wellness support, and access to verified providers. At the same time, healthcare businesses need better ways to reach customers beyond their physical locations."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-[rgba(229,52,43,0.25)] bg-[rgba(229,52,43,0.07)] p-7">
            <p className="mb-5 font-display text-sm font-bold uppercase tracking-[0.06em] text-ui-red">
              The Problem
            </p>
            <ul className="space-y-4">
              {problems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[7px] h-[7px] w-[7px] flex-none rounded-full bg-ui-red" />
                  <span className="text-[15px] leading-[1.6] text-white/75">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-[rgba(31,164,90,0.28)] bg-[rgba(31,164,90,0.08)] p-7">
            <p className="mb-5 font-display text-sm font-bold uppercase tracking-[0.06em] text-ui-green">
              How Zanantis Closes the Gap
            </p>
            <ul className="space-y-4">
              {solutions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[7px] h-[7px] w-[7px] flex-none rounded-full bg-ui-green" />
                  <span className="text-[15px] leading-[1.6] text-white/75">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
