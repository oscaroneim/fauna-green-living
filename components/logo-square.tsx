import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'm' | undefined }) {
  return (
    <div
      className={clsx('flex flex-none items-center justify-center bg-white', {
        'h-[60px] w-[140px] rounded-xl xl:h-[120px] xl:w-[280px]': !size,
        'h-[50px] w-[160px] rounded-lg': size === 'm'
      })}
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
