import clsx from 'clsx';

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME} logo`}
      viewBox="0 0 32 28"
      {...props}
      className={clsx('h-4 w-4 dark:fill-white', props.className)}
    >
      <image
        xlinkHref="/LogoImages/FaunaGreenLivingLogo_color.png"
        width="30"
        height="30"
        x="1"
        y="1"
      />
    </svg>
  );
}
