const TreeNode = require('../utils/dataStructure/二叉树');
/**
 * 请完成一个函数，输入一个二叉树，该函数输出它的镜像。
 * 0 <= 节点个数 <= 1000
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 方法一：递归
var mirrorTree = function(root) {
  if (root === null) return null;
  const newRoot = new TreeNode(root.val);
  newRoot.right = mirrorTree(root.left);
  newRoot.left = mirrorTree(root.right);
  return newRoot;
};
// 方法一优化：原地
var mirrorTree = function(root) {
  if (root === null) return null;
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  mirrorTree(root.left);
  mirrorTree(root.right);
  return root;
};
// 方法二：层序遍历
var mirrorTree = function (root) {
  const q = [];
  if (root === null) return null;
  q.push(root);
  while (q.length > 0) {
    const sz = q.length;
    for (let i = 0; i < sz; i++) {
      const cur = q.shift();
      const temp = cur.left;
      cur.left = cur.right;
      cur.right = temp;
      if (cur.left !== null) {
        q.push(cur.left);
      }
      if (cur.right !== null) {
        q.push(cur.right);
      }
    }
  }
  return root;
};