import { describe, it } from "mocha";
import {assert} from "chai"
import multiply from "../multiply.js";


describe("multiply function", () => {
    it("1 * 1 should equal 1", () => {
        assert.equal(multiply(1, 1), 1);
    });

    it(" 2 * 2 should equal 4", () => {
        assert.equal(multiply(2, 2), 4);
    });
    it(" 3 * 3 should equal 9", () => {
        assert.equal(multiply(3, 3), 9, );
    });

    it("4 * 4 should equal 16", () => {
        assert.equal(multiply(4, 4), 16, );
    });

    it("should return the product of two positive numbers", function () {
    assert.equal(multiply(23, 45), 23 * 45);
  });
  });