import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const ContactSection = (): JSX.Element => {
  // Contact information data
  const contactInfo = [
    {
      icon: <PhoneIcon className="w-[29.4px] h-[29.4px] text-white" />,
      text: "+92 300 1234567",
    },
    {
      icon: <MailIcon className="w-[29.4px] h-[29.4px] text-white" />,
      text: "info@nixxsol.com",
    },
    {
      icon: <MapPinIcon className="w-[29.4px] h-[29.4px] text-white" />,
      text: "Lorem ipsum dolor sit amet consectetur. Dui libero lectus pulvinar mattis a.",
      width: "w-[435.51px]",
    },
  ];

  // Navigation links
  const navLinks = ["About", "Services", "Portfolio", "Contact us"];

  return (
    <section className="relative w-full h-[606px]">
      <div className="relative h-[606px]">
        {/* Black background section */}
        <div className="absolute w-full h-[528px] top-[78px] left-0 bg-black overflow-hidden">
          <div className="flex w-[1199px] items-center justify-between mx-auto mt-[178px]">
            {/* Contact information */}
            <div className="flex flex-col items-start gap-[38.85px]">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-[21px]">
                  {item.icon}
                  <div
                    className={`${item.width || "w-fit"} [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-white text-[21px] tracking-[0.42px] leading-[25.2px]`}
                  >
                    {item.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation and newsletter */}
            <div className="flex flex-col items-start gap-[47.25px]">
              {/* Navigation links */}
              <div className="flex w-[641.55px] items-center justify-between">
                {navLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="link"
                    className="p-0 h-auto [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-white text-[21px] tracking-[0.42px] leading-[25.2px]"
                  >
                    {link}
                  </Button>
                ))}
              </div>

              {/* Newsletter subscription */}
              <div className="flex flex-col items-start gap-[23.1px]">
                <h3 className="[font-family:'Proxima_Nova-Bold',Helvetica] font-bold text-white text-[31.5px] tracking-[0.63px] leading-[25.2px]">
                  Stay in Conection
                </h3>

                <Card className="w-[640.5px] bg-[#272727] rounded-[5.25px] border-none">
                  <CardContent className="flex items-center gap-[21px] p-0 pl-[18.9px] pr-[8.4px] py-[8.4px]">
                    <Input
                      placeholder="Email Address"
                      className="flex-1 border-none bg-transparent [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-[#5e5e5e] text-[21px] tracking-[0.42px] leading-[25.2px] focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <Button className="bg-[#e92129] hover:bg-[#d41d25] px-[31.5px] py-[10.5px] rounded-[4.2px] [font-family:'Proxima_Nova-Bold',Helvetica] font-bold text-white text-[16.8px] tracking-[0.34px] leading-[23.2px]">
                      Contact Us
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Footer bar */}
          <div className="absolute w-full h-[89px] bottom-0 left-0 bg-[#e4252c] backdrop-blur-[2px]">
            <div className="flex justify-between items-center h-full px-[158px]">
              <div className="[font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-white text-[21px] tracking-[0.42px] leading-[25.2px]">
                © 2022 Nixxsol All Rights Reserved.
              </div>
              <img
                className="w-[107px] h-5"
                alt="Social media icons"
                src="/figmaAssets/group-544.png"
              />
            </div>
          </div>
        </div>

        {/* Logo section */}
        <div className="absolute w-[787px] h-[183px] top-0 left-0 bg-[url(/figmaAssets/rectangle-1378.svg)] bg-[100%_100%]">
          <img
            className="absolute w-[548px] h-32 top-7 left-[126px]"
            alt="Nixxsol Logo"
            src="/figmaAssets/component-3.svg"
          />
        </div>
      </div>
    </section>
  );
};
