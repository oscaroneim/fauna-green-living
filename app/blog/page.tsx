import { Instagram } from 'components/instagram';

import { Linkedin } from 'components/linkedin';
import { Tiktok } from 'components/tiktok';
import Image from 'next/image';
import Blogimg from '../../public/LogoImages/blogimg.jpg';
import Instagrambanner from '../../public/Socialmedia/instagramblog.png';
import Linkedinbanner from '../../public/Socialmedia/linkedinblog.png';
import Tiktokbanner from '../../public/Socialmedia/tiktokblog.png';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <div className="mb-[30px] mt-0 flex justify-center rounded-lg">
        <Image
          className="w-full, h-[335px] rounded-lg object-cover"
          src={Blogimg}
          alt="Picture of person walking"
        />
      </div>
      <h1 className="flex justify-center border-b text-5xl text-[#043028]">Stay in the know!</h1>
      <div className="flex flex-col justify-center rounded-lg bg-[#88A18C] pb-[20px]">
        <div className="flex justify-center py-8">
          <Image
            className="flex h-full w-[270px] justify-center"
            src={Instagrambanner}
            alt="Instagram logo"
          ></Image>
        </div>
        <div className="flex justify-center">
          <Instagram />
        </div>
      </div>
      <div className="flex flex-col justify-center rounded-lg bg-[#C4D4C8] pb-[20px]">
        <div className="flex justify-center py-8">
          <Image
            className="flex h-full w-[270px] justify-center"
            src={Linkedinbanner}
            alt="Instagram logo"
          ></Image>
        </div>
        <div className="flex justify-center">
          <Linkedin />
        </div>
      </div>
      <div className="flex flex-col justify-center rounded-lg bg-[#88A18C] pb-[20px]">
        <div className="flex justify-center py-8">
          <Image
            className="flex h-full w-[270px] justify-center"
            src={Tiktokbanner}
            alt="Instagram logo"
          ></Image>
        </div>
        <div className="flex justify-center">
          <Tiktok />
        </div>
      </div>
    </>
  );
}
