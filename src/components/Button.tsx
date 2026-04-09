interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ className, children, onClick }: ButtonProps) {
  const buttonClassName = className?.length
    ? className
    : "h-10 cursor-pointer rounded-2xl border bg-slate-50 px-4 text-sm font-semibold text-slate-700";

  return (
    <button type="button" className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
}
