import clsx from 'clsx';

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME} logo`}
      viewBox="0 0 300 105"
      {...props}
      className={clsx('h-full w-full dark:fill-white', props.className)}
    >
      <image xlinkHref="/LogoImages/logo.png" width="305" height="105" x="1" y="1" />
    </svg>
  );
}
