import React, { useRef } from "react";

export type ButtonVariants =
  | "default"
  | "secondary"
  | "success"
  | "warning"
  | "error";

interface ButtonProps
  extends JSX.IntrinsicAttributes,
    React.ClassAttributes<HTMLButtonElement>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  isSubmit?: boolean;
}

interface Theme {
  atoms: {
    btn?: {
      [key in ButtonVariants]: string;
    };
  };
}

const btnBase =
  "w-full font-bold py-2 px-4 border rounded focus:outline-none focus:ring transition-colors";

const btnDisabled =
  "disabled:text-gray-300 disabled:border-gray-200 disabled:bg-white";

const theme: Theme = {
  atoms: {
    btn: {
      default: `${btnBase} text-white bg-blue-500 hover:bg-blue-700 ${btnDisabled}`,
      secondary: `${btnBase} text-blue-500 bg-gray-50 border-gray-300 hover:border-blue-500 ${btnDisabled}`,
      success: `${btnBase} text-green-200 bg-green-500 hover:bg-green-700 ${btnDisabled}`,
      warning: `${btnBase} text-yellow bg-yellow-500 hover:bg-yellow-700 ${btnDisabled}`,
      error: `${btnBase} text-red-200 bg-red-500 hover:bg-red-700 ${btnDisabled}`,
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
