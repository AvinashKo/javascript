const expect = require('expect');
const isUndefined = require('./is-undefined');

describe('is undefined checks', () => {
  it('should return true for undefined and null', () => {
    expect(isUndefined(undefined)).toEqual(true);
    expect(isUndefined(null)).toEqual(true);
  });
  it('should return false for defined values', () => {
    expect(isUndefined(1)).toEqual(false);
    expect(isUndefined(0)).toEqual(false);
    expect(isUndefined({})).toEqual(false);
    expect(isUndefined({ test: 'test' })).toEqual(false);
  });
});
