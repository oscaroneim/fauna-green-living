'use client';

// import { useMediaQuery } from '@react-hook/media-query'; Currently causing a hydration error
import { GridTileImage } from 'components/grid/tile';
import { createUrl } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export function Gallery({ images }: { images: { src: string; altText: string }[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const imageSearchParam = searchParams.get('image');
  const imageIndex = imageSearchParam ? parseInt(imageSearchParam) : 0;

  const nextSearchParams = new URLSearchParams(searchParams.toString());
  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0;
  nextSearchParams.set('image', nextImageIndex.toString());
  // const nextUrl = createUrl(pathname, nextSearchParams);

  const previousSearchParams = new URLSearchParams(searchParams.toString());
  const previousImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;
  previousSearchParams.set('image', previousImageIndex.toString());
  // const previousUrl = createUrl(pathname, previousSearchParams);
  // // const isLargeScreen = useMediaQuery('(min-width: 768px)'); Currently causing a hydration error

  // const buttonClassName =
  //   'h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black flex items-center justify-end';

  return (
    <>
      {/*<----------------------------This section controls the main image (Product page) ----------------------------------------> */}

      <div className="relative mx-auto h-96 w-full rounded-xl sm:h-[330px] sm:w-[318px] md:h-[625px] md:w-[613px]">
        {images[imageIndex] && (
          <Image
            className="rounded-xl object-contain"
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            alt={images[imageIndex]?.altText as string}
            src={images[imageIndex]?.src as string}
            priority={true}
          />
        )}

        {/*<----------------------------This section controls the image navigation arrows----------------------------------------> */}

        {/* {images.length > 1 ? (
          <div className="absolute bottom-6 hidden w-full justify-center sm:flex">
            <div className="mx-auto flex h-8 items-center rounded-full bg-customDarkGreen text-neutral-500 backdrop-blur">
              <Link
                aria-label="Previous product image"
                href={previousUrl}
                className={buttonClassName}
                scroll={false}
              >
                <ArrowLeftIcon className="h-5 text-white" />
              </Link>
              <div className="mx-1 h-6 w-px bg-white"></div>
              <Link
                aria-label="Next product image"
                href={nextUrl}
                className={buttonClassName}
                scroll={false}
              >
                <ArrowRightIcon className="h-5 text-white" />
              </Link>
            </div>
          </div>
        ) : null} */}
      </div>

      {/*<----------------------------This section controls the thumbnail images ----------------------------------------> */}

      {images.length > 1 ? (
        <ul
          className={`my-6 flex items-center justify-center gap-2 overflow-auto py-1`} //${isLargeScreen ? 'show' : 'hidden'} Currently causing a hydration error (Needed to render content at smaller screen sizes)
        >
          {images.map((image, index) => {
            const isActive = index === imageIndex;
            const imageSearchParams = new URLSearchParams(searchParams.toString());

            imageSearchParams.set('image', index.toString());

            return (
              <li key={image.src} className="h-20 w-20 rounded-xl">
                <Link
                  aria-label="Enlarge product image"
                  href={createUrl(pathname, imageSearchParams)}
                  scroll={false}
                  className="h-full w-full"
                >
                  <GridTileImage
                    alt={image.altText}
                    src={image.src}
                    width={80}
                    height={80}
                    active={isActive}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
}
