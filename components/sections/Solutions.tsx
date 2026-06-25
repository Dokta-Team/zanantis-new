import { FeatureCard } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";

const IconVendors = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3 7L10 3L17 7L10 11L3 7Z" stroke="currentColor" strokeWidth="1.6" />
    <path d="M5 9.5V14.5L10 17L15 14.5V9.5" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const IconEmployers = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="3" y="6" width="14" height="10" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
    <path d="M7 6V4.5C7 3.7 7.7 3 8.5 3H11.5C12.3 3 13 3.7 13 4.5V6" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const IconInstitutions = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3 17V8L10 3L17 8V17" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M7 17V11H13V17" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const cards = [
  {
    icon: IconVendors,
    iconBg: "bg-ink-800",
    title: "For Healthcare Vendors",
    description:
      "Zanantis helps healthcare vendors reach more customers through a trusted distribution channel — visibility, customer acquisition support, referrals, health campaign participation, category positioning, and access to chronic care and wellness users.",
    caption: "Pharmacies · labs · clinics · hospitals · specialists · wellness brands",
  },
  {
    icon: IconEmployers,
    iconBg: "bg-ui-amber",
    title: "For Employers",
    description:
      "Zanantis helps employers provide healthcare and wellness support to their teams — telehealth access, preventive health programs, wellness product discounts, diagnostic screening, chronic care support, and care navigation.",
    caption: "A healthier workforce is more productive, more stable, and better supported.",
  },
  {
    icon: IconInstitutions,
    iconBg: "bg-ui-green",
    title: "For Institutions & Communities",
    description:
      "Zanantis works with institutions and communities seeking healthcare access for their members — cooperatives, associations, religious organizations, alumni and student communities, NGOs, and digital platforms.",
    caption: "Creating a trusted pathway for care, products, and services.",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-24 bg-ink-50 py-24 sm:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-12">
        <SectionHeading
          eyebrow="05 — Solutions"
          title="Built for vendors, employers, and institutions"
          lede="Whichever side of the healthcare journey you sit on, Zanantis gives you a trusted channel to reach the people and organizations that need you."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="flex flex-col">
              <FeatureCard
                icon={card.icon}
                iconBg={card.iconBg}
                title={card.title}
                description={card.description}
              />
              <p className="mt-3 px-1 font-mono text-[11.5px] leading-snug text-ink-400">
                {card.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
