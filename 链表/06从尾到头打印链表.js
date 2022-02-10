const ListNode = require('../utils/dataStructure/单向链表');
/**
 * @param {ListNode} head
 * @return {number[]}
 */

// js特解,代码简洁，空间复杂度低，但是unshift方法效率不高
var reversePrint1 = function (head) {
  const res = [];
  let cur = head;
  while (cur !== null) {
    res.unshift(cur.val);
    cur = cur.next;
  }
  return res;
};

  // 常规解法：栈（显式使用），O(n)的空间复杂度，但是push方法的效率高.
  // 变种：不显式使用栈，直接push后逆序数组
var reversePrint = function (head) {
  const res = [];
  const s = [];
  let cur = head;
  while (cur !== null) {
    s.push(cur.val);
    cur = cur.next;
  }
  while (s.length > 0) {
    const cur = s.pop();
    res.push(cur);
  }
  return res;
};

// 函数调用栈（递归）
var reversePrint = function (head) {
  const res = [];
  const fn = (node) => {
    if (node === null) return;
    if (node.next !== null) {
      fn(node.next);
    }
    res.push(node.val);
  }
  fn(head);
  return res;
};