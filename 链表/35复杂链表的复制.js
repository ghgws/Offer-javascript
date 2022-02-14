/**
 * 复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。
 * @param {Node} head
 * @return {Node}
 */

function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
};
var copyRandomList = function(head) {
  // Todo
};