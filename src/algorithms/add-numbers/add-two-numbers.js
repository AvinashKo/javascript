const ListNode = require('./list-node');

function convertArrayToList(arrayInput) {
  if (arrayInput === undefined || arrayInput === null || arrayInput.length === 0) return undefined;
  let list;
  let listHead;
  arrayInput.forEach((element) => {
    const node = new ListNode(element, undefined);
    if (list === undefined) {
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
  if (list === undefined || list === null) return undefined;
  let inputList = list;
  if (!inputList || inputList.val === null || inputList.val === undefined) return undefined;
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
  if (num === undefined || num === null) return undefined;
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

const addTwoNumbers = (firstList, secondList) => {
  if (firstList === undefined || firstList === null
      || secondList === undefined || secondList === null) return undefined;
  const firstNum = convertListToNumInReverse(firstList); // ?
  const secondNum = convertListToNumInReverse(secondList); // ?
  const sum = firstNum + secondNum; // ?
  const sumArray = convertNumToArrayInReverse(sum); // ?
  return convertArrayToList(sumArray); // ?
};

module.exports = {
  convertArrayToList,
  convertListToNumInReverse,
  convertNumToArrayInReverse,
  addTwoNumbers,
};
