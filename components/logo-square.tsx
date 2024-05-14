import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'm' | undefined }) {
  return (
    <div
      className={clsx(
        'flex flex-none items-center justify-center bg-white dark:border-neutral-700 dark:bg-white',
        {
          'h-[120px] w-[280px] rounded-xl': !size,
          'h-[50px] w-[160px] rounded-lg': size === 'm'
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
