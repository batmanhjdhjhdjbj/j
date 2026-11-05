import { Separator } from "../../../../components/ui/separator";

type FooterColumn = {
  title: string;
  links: string[];
};

const footerColumns: FooterColumn[] = [
  {
    title: "Solutions",
    links: [
      "Application Services",
      "Security Servers",
      "Security FireWalls",
      "Cloud Services",
      "Integrations",
    ],
  },
  {
    title: "Partners",
    links: ["Amazon", "Figma", "Twitter", "CloudRail-IIOT"],
  },
  {
    title: "Resources",
    links: ["Academy", "Blog", "Themes", "Hosting", "Developers", "Support"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "FAQs", "Teams", "Contact Us"],
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full px-6 py-12 sm:px-10 lg:px-[104px]">
      <div className="mx-auto flex min-h-[350px] w-full max-w-[1232px] flex-col">
        <nav
          aria-label="Footer navigation"
          className="grid flex-1 grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 sm:gap-x-0 sm:gap-y-0"
        >
          {footerColumns.map((column) => (
            <section key={column.title} className="w-full">
              <h2 className="[font-family:'Montserrat',Helvetica] text-lg font-semibold leading-normal tracking-[0] text-cold-greywhite">
                {column.title}
              </h2>
              <ul className="mt-6 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <button
                      type="button"
                      className="h-auto p-0 text-left [font-family:'Lato',Helvetica] text-base font-normal leading-6 tracking-[0] text-cold-greywhite transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cold-greywhite focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>
        <Separator className="mt-10 bg-[#d9d9d9]" />
        <div className="flex flex-col items-start justify-between gap-6 pt-6 sm:flex-row sm:items-center">
          <p className="[font-family:'Lato',Helvetica] text-sm font-light leading-normal tracking-[0] text-cold-grey30">
            © 2024 All Rights Reserved
          </p>
          <img
            className="h-6 w-36 object-contain"
            alt="Frame"
            src="/frame-12.svg"
          />
        </div>
      </div>
    </footer>
  );
};
