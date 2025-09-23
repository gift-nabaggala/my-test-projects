import { describe, it } from "mocha";
import { assert } from "chai";
import factorial from "../factorial.js";

describe('Testing the factorial for 0 and 1', () => {
  it('return 1 for factorial(0)', () => {
    assert.equal(factorial(0), 1);

  })
  it('return 1 for factorial(1)', () => {
    assert.equal(factorial(1), 1);
  })
})

describe('Testing for smaller numbers', () =>{
  it('return 2 for factorial of 2', () =>{
    assert.equal(factorial(2), 2)
  })
  it('return 24 for factorial of 4', () =>{
    assert.equal(factorial(4), 24)
  })
  it('return 120 for factorial of 5', () =>{
    assert.equal(factorial(5), 120)
  })
})