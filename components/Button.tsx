import React, { useRef } from "react";

interface ButtonProps
  extends JSX.IntrinsicAttributes,
    React.ClassAttributes<HTMLButtonElement>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "success" | "warning" | "error";
  isSubmit?: boolean;
}

interface Theme {
  atoms: {
    btn?: {
      default: string;
      success: string;
      warning: string;
      error: string;
    };
  };
}

const btnBase =
  "w-full font-bold py-2 px-4 rounded focus:outline-none focus:ring";

const theme: Theme = {
  atoms: {
    btn: {
      default: `${btnBase} text-white bg-blue-500 hover:bg-blue-700`,
      success: `${btnBase} text-green bg-green-500 hover:bg-green-700`,
      warning: `${btnBase} text-yellow bg-yellow-500 hover:bg-yellow-700`,
      error: `${btnBase} text-red bg-red-500 hover:bg-red-700`,
    },
  },
};

export function Button({
  variant,
  isSubmit,
  onClick,
  children,
  ...rest
}: ButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  return (
    <button
      {...rest}
      type={isSubmit ? "submit" : "button"}
      className={theme.atoms.btn?.[variant || "default"]}
      onClick={onClick}
      ref={btnRef}
    >
      {children}
    </button>
  );
}
