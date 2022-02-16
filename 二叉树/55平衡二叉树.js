/**
 * 如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。
 * 0 <= 树的结点个数 <= 10000
 * @param {TreeNode} root
 * @return {boolean}
 */
// 由二叉树的深度一题很快可以递归写出如下解法；但是算法中计算高度包含大量重复计算，需要优化
var isBalanced = function(root) {
  const maxDepth = (node) => {
    if (node === null) return 0;
    return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
  }
  if (root === null) return true;
  if (Math.abs(maxDepth(root.left) - maxDepth(root.right)) <= 1) {
    return isBalanced(root.left) && isBalanced(root.right);
  }
  return false;
};
// 优化思路一：本质上还是求高度，用类似后序遍历的思路自底而上的检查深度，出现不平衡则全部为不平衡
var isBalanced = function(root) {
  const checkDepth = (node) => {
    if (node === null) return 0;
    const l = checkDepth(node.left);
    const r = checkDepth(node.right);
    if (l < 0 // return -1 定义不平衡
      || r < 0
      || Math.abs(l - r) >= 2)  // 题意的不平衡
    {
      return -1;
    }
    return Math.max(l, r) + 1;
  }
  return checkDepth(root) >= 0;
};