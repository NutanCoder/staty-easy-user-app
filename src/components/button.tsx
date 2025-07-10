import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  fullWidth?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  fullWidth = false,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "px-4 py-2 rounded-lg text-white font-medium transition duration-200";

  const variantStyles = {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-gray-600 hover:bg-gray-700",
    danger: "bg-red-600 hover:bg-red-700",
  };

  const combinedClassName = clsx(
    baseStyles,
    variantStyles[variant],
    fullWidth && "w-full",
    className
  );

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
