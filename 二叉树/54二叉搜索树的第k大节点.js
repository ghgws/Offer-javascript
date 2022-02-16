/**
 * 1 ≤ k ≤ 二叉搜索树元素个数
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// 二叉搜索树很容易想到中序遍历的思路
var kthLargest = function(root, k) {
  const inOrders = [];
  const fn = (node) => {
    if (node === null) return;
    fn(node.left);
    inOrders.push(node.val);
    fn(node.right);
  }
  fn(root);
  return inOrders[inOrders.length - k];
};
// 优化，逆中序遍历k个值后停止遍历
var kthLargest = function(root, k) {
  let res = 0;
  let count = 0;
  const fn = (node) => {
    if (node.right !== null) fn(node.right);
    if (++count === k) {
      res = node.val;
      return;
    }
    if (node.left !== null) fn(node.left);
  }
  if (root === null) return 0;
  fn(root);
  return res;
};