export const CybersecurityHeroSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="cybersecurity-hero-title"
      className="w-full px-[clamp(30px,7.222vw,104px)] pt-[clamp(75px,17.986vw,259px)]"
    >
      <h1
        id="cybersecurity-hero-title"
        className="m-0 w-[clamp(220px,52.5vw,756px)] max-w-full [font-family:'Montserrat',Helvetica] text-[clamp(16px,3.889vw,56px)] font-semibold leading-[clamp(23px,5.444vw,78.4px)] tracking-[0]"
      >
        <span className="text-white">Comprehensive </span>
        <span className="text-[#54f4fc]">Cybersecurity</span>
        <span className="text-white">
          {" "}
          Strategies for Growth and Resilience
        </span>
      </h1>
    </section>
  );
};
