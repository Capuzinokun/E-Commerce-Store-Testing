import assert from 'assert';
import filter from "../library/src/filter.js";

describe('Array filtering', function () {
    describe('#filter()', function () {

      it("Should return empty arrays as-is", function () {
        assert.deepEqual(filter([], true), []);
      });

      it("Should return an array filtered with a given predicate", function () {
        assert.deepEqual(filter([1,2,3,4,5,6,7], (num) => num < 5), [1,2,3,4]);
      });

    });
  });