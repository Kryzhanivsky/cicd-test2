import { isPrime } from "./isPrime";

export const getRandomPrimeNumber = (min = 2, max = 10, amount = 1) => {
  const primeNumbers = [];

  while (primeNumbers.length < amount) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    while (!isPrime(randomNum)) {
      randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    primeNumbers.push(randomNum);
  }

  return amount === 1 ? primeNumbers[0] : primeNumbers;
};
