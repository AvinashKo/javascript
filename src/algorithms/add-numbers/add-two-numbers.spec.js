const expect = require('expect');
const addTwoNumbers = require('./add-two-numbers');

describe('add two numbers file checks', () => {
  describe('convert array to list checks', () => {
    it('should handle null and undefined and empty input scenarios', () => {
      expect(addTwoNumbers.convertArrayToList(null)).toEqual(undefined);
      expect(addTwoNumbers.convertArrayToList(undefined)).toEqual(undefined);
      expect(addTwoNumbers.convertArrayToList([])).toEqual(undefined);
    });
    it('should return list', () => {
      expect(addTwoNumbers.convertArrayToList([0])).toEqual({ val: 0, next: undefined });
      expect(addTwoNumbers.convertArrayToList([1, 4]))
        .toEqual({ val: 1, next: { val: 4, next: undefined } });
      expect(addTwoNumbers.convertArrayToList([1, 4, 5]))
        .toEqual({ val: 1, next: { val: 4, next: { val: 5, next: undefined } } });
    });
  });
  describe('convert list to number in reverse checks', () => {
    it('should handle invalid inputs', () => {
      expect(addTwoNumbers.convertListToNumInReverse(undefined)).toEqual(undefined);
      expect(addTwoNumbers.convertListToNumInReverse(null)).toEqual(undefined);
    });
    describe('convert list to numbers in reverse', () => {
      it('should convert single digit number', () => {
        expect(addTwoNumbers.convertListToNumInReverse({ val: 1, next: undefined })).toEqual(1);
        expect(addTwoNumbers.convertListToNumInReverse({ val: 0, next: undefined })).toEqual(0);
      });
      it('should convert multiple digits', () => {
        expect(addTwoNumbers.convertListToNumInReverse(
          { val: 1, next: { val: 4, next: undefined } },
        )).toEqual(41);
        expect(addTwoNumbers.convertListToNumInReverse(
          { val: 1, next: { val: 4, next: { val: 5, next: undefined } } },
        )).toEqual(541);
      });
      it('should handle zeros at beginning', () => {
        expect(addTwoNumbers.convertListToNumInReverse(
          { val: 1, next: { val: 4, next: { val: 5, next: { val: 0, next: undefined } } } },
        )).toEqual(541);
      });
      it('should handle zeros at end', () => {
        expect(addTwoNumbers.convertListToNumInReverse(
          { val: 0, next: { val: 4, next: { val: 5, next: undefined } } },
        )).toEqual(540);
      });
    });
  });
  describe('convert number to array in reverse', () => {
    it('should handle invalid inputs', () => {
      expect(addTwoNumbers.convertNumToArrayInReverse(undefined)).toEqual(undefined);
      expect(addTwoNumbers.convertNumToArrayInReverse(null)).toEqual(undefined);
    });
    describe('convert number to array', () => {
      it('should convert single digit numbers', () => {
        expect(addTwoNumbers.convertNumToArrayInReverse(1)).toEqual([1]);
        expect(addTwoNumbers.convertNumToArrayInReverse(0)).toEqual([0]);
      });
      it('should convert multiple digits into array', () => {
        expect(addTwoNumbers.convertNumToArrayInReverse(324)).toEqual([4, 2, 3]);
        expect(addTwoNumbers.convertNumToArrayInReverse(3243)).toEqual([3, 4, 2, 3]);
      });
      it('should handle zeros at beginning and end', () => {
        expect(addTwoNumbers.convertNumToArrayInReverse(3240)).toEqual([0, 4, 2, 3]);
        expect(addTwoNumbers.convertNumToArrayInReverse(32400)).toEqual([0, 0, 4, 2, 3]);
      });
    });
  });
  describe('add two numbers by conversion checks', () => {
    it('should handle invalid inputs', () => {
      expect(addTwoNumbers.addTwoNumbersByConversion(
        undefined, addTwoNumbers.convertArrayToList([1, 3]),
      ))
        .toEqual(undefined);
      expect(addTwoNumbers.addTwoNumbersByConversion(
        null, addTwoNumbers.convertArrayToList([1, 3]),
      ))
        .toEqual(undefined);
      expect(addTwoNumbers.addTwoNumbersByConversion(
        addTwoNumbers.convertArrayToList([1, 3]), undefined,
      ))
        .toEqual(undefined);
      expect(addTwoNumbers.addTwoNumbersByConversion(
        addTwoNumbers.convertArrayToList([1, 3]), null,
      ))
        .toEqual(undefined);
    });
    describe('add numbers in lists functionality', () => {
      it('should add regular numbers', () => {
        const listOne = addTwoNumbers.convertArrayToList([2, 4, 3]);
        const listTwo = addTwoNumbers.convertArrayToList([5, 6, 4]);
        const sum = addTwoNumbers.addTwoNumbersByConversion(listOne, listTwo);
        expect(sum).toEqual({ val: 7, next: { val: 0, next: { val: 8, next: undefined } } });
      });
      it('should add zero', () => {
        const listOne = addTwoNumbers.convertArrayToList([0]);
        const listTwo = addTwoNumbers.convertArrayToList([5, 6, 4]);
        const sum = addTwoNumbers.addTwoNumbersByConversion(listOne, listTwo);
        expect(sum).toEqual({ val: 5, next: { val: 6, next: { val: 4, next: undefined } } });
      });
      it('should multiple zeros', () => {
        const listOne = addTwoNumbers.convertArrayToList([0, 0]);
        const listTwo = addTwoNumbers.convertArrayToList([5, 6, 4]);
        const sum = addTwoNumbers.addTwoNumbersByConversion(listOne, listTwo);
        expect(sum).toEqual({ val: 5, next: { val: 6, next: { val: 4, next: undefined } } });
      });
      it('should handle larger numbers', () => {
        const listOne = addTwoNumbers.convertArrayToList([9]);
        const listTwo = addTwoNumbers.convertArrayToList([1, 9, 9, 9, 9, 9, 9, 9, 9, 9]);
        const sum = addTwoNumbers.addTwoNumbersByConversion(listOne, listTwo);
        expect(sum).toEqual(
          {
            val: 0,
            next: {
              val: 0,
              next: {
                val: 0,
                next: {
                  val: 0,
                  next: {
                    val: 0,
                    next: {
                      val: 0,
                      next: {
                        val: 0,
                        next: {
                          val: 0,
                          next: {
                            val: 0,
                            next: {
                              val: 0,
                              next: {
                                val: 1,
                                next: undefined,
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        );
      });
    });
  });
  describe('add two numbers checks', () => {
    it('invalid input checks', () => {
      expect(addTwoNumbers.addTwoNumbers(undefined,
        { val: 1, next: undefined })).toEqual(undefined);
      expect(addTwoNumbers.addTwoNumbers(null, { val: 1, next: undefined })).toEqual(undefined);
      expect(addTwoNumbers.addTwoNumbers(
        { val: 1, next: undefined }, undefined,
      )).toEqual(undefined);
      expect(addTwoNumbers.addTwoNumbers({ val: 1, next: undefined }, null)).toEqual(undefined);
      expect(addTwoNumbers.addTwoNumbers(undefined, null)).toEqual(undefined);
    });
    describe('add numbers in lists functionality', () => {
      it('should add regular numbers', () => {
        const listOne = addTwoNumbers.convertArrayToList([2, 4, 3]);
        const listTwo = addTwoNumbers.convertArrayToList([5, 6, 4]);
        const sum = addTwoNumbers.addTwoNumbers(listOne, listTwo);
        expect(sum).toEqual({ val: 7, next: { val: 0, next: { val: 8, next: undefined } } });
      });
      it('should add zero', () => {
        const listOne = addTwoNumbers.convertArrayToList([0]);
        const listTwo = addTwoNumbers.convertArrayToList([5, 6, 4]);
        const sum = addTwoNumbers.addTwoNumbers(listOne, listTwo);
        expect(sum).toEqual({ val: 5, next: { val: 6, next: { val: 4, next: undefined } } });
      });
      it('should multiple zeros', () => {
        const listOne = addTwoNumbers.convertArrayToList([0, 0]);
        const listTwo = addTwoNumbers.convertArrayToList([5, 6, 4]);
        const sum = addTwoNumbers.addTwoNumbers(listOne, listTwo);
        expect(sum).toEqual({ val: 5, next: { val: 6, next: { val: 4, next: undefined } } });
      });
      it('should handle carry', () => {
        const listOne = addTwoNumbers.convertArrayToList([8, 9]);
        const listTwo = addTwoNumbers.convertArrayToList([9, 7, 8]);
        const sum = addTwoNumbers.addTwoNumbers(listOne, listTwo); // ?
        expect(sum).toEqual({ val: 7, next: { val: 7, next: { val: 9, next: undefined } } });
      });
      it('should handle larger numbers, carry should add next digit', () => {
        const listOne = addTwoNumbers.convertArrayToList([9]);
        const listTwo = addTwoNumbers.convertArrayToList([1, 9, 9, 9, 9, 9, 9, 9, 9, 9]);
        const sum = addTwoNumbers.addTwoNumbers(listOne, listTwo);
        expect(sum).toEqual(
          {
            val: 0,
            next: {
              val: 0,
              next: {
                val: 0,
                next: {
                  val: 0,
                  next: {
                    val: 0,
                    next: {
                      val: 0,
                      next: {
                        val: 0,
                        next: {
                          val: 0,
                          next: {
                            val: 0,
                            next: {
                              val: 0,
                              next: {
                                val: 1,
                                next: undefined,
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        );
      });
    });
  });
});
