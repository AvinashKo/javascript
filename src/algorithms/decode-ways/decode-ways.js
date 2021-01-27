const isUndefined = require('../util/is-undefined');

const decodeWaysMap = new Map();

// eslint-disable-next-line consistent-return
const decodeWaysRecursiveFn = (inputStr) => {
  if (isUndefined(inputStr)) return 0;
  // eslint-disable-next-line no-useless-return
  if (decodeWaysMap.get(inputStr) !== undefined) return decodeWaysMap.get(inputStr);
  if (inputStr.length === 3 && inputStr.substr(2, 1) === '0') return 1;
  if (inputStr.length === 2 && inputStr.substr(1, 1) === '0') return 1;
  if (inputStr.length > 3 && inputStr.substr(2, 1) === '0') {
    return decodeWaysRecursiveFn(inputStr.substr(3));
  }
  if (inputStr.length > 2 && inputStr.substr(1, 1) === '0') {
    return decodeWaysRecursiveFn(inputStr.substr(2));
  }
  if (inputStr.length === 1) return 1;
  if (inputStr.length === 2 && +inputStr < 27) return 2;
  if (inputStr.length === 2 && +inputStr >= 27) return 1;
  if (inputStr.length > 2 && +inputStr.substr(0, 2) >= 27) {
    return decodeWaysRecursiveFn(inputStr.substr(1));
  }
  if (inputStr.length > 2 && +inputStr.substr(0, 2) < 27) {
    const decodeWays = decodeWaysRecursiveFn(inputStr.substr(1))
        + decodeWaysRecursiveFn((inputStr.substr(2)));
    decodeWaysMap.set(inputStr, decodeWays);
    return decodeWays;
  }
};

const isUnableToDecode = (inputStr) => {
  if (inputStr.length === 0) return true;
  if (inputStr.substr(0, 1) === '0') return true;
  // eslint-disable-next-line no-plusplus
  if (inputStr.includes('00')) return true;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < inputStr.length; i++) {
    if (inputStr.substr(i, 1) === '0') {
      if (!(inputStr.substr(i - 1, 1) === '1' || inputStr.substr(i - 1, 1) === '2')) { return true; }
    }
  }
  return false;
};

const decodeWays = (str) => {
  // invalid input checks
  if (isUndefined(str)) return 0;
  // invalid input checks w.r.t zeros
  if (isUnableToDecode(str)) return 0;
  return decodeWaysRecursiveFn(str);
};

module.exports = {
  decodeWays,
};
