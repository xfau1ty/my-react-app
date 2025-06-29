import { ArrowLeftIcon, ArrowRightIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const ServicesSection = (): JSX.Element => {
  // Portfolio section data
  const portfolioData = {
    title: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus praesent elementum commodo.",
    buttonText: "More Portfolio",
  };

  return (
    <section className="flex items-center gap-[59px] w-full py-16">
      <div className="flex flex-col items-start gap-[27px]">
        <div className="flex flex-col items-start gap-[5px]">
          <h2 className="mt-[-1.00px] [font-family:'Proxima_Nova-Extrabold',Helvetica] font-normal text-[#242424] text-[80px] leading-[85.0px]">
            {portfolioData.title}
          </h2>

          <p className="w-[443.52px] text-[#1b1b1b] text-[18.5px] leading-[23.1px] [font-family:'Proxima_Nova-Regular',Helvetica] font-normal">
            {portfolioData.description}
          </p>
        </div>

        <Button className="px-[30px] py-3.5 bg-[#e92129] rounded-xl hover:bg-[#d41d24]">
          <span className="[font-family:'Proxima_Nova-Bold',Helvetica] font-bold text-white text-base tracking-[0.32px] leading-[22.1px]">
            {portfolioData.buttonText}
          </span>
          <ChevronRightIcon className="ml-2.5 h-6 w-2" />
        </Button>
      </div>

      <div className="flex flex-col items-end gap-6">
        <div className="flex w-[697px] items-end gap-5 relative">
          <Card className="relative w-[696.98px] h-[400.67px] border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="w-full h-full bg-[url(/figmaAssets/rectangle-1394.png)] bg-cover bg-[50%_50%]">
                <div className="relative w-[285px] h-[81px] top-80">
                  <div className="relative w-[204px] h-[78px] top-[3px] bg-[url(/figmaAssets/rectangle-1397.svg)] bg-[100%_100%]">
                    <div className="flex flex-col items-start gap-[4.66px] relative top-3 left-7">
                      <h3 className="mt-[-0.93px] [font-family:'Inter',Helvetica] font-normal text-white text-[29.8px] leading-[31.7px]">
                        Games
                      </h3>

                      <div className="flex items-center gap-[8.39px]">
                        <span className="mt-[-0.93px] [font-family:'Inter',Helvetica] font-bold text-white text-[14.9px] leading-[15.8px]">
                          See all games
                        </span>

                        <img
                          className="w-[18.64px] h-[6.86px] mr-[-0.47px]"
                          alt="Arrow"
                          src="/figmaAssets/vector-3.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <img
            className="relative w-[136.5px] h-[315.19px] mr-[-156.48px] object-cover"
            alt="Game preview"
            src="/figmaAssets/rectangle-1395.png"
          />

          <img
            className="relative w-[494.86px] h-[315.19px] mb-[-519.79px]"
            alt="Game preview"
            src="/figmaAssets/rectangle-1396.png"
          />
        </div>

        <div className="flex items-start gap-[15px]">
          <Button
            variant="outline"
            size="icon"
            className="w-[50px] h-[50px] p-0 bg-[#e92129] rounded-full shadow-[0px_0px_35px_#00000012] border-0"
          >
            <ArrowLeftIcon className="h-[17px] w-2.5 text-white" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="w-[50px] h-[50px] p-0 bg-[#e92129] rounded-full shadow-[0px_0px_35px_#00000012] border-0"
          >
            <ArrowRightIcon className="h-[17px] w-2.5 text-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};
