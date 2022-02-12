const ListNode = require('../utils/dataStructure/二叉树');
/**
 * 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
 * 0 <= 链表长度 <= 1000
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 递归: 有点像二叉树😉
var mergeTwoLists = function(l1, l2) {
  if (l1 === null && l2 === null) {
    return null;
  } else if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  } else {
    const node = l1.val < l2.val ? l1 : l2;
    if (l1.val < l2.val) {
      node.next = mergeTwoLists(l1.next, l2);
    } else {
      node.next = mergeTwoLists(l1, l2.next);
    }
    return node;
  }
};

// 哑节点+迭代
var mergeTwoLists = function(l1, l2) {
  const dummyNode = new ListNode(-1);
  let cur = dummyNode;
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
      cur = cur.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
      cur = cur.next;
    }
  }
  if (l1 !== null) {
    cur.next = l1;
    l1 = l1.next;
    cur = cur.next;
  }
  if (l2 !== null) {
    cur.next = l2;
    l2 = l2.next;
    cur = cur.next;
  }
  return dummyNode.next;
};