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
      <nav className="relative flex items-center justify-between p-0 custom:px-6">
        {/* Mobile menu burger */}
        <div className="block flex-none custom:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={menu} />
          </Suspense>
        </div>
        {/* Logo section */}
        <div className="flex w-full items-center">
          <div className="flex w-full justify-between pl-0 custom:w-1/5">
            <Link
              href="/"
              className="mr-2 flex w-full items-center justify-center custom:mr-6 custom:w-auto"
            >
              <LogoSquare />
            </Link>
          </div>
          <div className="flex flex-row-reverse items-center custom:w-full">
            <div className="m-2 flex justify-end">
              {/* Cart */}
              <Suspense fallback={<OpenCart />}>
                <Cart />
              </Suspense>
            </div>
            <div className="custom:2/3 hidden justify-end custom:flex">
              {/* Search box */}
              <Suspense fallback={<SearchSkeleton />}>
                <Search />
              </Suspense>
            </div>
            {/* Desktop menu */}
            <div className="custom:pr-6">
              {menu.length ? (
                <ul className="max-[1200px]:text-md hidden gap-6 pr-6 custom:flex custom:items-center xl:text-lg">
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
