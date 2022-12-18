import assert from "assert";
import isEmpty from "../library/src/isEmpty.js";

describe("Array filtering", function () {
  describe("#isEmpty()", function () {
    it("Should detect an empty object", function () {
      assert.equal(isEmpty(new Object()), true);
    });

    it("Should detect an empty map", function () {
      assert.equal(isEmpty(new Map()), true);
    });

    it("Should detect an empty set", function () {
      assert.equal(isEmpty(new Set()), true);
    });

    it("Should detect an empty string", function () {
      assert.equal(isEmpty(""), true);
    });

    it("Should detect a non-empty object", function () {
      assert.equal(isEmpty({ test: "test" }), false);
    });

    it("Should detect a non-empty map", function () {
      assert.equal(isEmpty(new Map([["key", "value"]])), false);
    });

    it("Should detect a non-empty set", function () {
      assert.equal(isEmpty(new Set(["test"])), false);
    });

    it("Should detect a non-empty string", function () {
      assert.equal(isEmpty("test"), false);
    });
  });
});
