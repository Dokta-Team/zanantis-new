import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { WhyZanantis } from "@/components/sections/WhyZanantis";
import { CTABand } from "@/components/sections/CTABand";
import { Platform } from "@/components/sections/Platform";
import { Solutions } from "@/components/sections/Solutions";
import { Quality } from "@/components/sections/Quality";
import { Impact } from "@/components/sections/Impact";
import { Investors } from "@/components/sections/Investors";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <WhatWeDo />
      <WhyZanantis />
      <CTABand />
      <Platform />
      <Solutions />
      <Quality />
      <Impact />
      <Investors />
      <Contact />
      <FAQ />
      <Footer />
    </>
  );
}
