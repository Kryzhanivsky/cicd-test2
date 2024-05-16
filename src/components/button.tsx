import React from "react";
import { twMerge } from "tailwind-merge";

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button: React.FC<IButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={twMerge("bg-blue-200 px-2.5 py-1 rounded", className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
