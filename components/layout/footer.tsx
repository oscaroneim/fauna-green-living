import FooterMenu from 'components/layout/footer-menu';
import LogoSquare from 'components/logo-square';
import { getMenu } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import SignupForm from './newsletter-signup';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  // const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 ';
  const menu = await getMenu('next-js-frontend-footer-menu');
  // const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="sticky top-[100vh] w-full text-sm text-neutral-500 shadow-top">
      <div className="mx-auto flex w-full flex-col justify-between gap-6 border-neutral-200 py-12 text-sm md:flex-row">
        <div className=" p-4 md:w-2/5 md:px-16">
          <div className=" flex flex-col items-center  text-center md:text-left">
            <div className=" flex h-full justify-center pb-4 md:w-4/5">
              <Link className="flex items-center gap-2 " href="/">
                <LogoSquare />
              </Link>
            </div>
            <h3 className="font-cabin text-3xl text-customDarkGreen">
              Join us in fighting against single use plastic
            </h3>
            <br />
            <p className="font-cabin mb-4 text-customDarkGreen ">
              Join our email list and get 10% off your first order. Then, get special access to news
              and deals exclusive to our subscribers
            </p>
            <SignupForm />
          </div>

          <div className=" pt-5 text-center md:text-left ">
            <ul className="flex justify-center space-x-3 pl-2">
              <li>
                <a href="https://www.instagram.com/faunagreenliving/">
                  <Image
                    src="/Socialmedia/instagram.png"
                    alt="Instagram Icon"
                    width={40}
                    height={40}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@faunagreenliving">
                  <Image src="/Socialmedia/tiktok.png" alt="Tiktok Icon" width={40} height={40} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/FaunaGreenLiving/">
                  <Image
                    src="/Socialmedia/facebook.png"
                    alt="Facebook Icon"
                    width={40}
                    height={40}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/kimberlyfollett">
                  <Image
                    src="/Socialmedia/linkedin.png"
                    alt="LinkedIn Icon"
                    width={40}
                    height={40}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Suspense
          fallback={
            <div className="flex-end h-[188px] w-[200px] flex-col justify-center gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <FooterMenu menu={menu} />
        </Suspense>
      </div>
      <div className="px-12">
        <small>© 2024 Fauna Green Living. All Rights Reserved.</small>
      </div>
    </footer>
  );
}
