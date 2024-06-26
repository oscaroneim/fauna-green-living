// Social media page
import { Instagram } from 'components/instagram';

import { Linkedin } from 'components/linkedin';
import { Tiktok } from 'components/tiktok';
import Head from 'next/head';
import Image from 'next/image';
import Blogimg from '../../public/LogoImages/blogimg1.jpeg';
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
      <Head>
        <title>Blog - Tips for Sustainable & Eco-Friendly Living</title>
        <meta
          name="description"
          content="Read our blog for tips and insights on sustainable and eco-friendly living. Embrace a zero waste lifestyle with our helpful articles."
        />
        <meta
          name="keywords"
          content="Blog, Sustainable living, Eco-friendly tips, Zero waste, Green living, Environmentally conscious, Ethical products, Mindful living, Reduce, reuse, recycle, Eco-minded"
        />
      </Head>
      {/* Header image div */}
      <div className="relative mb-[30px] mt-0 flex w-full justify-center rounded-lg">
        <Image
          className="h-[210px] w-full object-cover md:h-[335px]"
          src={Blogimg}
          alt="Picture of person walking"
          style={{ objectFit: 'cover' }}
        />
        <h1
          className="absolute bottom-[40%] h-auto w-auto text-center text-[32px] text-white sm:text-[48px] md:bottom-[50%] md:text-[64px] lg:text-[48px]"
          style={{ lineHeight: '1.2' }}
        >
          Stay in the know
        </h1>
      </div>
      <div className="m-2 md:m-0">
        {/* Background for Instagram */}
        <div className="mb-4 mt-8 flex flex-col justify-center rounded-lg bg-[#88A18C] pb-[20px] md:mb-8">
          <div className="flex justify-center py-8">
            {/* Instagram text */}
            <Image
              className="flex h-full w-[270px] justify-center"
              src={Instagrambanner}
              alt="Instagram logo"
            ></Image>
          </div>

          {/* Instagram social media posts */}
          <div className="flex justify-center">
            <Instagram />
          </div>
          {/* Background for Linkedin */}
        </div>
        <div className="mb-4 flex flex-col justify-center rounded-lg bg-[#C4D4C8] pb-[20px] md:mb-8">
          <div className="flex justify-center py-8">
            {/* Linkedin text */}
            <Image
              className="flex h-full w-[270px] justify-center"
              src={Linkedinbanner}
              alt="Instagram logo"
            ></Image>
          </div>
          {/* Linkedin social media posts */}
          <div className="flex justify-center">
            <Linkedin />
          </div>
        </div>
        {/* Background for Tiktok */}
        <div className="mb-4 flex flex-col justify-center rounded-lg bg-[#88A18C] pb-[20px] md:mb-8">
          <div className="flex justify-center py-8">
            {/* Tiktok text */}
            <Image
              className="flex h-full w-[270px] justify-center"
              src={Tiktokbanner}
              alt="Instagram logo"
            ></Image>
          </div>
          {/* Tiktok social media posts */}
          <div className="flex justify-center">
            <Tiktok />
          </div>
        </div>
      </div>
    </>
  );
}
