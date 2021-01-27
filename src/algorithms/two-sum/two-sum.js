const isUndefined = require('../util/is-undefined');

const findOtherIndex = (numArray, value, currentIndex) => {
  // eslint-disable-next-line max-len,no-plusplus
  for (let i = 0; i < numArray.length; i++) if (i !== currentIndex && numArray[i] === value) return i;
  return -1;
};

const twoSum = (nums, target) => {
  if (isUndefined(nums) || isUndefined(target) || nums.length <= 1) return undefined;
  let secondIndex = -1;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < nums.length; i++) {
    secondIndex = findOtherIndex(nums, target - nums[i], i); // ?
    if (secondIndex !== -1) return [i, secondIndex];
  }
  return [-1, -1];
};

module.exports = {
  twoSum,
  findOtherIndex,
};
