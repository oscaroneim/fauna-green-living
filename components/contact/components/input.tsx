import { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string };

export default function Input({ id, label, error, ...rest }: Props) {
  return (
    <div className="flex w-full flex-col gap-y-0.5">
      <label className="font-medium text-customDarkGreen" htmlFor={id}>
        {label}
      </label>
      <input
        className=" rounded-lg border border-customLightGrey px-4 py-3 font-medium shadow-sm focus:outline-none"
        id={id}
        type="text"
        {...rest}
      />{' '}
      <div className="h-6 text-customRed">{error}</div>
    </div>
  );
}
