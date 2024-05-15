'use client';

import clsx from 'clsx';
import { addItem } from 'components/cart/actions';
import LoadingDots from 'components/loading-dots';
import { Cart, ProductVariant } from 'lib/shopify/types';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

function SubmitButton({
  availableForSale,
  selectedVariantId
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
}) {
  const { pending } = useFormStatus();
  const buttonClasses =
    'relative flex w-full items-center justify-center rounded-xl bg-customDarkGreen p-4 tracking-wide text-white mt-4';

  const disabledClasses = 'cursor-not-allowed opacity-60 hover:opacity-60';

  if (!availableForSale) {
    return (
      <button aria-disabled className={clsx(buttonClasses, disabledClasses)}>
        Out Of Stock
      </button>
    );
  }

  if (!selectedVariantId) {
    return (
      <button
        aria-label="Please select an option"
        aria-disabled
        className={clsx(buttonClasses, disabledClasses)}
      >
        Buy Now
      </button>
    );
  }

  return (
    <button
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
      }}
      aria-label="Add to cart"
      aria-disabled={pending}
      className={clsx(buttonClasses, {
        'hover:opacity-90': true,
        [disabledClasses]: pending
      })}
    >
      <div className="absolute left-0 ml-4">
        {pending && <LoadingDots className="mb-3 bg-white" />}
      </div>
      Buy Now
    </button>
  );
}

export function BuyNow({
  variants,
  availableForSale,
  cart
}: {
  variants: ProductVariant[];
  availableForSale: boolean;
  cart: Cart | undefined;
}) {
  //imported the useRouter hook from next/navigation to route straight to the checkout page
  const router = useRouter();
  //added is pending to the useFormState hook
  const [message, formAction, isPending] = useFormState(addItem, null);
  const searchParams = useSearchParams();
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );
  const selectedVariantId = variant?.id || defaultVariantId;
  // This binds the selectedVariantId with the formAction, meaning when the formAction function is called, it will select the cart with the specific selected variant ID.
  const actionWithVariant = formAction.bind(null, selectedVariantId);
  //added a ref to keep track of the quantity of items in the cart
  const quantityRef = useRef(cart?.totalQuantity);

  //added a useEffect hook to check if the quantity of items in the cart has changed
  useEffect(() => {
    if (
      //if the quantity of items in the cart is not equal to the quantity in the ref or the quantity in the cart is greater than the quantity in the ref then redirect to the checkout page
      (!quantityRef.current && cart?.totalQuantity) ||
      (cart?.totalQuantity && quantityRef.current && cart?.totalQuantity > quantityRef.current)
    ) {
      //if the cart is true then redirect to the checkout page
      if (cart) {
        router.push(cart.checkoutUrl);
      }
      //set the quantityRef to the quantity in the cart
      quantityRef.current = cart?.totalQuantity;
    }
    //effects run whenever there's a change in the quantity of items in the cart or in the reference to the previous quantity
  }, [cart?.totalQuantity, quantityRef]);

  return (
    <form
      //the action has to be async because the actionWithVariant is an async function that triggers when a change is made to the cart
      action={async () => {
        await actionWithVariant();
      }}
    >
      <SubmitButton availableForSale={availableForSale} selectedVariantId={selectedVariantId} />

      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
