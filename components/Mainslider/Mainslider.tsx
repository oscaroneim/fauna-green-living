'use client';
import { Card, CardContent } from '@/app/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/app/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import React from 'react';

export default function Mainslider() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const trial = [
    {
      image: '/HeroImages/oranges.jpeg',
      text: ['Plastic Free', 'Zero Waste', 'Locally Sourced']
    },
    {
      image: '/HeroImages/desktop-hero2.png',
      text: ['Reusable', 'Compostable', 'Ethically Made']
    },
    {
      image: '/HeroImages/field2.png',
      text: ['Beeswax Wrap', 'Summer Collection', 'Limited Edition']
    },
    {
      image: '/HeroImages/desktop-hero_edited.jpg',
      text: ['Reusable', 'Compostable', 'Ethically Made']
    }
    // Add more objects for additional slides
  ];

  return (
    <div className="carouselDiv">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {trial.map((element, index) => (
            <CarouselItem key={index} className="h-[30rem] sm:h-[30rem] md:h-[40rem] lg:h-[40rem]">
              <Card className="h-full w-full">
                <CardContent className="relative flex h-full w-full items-center justify-center p-0">
                  <img
                    src={element.image}
                    alt="SliderImages"
                    className="h-full w-full object-cover"
                  />
                  <div className="md:align-left left-34 absolute z-10 -mt-20 flex bg-transparent bg-opacity-0  text-white md:left-16 md:mt-10">
                    <div className="shadow-xs rounded-lg bg-transparent bg-opacity-0 p-2">
                      <h2 className="hero-big-text align-center m-4 text-center text-xl md:m-0 md:text-left md:text-3xl ">
                        {element.text.map((line, lineIndex) => (
                          <React.Fragment key={lineIndex}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </h2>
                      <p className="hero-small-text order-2 mb-4 mt-4 text-center text-sm font-light underline md:order-1 md:text-left">
                        <Link href="/about">Find out more</Link>
                      </p>
                      <button className="shop_now_button order-1 ml-8 cursor-pointer rounded-md border-none bg-customDarkGreen px-4 py-2 text-base font-bold text-white md:order-2 md:ml-auto md:mr-0 md:h-[62px] md:w-[310px] md:text-base">
                        <Link href="/search">Shop Now</Link>
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
