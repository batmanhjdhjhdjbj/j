type Capability = {
  title: string;
  riskReduced: string;
  description: string;
};

const capabilities: Capability[] = [
  {
    title: "Infrastructure Hardening",
    riskReduced: "Reduces lateral movement",
    description:
      "Tightens configuration baselines and removes unnecessary exposure, so a single compromised host has no easy path to adjacent systems.",
  },
  {
    title: "Monitoring & Detection",
    riskReduced: "Reduces dwell time",
    description:
      "Continuous visibility into access patterns, configuration drift, and unusual API traffic, so suspicious activity is surfaced and triaged early.",
  },
  {
    title: "Access & Identity Controls",
    riskReduced: "Reduces credential misuse",
    description:
      "Enforces least-privilege access, strong authentication, and timely revocation, limiting what any one compromised identity can do.",
  },
  {
    title: "API & Data Pipeline Protection",
    riskReduced: "Reduces unauthorized data access",
    description:
      "Reviews authorization on APIs and data flows so sensitive data is reachable only by the services and people who need it.",
  },
];

export const CapabilitiesSection = (): JSX.Element => {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="scroll-mt-24 mx-auto w-full max-w-[1120px] px-6 py-20 sm:px-10 sm:py-24"
    >
      <p className="font-['Montserrat',Helvetica] text-sm font-semibold uppercase leading-[1.2] tracking-[0.16em] text-[#54f4fc]">
        Capabilities
      </p>
      <h2
        id="capabilities-heading"
        className="mt-4 max-w-[720px] font-['Montserrat',Helvetica] text-3xl font-semibold leading-[1.2] text-white sm:text-4xl"
      >
        Controls defined by the risk they reduce
      </h2>
      <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {capabilities.map((capability) => (
          <li
            key={capability.title}
            className="flex flex-col gap-4 rounded-lg border border-[#1f2226] bg-[#111316] p-8 transition-colors duration-300 hover:border-[#54f4fc]/40"
          >
            <p className="text-sm font-normal leading-[1.5] text-[#54f4fc]">
              {capability.riskReduced}
            </p>
            <h3 className="font-['Montserrat',Helvetica] text-xl font-semibold leading-[1.2] text-white">
              {capability.title}
            </h3>
            <p className="text-base font-normal leading-[1.5] text-[#b1b5bb]">
              {capability.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
