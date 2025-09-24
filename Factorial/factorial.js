// factorial iterative function

export function factorialIterrative(n) {
  if (n < 0){
    return "Not defined for Negative intergers"
  }

  let result = 1
  for(let i = 2; i<= n; i++){
    result *= i
  }
  return result
}

// factorial recursive function
export function factorialRecursive(n) {
  if (n < 0){
    return "Not defined for Negative intergers"
  }
  if (n === 0 || n === 1){
    return 1
  }
  return n * factorialRecursive(n - 1)
}
// factorial using formula n! = sqrt(2 * pi * n) * (n / e)^n
export function factorialFormula(n) {
  if (n < 0){
    return "Not defined for Negative intergers"
  }
  if (n === 0 || n === 1){
    return 1
  }
  const pi = Math.PI
  const e = Math.E
  return Math.round(Math.sqrt(2 * pi * n) * Math.pow(n / e, n))
}