import assert from "assert";
import divide from "../library/src/divide.js";

describe("Divide two given values", function () {
  describe("#divide()", function () {
    it("Should divide two integers", function () {
      assert.deepEqual(divide(3, 6), 0.5);
    });
  });

  describe("#divide()", function () {
    it("Should divide two double values", function () {
      assert.deepEqual(divide(7.2, 3.2), 2.25);
    });
  });

  describe("#divide()", function () {
    it("Should divide an integer and double value", function () {
      assert.deepEqual(divide(3, 1.5), 2);
    });
  });

  describe("#divide()", function () {
    it("Should return zero if divided with any number", function () {
      assert.deepEqual(divide(0, 5), 0);
    });
  });

  describe("#divide()", function () {
    it("Should return null if divided by zero", function () {
      assert.deepEqual(divide(2, 0), null);
    });
  });

  describe("#divide()", function () {
    it("Should return value if divided with number string", function () {
      assert.deepEqual(divide(2, "1"), 2);
    });
  });

  describe("#divide()", function () {
    it("Should return value if dividend is a number string", function () {
      assert.deepEqual(divide("2", 2), 1);
    });
  });

  describe("#divide()", function () {
    it("Should return value if both given values are number string values", function () {
      assert.deepEqual(divide("4", "2"), 2);
    });
  });

  describe("#divide()", function () {
    it("Should return null if given NaN value as dividend", function () {
      assert.deepEqual(divide(NaN, 2), null);
    });
  });

  describe("#divide()", function () {
    it("Should return null if given NaN value as divisor", function () {
      assert.deepEqual(divide(2, NaN), null);
    });
  });

  describe("#divide()", function () {
    it("Should return null if given null as dividend", function () {
      assert.deepEqual(divide(null, 2), null);
    });
  });

  describe("#divide()", function () {
    it("Should return null if given null as divisor", function () {
      assert.deepEqual(divide(2, null), null);
    });
  });

  describe("#divide()", function () {
    it("Should return null if given nothing", function () {
      assert.deepEqual(divide(), null);
    });
  });

  describe("#divide()", function () {
    it("Should return null if given only one parameter", function () {
      assert.deepEqual(divide(2), null);
    });
  });
});
