import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { Suspense } from 'react';
import { VariantSelector } from './variant-selector';

export async function ProductDescription({ product }: { product: Product }) {
  // const cartId = cookies().get('cartId')?.value;
  // let cart;

  // if (cartId) {
  //   cart = await getCart(cartId);
  // }

  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6">
        <h1 className="mb-2 text-4xl font-medium lg:text-5xl">{product.title}</h1>
        <div className="my-4 mr-auto w-auto rounded-full p-2 text-2xl text-black">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
        <Suspense fallback={null}>
          <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
        </Suspense>
      </div>
      <Suspense fallback={null}>
        <VariantSelector options={product.options} variants={product.variants} />
      </Suspense>

      {product.descriptionHtml ? (
        <Prose className="mb-6 text-lg leading-tight" html={product.descriptionHtml} />
      ) : null}
    </>
  );
}
