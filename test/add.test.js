import assert from 'assert';
import add from "../library/src/add.js";

describe('Number additions', function () {
    describe('#add()', function () {

      it('should add two integers together', function () {
        assert.equal(add(1,2), 3);
      });

      it('should add integers and doubles together', function () {
        assert.equal(add(1,2.4), 3.4);
      });

      it('should not accept NaN values', function () {
        assert.equal(add(NaN,2), NaN);
      });

    });
  });