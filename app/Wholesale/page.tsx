import Image from 'next/image';
import './Wholesale.css';

export default async function Wholesale() {
  return (
    <>
      <div className="flex-col">
        <div className="align-center flex h-1/2 p-12">
          <div className="w-1/2  bg-[#82a38a] p-9 ">
            <h2 className="pb-5 text-4xl font-bold text-[#043028]">Custom & Wholesale Orders</h2>
            <h3 className="pb-3 text-2xl text-[#043028]">
              Want your logo front and centre every-time your customer opens their cupboard?{' '}
            </h3>
            <p className="pb-3 text-xl text-[#043028]">
              We can create custom beeswax wraps of any size or shape, with your logo, or any custom
              printing you require.{' '}
            </p>
            <p className="pb-3 text-xl text-[#043028]">
              We also offer wholesale pricing for non-custom fabrics.{' '}
            </p>
            <p className="pb-12 text-xl text-[#043028]">
              Get in touch so we can workout the perfect wrap for you.
            </p>
            <button className="rounded bg-[#043028] px-6 py-4 text-white hover:bg-[#043028]">
              {' '}
              Enquire Now
            </button>
          </div>
          <div className="w-1/2">
            <Image
              src="/Wholesalepage/Wholesale.png"
              alt="Bulk order Image"
              width={600}
              height={600}
            />
          </div>
        </div>
        <div className="flex space-x-10 p-10">
          <div className="card">
            <div className="bg">Hello</div>
            <div className="blob">Hello</div>
          </div>
          <div className="card">
            <div className="bg"></div>
            <div className="blob"></div>
          </div>
          <div className="card">
            <div className="bg"></div>
            <div className="blob"></div>
          </div>
        </div>
      </div>
    </>
  );
}
