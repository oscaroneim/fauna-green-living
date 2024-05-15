import { Instagram } from 'components/instagram';

import { Linkedin } from 'components/linkedin';
import { Tiktok } from 'components/tiktok';
import Image from 'next/image';
import walking from '../../public/LogoImages/blogimg.png';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <div className="flex justify-center pb-[30px]">
        <Image
          className="w-full, h-[335px] object-cover"
          src={walking}
          alt="Picture of person walking"
        />
      </div>
      <h1 className="flex justify-center text-[48px] text-[#043028]">Stay in the know!</h1>
      <Linkedin />
      <h1 className="flex justify-center text-[48px] text-[#043028]">Instgram</h1>
      <Instagram />
      <h1 className="flex justify-center text-[48px] text-[#043028]">Tiktok</h1>
      <Tiktok />
    </>
  );
}
