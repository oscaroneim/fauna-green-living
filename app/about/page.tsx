import MaxWidthWrapper from 'components/max-width-wrapper';
import Image from 'next/image';
import dear from '../../public/LogoImages/dear.png';

export default async function About() {
  return (
    <MaxWidthWrapper className="space-y-6">
      <div className="flex h-[664px] w-full gap-x-6 max-md:flex-col">
        <Image className="rounded-lg object-cover" src={dear} alt="Picture of the dear" />
        <div className="flex h-full shrink-0 basis-[586px] flex-col gap-y-6">
          <div className="h-full space-y-4 rounded-lg bg-green p-10 text-center text-white">
            <h2 className="text-5xl font-bold">OUR MISSION</h2>
            <p className="text-4xl">Make Our Planet Clean Again</p>
          </div>
          <div className=" h-full space-y-4 rounded-lg bg-darkgreen p-10 text-center text-white">
            <h2 className="text-5xl font-bold">OUR VISION</h2>
            <p className="text-4xl">
              At Fauna Green Living, we envisage ourselves creating a gateway between individuals
              and sustainable living.
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-8 rounded-lg bg-green px-20 py-16 text-center text-white">
        <h2 className="text-5xl font-medium">How do we do it?</h2>
        <div className="flex text-xl">
          <p className="basis-1/3">All of our products are handmade in Cambridgeshire, UK</p>
          <p className="basis-1/3">
            We use local, recycled, or compostable products, wherever possible
          </p>
          <p className="basis-1/3">
            We are always looking for the most sustainable ways of producing everyday products
          </p>
        </div>
      </div>
      <div className="flex h-[664px] w-full gap-x-6 max-md:flex-col">
        <div className="flex h-full shrink-0 basis-[586px] flex-col gap-y-6">
          <div className="h-full space-y-4 rounded-lg bg-green p-10 text-center text-white">
            <h2 className="text-5xl font-bold">FILL</h2>
            <p className="text-4xl">fill with content</p>
          </div>
          <div className=" h-full space-y-4 rounded-lg bg-darkgreen p-10 text-center text-white">
            <h2 className="text-5xl font-bold">FILL</h2>
            <p className="text-4xl">fill with content</p>
          </div>
        </div>
        <Image className="rounded-lg object-cover" src={dear} alt="Picture of the dear" />
      </div>
      <div className="space-y-8 rounded-lg bg-green px-20 py-16 text-center text-white">
        <h2 className="text-5xl font-medium">Turning the Tide</h2>
        <div className="flex text-xl">
          <h3 className="basis-1/3">
            <p className="text-4xl">24,356</p> sqm plastic reduced from landfill and ocean
          </h3>
          <h3 className="basis-1/3">
            <p className="text-4xl">10,322</p>single use plastic reduced{' '}
          </h3>
          <h3 className="basis-1/3">
            <p className="text-4xl">100%</p>cotton, plastic free and home compostable
          </h3>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
