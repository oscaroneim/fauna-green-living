import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import { Product } from 'lib/shopify/types';
import Link from 'next/link';
import Price from '../price';

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item
          key={product.handle}
          className="aspect-square h-[210px] w-[210px] animate-fadeIn"
        >
          <Link href={`/product/${product.handle}`} className="relative h-full w-full">
            <GridTileImage
              alt={product.title}
              src={product.featuredImage?.url}
              fill
              sizes=""
              className="object-cover object-center"
            />
            <p className="text-lg">{product.title}</p>
            <Price
              className="text-base font-normal text-[#454545]"
              amount={product.priceRange.maxVariantPrice.amount}
              currencyCode={'GBP'}
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
