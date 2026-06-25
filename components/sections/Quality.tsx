import { Alert } from "../ui/Alert";
import { Pill } from "../ui/Pill";
import { SectionHeading } from "../ui/SectionHeading";

const standards = [
  "Product Quality",
  "Service Reliability",
  "Professional Conduct",
  "Pricing Transparency",
  "Fulfillment Accuracy",
  "Regulatory Compliance",
  "Ethical Marketing",
  "User Safety",
];

export function Quality() {
  return (
    <section id="quality" className="scroll-mt-24 bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-12">
        <SectionHeading
          eyebrow="06 — Clinical Governance & Quality"
          accent="green"
          title="Trust is central to healthcare distribution"
          lede="Healthcare distribution cannot be built on convenience alone. It must be built on trust. Zanantis is committed to being a responsible platform that supports safe, ethical, and appropriate healthcare access."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          <Alert
            variant="success"
            title="Our Quality Principles"
            description="We work with credible healthcare and wellness partners, support appropriate care navigation, promote responsible recommendations, and protect user information."
          />
          <Alert
            variant="success"
            title="Always Strengthening"
            description="As our platform grows, we continue to strengthen clinical oversight, partner onboarding, service monitoring, data responsibility, and quality assurance."
          />
        </div>

        <div className="mt-14 rounded-lg border border-ink-200 bg-ink-50 p-7 sm:p-9">
          <p className="mb-5 font-display text-sm font-bold uppercase tracking-[0.06em] text-ui-green">
            Partner Standards
          </p>
          <p className="mb-6 max-w-[64ch] text-[15px] leading-[1.7] text-ink-600">
            Zanantis expects partners to maintain high standards across every part of the
            distribution journey:
          </p>
          <div className="flex flex-wrap gap-[10px]">
            {standards.map((standard) => (
              <Pill key={standard} variant="success" withDot>
                {standard}
              </Pill>
            ))}
          </div>
          <p className="mt-7 font-display text-[16px] font-bold text-ink-900">
            Our goal is to build a healthcare platform that users and partners can trust.
          </p>
        </div>
      </div>
    </section>
  );
}
