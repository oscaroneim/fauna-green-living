import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';
import { sorting } from 'lib/constants';
import { getMenu } from 'lib/shopify';
import Link from 'next/link';

export default async function SearchLayout({ children }: { children: React.ReactNode }) {
  const menu = await getMenu('all-collections');

  return (
    <>
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
      <div className="mx-auto flex max-w-screen-2xl  flex-col justify-between gap-8 px-4 pb-4 text-black md:flex-row">
        <div className="order-first w-full flex-none md:max-w-[125px]">
          <Collections />
        </div>
        <div className="order-last min-h-screen w-full md:order-none">{children}</div>
        <div className="order-none flex-none md:order-last md:w-[125px]">
          <FilterList list={sorting} title="Sort by" />
        </div>
      </div>
    </>
  );
}
