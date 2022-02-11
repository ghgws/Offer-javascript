/**
 * 本题从1开始计数，即链表的尾节点是倒数第1个节点。
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 经典的双指针问题：不同起点
var getKthFromEnd = function(head, k) {
  let i = 0;
  let l = head, r = head;
  while (i < k) { // 只移动r指针k次
    r = r.next;
    i++;
  }
  // 同时移动l, r指针,直到到达尾部节点，此时l指向倒数k个节点
  while (r !== null) {
    l = l.next;
    r = r.next;
  }
  return l;
};