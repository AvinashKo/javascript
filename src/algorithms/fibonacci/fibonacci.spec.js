const expect = require('expect');
const fibonacciNumber = require('./fibonacci');

describe('fibonacci number checks', () => {
  it('should handle invalid inputs', () => {
    expect(fibonacciNumber(0)).toEqual(0);
    expect(fibonacciNumber(null)).toEqual(0);
    expect(fibonacciNumber(undefined)).toEqual(0);
  });
  it('should handle valid numbers', () => {
    expect(fibonacciNumber(1)).toEqual(1);
    expect(fibonacciNumber(2)).toEqual(2);
    expect(fibonacciNumber(3)).toEqual(3);
    expect(fibonacciNumber(4)).toEqual(5);
    expect(fibonacciNumber(5)).toEqual(8);
    expect(fibonacciNumber(6)).toEqual(13);
    expect(fibonacciNumber(7)).toEqual(21);
    expect(fibonacciNumber(22)).toEqual(28657);
    expect(fibonacciNumber(50)).toEqual(20365011074);
  });
});
