import { Button, type ButtonVariant } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";

const ctas: {
  label: string;
  description: string;
  iconBg: string;
  buttonVariant: ButtonVariant;
  href: string;
  cta: string;
}[] = [
  {
    label: "For Partners",
    description:
      "Expand your reach through Zanantis's healthcare and wellness distribution network.",
    iconBg: "bg-ui-green",
    buttonVariant: "soft-green",
    href: "#solutions",
    cta: "Become a Partner",
  },
  {
    label: "For Investors",
    description: "Back a platform positioned to organize and scale healthcare commerce across Africa.",
    iconBg: "bg-ui-amber",
    buttonVariant: "soft-amber",
    href: "#investors",
    cta: "Explore Investing",
  },
  {
    label: "For Institutions",
    description:
      "Provide your employees, members, or communities with access to guided healthcare and wellness support.",
    iconBg: "bg-zan-blue",
    buttonVariant: "soft",
    href: "#contact",
    cta: "Talk to Us",
  },
];

export function CTABand() {
  return (
    <section id="partners" className="scroll-mt-24 bg-ink-50 py-24 sm:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-12">
        <SectionHeading
          eyebrow="03 — Get Involved"
          align="center"
          title="Let's build the future of healthcare distribution together."
          className="mx-auto max-w-[46ch]"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {ctas.map((item) => (
            <div
              key={item.label}
              className="flex flex-col rounded-lg border border-ink-200 bg-white p-7 shadow-sm"
            >
              <div
                className={`mb-5 flex h-[46px] w-[46px] items-center justify-center rounded-[13px] text-white ${item.iconBg}`}
                aria-hidden="true"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 2L11.6 7.2H17L12.7 10.3L14.3 15.5L10 12.4L5.7 15.5L7.3 10.3L3 7.2H8.4L10 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h4 className="mb-2 text-lg">{item.label}</h4>
              <p className="mb-6 flex-1 text-[14.5px] text-ink-600">{item.description}</p>
              <Button href={item.href} variant={item.buttonVariant} size="sm" className="self-start">
                {item.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
