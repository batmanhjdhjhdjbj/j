import { Card, CardContent } from "../../../../components/ui/card";

const statistics = [
  {
    value: "10+",
    label: "Years of Experience",
  },
  {
    value: "900+",
    label: "Satisfied customers",
  },
  {
    value: "99%",
    label: "Cybersecurity guarantee",
  },
];

const services = [
  {
    icon: "/frame-1.svg",
    title: "Endpoint Security Solutions",
    description:
      "Protect your devices and networks from malware, ransomware, and other cyber threats with our comprehensive endpoint security solutions. Safeguard sensitive data and ensure business continuity with real-time threat detection and response.",
  },
  {
    icon: "/frame-6.svg",
    title: "Network Security Solutions",
    description:
      "Secure your network infrastructure from unauthorized access and data breaches with our advanced network security solutions. Defend against evolving cyber threats and maintain network integrity with robust firewalls.",
  },
  {
    icon: "/frame-2.svg",
    title: "Data Encryption Services",
    description:
      "Encrypt sensitive data at rest and in transit to protect confidentiality and integrity. Our data encryption services provide end-to-end encryption solutions to safeguard your most valuable assets from unauthorized access and cyber attacks.",
  },
  {
    icon: "/frame.svg",
    title: "Incident Response and Forensics",
    description:
      "Rapidly detect, respond to, and recover from security incidents with our incident response and forensic services. Minimize the impact of breaches and maintain business continuity with our expert team of cybersecurity professionals.",
  },
  {
    icon: "/frame-3.svg",
    title: "Security Awareness Training",
    description:
      "Empower your employees with the knowledge and skills to recognize and mitigate cyber threats. Our security awareness training programs educate your workforce on cybersecurity best practices, reducing the risk of human error and strengthening your overall security posture.",
  },
  {
    icon: "/frame-1.svg",
    title: "Cloud Security Solutions",
    description:
      "Secure your cloud-based applications and data storage with our cloud security solutions. Ensure confidentiality, integrity, and availability in the cloud environment with advanced security measures tailored to your specific needs",
  },
];

export const CybersecurityServicesSection = (): JSX.Element => {
  return (
    <section className="flex w-full flex-col items-center gap-24 px-4 py-8 sm:gap-[104px] sm:px-6 lg:px-8">
      <header className="flex w-full flex-col items-center gap-5">
        <p className="[font-family:'Montserrat',Helvetica] text-center text-base font-light leading-6 text-white sm:text-lg sm:leading-[25.2px]">
          We are providing cybersecurity services to some of the World&apos;s
          leading companies
        </p>
        <img
          className="h-auto max-w-full"
          alt="Partner companies"
          src="/frame-271.svg"
        />
      </header>
      <div className="flex w-full max-w-[1232px] flex-col items-center gap-24 sm:gap-[104px]">
        <div className="flex w-full flex-col items-center gap-12">
          <p className="w-full max-w-[1222px] text-center [font-family:'Montserrat',Helvetica] text-base font-normal leading-7 text-white sm:text-2xl sm:leading-[39.4px]">
            At <span className="font-bold text-[#54f4fc]">Ironvelo</span>,
            we&apos;re dedicated to protecting businesses and individuals from
            the ever-evolving threats in the digital landscape. With [X
            years/months] of experience in the cybersecurity industry, we have
            honed our expertise to deliver innovative solutions that safeguard
            your digital assets and maintain your peace of mind.
          </p>
          <div className="grid w-full grid-cols-1 overflow-hidden rounded-[40px] bg-[linear-gradient(90deg,rgba(84,244,252,1)_0%,rgba(198,240,255,1)_37%,rgba(180,243,255,0.9)_75%,rgba(23,109,180,1)_100%)] sm:grid-cols-3">
            {statistics.map((statistic) => (
              <div
                key={statistic.label}
                className="flex min-h-[145px] flex-col items-center justify-center px-4 py-6 text-center text-black"
              >
                <strong className="[font-family:'Montserrat',Helvetica] text-4xl font-bold leading-tight tracking-[2.59px] sm:text-5xl">
                  {statistic.value}
                </strong>
                <span className="[font-family:'Lato',Helvetica] text-sm leading-6 tracking-[0.29px] sm:text-2xl sm:leading-[39.4px]">
                  {statistic.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-10 sm:gap-12">
          <h2 className="[font-family:'Montserrat',Helvetica] text-center text-3xl font-semibold leading-10 text-white sm:text-[40px] sm:leading-[56px]">
            Services we offer
          </h2>
          <div className="grid w-full grid-cols-1 gap-5 sm:gap-[20px] lg:grid-cols-2 lg:gap-[20px_72px]">
            {services.map((service) => (
              <Card
                key={service.title}
                className="relative min-h-[350px] rounded-2xl border-0 bg-transparent p-px before:pointer-events-none before:absolute before:inset-0 before:z-0 before:rounded-2xl before:bg-[linear-gradient(114deg,rgba(85,244,252,1)_0%,rgba(24,110,180,1)_100%)]"
              >
                <CardContent className="relative z-10 flex h-full min-h-[348px] flex-col items-center gap-4 rounded-[15px] bg-black px-6 py-10 sm:px-12 sm:py-12">
                  <img
                    className="h-[94px] w-[94px] shrink-0"
                    alt=""
                    src={service.icon}
                  />
                  <div className="flex flex-col items-center gap-6">
                    <h3 className="bg-[linear-gradient(129deg,rgba(85,244,252,1)_0%,rgba(26,111,181,1)_100%)] bg-clip-text text-center [font-family:'Montserrat',Helvetica] text-lg font-semibold leading-7 text-transparent [-webkit-text-fill-color:transparent] sm:text-2xl sm:leading-[33.6px]">
                      {service.title}
                    </h3>
                    <p className="max-w-[449px] text-center [font-family:'Lato',Helvetica] text-sm font-light leading-6 tracking-[0.36px] text-white sm:text-lg sm:leading-[31.7px]">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
