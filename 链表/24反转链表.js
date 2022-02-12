/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 栈+两次遍历
var reverseList = function (head) {
  if (head === null) return null;
  const s = [];

  let prev = null, cur = head;
  while (cur !== null) {
    s.push(cur);
    prev = cur;
    cur = cur.next;
  }
  let res = s.pop(); // 弹出最后节点作为返回的头
  cur = res;
  while (s.length > 0) {
    prev = s.pop();
    prev.next = null;
    cur.next = prev;
    cur = cur.next;
  }
  return res;
};

// 双指针一次遍历
var reverseList = function (head) {
  let prev = null, cur = head;
  while (cur !== null) {
    let temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return prev;
};

// 递归
var reverseList = function (head) {
  const fn = (prev, cur) => {
    if (cur === null) return null;
    let temp = cur.next;
    cur.next = prev;
    if (temp === null) return cur;
    return fn(cur, temp);
  }
  return fn(null, head);
};