import FooterMenu from 'components/layout/footer-menu';
import LogoSquare from 'components/logo-square';
import { getMenu } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
        <div>
          <Link className="flex items-center gap-2 text-black md:pt-1 dark:text-white" href="/">
            <LogoSquare size="m" />
          </Link>
        </div>
        <div className="flex-col">
          <div>
            <h3 className="font-cabin text-darkGreen text-xl">
              Join us in fighting against single use plastic
            </h3>
            <br />
            <p className="font-cabin text-darkGreen mb-4 w-1/2">
              Join our email list and get 10% off your first order.  Then, get special access to
              news and deals exclusive to our subscribers
            </p>
            <input
              className="peer-rounded-[1px] mb-4 w-1/2 border border-transparent border-t-transparent bg-[#D9D9D9] px-3 py-2.5 font-sans text-sm  font-normal text-[#043028] outline outline-0 transition-all placeholder-shown:border-transparent placeholder-shown:border-transparent focus:border-[#D9D9D9] focus:border-transparent focus:border-t-transparent focus:outline-0 disabled:border-0"
              placeholder="Enter your email here*"
            />
            <label className="peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 before:content[' '] after:content[' '] before:border-blue-gray-200 after:border-blue-gray-200 pointer-events-none absolute -top-1.5 left-0 flex select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-gray-900 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent">
              Username
            </label>
            <br />
            <button className=" inline-block w-1/2 cursor-pointer rounded-md bg-[#82a38a] px-4 py-3 text-center text-sm font-semibold text-white transition duration-200 ease-in-out hover:bg-[#57755e]">
              Sign Up
            </button>
          </div>
          <div className="pt-5">
            <ul className="flex space-x-3 pl-2">
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
            <div className="flex-end h-[188px] w-[200px] flex-col gap-2">
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
