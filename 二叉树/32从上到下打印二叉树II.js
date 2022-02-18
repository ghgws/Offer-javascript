/**
 * 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const res = [];
  const q = [];
  if (root === null) return res;
  q.push(root);
  let count = 0;
  while (q.length > 0) {
    const sz = q.length;
    res[count] = [];
    for (let i = 0; i < sz; i++) {
      const cur = q.shift();
      res[count].push(cur.val);
      if (cur.left !== null) {
        q.push(cur.left);
      }
      if (cur.right !== null) {
        q.push(cur.right);
      }
    }
    count++;
  }
  return res;
};