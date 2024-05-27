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
  const plugin = React.useRef(Autoplay({ delay: 6000, stopOnInteraction: true }));
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isIpad = useMediaQuery({ query: '(max-width: 1024px)' });

  const trial = [
    {
      image: '/HeroImages/oranges.jpeg',
      title: 'Browse the full range ',
      buttonText: 'Shop Now',
      buttonLink: '/search'
    },
    {
      image: '/HeroImages/FOREST.jpeg',
      title: 'Plastic Free Zero Waste Locally Sourced',
      buttonText: 'Learn more',
      buttonLink: '/about'
    },
    {
      image: '/HeroImages/FINALSUMMER.jpg',
      title: 'Summer Collection Available Now',
      buttonText: 'Shop Now',
      buttonLink: '/search/summer-collection'
    },
    {
      image: '/HeroImages/WHOLESALE.jpeg',
      title: 'Custom & Wholesale Orders',
      buttonText: 'Get in touch',
      buttonLink: '/Wholesale'
    }
  ];

  const trialMobile = [
    {
      image: '/HeroImages/oranges.jpeg',
      title: 'Browse the full range ',
      buttonText: 'Shop Now',
      buttonLink: '/search'
    },
    {
      image: '/HeroImages/FOREST.jpeg',
      title: 'Plastic Free Zero Waste Locally Sourced',
      buttonText: 'Learn more',
      buttonLink: '/about'
    },
    {
      image: '/HeroImages/MOBILEfinal.jpg',
      title: 'Summer Collection Available Now',
      buttonText: 'Shop Now',
      buttonLink: '/search/summer-collection'
    },
    {
      image: '/HeroImages/WHOLESALE.jpeg',
      title: 'Custom & Wholesale Orders',
      buttonText: 'Get in touch',
      buttonLink: '/Wholesale'
    }
  ];

  const trialIpad = [
    {
      image: '/HeroImages/oranges.jpeg',
      title: 'Browse the full range ',
      buttonText: 'Shop Now',
      buttonLink: '/search'
    },
    {
      image: '/HeroImages/FOREST.jpeg',
      title: 'Plastic Free Zero Waste Locally Sourced',
      buttonText: 'Learn more',
      buttonLink: '/about'
    },
    {
      image: '/HeroImages/FINALSUMMER.jpg', // Unique image for iPad
      title: 'Summer Collection Available Now',
      buttonText: 'Shop Now',
      buttonLink: '/search/summer-collection'
    },
    {
      image: '/HeroImages/WHOLESALE.jpeg',
      title: 'Custom & Wholesale Orders',
      buttonText: 'Get in touch',
      buttonLink: '/Wholesale'
    }
  ];

  const [carouselItems, setCarouselItems] = useState(trial);

  useEffect(() => {
    if (isMobile) {
      setCarouselItems(trialMobile);
    } else if (isIpad) {
      setCarouselItems(trialIpad);
    } else {
      setCarouselItems(trial);
    }
  }, [isMobile, isIpad]);

  return (
    <div className="carouselDiv overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {carouselItems.map((element, index) => (
            <CarouselItem key={index} className="h-[30rem] sm:h-[30rem] md:h-[40rem] lg:h-[40rem]">
              <Card className="h-full w-full overflow-hidden">
                <CardContent className="relative flex h-full w-full p-0">
                  <img
                    src={element.image}
                    alt="SliderImages"
                    className={`h-full w-full object-cover ${index === 1 ? 'scale-x-[-1] transform' : ''}`}
                  />

                  <div
                    className={`absolute flex items-center justify-center text-white md:inset-0 ${index === 0 ? 'md:mt-[160px]' : ''} md:items-start md:justify-start md:p-24 ${index === 4 ? 'md:mt-[25px]' : ''}`}
                  >
                    {/*-----------------------------------------Title and button continer starts here------------------------------------------*/}

                    <div className="shadow-xs justify-center bg-transparent bg-opacity-0">
                      {/*-----------------------------Styling for Eco friendly slide starts here------------------------------- */}
                      {index === 1 && (
                        <div className="flex flex-col gap-4 md:mt-[150px]">
                          <h2 className="m-4 text-center text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:m-0  md:text-left  md:text-4xl lg:text-5xl">
                            Plastic Free <br /> Zero Waste <br /> Locally Sourced
                          </h2>
                          <button className="order-1 ml-8 cursor-pointer rounded-md border-none bg-customDarkGreen px-4 py-2 text-base font-bold text-white md:order-2 md:ml-auto md:mr-0 md:h-[62px] md:w-[310px] md:text-base">
                            <Link href={element.buttonLink}>{element.buttonText}</Link>
                          </button>
                        </div>
                      )}
                      {/*-----------------------------Styling for Summer Collection slide starts here------------------------------- */}
                      {index === 2 && (
                        <div className="mt-[300px] flex flex-col items-center gap-4 md:mt-[160px] md:items-start lg:ml-28">
                          <h2 className="w-[70%] text-center text-3xl text-customDarkGreen drop-shadow-[0_1.2px_1.2px_rgba(255,255,255)] md:text-left md:text-5xl lg:text-6xl">
                            {element.title}
                          </h2>
                          <button className="shop_now_button cursor-pointer rounded-md border-none bg-customDarkGreen px-4 py-2 text-base font-bold text-white md:mt-2 md:h-[62px] md:w-[280px] md:text-base">
                            <Link href={element.buttonLink}>{element.buttonText}</Link>
                          </button>
                        </div>
                      )}
                      {index !== 1 && index !== 2 && (
                        <div
                          className={`flex flex-col items-center justify-center gap-4 ${isMobile && index === 0 ? 'ml-[90px] mt-[270px]' : ''}  `}
                        >
                          <h2
                            className={`w-[80%] text-center text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-left md:text-5xl ${isMobile && index === 0 ? 'm-[65px]' : ''}`}
                          >
                            {element.title}
                          </h2>
                          <button
                            className={`order-1 mx-auto ml-8 cursor-pointer rounded-md border-none bg-customDarkGreen px-4 py-2 text-base font-bold text-white md:order-2 md:h-[62px] md:w-[310px] md:text-base ${(isMobile && index === 0) || index === 3 ? 'ml-[60px] mt-4' : ''}`}
                          >
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

//   return (
//     <div className="carouselDiv overflow-hidden">
//       <Carousel
//         plugins={[plugin.current]}
//         onMouseEnter={plugin.current.stop}
//         onMouseLeave={plugin.current.reset}
//       >
//         <CarouselContent>
//           {carouselItems.map((element, index) => (
//             <CarouselItem key={index} className="h-[30rem] sm:h-[30rem] md:h-[40rem] lg:h-[40rem]">
//               <Card className="h-full w-full overflow-hidden">
//                 <CardContent className="relative flex h-full w-full p-0">
//                   <img
//                     src={element.image}
//                     alt="SliderImages"
//                     className="h-full w-full object-cover"
//                   />
//                   <div className="absolute inset-0 flex items-end justify-start p-24">
//                     {/* Container for Title and Button */}
//                     <div className="text-white">
//                       {/* Title */}
//                       <div className="mb-4 text-left">
//                         <h2 className="text-2xl drop-shadow-md md:text-3xl lg:text-5xl">
//                           {index === 1 ? (
//                             <>
//                               Plastic Free <br /> Zero Waste <br /> Locally Sourced
//                             </>
//                           ) : (
//                             element.title
//                           )}
//                         </h2>
//                       </div>
//                       {/* Button */}
//                       <div className="">
//                         <button className="shop_now_button rounded-md border-none bg-customDarkGreen px-4 py-2 text-base font-bold text-white md:h-[62px] md:w-[280px]">
//                           <Link href={element.buttonLink}>{element.buttonText}</Link>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </div>
//   );
// }
