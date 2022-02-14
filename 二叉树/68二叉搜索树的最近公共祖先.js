/**
 * 所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉搜索树中。
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 三种情况：
// 1.一个左子树，一个右子树，此时根节点即为最近公共祖先
// 2.都在左子树
// 3.都在右子树
// 根据值的大小关系即可判断属于哪种情况
var lowestCommonAncestor = function (root, p, q) {
  if (p.val > q.val) { // 确保p和q的大小关系
    let temp = p;
    p = q;
    q = temp;
  }
  if (root === null) return null;
  if (root === p || root === q) return root;
  if (root.val > p.val && root.val < q.val) {
    return root;
  } else if (root.val > p.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return lowestCommonAncestor(root.right, p, q);
  }
};