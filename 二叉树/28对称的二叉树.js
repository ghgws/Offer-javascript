/**
 * 请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。
 * 0 <= 节点个数 <= 1000
 * @param {TreeNode} root
 * @return {boolean}
 */
// 递归
var isSymmetric = function(root) {
  if (root === null) return true;
  const isMirror = (left, right) => {
    if (left === null && right === null) {
      return true;
    } else if (left === null || right === null) {
      return false
    } else {
      return (left.val === right.val) && isMirror(left.left, right.right) && isMirror(left.right, right.left);
    }
  }
  return isMirror(root.left, root.right);
};