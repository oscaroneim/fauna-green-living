import PlasticWasteStats from 'components/about/plastic-waste-stats';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import { Carousel } from 'components/product-carousel';
import { Reviews } from 'components/reviews';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <ThreeItemGrid />
      <div className="mx-none h-[635px] bg-[#677B6A] px-2 md:px-0">
        <Carousel />
        <Reviews />
      </div>
      <PlasticWasteStats />
      <Footer />
    </>
  );
}
