import FooterMenu from 'components/layout/footer-menu';
import LogoSquare from 'components/logo-square';
import { getMenu } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  // const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('next-js-frontend-footer-menu');
  // const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto flex w-full flex-col gap-6 border-neutral-200 py-12 text-sm md:flex-row">
        <div className="flex-col items-center p-4 md:w-2/5 md:pl-12">
          <div className="flex flex-col ">
            <div className="text-center md:text-left">
              <div className="flex h-full justify-center pb-4 md:w-4/5">
                <Link className="flex items-center gap-2 text-black dark:text-white" href="/">
                  <LogoSquare size="m" />
                </Link>
              </div>
              <h3 className="text-customDarkGreen font-cabin text-3xl">
                Join us in fighting against single use plastic
              </h3>
              <br />
              <p className="text-customDarkGreen mb-4 font-cabin ">
                Join our email list and get 10% off your first order. Then, get special access to
                news and deals exclusive to our subscribers
              </p>
              <input
                className="peer-rounded-[1px] mb-4 w-full max-w-md rounded-md border border-transparent border-t-transparent bg-[#D9D9D9] px-3 py-2.5 font-sans text-sm font-normal text-[#043028] outline outline-0 transition-all placeholder-shown:border-transparent placeholder-shown:border-transparent focus:border-[#D9D9D9] focus:border-transparent focus:border-t-transparent focus:outline-0 disabled:border-0"
                placeholder="Enter your email here*"
              />
              <br />
              <button className="text-cabin inline-block w-full max-w-md cursor-pointer rounded-md bg-[#82a38a] px-4 py-3 text-center text-lg font-semibold text-white transition duration-200 ease-in-out hover:bg-[#57755e]">
                Sign Up
              </button>
            </div>
          </div>
          <div className="pt-5 text-center md:text-left">
            <ul className="flex justify-center space-x-3 pl-2 md:justify-start">
              <li>
                <a href="https://www.instagram.com/">
                  <Image
                    src="/Socialmedia-Images/instagram.png"
                    alt="Instagram Icon"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/">
                  <Image
                    src="/Socialmedia-Images/tiktok.png"
                    alt="Tiktok Icon"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <Image
                    src="/Socialmedia-Images/facebook.png"
                    alt="Facebook Icon"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.LinkedIn.com/">
                  <Image
                    src="/Socialmedia-Images/linkedin.png"
                    alt="LinkedIn Icon"
                    width={20}
                    height={20}
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
    </footer>
  );
}
