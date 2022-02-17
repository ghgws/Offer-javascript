/**
 * 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
 * @param {TreeNode} root
 * @return {number[]}
 */
// 显然层序遍历，考虑bfs
var levelOrder = function(root) {
  const q = [];
  const res = [];
  if (root === null) return res;
  q.push(root);
  while (q.length > 0) {
    const sz = q.length;
    for (let i = 0; i < sz; i++) {
      const cur = q.shift();
      res.push(cur.val);
      if (cur.left !== null) {
        q.push(cur.left);
      }
      if (cur.right !== null) {
        q.push(cur.right);
      }
    }
  }
  return res;
};