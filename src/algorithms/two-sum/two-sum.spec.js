const expect = require('expect');
const twoSum = require('./two-sum');

describe('two sum checks', () => {
  it('should handle invalid inputs', () => {
    expect(twoSum.twoSum(undefined, 1)).toEqual(undefined);
    expect(twoSum.twoSum(null, 1)).toEqual(undefined);
    expect(twoSum.twoSum([1], 1)).toEqual(undefined);
    expect(twoSum.twoSum([1, 2], undefined)).toEqual(undefined);
    expect(twoSum.twoSum([1, 2], null)).toEqual(undefined);
  });
  describe('find other index checks', () => {
    it('should find other index', () => {
      expect(twoSum.findOtherIndex([1, 2, 3, 4], 3, 1)).toEqual(2);
      expect(twoSum.findOtherIndex([1, 2, 3, 4], 3, 2)).toEqual(-1);
    });
    it('should work with zeros', () => {
      expect(twoSum.findOtherIndex([1, 0, 3, 4], 0, 0)).toEqual(1);
    });
    it('should work with negative numbers', () => {
      expect(twoSum.findOtherIndex([1, 0, -3, 4], -3, 0)).toEqual(2);
    });
  });
  describe('handle valid two sum checks', () => {
    it('should handle regular scenario', () => {
      expect(twoSum.twoSum([1, 3, 6, 11], 9)).toEqual([1, 2]);
    });
    it('should handle zeros', () => {
      expect(twoSum.twoSum([1, 3, 0, 11], 11)).toEqual([2, 3]);
    });
    it('should handle negative numbers', () => {
      expect(twoSum.twoSum([1, 3, -5, 11], 6)).toEqual([2, 3]);
    });
    it('should handle no match scenario', () => {
      expect(twoSum.twoSum([1, 3, -5, 11], 7)).toEqual([-1, -1]);
    });
  });
});
