import { Instagram } from 'components/instagram';

import { Linkedin } from 'components/linkedin';
import { Tiktok } from 'components/tiktok';
import Image from 'next/image';
import Blogimg from '../../public/LogoImages/blogimg.jpg';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <div className="mt-0 flex justify-center pb-[30px]">
        <Image
          className="w-full, h-[335px] object-cover"
          src={Blogimg}
          alt="Picture of person walking"
        />
      </div>
      <h1 className="flex justify-center border-b text-[48px] text-[#043028]">Stay in the know!</h1>
      <div>
        <h1 className="flex justify-center text-[48px] text-[#043028]">Instagram</h1>
        <Instagram />
      </div>
      <div>
        <h1 className="flex justify-center text-[48px] text-[#043028]">Linkedin</h1>
        <Linkedin />
      </div>
      <div>
        <h1 className="flex justify-center text-[48px] text-[#043028]">Tiktok</h1>
        <Tiktok />
      </div>
    </>
  );
}
