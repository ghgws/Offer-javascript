const ListNode = require('../utils/dataStructure/单向链表');
/**
 * 题目保证链表中节点的值互不相同
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// 常规解：注意区分头部节点和其他节点即可
var deleteNode = function (head, val) {
  let prev = null, cur = head;
  while (cur !== null) {
    if (cur.val === val) {
      if (prev) {
        prev.next = cur.next;
      } else {
        head = cur.next;
      }
      break;
    }
    prev = cur;
    cur = cur.next;
  }
  return head;
};

// 链表常用简化思路：哑节点规避头部节点讨论
var deleteNode = function (head, val) {
  const dummyHead = new ListNode(1);
  dummyHead.next = head;
  let prev = dummyHead, cur = head;
  while (cur !== null) {
    if (cur.val === val) {
      prev.next = cur.next;
      return dummyHead.next;
    }
    prev = cur;
    cur = cur.next;
  }
};