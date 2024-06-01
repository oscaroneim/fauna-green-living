// Main page when clicked on shop, all collection page
import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { defaultSort, sorting } from 'lib/constants';
import { getProducts } from 'lib/shopify';
import Head from 'next/head';

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
      <Head>
        <title>Shop Eco-Friendly & Zero Waste Products</title>
        <meta
          name="description"
          content="Explore our shop for eco-friendly and zero waste products. From beeswax wraps to reusable cleaning cloths, find sustainable home goods here."
        />
        <meta
          name="keywords"
          content="Beeswax wraps, Zero waste food storage, Plastic free food storage, Sustainable food storage, Eco-friendly food wraps, Reusable food wraps, Beeswax food covers, Organic beeswax wraps, Natural food wrap alternatives, Reusable paper towels, Sustainable kitchen roll, Eco-friendly paper towels, Washable paper towels, Cloth kitchen towels, Reusable cleaning cloths, Zero waste kitchen products, Reusable makeup remover pads, Eco-friendly makeup wipes, Washable makeup remover wipes, Sustainable facial wipes, Cloth makeup remover pads, Natural fiber makeup wipes, Zero waste beauty products, Sustainable living products, Zero waste alternatives, Eco-conscious household items, Green living essentials, Environmentally friendly products, Sustainable home goods, Ethically sourced materials, Plastic free, Single use plastic free, No more single use plastic"
        />
      </Head>
      {/* if serach matches porducts then display, if not display not found */}
      {searchValue ? (
        <p className="mb-4">
          {products.length === 0
            ? 'There are no products that match '
            : `Showing ${products.length} ${resultsText} for `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
      {/* if there is no search then display the default all page */}
      {products.length > 0 ? (
        <Grid className="h-full flex-grow grid-cols-1 overflow-x-auto sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      ) : null}
    </>
  );
}
