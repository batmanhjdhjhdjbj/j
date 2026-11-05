import { CapabilitiesSection } from "./sections/CapabilitiesSection/CapabilitiesSection";
import { LandingFooterSection } from "./sections/LandingFooterSection/LandingFooterSection";
import { LandingHeaderSection } from "./sections/LandingHeaderSection/LandingHeaderSection";
import { PositioningSection } from "./sections/PositioningSection/PositioningSection";
import { SectorTrustSection } from "./sections/SectorTrustSection/SectorTrustSection";
import { SoftCtaSection } from "./sections/SoftCtaSection/SoftCtaSection";

export const Landing = (): JSX.Element => {
  return (
    <main className="min-h-screen w-full bg-[#0b0c0e] font-['Lato',Helvetica] text-white">
      <LandingHeaderSection />
      <PositioningSection />
      <SectorTrustSection />
      <CapabilitiesSection />
      <SoftCtaSection />
      <LandingFooterSection />
    </main>
  );
};
