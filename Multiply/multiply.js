
function multiply(a, b){
  
  // return a*b

  let product = 0
  for (let i = 0; i < b; i++) {
    product += a
  }
  return product
}

export default multiply