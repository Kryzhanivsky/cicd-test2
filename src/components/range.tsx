import React from "react";
import Input from "./input";

interface IRangeProps {
  from?: number;
  to?: number;
  amount?: number;
  fromHandler: (from: number) => void;
  toHandler: (to: number) => void;
  amountHandler: (amount: number) => void;
}

const Range: React.FC<IRangeProps> = ({
  to = 10,
  from = 2,
  amount = 1,
  toHandler,
  fromHandler,
  amountHandler,
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-around items-center gap-2.5">
      <label>
        <p>from:</p>
        <Input
          type="number"
          value={from}
          onChange={(e) => fromHandler(Number(e.target.value))}
        />
      </label>

      <label>
        <p>to:</p>
        <Input
          type="number"
          value={to}
          onChange={(e) => toHandler(Number(e.target.value))}
        />
      </label>

      <label>
        <p>amount:</p>
        <Input
          type="number"
          value={amount}
          onChange={(e) => amountHandler(Number(e.target.value))}
        />
      </label>
    </div>
  );
};

export default Range;
