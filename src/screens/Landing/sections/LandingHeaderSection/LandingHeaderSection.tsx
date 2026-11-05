const navigationItems = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Sectors", href: "#sectors" },
  { label: "Walkthrough", href: "#walkthrough" },
];

export const LandingHeaderSection = (): JSX.Element => {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-[#1f2226] bg-[#0b0c0e]/95 backdrop-blur">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-20 w-full max-w-[1120px] items-center justify-between gap-8 px-6 sm:px-10"
      >
        <a
          href="/"
          className="font-['Archivo',Helvetica] text-2xl font-semibold leading-[1.2] text-[#54f4fc]"
        >
          Iron
        </a>
        <ul className="flex items-center gap-6 sm:gap-10">
          {navigationItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-['Montserrat',Helvetica] text-sm font-semibold leading-[1.2] tracking-[0.04em] text-[#c4c8cd] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#54f4fc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0c0e]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
