// Utilizando da recursão para criar soluções mais legíveis

export function factorialIterative(number: number) {
  if (number < 0) {
    return undefined;
  }
  let total = 1;
  for (let n = number; n > 1; n--) {
    total *= n;
  }
  return total;
}

export function factorial(n: number): number {
  if (n < 0) {
    return undefined;
  }

  if (n === 1 || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// fibonacci
export function fibonacci(n: number): number {
  if (n < 1) return 0;
  if (n <= 2) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

//

export function fibonacciIterative(n: number) {
  if (n < 1) {
    return 0;
  }
  let fibNMinus2 = 0;
  let fibNMinus1 = 1;
  let fibN = n;
  for (let i = 2; i <= n; i++) {
    // n >= 2
    fibN = fibNMinus1 + fibNMinus2; // f(n-1) + f(n-2)
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibN;
  }
  return fibN;
}

// fibonacci memoized
export function fibonacciMemoization(n: number) {
  if (n < 1) {
    return 0;
  }
  const memo = [0, 1];
  const fibonacciMem = (num: number): number => {
    if (memo[num] != null) {
      return memo[num];
    }
    return (memo[num] = fibonacciMem(num - 1) + fibonacciMem(num - 2));
  };
  return fibonacciMem(n);
}
