import assert from "assert";
import toNumber from "../library/src/toNumber.js";

describe("Converts given value to number", function () {
  describe("#toNumber()", function () {
    it("Should return number as it is", function () {
      assert.deepEqual(toNumber(5.8), 5.8);
    });
  });

  describe("#toNumber()", function () {
    it("Should return string as number", function () {
      assert.deepEqual(toNumber("2.50"), 2.5);
    });
  });

  describe("#toNumber()", function () {
    it("Should return NaN for characters", function () {
      assert.deepEqual(toNumber("@"), NaN);
    });
  });

  describe("#toNumber()", function () {
    it("Should return infinity for infinity value", function () {
      assert.deepEqual(toNumber(Infinity), Infinity);
    });
  });

  describe("#toNumber()", function () {
    it("Should return number-class's minimum value", function () {
      assert.deepEqual(toNumber(5e-550), Number.MIN_VALUE);
    });
  });

  describe("#toNumber()", function () {
    it("Should return number-class's maximum value", function () {
      assert.deepEqual(toNumber(2e308), Number.MAX_VALUE);
    });
  });
});
