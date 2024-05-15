import { ThreeItemGrid } from 'components/grid/three-items';
import { HeroCarousel } from 'components/heroCarousel/hero-carousel';
import Footer from 'components/layout/footer';
import { Carousel } from 'components/product-carousel';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <HeroCarousel />
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
