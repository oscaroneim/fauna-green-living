import { getCollectionProducts } from 'lib/shopify';
import Link from 'next/link';
import { GridTileImage } from './grid/tile';
import Price from './price';

export async function Carousel() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getCollectionProducts({ collection: 'featured' });

  if (!products?.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...products, ...products, ...products];

  return (
    <div className="mx-none h-[430px] bg-[#677B6A] px-2 md:px-0">
      <p className="relative pb-4 pt-2 text-center text-3xl text-white">Featured Products</p>
      <div className=" flex h-full w-full gap-4 overflow-x-auto overflow-y-hidden pt-1 no-scrollbar">
        <ul className="flex gap-[32px] md:justify-between md:px-6">
          {carouselProducts.slice(0, 5).map((product, i) => (
            <div className="h-[290px]">
              <li
                key={`${product.handle}${i}`}
                className="relative aspect-square h-[232px] text-white"
              >
                <Link href={`/product/${product.handle}`} className="relative h-full w-full">
                  <GridTileImage
                    alt={product.title}
                    src={product.featuredImage?.url}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover object-center"
                  />
                  <p className="text-lg font-medium">{product.title}</p>
                  <Price
                    className="text-base font-normal text-[#D6D6D6]"
                    amount={product.priceRange.maxVariantPrice.amount}
                    currencyCode={'GBP'}
                  />
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
