import assert from "assert";
import defaultTo from "../library/src/defaultTo.js";

describe("Setting unallowed values to default values", function () {
  describe("#defaultTo()", function () {
    it("Should set a NaN value to a default value", function () {
      assert.equal(defaultTo(NaN, 1), 1);
    });

    it("Should set a null value to a default value", function () {
      assert.equal(defaultTo(null, 1), 1);
    });

    it("Should set an undefined value to a default value", function () {
      assert.equal(defaultTo(undefined, 1), 1);
    });

    it("Should return allowed values as-is", function () {
      assert.equal(defaultTo(2, 3), 2);
    });
  });
});
