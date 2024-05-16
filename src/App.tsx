import React from "react";
import Generator from "./components/generator";
import PrimeCheck from "./components/primeCheck";

const App = () => {
  return (
    <div className="w-full min-h-screen p-2.5 flex justify-center items-center bg-gradient-to-r from-blue-200 to-cyan-200 text-base font-normal">
      <div className="w-full max-w-screen-md bg-white rounded p-5 flex flex-col gap-2.5 overflow-y-auto">
        <h1 className="text-center font-bold text-xl mb-2.5">Simple digit</h1>
        <PrimeCheck />
        <Generator />
      </div>
    </div>
  );
};

export default App;
