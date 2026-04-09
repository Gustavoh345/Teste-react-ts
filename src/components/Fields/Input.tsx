interface InputProps {
  name: string;
  id: string;
  type: string;
  value: string;
  placeholder?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  name,
  id,
  type,
  value,
  className,
  onChange,
  placeholder,
}: InputProps) {
  const baseClasses =
    "h-10 w-full rounded-2xl border px-4 text-sm focus:border-emerald-600";

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="text-xs font-semibold text-slate-500 mb-2 block"
      >
        {name}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={baseClasses}
      />
    </div>
  );
}
