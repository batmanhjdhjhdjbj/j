const sectors = [
  "Finance",
  "SaaS",
  "Healthcare",
  "E-commerce",
  "Infrastructure / DevOps",
];

export const SectorTrustSection = (): JSX.Element => {
  return (
    <section
      id="sectors"
      aria-labelledby="sectors-heading"
      className="scroll-mt-24 w-full border-t border-[#1f2226] bg-[#0f1013]"
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-20 sm:px-10 sm:py-24">
        <p className="font-['Montserrat',Helvetica] text-sm font-semibold uppercase leading-[1.2] tracking-[0.16em] text-[#54f4fc]">
          Who trusts us
        </p>
        <h2
          id="sectors-heading"
          className="mt-4 max-w-[720px] font-['Montserrat',Helvetica] text-3xl font-semibold leading-[1.2] text-white sm:text-4xl"
        >
          Trusted by teams operating in regulated and high-risk environments
        </h2>
        <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-[#1f2226] bg-[#1f2226] md:grid-cols-5">
          {sectors.map((sector) => (
            <li
              key={sector}
              className="flex min-h-[144px] flex-col items-center justify-center gap-4 bg-[#0f1013] px-4 py-6 text-center"
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-28 items-center justify-center rounded border border-dashed border-[#3a3e44]"
              />
              <span className="text-sm font-normal leading-[1.5] text-[#d6d9dd]">
                {sector}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
