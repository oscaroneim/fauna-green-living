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
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Mainslider() {
  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isIpad = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1025px)' });

  /*
- YOU CAN CHANGE THE IMAGES, BUTTON TEXT, LINKS AND TITLES BY EDITING THE 3 ARRAYS BELOW.
- THE FIRST ARRAY IS FOR DESKTOP SCREENS, THE SECOND ARRAY IS FOR MOBILE AND THE THIRD ARRAY IS FOR IPAD
- THE IMAGES SHOULD BE PLACED IN THE PUBLIC FOLDER AND THE PATH SHOULD BE STARTED WITH /HeroImages/...
- THE BUTTON LINKS SHOULD BE THE PATH TO THE PAGE YOU WANT TO LINK TO
- THE BUTTON TEXT IS THE TEXT THAT WILL BE DISPLAYED ON THE BUTTON
- THE TITLE IS THE TEXT THAT WILL BE DISPLAYED ON THE SLIDE
*/

  const trial = [
    {
      image: '/HeroImages/newORANGES.jpeg',
      title: 'Browse the full range ',
      buttonText: 'Shop Now',
      buttonLink: '/search'
    },
    {
      image: '/HeroImages/newFOREST.jpeg',
      title: 'Plastic Free Zero Waste Locally Sourced',
      buttonText: 'Learn more',
      buttonLink: '/about'
    },
    {
      image: '/HeroImages/FINALcompressed.jpg',
      title: 'Summer Collection Available Now',
      buttonText: 'Shop Now',
      buttonLink: '/search/summer-collection'
    },
    {
      image: '/HeroImages/newWHOLESALE.jpg',
      title: 'Custom & Wholesale Orders',
      buttonText: 'Get in touch',
      buttonLink: '/Wholesale'
    }
  ];

  const trialMobile = [
    {
      image: '/HeroImages/newORANGES.jpeg',
      title: 'Browse the full range ',
      buttonText: 'Shop Now',
      buttonLink: '/search'
    },
    {
      image: '/HeroImages/newFOREST.jpeg',
      title: 'Plastic Free Zero Waste Locally Sourced',
      buttonText: 'Learn more',
      buttonLink: '/about'
    },
    {
      image: '/HeroImages/newMOBILEFINAL.jpg',
      title: 'Summer Collection Available Now',
      buttonText: 'Shop Now',
      buttonLink: '/search/summer-collection'
    },
    {
      image: '/HeroImages/newWHOLESALE.jpg',
      title: 'Custom & Wholesale Orders',
      buttonText: 'Get in touch',
      buttonLink: '/Wholesale'
    }
  ];

  const trialIpad = [
    {
      image: '/HeroImages/newORANGES.jpeg',
      title: 'Browse the full range ',
      buttonText: 'Shop Now',
      buttonLink: '/search'
    },
    {
      image: '/HeroImages/newFOREST.jpeg',
      title: 'Plastic Free Zero Waste Locally Sourced',
      buttonText: 'Learn more',
      buttonLink: '/about'
    },
    {
      image: '/HeroImages/newIPADFINAL3.jpg', // Unique image for iPad
      title: 'Summer Collection Available Now',
      buttonText: 'Shop Now',
      buttonLink: '/search/summer-collection'
    },
    {
      image: '/HeroImages/newWHOLESALE.jpg',
      title: 'Custom & Wholesale Orders',
      buttonText: 'Get in touch',
      buttonLink: '/Wholesale'
    }
  ];
  const [carouselItems, setCarouselItems] = useState(trial);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    //prevent rendering until the component is ready otherwise a hydration issue will occur and render medium screen layout on Mobile screens
    setHydrated(true);

    if (isMobile) {
      setCarouselItems(trialMobile);
    } else if (isIpad) {
      setCarouselItems(trialIpad);
    } else {
      setCarouselItems(trial);
    }
  }, [isMobile, isIpad]);

  if (!hydrated) {
    return null;
  }

  return (
    <div className="carouselDiv overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {carouselItems.map((element, index) => (
            <CarouselItem
              key={index}
              className="h-[30rem] animate-fadeIn sm:h-[30rem] md:h-[40rem] lg:h-[40rem]"
            >
              <Card className="h-full w-full overflow-hidden">
                <CardContent className="relative flex h-full w-full p-0">
                  <Image
                    src={element.image}
                    alt="SliderImages"
                    layout="responsive"
                    quality={100}
                    width={1920}
                    height={1080}
                    style={{ aspectRatio: '16/9' }}
                    priority
                    className={`h-full w-full object-cover ${index === 1 ? 'scale-x-[-1] transform' : ''}`}
                  />

                  {/*-----------------------------------------Title and button continer starts here------------------------------------------*/}

                  <div
                    className={`absolute flex h-full w-full items-center justify-center text-white md:inset-0 ${index === 0 ? 'md:mt-[160px]' : ''} md:justify-start md:p-12 ${index === 4 ? 'md:mt-[25px]' : ''}`}
                  >
                    <div className="shadow-xs justify-center bg-transparent bg-opacity-0">
                      {/*-----------------------------Styling for Eco friendly slide starts here------------------------------- */}
                      {index === 1 && (
                        <div className={`flex flex-col gap-1 md:ml-14 md:mt-20 md:gap-5 lg:ml-20`}>
                          <h2 className="m-4 text-center text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:m-0 md:ml-8  md:text-left  md:text-5xl ">
                            Plastic Free <br /> Zero Waste <br /> Locally Sourced
                          </h2>
                          <button className="order-1 cursor-pointer rounded-md border-none bg-customDarkGreen px-4 py-2 text-base font-bold text-white md:order-2 md:ml-[35px] md:mr-0 md:h-[62px] md:w-[300px] md:text-base">
                            <Link href={element.buttonLink}>{element.buttonText}</Link>
                          </button>
                        </div>
                      )}
                      {/*-----------------------------Styling for Summer Collection slide starts here------------------------------- */}
                      {index === 2 && (
                        <div className="mt-[300px] flex flex-col items-center gap-5 md:ml-[30px] md:mt-0 md:items-start lg:ml-52">
                          <h2 className="w-[70%] text-center text-3xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-left md:text-5xl md:text-customDarkGreen md:drop-shadow-[0_1.2px_1.2px_rgba(255,255,255)] lg:text-6xl">
                            {element.title}
                          </h2>
                          <button className="shop_now_button cursor-pointer rounded-md border-none bg-customDarkGreen px-4 py-2 text-base font-bold text-white md:mt-2 md:h-[62px] md:w-[280px] md:text-base">
                            <Link href={element.buttonLink}>{element.buttonText}</Link>
                          </button>
                        </div>
                      )}
                      {/*-----------------------------Styling for all other slides starts here------------------------------- */}

                      {index !== 1 && index !== 2 && (
                        <div
                          className={`flex flex-col gap-2 md:gap-5 ${index === 0 && (isIpad || isLargeScreen) ? '-mt-48 ml-10' : ''} ${index === 3 && isLargeScreen ? 'ml-8' : ''} ${index === 3 ? ' -mt-40 items-start pl-8 md:-mt-48 lg:mt-0' : ''} `}
                        >
                          <h2
                            className={`text-left text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-5xl ${index === 0 && isMobile ? 'm-[65px] h-[20px] w-auto text-center' : ''} ${index === 3 ? 'w-[100%] md:w-[80%]' : ''}`}
                          >
                            {element.title}
                          </h2>
                          <div
                            className={`flex flex-col items-start ${index === 0 && isMobile ? 'items-center' : ''} ${index === 3 && isMobile ? 'w-full' : ''} ${isIpad && index === 3 ? 'w-full' : ''}`}
                          >
                            <button
                              className={` order-1 cursor-pointer rounded-md border-none bg-customDarkGreen px-4 py-2 text-base font-bold text-white md:order-2 md:h-[62px] md:w-[310px] md:text-base ${index === 3 && isMobile ? 'mt-1' : ''}`}
                            >
                              <Link href={element.buttonLink}>{element.buttonText}</Link>
                            </button>
                          </div>
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
