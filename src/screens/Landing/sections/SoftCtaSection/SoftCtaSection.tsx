import { Button } from "../../../../components/ui/button";

export const SoftCtaSection = (): JSX.Element => {
  return (
    <section
      id="walkthrough"
      aria-labelledby="walkthrough-heading"
      className="scroll-mt-24 w-full border-t border-[#1f2226] bg-[#0f1013]"
    >
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-start gap-8 px-6 py-20 sm:px-10 sm:py-24">
        <h2
          id="walkthrough-heading"
          className="max-w-[720px] font-['Montserrat',Helvetica] text-3xl font-semibold leading-[1.2] text-white sm:text-4xl"
        >
          Evaluate our approach against your own environment
        </h2>
        <p className="max-w-[640px] text-lg font-normal leading-[1.5] text-[#b1b5bb]">
          A technical walkthrough covers how we assess exposure, what we monitor,
          and how an engagement is scoped for systems like yours.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button
            type="button"
            className="h-auto rounded-md bg-[#54f4fc] px-7 py-4 font-['Montserrat',Helvetica] text-sm font-semibold leading-[1.2] tracking-[0.04em] text-black transition-colors hover:bg-[#54f4fc]/90"
          >
            Request a Technical Walkthrough
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-auto rounded-md border-[#3a3e44] bg-transparent px-7 py-4 font-['Montserrat',Helvetica] text-sm font-semibold leading-[1.2] tracking-[0.04em] text-white transition-colors hover:border-[#54f4fc] hover:bg-transparent hover:text-[#54f4fc]"
          >
            Review Our Security Approach
          </Button>
        </div>
      </div>
    </section>
  );
};
