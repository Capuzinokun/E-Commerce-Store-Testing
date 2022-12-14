import assert from "assert";
import add from "../library/src/add.js";

describe("Number additions", function () {
  describe("#add()", function () {
    it("Should add two integers together", function () {
      assert.equal(add(1, 2), 3);
    });

    it("Should add integers and doubles together", function () {
      assert.equal(add(1, 2.4), 3.4);
    });

    it("Should not accept character values", function () {
      assert.equal(add("s", 2), NaN);
    });

    it("Should not accept string values", function () {
      assert.equal(add("asdasdasd", 2), NaN);
    });

    it("Should not accept NaN values", function () {
      assert.equal(add(NaN, 2), NaN);
    });

    it("Should not accept empty values", function () {
      assert.equal(add("", 2), NaN);
    });
  });
});
