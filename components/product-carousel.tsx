// Featured products on the homepage
import { getCollectionProducts } from 'lib/shopify';
import Link from 'next/link';
import { GridTileImage } from './grid/tile';
import Price from './price';

export async function Carousel() {
  // Collections that start with `hidden-*` are hidden from the search page.
  // Pulls data from collection called 'featured' from dashboard
  const products = await getCollectionProducts({ collection: 'featured' });

  if (!products?.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...products, ...products, ...products];

  return (
    // div around tghe title and products
    <div className="mx-none h-[430px] rounded-md bg-[#677B6A] px-2 pt-[24px] md:px-0">
      <p className="relative  pb-4 pt-2 text-center text-4xl text-white">Featured Products</p>
      {/* div around just the product */}
      <div className=" flex h-full w-full gap-4 overflow-x-auto overflow-y-hidden pt-1 no-scrollbar min-[1325px]:justify-center">
        {/* creates list of the first 5 produxts in specified collection above */}
        <ul className="flex gap-[32px] md:justify-between md:px-6">
          {carouselProducts.slice(0, 5).map((product, i) => (
            // div around singular product
            <div className="h-[290px]">
              <li
                key={`${product.handle}${i}`}
                className="relative aspect-square h-[232px] text-white"
              >
                {/* link around the entire product which directly links to the product */}
                <Link href={`/product/${product.handle}`} className="relative h-full w-full">
                  {/* image section of product */}
                  <GridTileImage
                    alt={product.title}
                    src={product.featuredImage?.url}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover object-center"
                  />
                  {/* ttile of product */}
                  <p className="text-lg font-medium">{product.title}</p>
                  {/* display price of product */}
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
