import { SelectHTMLAttributes } from 'react';

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
};

export default function SelectInput({ id, label, options, error, ...rest }: Props) {
  return (
    <div className="flex w-full flex-col gap-y-0.5">
      <label className="font-medium text-customDarkGreen" htmlFor={id}>
        {label}
      </label>
      <select
        className="rounded-lg border border-customLightGrey px-4 py-3 font-medium shadow-sm focus:outline-none"
        id={id}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="h-6 text-customRed">{error}</div>
    </div>
  );
}
