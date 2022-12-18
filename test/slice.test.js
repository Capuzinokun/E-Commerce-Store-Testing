import assert from "assert";
import slice from "../library/src/slice.js";

describe("Slices array with given parameters (start, end)", function () {
  describe("#slice()", function () {
    it("Should slice the array starting from second index", function () {
      assert.deepEqual(slice(["Vegetables", "Fruits", "Local"], 1), [
        "Fruits",
        "Local",
      ]);
    });
  });

  describe("#slice()", function () {
    it("Should return array as it is with given index", function () {
      assert.deepEqual(slice(["Vegetables", "Fruits", "Local"], 0), [
        "Vegetables",
        "Fruits",
        "Local",
      ]);
    });
  });

  describe("#slice()", function () {
    it("Should return first two values", function () {
      assert.deepEqual(slice(["Vegetables", "Fruits", "Local"], 0, 2), [
        "Vegetables",
        "Fruits",
      ]);
    });
  });

  describe("#slice()", function () {
    it("Should slice the array according to negative offset from the end", function () {
      assert.deepEqual(slice(["Vegetables", "Fruits", "Local"], -2), [
        "Fruits",
        "Local",
      ]);
    });
  });

  describe("#slice()", function () {
    it("Return only one value", function () {
      assert.deepEqual(slice(["Vegetables", "Fruits", "Local"], 1, 2), [
        "Fruits",
      ]);
    });
  });
});
