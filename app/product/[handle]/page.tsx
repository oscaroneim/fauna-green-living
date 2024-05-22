import { GridTileImage } from 'components/grid/tile';
import Price from 'components/price';
import { Gallery } from 'components/product/gallery';
import { ProductDescription } from 'components/product/product-description';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct, getProductRecommendations } from 'lib/shopify';
import { Image } from 'lib/shopify/types';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export async function generateMetadata({
  params
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };
  //check to see if the product title includes the word wrap, if so render the how to video
  const isWrapProduct = product.title.toLowerCase().includes('wrap');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col bg-white p-2 md:p-4 lg:flex-row lg:content-center lg:gap-12 ">
          <div className="h-full w-full basis-full sm:mb-2 sm:mt-2 lg:basis-2/6">
            {/*This section controls the thumbnail images below the main image */}
            <Suspense
              fallback={
                <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
              }
            >
              <Gallery
                images={product.images.map((image: Image) => ({
                  src: image.url,
                  altText: image.altText
                }))}
              />
            </Suspense>
            {/*This needs to be swapped out with Kim's video/ video only renders if isWrapProduct is true*/}
            {isWrapProduct && (
              <div className="relative h-auto w-full space-y-6">
                <h2 className="hidden text-2xl font-bold sm:block">How to use our wraps</h2>
                <div className="block h-auto w-auto overflow-hidden rounded-lg object-contain">
                  {' '}
                  <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/sTPWknd7oOQ?modestBranding=1&si=Y0Djt8r8oko7nc8F`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="hidden sm:block"
                    style={{ aspectRatio: '16/9' }}
                  ></iframe>
                </div>
              </div>
            )}
          </div>

          <div className="basis-full lg:basis-3/6">
            <ProductDescription product={product} />
          </div>
        </div>
        <RelatedProducts id={product.id} />
      </div>
    </>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
      <ul className="flex w-full gap-4 overflow-x-auto overflow-y-hidden pt-1">
        {relatedProducts.map((product) => (
          <li
            key={product.handle}
            className="flex aspect-square w-full min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <Link className="relative h-full w-full" href={`/product/${product.handle}`}>
              <GridTileImage
                alt={product.title}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover object-center"
              />
              <p className="text-[20px] font-medium">{product.title}</p>
              <Price
                className="text-[16px] font-normal text-black"
                amount={product.priceRange.maxVariantPrice.amount}
                currencyCode={'GBP'}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
