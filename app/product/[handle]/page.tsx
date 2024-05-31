import { GridTileImage } from 'components/grid/tile';
import Price from 'components/price';
import { Gallery } from 'components/product/gallery';
import { ProductDescription } from 'components/product/product-description';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct, getProductRecommendations } from 'lib/shopify';
import { Image } from 'lib/shopify/types';
import type { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

//PAGE SUMMARY
//THIS PAGE IS FOR THE PRODUCT PAGE. IT WILL DISPLAY THE PRODUCT IMAGE, DESCRIPTION, PRICE AND ADD TO CART BUTTON.
//IT WILL ALSO DISPLAY THE RELATED PRODUCTS AT THE BOTTOM OF THE PAGE.
//THE PRODUCT PAGE WILL ALSO DISPLAY THE SEO TAGS FOR THE PRODUCT.
//YOU WILL FIND AN EMBEDDED YOUTUBE VIDEO ON THE PAGE IF THE PRODUCT TITLE INCLUDES THE WORD WRAP.

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
      {/*-----------------------------SEO tags------------------------------*/}
      <Head>
        <title>{product.title} - Eco-Friendly & Sustainable Products</title>
        <meta
          name="description"
          content={`Buy ${product.title}, an eco-friendly and sustainable product. Perfect for zero waste and plastic-free living.`}
        />
        <meta
          name="keywords"
          content="Eco-friendly, Sustainable, Zero waste, Plastic free, Natural materials, Ethical products, Environmentally conscious, Green living"
        />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <div className="mx-auto h-auto max-w-screen-2xl px-4">
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
            {isWrapProduct && (
              <div className="relative h-auto w-full space-y-6 ">
                <h2 className="hidden text-2xl font-bold md:block">How to use our wraps</h2>

                {/*----------------------------Embedded youtube video below--------------------------*/}
                <div className="relative pb-5 sm:flex md:h-full md:w-full md:gap-4">
                  <div className="relativeh-full w-full lg:h-[400px] lg:w-[630px]">
                    <video className="h-auto w-auto rounded-lg" controls autoPlay muted>
                      <source src="../videos/Sandwitch-wrap.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="basis-full sm:mt-4 lg:basis-3/6">
            <ProductDescription product={product} />
          </div>
        </div>
        <div className="flex h-auto sm:overflow-y-hidden">
          <RelatedProducts id={product.id} />
        </div>
      </div>
    </>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="h-full w-full py-8">
      <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
      <ul className="flex h-full w-full gap-4 overflow-x-auto overflow-y-hidden pt-1 no-scrollbar">
        {relatedProducts.map((product) => (
          <div className="h-[290px]">
            <li
              key={product.handle}
              className="aspect-square h-[210px] w-[210px] animate-fadeIn transition-opacity"
            >
              <Link className="relative h-full w-full" href={`/product/${product.handle}`}>
                <GridTileImage
                  alt={product.title}
                  src={product.featuredImage?.url}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="h-8 sm:h-24">
                  <p className="text-lg font-medium">{product.title}</p>
                  <Price
                    className="text-base font-normal text-black"
                    amount={product.priceRange.maxVariantPrice.amount}
                    currencyCode={'GBP'}
                  />
                </div>
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
