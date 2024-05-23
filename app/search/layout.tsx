import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';
import { sorting } from 'lib/constants';
import Image from 'next/image';
import Banner from 'public/ShopBanner/banner.jpeg';

export default async function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative h-60 w-full">
        <Image src={Banner} alt="Sandwich in beeswax wrap" fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="mx-auto flex max-w-screen-2xl  flex-col justify-between gap-0 px-4 pb-4 text-black md:flex-row">
        <div className="order-first w-full flex-none md:max-w-[125px]">
          <Collections />
        </div>
        <div className="order-last min-h-screen w-full md:order-none md:w-4/5">{children}</div>
        <div className="order-none flex-none md:order-last md:w-[125px] ">
          <FilterList list={sorting} title="Sort by" />
        </div>
      </div>
    </>
  );
}
