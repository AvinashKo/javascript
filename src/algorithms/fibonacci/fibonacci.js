const isUndefined = require('../util/is-undefined');

const fibonacciNumber = (num) => {
  if (isUndefined(num) || num === 0) return 0;
  let i = 0;
  let j = 1;
  let jBak;
  while (num > 0) {
    jBak = j;
    j += i;
    i = jBak;
    // eslint-disable-next-line no-param-reassign
    num -= 1;
  }
  return j;
};

module.exports = fibonacciNumber;
