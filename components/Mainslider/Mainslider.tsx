'use client';
import React from 'react';
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

  const trial: string[] = ['/HeroImages/desktop-hero.png', '/HeroImages/desktop-hero2.png'];

  return (
    <div className="carouselDiv">
      <Carousel
        plugins={[plugin.current]}
        className="h-fit  w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {trial.map((element, index) => (
            <CarouselItem key={index}>
              <div className="h-fit w-full">
                <Card>
                  <CardContent className="flex h-fit w-full items-center justify-center p-0">
                    <span className="imagespan">
                      <img src={element} alt="SliderImages" className="workImages" />
                    </span>
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
