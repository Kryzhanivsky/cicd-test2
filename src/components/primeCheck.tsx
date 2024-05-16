import React, { useMemo, useState } from "react";
import Input from "./input";
import { isPrime } from "../helpers/isPrime";
import { twMerge } from "tailwind-merge";

const PrimeCheck = () => {
  const [value, setValue] = useState<number>();
  const result = useMemo(() => (value ? isPrime(value) : false), [value]);

  return (
    <div>
      <h2 className="w-full font-semibold mb-2.5">Prime number check</h2>
      <div className="flex flex-col justify-around items-center">
        <Input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          placeholder="Enter your number..."
          className={twMerge(
            !!value && (result ? "outline-green-500" : "outline-red-500"),
          )}
        />
        {!!value &&
          (result ? (
            <p className="text-green-500">Your number is prime</p>
          ) : (
            <p className="text-red-500">Your number is not prime</p>
          ))}
      </div>
    </div>
  );
};

export default PrimeCheck;
