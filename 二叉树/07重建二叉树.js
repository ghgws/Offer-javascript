const TreeNode = require('../utils/dataStructure/二叉树');
/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 0 <= 节点个数 <= 5000
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 前序遍历的第一个元素即为树的根节点；同时以这个元素为界，可以把中序遍历对应的切分为左右子树；
// 由此联想到递归
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null;
  const rootVal = preorder[0];
  const root = new TreeNode(rootVal);
  const idx = inorder.indexOf(rootVal);
  const left = inorder.slice(0, idx);
  const right = inorder.slice(idx + 1);
  root.left = buildTree(preorder.slice(1, idx + 1), left);
  root.right = buildTree(preorder.slice(idx + 1), right);
  return root;
};