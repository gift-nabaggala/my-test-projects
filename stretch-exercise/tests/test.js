import { describe, it } from "mocha";
import { assert } from "chai";
import { earning } from "./tax.js";

describe("Taxation", function () {
  it("Earnings that don't pay tax", function () {
    const annual = earning(300);
    assert.isBelow(
      annual,
      12000,
      "Earnings that are less than 12000 per year don't pay tax"
    );
  });

  it("Earnings that pay 20% tax", function () {
    const annual = earning(1500);
    assert.isAbove(annual, 12000, "Earnings should be above 12,000");
    assert.isBelow(annual, 36000, "Earnings should be below 36,000");
  });

  it("Earnings that pay 40% tax", function () {
    const annual = earning(3500);
    assert.isAbove(annual, 36000, "Earnings should be above 36,000");
  });
});
