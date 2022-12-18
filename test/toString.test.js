import assert from "assert";
import toString from "../library/src/toString.js";

describe("Converts given value to string, errors should be handeled", function () {
  describe("#toString()", function () {
    it("Should return string as it is", function () {
      assert.deepEqual(
        toString("Vegetables,Fruits,Local"),
        "Vegetables,Fruits,Local"
      );
    });
  });

  describe("#toString()", function () {
    it("Should return character as string", function () {
      assert.deepEqual(toString("@"), "@");
    });
  });

  describe("#toString()", function () {
    it("Should convert array to string", function () {
      assert.deepEqual(
        toString(["Vegetables", "Fruits", "Local"]),
        "Vegetables,Fruits,Local"
      );
    });
  });

  describe("#toString()", function () {
    it("Should convert integer to string", function () {
      assert.deepEqual(toString(230), "230");
    });
  });

  describe("#toString()", function () {
    it("Should convert null to empty string", function () {
      assert.deepEqual(toString(null), "");
    });
  });

  describe("#toString()", function () {
    it("Should convert undefined to empty string", function () {
      assert.deepEqual(toString(undefined), "");
    });
  });
});
