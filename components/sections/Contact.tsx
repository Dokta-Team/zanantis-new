import { Button } from "../ui/Button";
import { Field, Input, Select } from "../ui/Input";
import { Pill } from "../ui/Pill";
import { SectionHeading } from "../ui/SectionHeading";

const categories = [
  "Partnerships",
  "Investors",
  "Healthcare Providers",
  "Pharmacies",
  "Diagnostic Laboratories",
  "Wellness Brands",
  "Employers",
  "Institutions & Communities",
  "Technology Partners",
  "Media & General Enquiries",
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-ink-50 py-24 sm:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-12">
        <SectionHeading
          eyebrow="09 — Contact"
          title="Let's hear from you"
          lede="We welcome conversations with investors, healthcare providers, wellness brands, employers, institutions, commercial partners, and ecosystem stakeholders."
        />

        <div className="mt-6 flex flex-wrap gap-[8px]">
          {categories.map((category) => (
            <Pill key={category} variant="neutral">
              {category}
            </Pill>
          ))}
        </div>

        <form className="mt-12 grid grid-cols-1 gap-5 rounded-lg border border-ink-200 bg-white p-7 shadow-sm sm:grid-cols-2 sm:p-9">
          <Field label="Full name" htmlFor="name">
            <Input id="name" name="name" placeholder="Jordan Avery" autoComplete="name" />
          </Field>
          <Field label="Organization" htmlFor="organization">
            <Input id="organization" name="organization" placeholder="Company or institution" />
          </Field>
          <Field label="Email address" htmlFor="email">
            <Input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
          </Field>
          <Field label="Phone number" htmlFor="phone">
            <Input id="phone" name="phone" type="tel" placeholder="+234 ..." autoComplete="tel" />
          </Field>
          <div className="sm:col-span-2">
            <Field label="Partnership type" htmlFor="partnership-type">
              <Select id="partnership-type" name="partnershipType" defaultValue="">
                <option value="" disabled>
                  Select an option
                </option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Select>
            </Field>
          </div>
          <div className="sm:col-span-2">
            <Field label="Message" htmlFor="message">
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us a little about what you're looking to do with Zanantis"
                className="w-full rounded-md border-[1.5px] border-ink-200 bg-white px-[14px] py-3 font-body text-[15px] text-ink-900 placeholder:text-ink-400 transition-colors duration-150 focus:outline-none focus:border-zan-blue focus:ring-4 focus:ring-[rgba(40,128,234,0.14)]"
              />
            </Field>
          </div>
          <div className="sm:col-span-2">
            <Button type="submit" variant="primary" size="default">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
