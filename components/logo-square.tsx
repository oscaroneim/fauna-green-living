import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'm' | undefined }) {
  return (
    <div
      className={clsx(
        'flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-white',
        {
          'h-[130px] w-[130px] rounded-xl': !size,
          'h-[50px] w-[50px] rounded-lg': size === 'm'
        }
      )}
    >
      <LogoIcon
        className={clsx({
          'h-[120px] w-[120px]': !size,
          'h-[50px] w-[50px]': size === 'm'
        })}
      />
    </div>
  );
}
