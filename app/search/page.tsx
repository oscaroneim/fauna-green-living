import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { ShopCarousel } from 'components/shop-carousel';
import { defaultSort, sorting } from 'lib/constants';
import { getProducts } from 'lib/shopify';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
};

export default async function SearchPage({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, query: searchValue });
  const resultsText = products.length > 1 ? 'results' : 'result';

  return (
    <>
      {searchValue ? (
        <>
          <p className="mb-4">
            {products.length === 0
              ? 'There are no products that match '
              : `Showing ${products.length} ${resultsText} for `}
            <span className="font-bold">&quot;{searchValue}&quot;</span>
          </p>
          {products.length > 0 && (
            <Grid className="flex">
              <ProductGridItems products={products} />
            </Grid>
          )}
        </>
      ) : (
        <>
          <ShopCarousel
            title={'Best Sellers'}
            subtitle={'Frequently bought'}
            collectionName={'hidden-homepage-carousel'}
          />
          <ShopCarousel
            title={'Kitchen'}
            subtitle={'Essentials for your kitchen'}
            collectionName={'hidden-kitchen'}
          />
          <ShopCarousel
            title={'Bathroom'}
            subtitle={'Elevate your bathroom'}
            collectionName={'hidden-bathroom'}
          />
        </>
      )}
    </>
  );
}
