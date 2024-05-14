import Image from 'next/image';
import './Wholesale.css';

export default async function Wholesale() {
  return (
    <>
      <div className="flex-col">
        <div className="flex flex-col p-12 md:flex-row">
          <div className="md:order-1 md:w-1/2">
            <div className="h-full bg-[#82a38a] p-9">
              <h2 className="pb-5 text-4xl font-bold text-[#043028]">Custom & Wholesale Orders</h2>
              <h3 className="pb-3 text-2xl text-[#043028]">
                Want your logo front and center every time your customer opens their cupboard?
              </h3>
              <p className="pb-3 text-xl text-[#043028]">
                We can create custom beeswax wraps of any size or shape, with your logo, or any
                custom printing you require.
              </p>
              <p className="pb-3 text-xl text-[#043028]">
                We also offer wholesale pricing for non-custom fabrics.
              </p>
              <p className="pb-12 text-xl text-[#043028]">
                Get in touch so we can work out the perfect wrap for you.
              </p>
              <button className="rounded bg-[#043028] px-6 py-4 text-white hover:bg-[#043028]">
                Enquire Now
              </button>
            </div>
          </div>
          <div className="relative md:order-2 md:w-1/2">
            <div className="flex h-80 w-full items-center justify-center md:h-full md:w-auto">
              <Image
                src="/Wholesalepage/Wholesale.png"
                alt="Bulk order Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="flex space-x-12 p-8">
          <div className="card">
            <div className="bg">
              <span>“A quote from a customer.”</span>
            </div>
            <div className="blob"></div>
          </div>
          <div className="card">
            <div className="bg">“A quote from a customer.”</div>
            <div className="blob"></div>
          </div>
          <div className="card">
            <div className="bg">“A quote from a customer.”</div>
            <div className="blob"></div>
          </div>
        </div>
      </div>
    </>
  );
}
