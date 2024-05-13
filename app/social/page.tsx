import { Instagram } from 'components/instagram';
import Footer from 'components/layout/footer';
import { Linkedin } from 'components/linkedin';
import { Tiktok } from 'components/tiktok';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <h1 className="flex justify-center text-[48px] text-[#043028]">Stay in the know!</h1>
      <Linkedin />
      <h1 className="flex justify-center text-[48px] text-[#043028]">Instgram</h1>
      <Instagram />
      <h1 className="flex justify-center text-[48px] text-[#043028]">Tiktok</h1>
      <Tiktok />
      <Footer />
    </>
  );
}