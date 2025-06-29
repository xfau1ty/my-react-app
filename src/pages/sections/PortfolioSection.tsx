import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const PortfolioSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      name: "Adam Smith",
      image: "/figmaAssets/rectangle-1358.png",
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet proin ut urna sit. Varius sed euismod at est, commodo sociis dolor. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh suspendisse mauris amet, facilisi. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh suspendisse mauris amet, facilisi\nNibh suspendisse mauris amet, facilisi. Elit, suspendisse leo id in eu ut arcu."',
    },
    {
      id: 2,
      name: "Mike",
      image: "/figmaAssets/rectangle-1358-1.png",
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet proin ut urna sit. Varius sed euismod at est, commodo sociis dolor. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh suspendisse mauris amet, facilisi. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh suspendisse mauris amet, facilisi."',
    },
  ];

  return (
    <section className="flex flex-col md:flex-row items-start gap-10 py-16 px-4 md:px-0 w-full max-w-7xl mx-auto">
      <div className="flex flex-col items-start gap-7">
        <div className="flex flex-col items-start gap-1.5">
          <h2 className="text-[#242424] text-5xl md:text-[80px] font-extrabold leading-tight [font-family:'Proxima_Nova-Extrabold',Helvetica]">
            Testimonials
          </h2>
          <p className="text-[#1b1b1b] text-lg max-w-[443px] [font-family:'Proxima_Nova-Regular',Helvetica]">
            Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus
            praesent elementum commodo.
          </p>
        </div>

        <Button className="bg-[#e92129] hover:bg-[#d41d24] text-white rounded-xl px-7 py-3.5">
          <span className="[font-family:'Proxima_Nova-Bold',Helvetica] font-bold text-base tracking-[0.32px]">
            Explore More
          </span>
          <ChevronRightIcon className="ml-2 h-5 w-5" />
        </Button>
      </div>

      <div className="flex flex-col items-end gap-6 w-full md:max-w-[697px]">
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-full">
                <Card className="border-none shadow-[0px_4px_32px_#0000001a] bg-white">
                  <CardContent className="flex gap-5 p-6 md:p-[25px]">
                    <img
                      className="w-20 h-20 md:w-[102px] md:h-[102px] rounded-full object-cover"
                      alt={`${testimonial.name}'s profile`}
                      src={testimonial.image}
                    />
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[#e4252c] text-2xl md:text-[36px] font-bold [font-family:'Proxima_Nova-Bold',Helvetica]">
                        {testimonial.name}
                      </h3>
                      <p className="opacity-70 text-black text-base md:text-xl tracking-[0.20px] leading-relaxed [font-family:'Proxima_Nova-Regular',Helvetica]">
                        {testimonial.quote}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end mt-6">
            <CarouselPrevious className="static transform-none rounded-full bg-[#e92129] text-white hover:bg-[#d41d24] hover:text-white shadow-[0px_0px_35px_#00000012] mr-4" />
            <CarouselNext className="static transform-none rounded-full bg-[#e92129] text-white hover:bg-[#d41d24] hover:text-white shadow-[0px_0px_35px_#00000012]" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
