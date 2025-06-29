import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { AboutCompanySection } from "./sections/AboutCompanySection";
import { ContactSection } from "./sections/ContactSection";
import { HeroSection } from "./sections/HeroSection";
import { PortfolioSection } from "./sections/PortfolioSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const LandingPage = (): JSX.Element => {
  // Client logos data
  const clientLogos = [
    { src: "/figmaAssets/image-8.svg", alt: "Client logo 1" },
    { src: "/figmaAssets/image-9.svg", alt: "Client logo 2" },
    { src: "/figmaAssets/image-10.svg", alt: "Client logo 3" },
    { src: "/figmaAssets/image-11.svg", alt: "Client logo 4" },
    { src: "/figmaAssets/image-12.svg", alt: "Client logo 5" },
  ];

  // Partner logos data
  const partnerLogos = [
    { src: "/figmaAssets/image-13-1.svg", alt: "Partner logo 1" },
    { src: "/figmaAssets/image-13.png", alt: "Partner logo 2" },
    { src: "/figmaAssets/image-13-3.svg", alt: "Partner logo 3" },
    { src: "/figmaAssets/image-13-4.svg", alt: "Partner logo 4" },
    { src: "/figmaAssets/image-13-2.svg", alt: "Partner logo 5" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full relative">
        {/* Logo */}
        <img
          className="w-[216px] h-[50px] mt-[42px] ml-[125px]"
          alt="Logo"
          src="/figmaAssets/logo.svg"
        />

        {/* Navigation Menu */}
        <NavigationMenu className="inline-flex items-center gap-[26px] p-1.5 fixed top-9 left-[916px] bg-[#ffffff99] rounded-[14px] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)]">
          <NavigationMenuList className="inline-flex items-center gap-4">
            <NavigationMenuItem className="inline-flex items-center gap-2 px-2 py-[5px]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-[#2e2e2e] text-sm tracking-[0] leading-[normal]">
                About
              </div>
            </NavigationMenuItem>

            <NavigationMenuItem className="inline-flex items-center gap-2 px-2 py-[5px]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-[#2e2e2e] text-sm tracking-[0] leading-[normal]">
                IT Services
              </div>
              <div className="inline-flex items-start gap-2.5 p-0.5 bg-[#e4252c] rounded-[40px]">
                <img
                  className="w-3 h-3"
                  alt="Akar icons chevron"
                  src="/figmaAssets/akar-icons-chevron-down.svg"
                />
              </div>
            </NavigationMenuItem>

            <NavigationMenuItem className="inline-flex items-center gap-2 px-2 py-[5px]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-[#2e2e2e] text-sm tracking-[0] leading-[normal]">
                Portfolio
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>

          <Button className="inline-flex items-start gap-2.5 px-[30px] py-3.5 bg-[#e92129] rounded-xl">
            <span className="relative w-fit mt-[-1.00px] [font-family:'Proxima_Nova-Bold',Helvetica] font-bold text-white text-base tracking-[0.32px] leading-[22.1px] whitespace-nowrap">
              Contact Us
            </span>
          </Button>
        </NavigationMenu>

        {/* Hero Content */}
        <div className="flex items-center gap-[87px] mt-[172px] ml-[125px]">
          <div className="relative w-[478.66px] bg-[linear-gradient(140deg,rgba(36,36,36,1)_0%,rgba(233,33,41,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Proxima_Nova-Extrabold',Helvetica] font-normal text-transparent text-[80px] tracking-[0] leading-[85.0px]">
            Bridging the gap between ideas and reality
          </div>

          <img
            className="relative w-[634px] h-[578px]"
            alt="Frame"
            src="/figmaAssets/frame.png"
          />
        </div>

        {/* Main Sections */}
        <HeroSection />
        <AboutCompanySection />
        <TestimonialsSection />
        <ServicesSection />

        {/* Client Logos Section */}
        <div className="w-full h-[173px] bg-black mt-8">
          <div className="flex w-[1224px] items-center justify-between mx-auto py-11">
            {clientLogos.map((logo, index) => (
              <img
                key={`client-logo-${index}`}
                className="w-[225px] h-[85px] object-cover"
                alt={logo.alt}
                src={logo.src}
              />
            ))}
          </div>
        </div>

        <PortfolioSection />

        {/* Partner Logos Section */}
        <div className="w-full mt-8">
          <div className="flex gap-[49.96px] mx-auto py-14 ml-[156px]">
            {partnerLogos.map((logo, index) => (
              <Card
                key={`partner-logo-${index}`}
                className="inline-flex items-start gap-[9.99px] p-[24.98px] bg-white rounded-[24.98px] shadow-[0px_11.99px_37.97px_#0000000d]"
              >
                <img
                  className="w-[149.88px] h-[149.88px] object-cover"
                  alt={logo.alt}
                  src={logo.src}
                />
              </Card>
            ))}
          </div>
        </div>

        <ContactSection />
      </div>
    </div>
  );
};
