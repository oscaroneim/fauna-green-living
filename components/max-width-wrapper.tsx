import { ReactNode } from 'react';

type Props = { children: ReactNode; className?: string };

export default async function MaxWidthWrapper({ children, className }: Props) {
  return (
    <div className={`${className} mx-auto mb-7 max-w-screen-2xl px-2 md:px-3 lg:px-4`}>
      {children}
    </div>
  );
}
