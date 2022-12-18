import assert from "assert";
import compact from "../library/src/compact.js";

describe("Falsey value removal", function () {
  describe("#compact()", function () {
    it("Should return an otherwise identical array without false values", function () {
      assert.deepEqual(compact([1, false, 2, 3]), [1, 2, 3]);
    });

    it("Should return an otherwise identical array without zero values", function () {
      assert.deepEqual(compact([1, 0, 0.0, -0, 0x0, 2, 3]), [1, 2, 3]);
    });

    it("Should return an otherwise identical array without empty values", function () {
      assert.deepEqual(compact([1, 2, "", 3]), [1, 2, 3]);
    });

    it("Should return an otherwise identical array without NaN values", function () {
      assert.deepEqual(compact([1, 2, 3, NaN]), [1, 2, 3]);
    });

    it("Should work with multiple falsey values", function () {
      assert.deepEqual(
        compact([
          1,
          false,
          2,
          null,
          3,
          0,
          4,
          0.0,
          5,
          -0,
          6,
          0x0,
          7,
          undefined,
          8,
          NaN,
        ]),
        [1, 2, 3, 4, 5, 6, 7, 8]
      );
    });
  });
});
