import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import LogoSquare from 'components/logo-square';
import { getMenu } from 'lib/shopify';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';
const { SITE_NAME } = process.env;

export default async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');
  console.log(menu);
  return (
    <>
      <div className="flex w-screen justify-center bg-[#043028] text-white">
        <p>Offer text</p>
      </div>

      <nav className="relative flex items-center justify-between p-4 lg:px-6">
        <div className="block flex-none md:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={menu} />
          </Suspense>
        </div>
        <div className="flex w-full items-center">
          <div className="3xl:pl-24 flex w-full justify-between md:w-1/5 xl:pl-8 2xl:pl-12">
            <Link
              href="/"
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            >
              <LogoSquare />
            </Link>
          </div>
          <div className="flex w-full flex-row-reverse items-center pr-12">
            <div className="m-2 flex justify-end">
              <Suspense fallback={<OpenCart />}>
                <Cart />
              </Suspense>
            </div>
            <div className="md:2/3 hidden justify-end md:flex">
              <Suspense fallback={<SearchSkeleton />}>
                <Search />
              </Suspense>
            </div>
            {/* 
            <ul className="hidden gap-6 pr-6 text-[20px] text-sm md:flex md:items-center">
              <li className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">
                {' '}
                Shop{' '}
              </li>
              <li className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">
                {' '}
                Use & Care{' '}
              </li>
              <li className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">
                {' '}
                About{' '}
              </li>
              <li className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">
                {' '}
                Custom & Wholesale{' '}
              </li>
              <li className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">
                {' '}
                Blog{' '}
              </li>
              <li className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">
                {' '}
                Contact{' '}
              </li>

            </ul> */}
            {menu.length ? (
              <ul className="hidden gap-6 pr-6 text-[20px] text-sm md:flex md:items-center">
                {menu.map((item: Menu) => (
                  <li key={item.title}>
                    <Link
                      href={item.path}
                      className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </nav>
    </>
  );
}
