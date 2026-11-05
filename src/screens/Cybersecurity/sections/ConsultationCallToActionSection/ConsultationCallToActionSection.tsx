import { Button } from "../../../../components/ui/button";

const actions = [
  {
    label: "BOOK AN APPOINTMENT",
    variant: "primary",
  },
  {
    label: "TALK WITH US",
    variant: "outline",
  },
] as const;

export const ConsultationCallToActionSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[linear-gradient(136deg,rgba(24,110,180,1)_16%,rgba(47,162,208,1)_57%,rgba(85,244,252,1)_100%)]">
      <div className="mx-auto flex min-h-[378px] w-full max-w-[1034px] items-center gap-8 px-6 py-20 sm:gap-12 md:gap-[104px] md:px-0">
        <h2 className="m-0 w-full max-w-[421px] shrink-0 font-['Montserrat',Helvetica] text-4xl font-bold leading-[1.5] tracking-[0] text-white sm:text-5xl sm:leading-[72px]">
          How to choose
          <br />
          cybersecurity solution
        </h2>
        <div className="flex w-full flex-col items-start gap-8 sm:gap-[38px]">
          <p className="m-0 w-full max-w-[500px] font-['Lato',Helvetica] text-2xl font-normal leading-[1.4] tracking-[0] text-white sm:text-[29px] sm:leading-[40.6px]">
            Having difficulties choosing the right solution for your business?
          </p>
          <div className="flex flex-wrap items-start gap-4 sm:gap-8">
            {actions.map((action) => (
              <Button
                key={action.label}
                type="button"
                className={
                  action.variant === "primary"
                    ? "h-auto rounded-lg bg-[#54f4fc] px-[30px] py-[17px] font-['Montserrat',Helvetica] text-base font-bold leading-[26.2px] tracking-[0.8px] text-black hover:bg-[#54f4fc]/90"
                    : "h-auto rounded-lg border border-[#54f4fc] bg-transparent px-[30px] py-[17px] font-['Montserrat',Helvetica] text-base font-bold leading-[26.2px] tracking-[0.8px] text-[#54f4fc] hover:bg-[#54f4fc]/10 hover:text-[#54f4fc]"
                }
              >
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
