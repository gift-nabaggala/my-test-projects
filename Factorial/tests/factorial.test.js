import { describe, it } from "mocha";
import { assert } from "chai";
import { factorialIterrative, factorialRecursive, factorialFormula } from "../factorial.js";


// unit tests for factorialIterratively function
describe('Testing the factorial iterratively', () => {
  it('return 1 for factorial(0)', () => {
    assert.equal(factorialIterrative(0), 1);

  })
  it('return 1 for factorial(1)', () => {
    assert.equal(factorialIterrative(1), 1);
  })
  it('return 2 for factorial of 2', () =>{
    assert.equal(factorialIterrative(2), 2)
  })
  it('return 24 for factorial of 4', () =>{
    assert.equal(factorialIterrative(4), 24)
  })
  it('return 120 for factorial of 5', () =>{
    assert.equal(factorialIterrative(5), 120)
  })
})




// unit tests for factorialRecursively function
describe('Testing the factorial for Recursive ', () => {
  it('return 1 for factorial(0)', () => {
    assert.equal(factorialRecursive(0), 1);

  })
  it('return 1 for factorial(1)', () => {
    assert.equal(factorialRecursive(1), 1);
  })
  it('return 2 for factorial of 2', () =>{
    assert.equal(factorialRecursive(2), 2)
  })
  it('return 24 for factorial of 4', () =>{
    assert.equal(factorialRecursive(4), 24)
  })
  it('return 120 for factorial of 5', () =>{
    assert.equal(factorialRecursive(5), 120)
  })
})



// unit tests for factorialFormula function
describe('Testing the factorial using the formula', () => {
  it('return 1 for factorial(0)', () => {
    assert.equal(factorialFormula(0), 1);

  })
  it('return 1 for factorial(1)', () => {
    assert.equal(factorialFormula(1), 1);
  })
  it('return 2 for factorial of 2', () =>{
    assert.equal(factorialFormula(2), 2)
  })
  it('return 24 for factorial of 4', () =>{
    assert.equal(factorialFormula(4), 24)
  })
  it('return 120 for factorial of 5', () =>{
    assert.equal(factorialFormula(5), 120)
  })
})

