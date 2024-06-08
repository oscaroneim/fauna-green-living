import { ImageResponse } from 'next/og';
import LogoIcon from './icons/logo';

//THIS CODE GENERATES THE PREVIEW CARD FOR YOUR WEBSITE
//FOR EXAMPLE IF YOU WERE TO COPY THE LINK TO THE SITE AND SEND IT TO SOMEONE VIA WHATSAPP, A SMALL PREVIEW CARD IS DISPLAYED
//THIS CARD SHOWS THE TITLE, SHORT DESCRITION AND AN IMAGE
//LOGOICON CONTAINS THE IMAGE THAT IS DISPLAY.
//TO EDIT THE IMAGE, CMD + CLICK OR CTRL + CLICK TO ACCESS THE LOGOICON AND CHANGE THE URL PATH FOR THE IMAGE

export type Props = {
  title?: string;
};

export default async function OpengraphImage(props?: Props): Promise<ImageResponse> {
  const { title } = {
    ...{
      title: process.env.SITE_NAME
    },
    ...props
  };

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center justify-center bg-black">
        <div tw="flex flex-none items-center justify-center border border-neutral-700 h-[160px] w-[160px] rounded-3xl">
          <LogoIcon width="64" height="58" fill="white" />
        </div>
        <p tw="mt-12 text-6xl font-bold text-white">{title}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: await fetch(new URL('../fonts/Inter-Bold.ttf', import.meta.url)).then((res) =>
            res.arrayBuffer()
          ),
          style: 'normal',
          weight: 700
        }
      ]
    }
  );
}
