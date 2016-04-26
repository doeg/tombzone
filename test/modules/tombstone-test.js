import * as tombstone from '../../src/modules/tombstone';
import chai from 'chai';

const expect = chai.expect;

describe('tombstone.js', () => {
  describe('centerLine', () => {
    it('should equally pad when possible', () => {
      const str = 'abc';
      const result = tombstone.centerLine(str, str.length + 4);
      const expected = '  abc  ';
      expect(result).to.equal(expected);
    });
  });

  describe('splitString', () => {
    it('should split a string into an array of lines', () => {
      const str = 'one two\nthree';
      const result = tombstone.splitString(str);
      const expected = ['one two', 'three'];
      expect(result).to.eql(expected);
    });

    it('should split long lines', () => {
      const str = 'hello darkness, my old friend'
      const result = tombstone.splitString(str, 10);
      const expected = [
        'hello',
        'darkness,',
        'my old',
        'friend'
      ];
      expect(result).to.eql(expected);
    });
  });
});
