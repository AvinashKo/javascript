const expect = require('expect');
const add = require('./add');

describe('add function checks', () => {
  it('should add two numbers', () => {
    expect(add(1, 3)).toEqual(4);
  });
  it('should add two strings', () => {
    expect(add('abc', 'def')).toEqual('abcdef');
  });
  it('should return undefined for invalid inputs', () => {
    expect(add('abc', undefined)).toEqual(undefined);
  });
});
