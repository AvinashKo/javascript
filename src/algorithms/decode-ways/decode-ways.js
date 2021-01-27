const isUndefined = require('../util/is-undefined');

let decodeWaysCount = 0;

const decodeWaysRecursiveFn = (inputStr) => {
  // eslint-disable-next-line no-useless-return
  if (isUndefined(inputStr) || inputStr.length === 0) return;
  if (inputStr.substr(0, 1) === '0') decodeWaysRecursiveFn(inputStr.substr(1));
  else if (inputStr.length === 1) decodeWaysCount += 1;
  else if (inputStr.length === 2 && +inputStr < 27) {
    if (+inputStr === 10 || +inputStr === 20) decodeWaysCount += 1;
    else decodeWaysCount += 2;
  } else if (inputStr.length === 2 && +inputStr >= 27) decodeWaysCount += 1;
  else if (inputStr.length > 2) {
    if (+inputStr.substr(0, 2) >= 27 || inputStr.substr(1, 1) === '0' || inputStr.substr(2, 1) === '0') { decodeWaysRecursiveFn(inputStr.substr(1)); } else {
      decodeWaysRecursiveFn(inputStr.substr(1));
      decodeWaysRecursiveFn(inputStr.substr(2));
    }
  }
};

const decodeWays = (str) => {
  decodeWaysCount = 0;
  if (isUndefined(str) || str.length === 0) return 0;
  // eslint-disable-next-line no-param-reassign
  while (str.substr(0, 1) === '0') str = str.substr(1);
  if (str.includes('00')) return 0;
  decodeWaysRecursiveFn(str);
  return decodeWaysCount;
};

module.exports = {
  decodeWays,
};
