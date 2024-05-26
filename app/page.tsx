//import { HeroCarousel } from 'components/heroCarousel/hero-carousel';
import Mainslider from '@/components/Mainslider/Mainslider';
import { Carousel } from 'components/product-carousel';
import { Reviews } from 'components/reviews';
import Head from 'next/head';
import HeroVideo from '../components/Herovideo/page';
import PlasticWasteStats from '../components/plastic-waste-stats';
export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <Head>
        <title>Eco-Friendly & Sustainable Living Products</title>
        <meta
          name="description"
          content="Discover our range of eco-friendly and sustainable living products. Embrace a zero waste lifestyle with our plastic-free solutions and biodegradable items."
        />
        <meta
          name="keywords"
          content="Earth-friendly, Sustainable living, Planet-friendly, Green living, Environmentally conscious, Eco-friendly alternatives, Plastic-free solutions, Zero waste, Natural materials, Biodegradable, Renewable resources, Ethical products, Mindful living, Reduce, reuse, recycle, Eco-minded, Nature-inspired, Low-impact lifestyle, Bamboo-cotton blend, Bamboo-based textiles"
        />
      </Head>
      <Mainslider />
      <PlasticWasteStats />
      <div className="relative h-[635px] w-full rounded-lg bg-[#677B6A] px-2 no-scrollbar md:px-0">
        <Carousel />
        <Reviews />
      </div>
      <HeroVideo />
    </>
  );
}
