function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * 数组转换成单向链表
 * @param {number[]} values 
 */
function makeListNode(values) {
  const head = new ListNode(values[0]);
  let i = 1, cur = head;
  while (i < values.length) {
    const Node = new ListNode(values[i]);
    cur.next = Node;
    cur = Node;
    i++;
  }
  return head;
}

module.exports = ListNode;

module.exports.makeListNode = makeListNode;