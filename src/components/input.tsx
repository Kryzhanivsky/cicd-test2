import React from "react";
import { twMerge } from "tailwind-merge";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={twMerge(
        "border border-blue-200 rounded px-2.5 py-1",
        className,
      )}
    />
  );
};

export default Input;
