import { ReactNode } from 'react';

type Props = { children: ReactNode; className?: string };

export default async function MaxWidthWrapper({ children, className }: Props) {
  return <div className={`${className} mx-auto max-w-screen-2xl md:px-4`}>{children}</div>;
}
