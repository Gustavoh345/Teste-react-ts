interface CheckboxProps {
  id: string;
  checked: boolean;
  name: string;
  description: string;
}

export const Checkbox = ({ id, checked, name, description }: CheckboxProps) => {
  return (
    <label
      className="flex cursor-pointer items-center justify-between rounded-2xl border bg-slate-50 px-4 py-3"
      htmlFor={id}
    >
      <div>
        <span className="text-sm font-semibold">{name}</span>
        <span className="block text-xs text-slate-500">{description}</span>
      </div>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        className="h-4 w-4 accent-emerald-600"
      />
    </label>
  );
};
