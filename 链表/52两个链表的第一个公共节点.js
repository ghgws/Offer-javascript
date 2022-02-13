/**
 * 如果两个链表没有交点，返回 null.
在返回结果后，两个链表仍须保持原有的结构。
可假定整个链表结构中没有循环。
程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 假设两个链表都从head开始遍历，则有且只有两种情况：
// 1. 两个链表长度相同：当两个链表的遍历指针第一次指向同一个节点时即为第一个公共节点。（特殊情况）
// 2. 两个链表长度不同：两个链表一前一后相继进入第一个公共节点。（普遍情况）
// 那么问题的关键其实就是转化为两个长度相同的链表：一个办法是两个链表拼在一起，即遍历完一个链表后再从另一个链表开始。
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null;
  let a = headA, b = headB;
  while (a !== b) {
    a = a === null ? headB : a.next; // A链表遍历完毕从B重新开始
    b = b === null ? headA : b.next; // 类似
  }
  return a;
};