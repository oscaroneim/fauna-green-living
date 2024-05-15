import { getCollectionProducts } from 'lib/shopify';
import Link from 'next/link';
import { GridTileImage } from './grid/tile';

export async function Carousel() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getCollectionProducts({ collection: 'hidden-homepage-carousel' });

  if (!products?.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...products, ...products, ...products];

  return (
    <div className="mx-none h-[410px] bg-[#677B6A] px-2 md:px-0">
      <p className="relative pb-4 pt-2 text-[34px] text-white lg:text-center">Best Sellers</p>
      <div className=" h-[340px] w-full overflow-x-auto pt-1">
        <ul className="flex gap-4 md:justify-between md:px-6">
          {carouselProducts.slice(0, 5).map((product, i) => (
            <li
              key={`${product.handle}${i}`}
              className="relative aspect-square h-[30vh] max-h-[232px] w-2/3 max-w-[232px] flex-none text-white md:w-1/3"
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
                <p className="text-[16px] text-[#D6D6D6]">
                  &#163;
                  {product.priceRange.maxVariantPrice.amount}{' '}
                  {product.priceRange.maxVariantPrice.currencyCode}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}