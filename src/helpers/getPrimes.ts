import { isPrime } from "./isPrime";

export const getPrimes = (start = 2, end = 10, amount?: number) => {
  let primes = [];

  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
    if (amount && primes.length >= amount) {
      return primes;
    }
  }

  return primes;
};
