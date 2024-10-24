import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
}

export default function Button({
  outline = false,
  type = "button",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`cursor-pointer px-4 py-2 min-w-16 ${
        outline
          ? "bg-transparent border-[#0071e3] border border-solid text-[#0071e3] hover:bg-[#0071e3] hover:text-white"
          : "bg-[#0071e3] hover:bg-[#0077ED] active:bg-[#006EDB] text-white"
      } rounded-3xl`}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}
