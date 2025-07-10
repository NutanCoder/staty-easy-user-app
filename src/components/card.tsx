import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={clsx(
        "bg-white shadow-md rounded-2xl p-6 border border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
