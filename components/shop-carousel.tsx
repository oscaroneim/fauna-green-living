import { getCollectionProducts } from 'lib/shopify';
import Link from 'next/link';
import { GridTileImage } from './grid/tile';

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
    <div className="mx-none h-[410px] px-2 md:px-0">
      <p className="relative  pl-[24px] text-[34px] text-black">{title}</p>
      <p className="relative  pl-[24px] text-[16px] text-black">{subtitle}</p>
      <div className=" h-[340px] w-full overflow-x-auto pt-1">
        <ul className="flex gap-4 md:justify-between md:px-6">
          {carouselProducts.map((product, i) => (
            <li
              key={`${product.handle}${i}`}
              className="relative aspect-square h-[30vh] max-h-[232px] w-2/3 max-w-[232px] flex-none text-black md:w-1/3"
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
                <p className="text-[16px] text-[#454545]">
                  &#163;
                  {product.priceRange.maxVariantPrice.amount}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
