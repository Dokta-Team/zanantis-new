import Image from "next/image";
import { SectionHeading } from "../ui/SectionHeading";

export function WhatWeDo() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="01 — What We Do"
              title="Not simply a telehealth company."
              lede={
                <>
                  We are a healthcare and wellness distribution company that helps trusted
                  products, services, consultations, diagnostics, and care pathways reach the
                  people who need them.
                </>
              }
            />

            <div className="mt-8 space-y-5 text-[16px] leading-[1.7] text-ink-600">
              <p>
                Zanantis operates at the intersection of healthcare access, digital commerce,
                wellness, and healthcare distribution.
              </p>
              <p>
                Our platform helps users move from health concern to trusted action:
                consultation, product purchase, lab test, specialist referral, wellness plan, or
                ongoing care support.
              </p>
              <p>
                For partners, Zanantis creates a trusted channel to reach health-conscious
                consumers, chronic care users, families, employers, institutions, and
                communities.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg lg:aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80"
              alt="A healthcare provider in the Zanantis partner network"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
