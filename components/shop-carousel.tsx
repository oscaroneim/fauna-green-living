import { getCollectionProducts } from 'lib/shopify';
import Link from 'next/link';
import { GridTileImage } from './grid/tile';
import Price from './price';

export async function ShopCarousel({
  title,
  subtitle,
  collectionName
}: {
  title: string;
  subtitle: string;
  collectionName: string;
}) {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getCollectionProducts({ collection: `${collectionName}` });

  if (!products?.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...products];

  return (
    <div className="mx-none mb-4 border-b px-2 pb-2 md:px-0">
      <p className="relative  text-[34px] text-black md:pl-[24px]">{title}</p>
      <p className="relative  text-[16px] text-black md:pl-[24px]">{subtitle}</p>
      <div className="flex w-full overflow-x-auto pt-1 md:flex-wrap md:overflow-x-visible md:pl-[24px]">
        <ul className="flex w-full gap-2 md:flex-wrap">
          {carouselProducts.map((product, i) => (
            <li
              key={`${product.handle}${i}`}
              className="relative aspect-square w-[210px] text-black"
            >
              <Link href={`/product/${product.handle}`} className="relative h-full w-full">
                <GridTileImage
                  alt={product.title}
                  src={product.featuredImage?.url}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover object-center"
                />
                <p className="text-[20px]">{product.title}</p>
                <Price
                  className="text-[16px] font-normal text-[#454545]"
                  amount={product.priceRange.maxVariantPrice.amount}
                  currencyCode={'GBP'}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
