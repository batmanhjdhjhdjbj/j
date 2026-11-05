const protectedSystems = [
  "Cloud environments",
  "APIs",
  "Internal tools",
  "Data pipelines",
];

export const PositioningSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="positioning-heading"
      className="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-[1120px] flex-col justify-center px-6 py-24 sm:px-10"
    >
      <p className="font-['Montserrat',Helvetica] text-sm font-semibold uppercase leading-[1.2] tracking-[0.16em] text-[#54f4fc]">
        Infrastructure risk reduction
      </p>
      <h1
        id="positioning-heading"
        className="mt-6 max-w-[880px] font-['Montserrat',Helvetica] text-4xl font-semibold leading-[1.2] text-white sm:text-5xl lg:text-6xl"
      >
        Reducing attack surface across modern infrastructure
      </h1>
      <p className="mt-8 max-w-[640px] text-lg font-normal leading-[1.5] text-[#b1b5bb]">
        We identify and close the exposures attackers rely on across the
        systems that carry your business.
      </p>
      <ul className="mt-12 flex flex-wrap gap-3">
        {protectedSystems.map((system) => (
          <li
            key={system}
            className="rounded-md border border-[#2a2e34] px-4 py-2 text-sm font-normal leading-[1.5] text-[#d6d9dd]"
          >
            {system}
          </li>
        ))}
      </ul>
    </section>
  );
};
