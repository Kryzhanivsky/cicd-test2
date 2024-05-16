import React, { useState } from "react";
import Range from "./range";
import Button from "./button";
import { getPrimes } from "../helpers/getPrimes";
import { getRandomPrimeNumber } from "../helpers/getRandomPrimeNumber";

const Generator = () => {
  const [result, setResult] = useState<any>(undefined);
  const [from, setFrom] = useState<number>(2);
  const [to, setTo] = useState<number>(10);
  const [amount, setAmount] = useState<number>(1);

  const getNumbersHandler = () => {
    const values = getPrimes(from, to, amount);
    setResult(values);
  };

  const getAllHandler = () => {
    const values = getPrimes(from, to);
    setResult(values);
  };

  const getRandomHandler = () => {
    const values = getRandomPrimeNumber(from, to, amount);
    setResult(values);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2.5">
      <h2 className="w-full font-semibold">Generation of prime numbers</h2>
      <Range
        from={from}
        to={to}
        amount={amount}
        fromHandler={(from) => setFrom(from)}
        toHandler={(to) => setTo(to)}
        amountHandler={(amount) => setAmount(amount)}
      />
      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-2.5 mb-2.5">
        <Button className="w-full" onClick={getNumbersHandler}>
          Get numbers
        </Button>
        <Button className="w-full" onClick={getAllHandler}>
          Get all
        </Button>
        <Button className="w-full" onClick={getRandomHandler}>
          Get random numbers
        </Button>
      </div>
      <div className="w-full flex flex-col justify-around items-start gap-2.5">
        <p className="mr-2.5 font-semibold">Results:</p>
        {result ? (
          <p className="w-full text-center text-xl">
            {Array.isArray(result) ? result.join(", ") : result}
          </p>
        ) : (
          <div className=" w-full flex flex-col justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
              />
            </svg>
            <p>No result yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Generator;
