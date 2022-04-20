/**
 * 输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)
  B是A的子结构， 即 A中有出现和B相同的结构和节点值
  0 <= 节点个数 <= 10000
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
// 方法一：递归
var isSubStructure = function(A, B) {
  if (A === null || B === null) return false; // 排除空树
  const fn = (A, B) => { // 保证A和B结构相同
    if (B === null) return true; // 两个递归出口
    if (A === null) return false;

    return A.val === B.val && fn(A.left, B.left) && fn(A.right, B.right);
  }
  return fn(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};