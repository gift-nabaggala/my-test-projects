function factorial(n) {
  if (n < 0){
    return "Not defined for Negative intergers"
  }

  let result = 1
  for(let i = 2; i<= n; i++){
    result *= i
  }
  return result
}

export default factorial