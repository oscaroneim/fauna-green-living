import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import LogoSquare from 'components/logo-square';
import { getMenu } from 'lib/shopify';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';

export default async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');
  return (
    <>
      <nav className="relative flex items-center justify-between p-0 lg:px-6">
        <div className="block flex-none lg:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={menu} />
          </Suspense>
        </div>
        <div className="flex w-full items-center">
          <div className=" flex w-full justify-between pl-0 lg:w-1/5 ">
            <Link
              href="/"
              className="mr-2 flex w-full items-center justify-center lg:mr-6 lg:w-auto"
            >
              <LogoSquare />
            </Link>
          </div>
          <div className="flex flex-row-reverse items-center lg:w-full">
            <div className="m-2 flex justify-end">
              <Suspense fallback={<OpenCart />}>
                <Cart />
              </Suspense>
            </div>
            <div className="lg:2/3 hidden justify-end lg:flex">
              <Suspense fallback={<SearchSkeleton />}>
                <Search />
              </Suspense>
            </div>

            <div className="lg:pr-6">
              {menu.length ? (
                <ul className="hidden gap-6 pr-6 text-[20px] text-sm lg:flex lg:items-center">
                  {menu.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.path}
                        className="text-black underline-offset-4 hover:text-[#043028] hover:underline"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
