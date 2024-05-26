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
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Mainslider() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isIpad = useMediaQuery({ query: '(max-width: 1024px)' });

  const trial: { image: string; title: string; buttonText: string; buttonLink: string }[] = [
    {
      image: '/HeroImages/oranges.jpeg',
      title: 'Browse the full range ',
      buttonText: 'Shop Now',
      buttonLink: '/search'
    },
    {
      image: '/HeroImages/desktop-hero4.png',
      title: 'Plastic Free Zero Waste Locally Sourced',
      buttonText: 'Learn more',
      buttonLink: '/about'
    },
    {
      image: '/HeroImages/field2.png',
      title: 'Summer Collection Available Now',
      buttonText: 'Shop Now',
      buttonLink: '/search/summer-collection'
    },
    {
      image: '/HeroImages/desktop-hero2.png',
      title: 'Custom & Wholesale Orders',
      buttonText: 'Get in touch',
      buttonLink: '/Wholesale'
    }
  ];

  const trialMobile: { image: string; title: string; buttonText: string; buttonLink: string }[] = [
    {
      image: '/HeroImages/oranges.jpeg',
      title: 'Browse the full range ',
      buttonText: 'Shop Now',
      buttonLink: '/search'
    },
    {
      image: '/HeroImages/desktop-hero4.png',
      title: 'Plastic Free Zero Waste Locally Sourced',
      buttonText: 'Learn more',
      buttonLink: '/about'
    },
    {
      image: '/HeroImages/COLLECTIONmobile.jpg',
      title: 'Summer Collection Available Now',
      buttonText: 'Shop Now',
      buttonLink: '/search/summer-collection'
    },
    {
      image: '/HeroImages/desktop-hero2.png',
      title: 'Custom & Wholesale Orders',
      buttonText: 'Get in touch',
      buttonLink: '/Wholesale'
    }
  ];

  const trialIpad: { image: string; title: string; buttonText: string; buttonLink: string }[] = [
    {
      image: '/HeroImages/oranges.jpeg',
      title: 'Browse the full range ',
      buttonText: 'Shop Now',
      buttonLink: '/search'
    },
    {
      image: '/HeroImages/desktop-hero4.png',
      title: 'Plastic Free Zero Waste Locally Sourced',
      buttonText: 'Learn more',
      buttonLink: '/about'
    },
    {
      image: '/HeroImages/IPADsummer.jpg',
      title: 'Summer Collection Available Now',
      buttonText: 'Shop Now',
      buttonLink: '/search/summer-collection'
    },
    {
      image: '/HeroImages/desktop-hero2.png',
      title: 'Custom & Wholesale Orders',
      buttonText: 'Get in touch',
      buttonLink: '/Wholesale'
    }
  ];

  // const trial: string[] = [
  //   '/HeroImages/oranges.jpeg',
  //   '/HeroImages/desktop-hero2.png',
  //   '/HeroImages/field2.png',
  //   '/HeroImages/desktop-hero_edited.jpg'
  // ];

  // const trialMobile: string[] = [
  //   '/HeroImages/oranges.jpeg',
  //   '/HeroImages/desktop-hero2.png',
  //   '/HeroImages/COLLECTIONmobile.jpg',
  //   '/HeroImages/desktop-hero_edited.jpg'
  // ];

  const [carouselItems, setCarouselItems] = useState(trial);

  useEffect(() => {
    console.log(isIpad);
    if (isMobile) {
      setCarouselItems(trialMobile);
    } else if (isIpad) {
      setCarouselItems(trialIpad);
    } else {
      setCarouselItems(trial);
    }
  }, [isMobile, isIpad]);

  return (
    <div className="carouselDiv h-auto">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {carouselItems.map((element, index) => (
            <CarouselItem key={index} className="h-[30rem] sm:h-[30rem] md:h-[40rem] lg:h-[40rem]">
              <Card className="h-full w-full">
                <CardContent className="relative flex h-full w-full items-center justify-center p-0">
                  <img
                    src={element.image}
                    alt="SliderImages"
                    className="h-full w-full object-contain"
                  />

                  <div
                    className={` absolute flex justify-center bg-transparent bg-opacity-0 text-center text-white ${index === 2 ? 'mt-[200px]' : ''}`}
                  >
                    {/*md:left-16 md:mt-10 md:align-left z-10 -mt-20 flex*/}
                    <div className="shadow-xs rounded-lg bg-transparent bg-opacity-0">
                      {index === 1 && (
                        <h2 className="align-center max-w-auto m-1 text-center text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:m-0 md:text-left md:text-5xl">
                          Plastic Free <br /> Zero Waste <br /> Locally Sourced
                        </h2>
                      )}
                      {index !== 1 && (
                        <h2 className="hero-big-text align-center m-4 text-center text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:m-0 md:text-left md:text-5xl">
                          {element.title}
                        </h2>
                      )}
                      {index === 2 && (
                        <div className="absolute bottom-0 left-0 right-0 mb-1 bg-right">
                          <div className="flex justify-center">
                            <button className="shop_now_button absolute mt-2 cursor-pointer rounded-md border-none bg-customDarkGreen px-4 py-2 text-base font-bold text-white">
                              <Link href={element.buttonLink}>{element.buttonText}</Link>
                            </button>
                          </div>
                        </div>
                      )}
                      {index !== 2 && (
                        <div>
                          <button className="shop_now_button order-1 ml-8 cursor-pointer rounded-md border-none bg-customDarkGreen px-4 py-2 text-base font-bold text-white md:order-2 md:ml-auto md:mr-0 md:h-[62px] md:w-[310px] md:text-base">
                            <Link href={element.buttonLink}>{element.buttonText}</Link>
                          </button>
                        </div>
                      )}
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
