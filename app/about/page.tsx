import MaxWidthWrapper from 'components/max-width-wrapper';
import PlasticWasteStats from 'components/plastic-waste-stats';
import Image from 'next/image';
import dear from '../../public/LogoImages/dear.png';

export default async function About() {
  return (
    <MaxWidthWrapper className="space-y-6">
      <div className="flex w-full gap-6 max-md:flex-col md:h-96 lg:h-[550px] xl:h-[664px]">
        <div className="space-y-4  rounded-lg bg-customGreen p-10 text-center text-white md:hidden">
          <h2 className="text-5xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">OUR MISSION</h2>
          <p className="text-4xl md:text-lg xl:text-3xl 2xl:text-4xl">
            Make Our Planet Clean Again
          </p>
        </div>
        <Image className="rounded-lg object-cover" src={dear} alt="Picture of the dear" />
        <div className="flex flex-col gap-y-6 md:h-full md:grow md:basis-[450px] 2xl:basis-[586px]">
          <div className="space-y-1 rounded-lg bg-customGreen p-10 text-center text-white max-md:hidden md:h-full md:p-3 lg:space-y-4 lg:p-10">
            <h2 className="text-5xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">OUR MISSION</h2>
            <p className="text-4xl md:text-lg xl:text-3xl 2xl:text-4xl">
              Make Our Planet Clean Again
            </p>
          </div>
          <div className="space-y-4 rounded-lg bg-customDarkGreen p-10 text-center text-white md:h-full md:space-y-1 md:p-3 lg:space-y-4 lg:p-10">
            <h2 className="text-5xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">OUR VISION</h2>
            <p className="text-4xl md:text-lg xl:text-3xl 2xl:text-4xl">
              At Fauna Green Living, we envisage ourselves creating a gateway between individuals
              and sustainable living.
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-8 rounded-lg bg-customGreen p-16 text-center text-white">
        <h2 className="text-5xl font-medium">How do we do it?</h2>
        <div className="flex gap-x-8 gap-y-10 text-xl max-md:flex-col ">
          <p className="md:basis-1/3 ">All of our products are handmade in Cambridgeshire, UK</p>
          <p className="md:basis-1/3">
            We use local, recycled, or compostable products, wherever possible
          </p>
          <p className="md:basis-1/3">
            We are always looking for the most sustainable ways of producing everyday products
          </p>
        </div>
      </div>

      <div className="flex w-full gap-6 max-md:flex-col md:h-96 lg:h-[550px] xl:h-[664px]">
        <div className="flex flex-col gap-y-6 max-md:order-2 md:h-full md:grow md:basis-[450px] 2xl:basis-[586px]">
          <div className="space-y-1 rounded-lg bg-customDarkGreen p-10 text-center text-white md:h-full md:p-3 lg:space-y-4 lg:p-10">
            <h2 className="text-5xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">FILL</h2>
            <p className="text-4xl md:text-lg xl:text-3xl 2xl:text-4xl">fill with content</p>
          </div>
          <div className="space-y-1 rounded-lg bg-customGreen p-10 text-center text-white md:h-full md:p-3 lg:space-y-4 lg:p-10">
            <h2 className="text-5xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">FILL</h2>
            <p className="text-4xl md:text-lg xl:text-3xl 2xl:text-4xl">fill with content</p>
          </div>
        </div>
        <Image
          className="rounded-lg object-cover max-md:order-1"
          src={dear}
          alt="Picture of the dear"
        />
      </div>

      <PlasticWasteStats />
    </MaxWidthWrapper>
  );
}
