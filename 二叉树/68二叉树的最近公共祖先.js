/**
 * 所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉树中。
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 和二叉搜索树的最近公共祖先类似三种情况：
// 1.一个左子树，一个右子树，此时根节点即为最近公共祖先
// 2.都在左子树
// 3.都在右子树
// 二叉搜索树可以通过值的大小判断，所以问题的关键就是普通二叉树如何区分这三种情况：
// 构造一个函数，遍历所有子节点，发现p，q任意一个即返回，否则返回null。然后函数二分根节点：
// 1.两个都不是null,此时p和q分别位于左右子树。
// 2.其中一个为null，则两者都在另一半子树，递归即可。
var lowestCommonAncestor = function (root, p, q) {
  if (root === null) return null;
  if (root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left !== null && right !== null) {
    return root;
  } else if (left === null) {
    return lowestCommonAncestor(right, p, q);
  } else {
    return lowestCommonAncestor(left, p, q);
  }
};