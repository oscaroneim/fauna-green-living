// Layout for pages in the shop
import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';
import { sorting } from 'lib/constants';
import Image from 'next/image';
import Banner from 'public/ShopBanner/banner.jpeg';

export default async function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* image banner at the top of the shop page */}
      <div className="relative h-60 w-full">
        <Image src={Banner} alt="Sandwich in beeswax wrap" fill style={{ objectFit: 'cover' }} />
      </div>
      {/* overall div around the entire page section */}
      <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-0 px-4 pb-4 text-black md:flex-row">
        {/* displays all collections from dashboard */}
        <div className="order-first w-full flex-none md:max-w-[125px]">
          <Collections />
        </div>
        {/* displays the collection that is selected */}
        <div className="order-last w-full overflow-y-visible md:order-none md:w-4/5">
          {children}
        </div>
        {/* adds filter section */}
        <div className="order-none flex-none md:order-last md:w-[125px] ">
          <FilterList list={sorting} title="Sort by" />
        </div>
      </div>
    </>
  );
}
