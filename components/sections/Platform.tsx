import Image from "next/image";
import { Pill } from "../ui/Pill";
import { SectionHeading } from "../ui/SectionHeading";

const players = [
  "Users",
  "Doctors & health professionals",
  "Pharmacies",
  "Diagnostic laboratories",
  "Hospitals & clinics",
  "Wellness brands",
  "Specialists",
  "Employers & institutions",
  "Fulfillment partners",
  "Care coordination teams",
];

const functions = [
  "Consultation access",
  "Product discovery",
  "Diagnostics and testing",
  "Specialist referrals",
  "Partner distribution",
  "Care navigation",
  "Institutional access",
];

export function Platform() {
  return (
    <section id="platform" className="scroll-mt-24 bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-12">
        <SectionHeading
          eyebrow="04 — Our Platform"
          accent="green"
          title="A Connected Healthcare Commerce Platform"
          lede="Zanantis connects the key players needed to support healthcare access and distribution — creating a more coordinated experience for users and a stronger commercial channel for partners."
        />

        <div className="mt-10 flex flex-wrap gap-[10px]">
          {players.map((player) => (
            <Pill key={player} variant="neutral" withDot>
              {player}
            </Pill>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-lg shadow-lg lg:order-1 lg:aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=900&q=80"
              alt="A pharmacist preparing a prescription in the Zanantis network"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="mb-5 font-display text-sm font-bold uppercase tracking-[0.06em] text-ui-green">
              Core Platform Functions
            </p>
            <ul className="space-y-3">
              {functions.map((fn) => (
                <li key={fn} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[rgba(31,164,90,0.14)] text-ui-green">
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                      <path
                        d="M1 4.5L4 7.5L10 1.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-[15px] text-ink-800">{fn}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-md border border-ink-200 bg-ink-50 p-5">
              <p className="mb-2 font-display text-[14.5px] font-bold text-ink-900">
                Built for African Market Realities
              </p>
              <p className="text-[14px] leading-[1.65] text-ink-600">
                Designed around high out-of-pocket spending, fragmented provider networks,
                trust-sensitive decisions, low insurance penetration, growing digital adoption,
                and the need for hybrid online-offline fulfillment. We are a practical healthcare
                infrastructure company, not just a digital interface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
