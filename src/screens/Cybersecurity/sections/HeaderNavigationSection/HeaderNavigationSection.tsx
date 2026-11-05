import { Button } from "../../../../components/ui/button";

const navigationItems = ["Pricing", "Support", "Blog", "Partners"];

export const HeaderNavigationSection = (): JSX.Element => {
  return (
    <header className="w-full px-10 py-4">
      <nav
        aria-label="Primary navigation"
        className="flex w-full items-center justify-between gap-8"
      >
        <a
          href="#"
          className="[font-family:'Archivo',Helvetica] text-[32px] font-semibold leading-[44.8px] tracking-[0] text-[#54f4fc]"
        >
          Iron
        </a>
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-12">
            {navigationItems.slice(0, 1).map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="h-auto whitespace-nowrap p-0 [font-family:'Montserrat',Helvetica] text-base font-medium leading-[26.2px] tracking-[0.8px] text-white hover:bg-transparent hover:text-[#54f4fc]"
              >
                {item}
              </Button>
            ))}

            <Button
              variant="ghost"
              className="flex h-auto items-center justify-center gap-2 whitespace-nowrap p-0 [font-family:'Montserrat',Helvetica] text-base font-medium leading-[26.2px] tracking-[0.8px] text-white hover:bg-transparent hover:text-[#54f4fc]"
            >
              <span>Features</span>
              <img
                src="/frame-4.svg"
                width={18}
                height={18}
                alt=""
                aria-hidden="true"
              />
            </Button>
            {navigationItems.slice(1).map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="h-auto whitespace-nowrap p-0 [font-family:'Montserrat',Helvetica] text-base font-medium leading-[26.2px] tracking-[0.8px] text-white hover:bg-transparent hover:text-[#54f4fc]"
              >
                {item}
              </Button>
            ))}
          </div>
          <Button
            variant="ghost"
            className="h-auto whitespace-nowrap p-0 [font-family:'Montserrat',Helvetica] text-lg font-bold leading-[29.5px] tracking-[0.9px] text-[#54f4fc] hover:bg-transparent hover:text-white"
          >
            SIGN UP
          </Button>
        </div>
      </nav>
    </header>
  );
};
