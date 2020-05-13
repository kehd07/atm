const assert = require('assert');
const {withdraw} = require('../index.js');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('Can handles empty cases', function() {
      assert.deepEqual(withdraw(null), []);
      assert.deepEqual(withdraw(0), []);
    });

    it('Can withdraw on good cases', function() {
      assert.deepEqual(withdraw(30), [20, 10]);
      assert.deepEqual(withdraw(80), [50, 20, 10]);
      assert.deepEqual(withdraw(30.00), [20, 10]);
    });

    it('Gets error on bad cases', function() {
      const InvalidArgumentException = new Error('InvalidArgumentException');
      assert.throws(() => withdraw(-130), InvalidArgumentException);
      assert.throws(() => withdraw('ten'), InvalidArgumentException);

      const NoteUnavailableException = new Error('NoteUnavailableException');
      assert.throws(() => withdraw(125), NoteUnavailableException);
      assert.throws(() => withdraw(30.01), NoteUnavailableException);
      assert.throws(() => withdraw(Infinity), NoteUnavailableException);
    });
  });
});
