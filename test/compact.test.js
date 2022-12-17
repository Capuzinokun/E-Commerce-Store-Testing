import assert from 'assert';
import compact from "../library/src/compact.js";

describe('Falsey value removal', function () {
    describe('#compact()', function () {

      it("Should return an array without 'false' values", function () {
        assert.equal(compact([1,false,2,3]), [1,2,3]);
      });

      it("Should return an array without 'null' values", function () {
        assert.equal(compact([1,null,2,3]), [1,2,3]);
      });

      it("Should return an array without 'zero' values", function () {
        assert.equal(compact([1, 0, 0.0, -0, 0x0, 2, 3]), [1,2,3]);
      });

      it("Should return an array without 'undefined' values", function () {
        assert.equal(compact([1, 2, undefined, 3]), [1,2,3]);
      });

      it("Should return an array without 'NaN' values", function () {
        assert.equal(compact([1, 2, 3, NaN]), [1,2,3]);
      });

      it("Should work with multiple falsey values", function () {
        assert.equal(compact([1, false, 2, null, 3, 0, 4, 0.0, 5, -0, 6, 0x0, 7, undefined, 8, NaN]), [1,2,3,4,5,6,7,8]);
      });

    });
  });