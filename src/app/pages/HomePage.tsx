import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { ProblemSection } from '../components/ProblemSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { DualAudienceSection } from '../components/DualAudienceSection';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { InThePressSection } from '../components/InThePressSection';
import { PartnerTrustBar } from '../components/PartnerTrustBar';
import { CTABanner } from '../components/CTABanner';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Image Angel — Forensic Watermarking for Content Protection';
  }, []);

  return (
    <>
      <Hero />
      <ProblemSection />
      <HowItWorksSection />
      <DualAudienceSection />
      <CaseStudiesSection />
      <InThePressSection />
      <PartnerTrustBar />
      <CTABanner />
    </>
  );
}