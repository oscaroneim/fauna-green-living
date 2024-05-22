'use client';
import React from 'react';
import Link from 'next/link';
import './Mainslider.css';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/app/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/app/ui/carousel';

export default function Mainslider() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const trial: string[] = ['/HeroImages/desktop-hero1.png', '/HeroImages/desktop-hero2.png'];

  return (
    <div className="carouselDiv">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {trial.map((element, index) => (
            <CarouselItem key={index}>
              <div className="h-full w-full">
                <Card>
                  <CardContent className="relative flex h-full w-full items-center justify-center p-0">
                    <span className="imagespan">
                      <img
                        src={element}
                        alt="SliderImages"
                        className="h-full w-full object-cover"
                      />
                    </span>
                    <div className="align-left absolute left-16 z-10 mt-10 flex text-white">
                      <div className="rounded-lg p-2 shadow-lg">
                        <h2 className="hero-big-text m-4 text-center text-2xl font-bold md:m-0 md:text-left md:text-4xl md:font-bold">
                          Plastic Free
                          <br />
                          Zero Waste
                          <br />
                          Locally Sourced
                        </h2>
                        <p className="hero-small-text order-2 mb-4 mt-4 text-left text-sm font-light underline md:order-1">
                          <Link href="/about">Find out more</Link>
                        </p>
                        <button className="shop_now_button order-1 cursor-pointer rounded-md border-none bg-customDarkGreen px-4 py-2 text-base font-bold text-white md:order-2 md:h-[62px] md:w-[310px] md:text-base">
                          <Link href="/search">Shop Now</Link>
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
