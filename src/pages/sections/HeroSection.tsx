import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const HeroSection = (): JSX.Element => {
  // Form field data for mapping
  const formFields = [
    { id: "name", placeholder: "Name", type: "text" },
    { id: "email", placeholder: "Email", type: "email" },
    { id: "phone", placeholder: "Phone (Optional)", type: "tel" },
  ];

  return (
    <section className="relative w-full py-20 bg-[#191919] overflow-hidden">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        {/* Left content */}
        <div className="w-full lg:w-[45%] flex flex-col gap-[30px] mb-10 lg:mb-0">
          <div className="flex flex-col gap-[26px]">
            <div className="flex items-baseline gap-2 opacity-70">
              <span className="font-normal text-white text-xl leading-[20.8px] [font-family:'Proxima_Nova-Regular',Helvetica]">
                Testimonials
              </span>
              <img
                className="w-[65px] h-px object-cover"
                alt="Vector"
                src="/figmaAssets/vector-5696.svg"
              />
            </div>
            <h2 className="text-white text-[80px] font-bold leading-[83px] [font-family:'Proxima_Nova-Bold',Helvetica]">
              Book a meeting with us
            </h2>
          </div>

          <p className="text-white opacity-70 text-xl leading-7 [font-family:'Proxima_Nova-Regular',Helvetica]">
            Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis.
            Tellus nunc scelerisque dictum sagittis euismod urna egestas quam.
            In ornare nisl leo odio magna.
          </p>
        </div>

        {/* Right content - Form */}
        <div className="w-full lg:w-[45%] relative">
          {/* Red glow effects */}
          <div className="absolute w-full h-full pointer-events-none">
            <div className="absolute w-[510px] h-[510px] top-[-370px] right-0 bg-[#e92129] rounded-[255px] blur-[134.5px] opacity-40" />
            <div className="absolute w-[412px] h-[412px] top-[-247px] right-[-108px] bg-[#e92129] rounded-[206px] blur-[134.5px] opacity-60" />
            <div className="absolute w-[412px] h-[412px] bottom-[-200px] right-[-152px] bg-[#e92129] rounded-[206px] blur-[134.5px]" />
            <div className="absolute w-[234px] h-[234px] bottom-[-29px] right-[-19px] bg-[#e92129] rounded-[117px] blur-[114.5px]" />
          </div>

          {/* Form */}
          <div className="flex flex-col gap-6 relative z-10">
            <div className="flex flex-col gap-[18px]">
              {/* Map through text input fields */}
              {formFields.map((field) => (
                <Input
                  key={field.id}
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full p-3 bg-transparent border border-white text-white placeholder:text-white placeholder:opacity-40 [font-family:'Proxima_Nova-Regular',Helvetica] text-[17px] leading-[17.6px]"
                />
              ))}

              {/* Textarea for project details */}
              <Textarea
                id="project"
                placeholder="Tall us about the project you are working on (Optional)"
                className="w-full h-[110px] p-3 bg-transparent border border-white text-white placeholder:text-white placeholder:opacity-40 [font-family:'Proxima_Nova-Regular',Helvetica] text-[17px] leading-[17.6px] resize-none"
              />
            </div>

            {/* Submit button */}
            <Button className="w-fit px-6 py-3.5 bg-[#e4252c] hover:bg-[#c41f25] text-[#f4f4f4] text-xl font-bold [font-family:'Proxima_Nova-Bold',Helvetica] leading-[20.8px]">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
