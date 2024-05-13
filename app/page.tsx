import Image from 'next/image';
import hero from 'public/hero.png';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <div className="max-w-screen-2xl lg:px-4">
        <div className="flex bg-white sm:flex-col lg:flex-row lg:content-center dark:border-neutral-800 dark:bg-black">
          <div className="relative w-full basis-full object-cover">
            <Image
              src={hero}
              alt="Lady walking through a lush green forest"
              width={1393}
              height={645}
              priority={true}
            />
            <div className="absolute flex h-10 w-auto pl-10">
              <button className="bg-customDarkGreen left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-lg px-4 py-2 text-white">
                Shop Now
              </button>
            </div>
          </div>
          {/* <Carousel />
          <Footer /> */}
        </div>
      </div>
    </>
  );
}
