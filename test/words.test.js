import assert from "assert";
import words from "../library/src/words.js";

describe("Splitting words from string to array", function () {
  describe("#words()", function () {
    it("Should create an array with words as values, comma as separator", function () {
      assert.deepEqual(words("Vegetables, Fruits, Local"), [
        "Vegetables",
        "Fruits",
        "Local",
      ]);
    });

    it("Should create an array with words as values, space as separator", function () {
      assert.deepEqual(words("Vegetables Fruits Local"), [
        "Vegetables",
        "Fruits",
        "Local",
      ]);
    });

    it("Should create an array with only one value, none as given separator", function () {
      assert.deepEqual(words("Vegetables,& Fruits,- Local", /.*/g), [
        "Vegetables,& Fruits,- Local",
      ]);
    });

    it("Should return empty array, not matching regex", function () {
      assert.deepEqual(words("Vegetables, Fruits, Local", /(?!x)x/g), []);
    });

    it("Should return empty array from empty string", function () {
      assert.deepEqual(words("", []));
    });

    it("Should return empty array from null", function () {
      assert.deepEqual(words(null, []));
    });
  });
});
