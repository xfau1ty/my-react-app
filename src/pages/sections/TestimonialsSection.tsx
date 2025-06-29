import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  // Service card data for mapping
  const serviceCards = [
    {
      icon: "/figmaAssets/vector-2.svg",
      title: "Branding Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.",
    },
    {
      icon: "/figmaAssets/ps-lab.svg",
      title: "Branding Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.",
    },
    {
      icon: "/figmaAssets/ps-lab.svg",
      title: "Branding Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.",
    },
    {
      icon: "/figmaAssets/ps-lab.svg",
      title: "Branding Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.",
    },
    {
      icon: "/figmaAssets/ps-lab.svg",
      title: "Branding Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.",
    },
    {
      icon: "/figmaAssets/ps-lab.svg",
      title: "Branding Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.",
    },
    {
      icon: "/figmaAssets/ps-lab.svg",
      title: "Branding Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.",
    },
    {
      icon: "/figmaAssets/ps-lab.svg",
      title: "Branding Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.",
    },
  ];

  return (
    <section className="w-full relative">
      {/* Header background with red glow effects */}
      <div className="w-full h-80 bg-black overflow-hidden relative">
        <h2 className="text-[80px] text-[#e92129] [font-family:'Proxima_Nova-Extrabold',Helvetica] font-normal tracking-[0] leading-[85px] absolute top-[50px] text-center w-full">
          Services
        </h2>

        {/* Red glow effects */}
        <div className="absolute w-[691px] h-[439px] top-[-135px] right-0">
          <div className="absolute w-[418px] h-[418px] top-[21px] left-0 bg-[#e4252c] rounded-[209px] blur-[248px]" />
          <div className="absolute w-[348px] h-[348px] top-0 right-0 bg-[#e4252c] rounded-[174px] blur-[161.5px]" />
        </div>

        <div className="absolute w-[771px] h-[456px] top-[-262px] left-[-305px]">
          <div className="absolute w-[418px] h-[418px] top-0 left-0 bg-[#e4252c] rounded-[209px] blur-[248px]" />
          <div className="absolute w-[418px] h-[418px] top-[38px] left-[353px] bg-[#e4252c] rounded-[209px] blur-[248px] opacity-30" />
        </div>
      </div>

      {/* Service cards grid */}
      <div className="flex flex-col items-center gap-[30px] mx-auto px-4 max-w-[1200px] -mt-24 relative z-10">
        {/* First row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] w-full">
          {serviceCards.slice(0, 4).map((card, index) => (
            <Card key={`service-card-row1-${index}`} className="bg-white">
              <CardContent className="flex flex-col items-center gap-[30px] p-4">
                {index === 0 ? (
                  <div className="relative w-[43px] h-[45.87px]">
                    <img
                      className="absolute w-[31px] h-[34px] top-1.5 left-1.5"
                      alt="Vector"
                      src={card.icon}
                    />
                  </div>
                ) : (
                  <img
                    className="relative w-[43px] h-[45.87px]"
                    alt="Service icon"
                    src={card.icon}
                  />
                )}
                <div className="flex flex-col items-start gap-1.5 w-full">
                  <h3 className="w-full mt-[-1.00px] [font-family:'Proxima_Nova-Bold',Helvetica] font-bold text-[#292929] text-xl text-center tracking-[0.40px] leading-[29.5px]">
                    {card.title}
                  </h3>
                  <p className="w-full text-[#515151] text-base text-center tracking-[0.32px] leading-[22.4px] [font-family:'Proxima_Nova-Regular',Helvetica] font-normal">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] w-full">
          {serviceCards.slice(4, 8).map((card, index) => (
            <Card key={`service-card-row2-${index}`} className="bg-white">
              <CardContent className="flex flex-col items-center gap-[30px] p-4">
                <img
                  className="relative w-[43px] h-[45.87px]"
                  alt="Service icon"
                  src={card.icon}
                />
                <div className="flex flex-col items-start gap-1.5 w-full">
                  <h3 className="w-full mt-[-1.00px] [font-family:'Proxima_Nova-Bold',Helvetica] font-bold text-[#292929] text-xl text-center tracking-[0.40px] leading-[29.5px]">
                    {card.title}
                  </h3>
                  <p className="w-full text-[#515151] text-base text-center tracking-[0.32px] leading-[22.4px] [font-family:'Proxima_Nova-Regular',Helvetica] font-normal">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
