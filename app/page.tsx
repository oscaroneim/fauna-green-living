//import { HeroCarousel } from 'components/heroCarousel/hero-carousel';
import { Carousel } from 'components/product-carousel';
import { Reviews } from 'components/reviews';
import HeroVideo from '../components/Herovideo/page';
import PlasticWasteStats from '../components/plastic-waste-stats';
import Mainslider from '@/components/Mainslider/Mainslider';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <Mainslider />
      <PlasticWasteStats />
      <div className="absolute left-0 right-0 h-[635px] bg-[#677B6A] px-2 md:px-0"></div>
      <div className="relative h-[635px] w-full bg-[#677B6A] px-2 md:px-0">
        <Carousel />
        <Reviews />
      </div>
      <HeroVideo />
    </>
  );
}
