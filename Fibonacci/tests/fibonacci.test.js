import { assert } from "chai";
import { describe, it } from "mocha";
import { fibonacci, fibonacciMemoized, fibonacciBinet } from "../Fibonacci.js";


// Test cases for the fibonacci function 
describe("Fibonacci Function Tests", function() {
  it("should return 0 for input 0", function() {
    assert.strictEqual(fibonacci(0), 0);
  }); 
  it("should return 1 for input 1", function() {
    assert.strictEqual(fibonacci(1), 1);
  });
  it("should return 1 for input 2", function() {
    assert.strictEqual(fibonacci(2), 1);
  });
  // Additional test cases for higher values
  it("should return 55 for input 10", function() {
    assert.strictEqual(fibonacci(10), 55);
  });
  it("should return 144 for input 12", function() {
    assert.strictEqual(fibonacci(12), 144);
  });
  it("should throw an error for negative input", function() {
    assert.throws(() => fibonacci(-1), Error, "Input cannot be negative");
  });
});


// Test cases for the fibonacciMemoized function: throws an error for negative input
describe("Fibonacci Memoized Function Tests", function() {
  it("should return 0 for input 0", function() {
    assert.strictEqual(fibonacciMemoized(0), 0);
  }); 
  it("should return 1 for input 1", function() {
    assert.strictEqual(fibonacciMemoized(1), 1);
  });
  it("should return 1 for input 2", function() {
    assert.strictEqual(fibonacciMemoized(2), 1);
  });
  // Additional test cases for higher values
  it("should return 55 for input 10", function() {
    assert.strictEqual(fibonacciMemoized(10), 55);
  });
  it("should return 144 for input 12", function() {
    assert.strictEqual(fibonacciMemoized(12), 144);
  });
  it("should throw an error for negative input", function() {
    assert.throws(() => fibonacciMemoized(-1), Error, "Input cannot be negative");
  });
});

// Test cases for the fibonacciBinet function
describe("Fibonacci Binet Function Tests", function() {
  it("should return 0 for input 0", function() {
    assert.strictEqual(fibonacciBinet(0), 0);
  }); 
  it("should return 1 for input 1", function() {
    assert.strictEqual(fibonacciBinet(1), 1);
  });
  it("should return 1 for input 2", function() {
    assert.strictEqual(fibonacciBinet(2), 1);
  });
  // Additional test cases for higher values
  it("should return 55 for input 10", function() {
    assert.strictEqual(fibonacciBinet(10), 55);
  });
  it("should return 144 for input 12", function() {
    assert.strictEqual(fibonacciBinet(12), 144);
  });
  it("should throw an error for negative input", function() {
    assert.throws(() => fibonacciBinet(-1), Error, "Input cannot be negative");
  });
});