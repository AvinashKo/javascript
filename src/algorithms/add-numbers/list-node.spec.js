const expect = require('expect');
const ListNode = require('./list-node');

describe('List node setters and getters', () => {
  it('should create new list node with working setters and getters', () => {
    const node = new ListNode(2, undefined);
    expect(node.val).toEqual(2);
    expect(node.next).toEqual(undefined);
    node.next = new ListNode(3, undefined);
    expect(node.next.val).toEqual(3);
  });
});
