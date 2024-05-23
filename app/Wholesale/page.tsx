import { Reviews } from 'components/reviews';
import Image from 'next/image';
import Link from 'next/link';
import wholesale from 'public/Wholesalepage/wholesale.jpeg';

export default async function Wholesale() {
  return (
    <>
      <div className="mx-2 flex-col">
        <div className="flex flex-col md:flex-row ">
          <div className="md:order-1 md:w-1/2">
            <div className="h-full rounded-t-lg bg-[#82a38a] p-9 md:rounded-bl-lg md:rounded-tl-lg md:rounded-tr-none">
              <h2 className="pb-5 text-4xl font-bold text-[#043028]">Custom & Wholesale Orders</h2>
              <h3 className="pb-3 text-xl text-[#043028]">
                Want your logo front and center every time your customer opens their cupboard?
              </h3>
              <br></br>
              <p className="pb-3 text-xl text-[#043028]">
                We can create custom beeswax wraps of any size or shape, with your logo, or any
                custom printing you require.
              </p>
              <br></br>
              <p className="pb-3 text-xl text-[#043028]">
                We also offer wholesale pricing for non-custom fabrics.
              </p>
              <br></br>
              <p className="pb-12 text-xl text-[#043028]">
                Get in touch so we can work out the perfect wrap for you.
              </p>
              <br></br>
              <div className="flex justify-center">
                <button className="rounded-lg bg-[#043028] px-6 py-4 text-white hover:bg-[#043028]">
                  <Link href="/contact">Enquire Now</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="relative md:order-2 md:w-1/2">
            <div className="flex h-80 w-full items-center justify-center rounded-b-lg md:h-full md:w-auto md:rounded-br-lg md:rounded-tr-lg">
              <Image src={wholesale} alt="Bulk order Image" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
        <Reviews />
      </div>
    </>
  );
}
