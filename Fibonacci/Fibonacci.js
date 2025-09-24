// fibonacci sequence recursive function
export function fibonacci(n) {
  if (n < 0) throw new Error("Input cannot be negative");
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
  
}

// momoization can be added for optimization if needed
export function fibonacciMemoized(n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }
  if (n <= 1) {
    return n;
  }
  memo[n] = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo);
  return memo[n];
}

// Using Binet's formula for Fibonacci numbers
export function fibonacciBinet(n) {
  if (n < 0) throw new Error("Input cannot be negative");
  const phi = (1 + Math.sqrt(5)) / 2;
  const psi = (1 - Math.sqrt(5)) / 2;
  return Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / Math.sqrt(5));
}

// Using an iterative approach
export function fibonacciIterative(n) {
  if (n < 0) throw new Error("Input cannot be negative"); 
  if (n === 0) return 0;
  if (n === 1) return 1;
  let a = 0, b = 1, temp;   
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}


