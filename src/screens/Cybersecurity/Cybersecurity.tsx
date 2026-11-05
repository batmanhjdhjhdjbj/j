import { Button } from "../../components/ui/button";
import { ConsultationCallToActionSection } from "./sections/ConsultationCallToActionSection/ConsultationCallToActionSection";
import { CustomerTestimonialsSection } from "./sections/CustomerTestimonialsSection/CustomerTestimonialsSection";
import { CybersecurityHeroSection } from "./sections/CybersecurityHeroSection";
import { CybersecurityServicesSection } from "./sections/CybersecurityServicesSection/CybersecurityServicesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderNavigationSection } from "./sections/HeaderNavigationSection";

export const Cybersecurity = (): JSX.Element => {
  return (
    <main className="w-full overflow-hidden bg-black text-white">
      <header className="relative z-20 min-h-24 px-10">
        <div className="h-px w-full bg-neutral-700" />
        <HeaderNavigationSection />
      </header>
      <section
        aria-labelledby="cybersecurity-hero"
        className="relative min-h-[800px] overflow-hidden"
      >
        <img
          className="pointer-events-none absolute left-[535px] top-24 z-0 h-[550px] w-[829px] object-cover"
          alt="Cyber security"
          src="/cyber-security-2.png"
        />
        <img
          className="pointer-events-none absolute right-0 top-[37px] z-0 h-[550px] w-[99px] object-cover"
          alt="Cyber security"
          src="/cyber-security-2.png"
        />
        <div className="pointer-events-none absolute left-[475px] top-[139px] z-10 h-[471px] w-[572px] bg-[linear-gradient(91deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0.69)_59%,rgba(0,0,0,0.08)_100%)]" />
        <div className="pointer-events-none absolute left-[53px] top-[198px] z-20 h-[335px] w-px bg-[#424242]" />
        <div className="pointer-events-none absolute left-[54px] top-[198px] z-20 h-px w-10 bg-[#424242]" />
        <div className="pointer-events-none absolute left-[54px] top-[532px] z-20 h-px w-10 bg-[#424242]" />
        <div className="pointer-events-none absolute left-[840px] top-[79px] z-20 h-6 w-6 border-l-[3px] border-t-[3px] border-[#54f4fc]" />
        <div className="pointer-events-none absolute left-[840px] top-[660px] z-20 h-6 w-6 border-l-[3px] border-t-[3px] border-[#54f4fc]" />
        <div className="pointer-events-none absolute right-10 top-[79px] z-20 h-6 w-6 rotate-180 border-l-[3px] border-t-[3px] border-[#54f4fc]" />
        <div className="pointer-events-none absolute right-10 top-[660px] z-20 h-6 w-6 rotate-180 border-l-[3px] border-t-[3px] border-[#54f4fc]" />
        <div className="relative z-20">
          <CybersecurityHeroSection />
          <p className="absolute left-[104px] top-[333px] w-[756px] font-['Lato',Helvetica] text-2xl font-normal leading-[39.4px] tracking-normal text-[#d7d7d7]">
            Unlock your business&apos;s full potential with our comprehensive
            cybersecurity strategies. Safeguard your growth and resilience in
            the digital age.
          </p>
          <div className="absolute left-[104px] top-[514px] flex items-start gap-8">
            <Button
              type="button"
              className="h-auto rounded-lg bg-[#54f4fc] px-[30px] py-[17px] font-['Montserrat',Helvetica] text-base font-bold leading-[26.2px] tracking-[0.8px] text-black hover:bg-[#54f4fc]/90"
            >
              LEARN MORE
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-auto rounded-lg border-[#54f4fc] px-[30px] py-[17px] font-['Montserrat',Helvetica] text-base font-bold leading-[26.2px] tracking-[0.8px] text-[#54f4fc] hover:bg-[#54f4fc]/10 hover:text-[#54f4fc]"
            >
              TALK WITH US
            </Button>
          </div>
        </div>
      </section>
      <CybersecurityServicesSection />
      <CustomerTestimonialsSection />
      <ConsultationCallToActionSection />
      <FooterSection />
    </main>
  );
};
