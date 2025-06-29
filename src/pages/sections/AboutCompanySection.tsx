import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutCompanySection = (): JSX.Element => {
  // Data for statistics to enable mapping
  const stats = [
    {
      value: "100",
      label: "Happy Clients",
    },
    {
      value: "05",
      label: "Years in business",
    },
    {
      value: "50",
      label: "Total Memebers", // Keeping the typo from original code
    },
  ];

  return (
    <section className="w-full py-12 flex flex-row gap-8">
      <div className="flex-shrink-0">
        <img
          className="w-[493px] h-[170px]"
          alt="Company visual"
          src="/figmaAssets/frame-1000000941.png"
        />
      </div>

      <div className="flex flex-col gap-8 max-w-[697px]">
        <h2 className="text-black text-[32px] leading-[38px] [font-family:'Proxima_Nova-Regular',Helvetica] font-normal">
          Lorem ipsum dolor sit amet consectetur. Vestibulum nascetur vitae
          sapien
        </h2>

        <p className="opacity-70 [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-black text-xl leading-[28px]">
          Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis.
          Tellus nunc scelerisque dictum sagittis euismod urna egestas quam. In
          ornare nisl leo odio magna.
        </p>

        <div className="flex items-start gap-20 w-full">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="flex-1 border-none shadow-none bg-transparent"
            >
              <CardContent className="p-0">
                <div className="flex flex-col items-start">
                  <div className="[font-family:'Proxima_Nova-Bold',Helvetica] text-[50px] leading-[42.6px] whitespace-nowrap">
                    <span className="font-bold text-black">{stat.value}</span>
                    <span className="font-bold text-[#e4252c]">+</span>
                  </div>
                  <div className="mt-0.5">
                    <div className="opacity-70 [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-black text-base leading-[22.4px] whitespace-nowrap">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
