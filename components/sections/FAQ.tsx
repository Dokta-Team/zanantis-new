import { SectionHeading } from "../ui/SectionHeading";

const faqs = [
  {
    q: "What is Zanantis?",
    a: "Zanantis is a healthcare and wellness distribution company with a technology-enabled platform that connects users to consultations, products, diagnostics, pharmacies, specialists, wellness services, and trusted healthcare partners.",
  },
  {
    q: "Is Zanantis a telemedicine company?",
    a: "No. Zanantis is not a telemedicine business. Zanantis is a telehealth company and a healthcare distribution company.",
  },
  {
    q: "What makes Zanantis different?",
    a: "Zanantis is focused on healthcare distribution, not just digital consultations. Our platform connects health needs to products, services, diagnostics, referrals, and transactions — a more complete healthcare journey for users and a more valuable distribution channel for partners.",
  },
  {
    q: "What markets does Zanantis serve?",
    a: "Zanantis is currently focused on Nigeria, with a broader ambition to expand across Africa over time.",
  },
  {
    q: "Is Zanantis open to investment?",
    a: "Yes. Zanantis welcomes conversations with investors and strategic partners who understand the opportunity to build healthcare and wellness distribution infrastructure across Africa.",
  },
];

export function FAQ() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-12">
        <SectionHeading eyebrow="10 — FAQ" title="Frequently asked questions" />

        <div className="mt-10 rounded-lg border border-ink-200 bg-white">
          {faqs.map((item, index) => (
            <div
              key={item.q}
              className={
                index !== faqs.length - 1
                  ? "border-b border-ink-100 px-6 py-6 sm:px-8"
                  : "px-6 py-6 sm:px-8"
              }
            >
              <p className="mb-2 font-display text-[15.5px] font-bold text-ink-900">{item.q}</p>
              <p className="text-[14.5px] leading-[1.7] text-ink-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
