import { useState } from "react";
import { Button } from "../../../../components/ui/button";

const testimonialIndicators = Array.from({ length: 5 }, (_, index) => index);

export const CustomerTestimonialsSection = (): JSX.Element => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section
      aria-labelledby="customer-testimonials-title"
      className="flex w-full flex-col items-center gap-14 px-6 py-0 text-white sm:px-8"
    >
      <div className="flex w-full max-w-[1187px] flex-col items-center gap-10">
        <h2
          id="customer-testimonials-title"
          className="m-0 w-full max-w-[756px] text-center [font-family:'Montserrat',Helvetica] text-[clamp(12px,3vw,40px)] font-semibold leading-[1.4] tracking-[0]"
        >
          Customer Testimonials
        </h2>
        <img
          className="block h-auto w-full max-w-[1187.38px]"
          alt="By working with"
          src="/-by-working-with-ironvelo--we-processed-more-payments--increased.svg"
        />
      </div>
      <img
        className="block h-40 w-40 rounded-[120px] object-cover max-sm:h-12 max-sm:w-12"
        alt="Avatar"
        src="/avatar-1.png"
      />
      <div className="flex w-full max-w-[1220px] flex-col items-center gap-6 text-center">
        <p className="m-0 w-full [font-family:'Lato',Helvetica] text-[clamp(10px,2.4vw,32px)] font-bold leading-[1.4] tracking-[0]">
          Alberto Flores
        </p>
        <p className="m-0 w-full [font-family:'Lato',Helvetica] text-[clamp(8px,1.8vw,24px)] font-light leading-[1.4] tracking-[0]">
          IT Director
        </p>
      </div>
      <div
        aria-label="Testimonial navigation"
        className="flex items-center gap-10 max-sm:gap-3"
        role="tablist"
      >
        {testimonialIndicators.map((indicator) => {
          const isActive = indicator === activeTestimonial;

          return (
            <Button
              key={indicator}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Show testimonial ${indicator + 1}`}
              onClick={() => setActiveTestimonial(indicator)}
              className={`h-auto w-6 rounded-full p-0 hover:opacity-100 max-sm:h-1.5 max-sm:w-1.5 ${
                isActive
                  ? "bg-[#54f4fc] hover:bg-[#54f4fc]"
                  : "bg-[#54f4fc4c] hover:bg-[#54f4fc4c]"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
};
