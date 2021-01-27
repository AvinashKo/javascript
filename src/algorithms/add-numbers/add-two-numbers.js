const ListNode = require('./list-node');
const isUndefined = require('../util/is-undefined');

function convertArrayToList(arrayInput) {
  if (isUndefined(arrayInput) || arrayInput.length === 0) return undefined;
  let list;
  let listHead;
  arrayInput.forEach((element) => {
    const node = new ListNode(element, undefined);
    if (isUndefined(list)) {
      list = node;
      listHead = node;
    } else {
      list.next = node;
      list = list.next;
    }
  });
  return listHead; // ?
}

function convertListToNumInReverse(list) {
  if (isUndefined(list)) return undefined;
  let inputList = list;
  if (!inputList || isUndefined(inputList.val)) return undefined;
  let number = 0;
  let count = 0;
  while (inputList) {
    // eslint-disable-next-line no-plusplus,no-restricted-properties
    number += inputList.val * Math.pow(10, count++);
    inputList = inputList.next;
  }
  return number; // ?
}

function convertNumToArrayInReverse(num) {
  if (isUndefined(num)) return undefined;
  const numReverseArray = [];
  let inputNum = num;
  if (num === 0) return [0];
  while (!(inputNum / 10 === 0 && inputNum % 10 === 0)) {
    numReverseArray.push(inputNum % 10);
    // eslint-disable-next-line no-param-reassign
    inputNum = Math.floor(inputNum / 10);
  }
  return numReverseArray; // ?
}

const addTwoNumbersByConversion = (firstList, secondList) => {
  if (isUndefined(firstList) || isUndefined(secondList)) return undefined;
  const firstNum = convertListToNumInReverse(firstList); // ?
  const secondNum = convertListToNumInReverse(secondList); // ?
  const sum = firstNum + secondNum; // ?
  const sumArray = convertNumToArrayInReverse(sum); // ?
  return convertArrayToList(sumArray); // ?
};

// eslint-disable-next-line no-unused-vars
const addTwoNumbers = (firstList, secondList) => {
  if (isUndefined(firstList) || isUndefined(secondList)) return undefined;
  let resultListHead;
  let resultList;
  let sumOfDigits = 0;
  let carry = 0;
  while (!isUndefined(firstList) || !isUndefined(secondList)) {
    sumOfDigits = 0;
    sumOfDigits += (!isUndefined(firstList)) ? firstList.val : 0;
    sumOfDigits += (!isUndefined(secondList)) ? secondList.val : 0;
    sumOfDigits += carry;
    carry = Math.floor(sumOfDigits / 10);
    if (resultList === undefined) {
      resultList = new ListNode(sumOfDigits % 10, undefined);
      resultListHead = resultList;
    } else {
      resultList.next = new ListNode(sumOfDigits % 10, undefined);
      resultList = resultList.next;
    }
    // eslint-disable-next-line no-param-reassign
    if (!isUndefined(firstList)) firstList = firstList.next;
    // eslint-disable-next-line no-param-reassign
    if (!isUndefined(secondList)) secondList = secondList.next;
  }
  if (carry === 1) resultList.next = new ListNode(1, undefined);
  return resultListHead;
};

module.exports = {
  convertArrayToList,
  convertListToNumInReverse,
  convertNumToArrayInReverse,
  addTwoNumbersByConversion,
  addTwoNumbers,
};
