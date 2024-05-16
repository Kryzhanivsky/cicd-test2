export const getPrimeNumber = (from = 2, to = 10) => {
  nextPrime: for (let i = from; i <= to; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) continue nextPrime;
    }
    return i;
  }
};
