// This page displays when a collection other than all is selected
import { getCollection, getCollectionProducts } from 'lib/shopify';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { defaultSort, sorting } from 'lib/constants';

export async function generateMetadata({
  params
}: {
  params: { collection: string };
}): Promise<Metadata> {
  const collection = await getCollection(params.collection);

  if (!collection) return notFound();

  return {
    title: collection.seo?.title || collection.title,
    description:
      collection.seo?.description || collection.description || `${collection.title} products`
  };
}

export default async function CategoryPage({
  params,
  searchParams
}: {
  params: { collection: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const collection = await getCollection(params.collection);

  if (!collection) {
    return notFound();
  }
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  const products = await getCollectionProducts({ collection: params.collection, sortKey, reverse });

  return (
    <section>
      {/* displays collection title */}
      <p className="relative  text-[34px] text-black max-md:text-center md:pl-[24px]">
        {' '}
        {collection.title}{' '}
      </p>
      {/* displays collection description */}
      <p className="relative pb-2 text-[16px] text-black max-md:text-center md:pl-[24px]">
        {' '}
        {collection.description}
      </p>
      {/* if collection is found then display all the products within the collection */}
      {products.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection`}</p>
      ) : (
        // styling for how the products are displayed
        <Grid className="flex overflow-x-auto">
          <ProductGridItems products={products} />
        </Grid>
      )}
    </section>
  );
}
