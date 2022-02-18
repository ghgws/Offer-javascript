/**
 * 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 调整层序遍历的顺序即可。
var levelOrder = function(root) {
  let q = [];
  const res = [];
  if (root === null) return res;
  q.push(root);
  let count = 0; // 记录层数同时根据奇偶判断遍历顺序
  while (q.length > 0) {
    const sz = q.length;
    res[count] = [];
    q = q.reverse();
    for (let i = 0; i < sz; i++) {
      const cur = q.shift();
      res[count].push(cur.val);
      if (count % 2 === 0) {
        if (cur.left !== null) {
          q.push(cur.left);
        }
        if (cur.right !== null) {
          q.push(cur.right);
        }
      } else {
        if (cur.right !== null) {
          q.push(cur.right);
        }
        if (cur.left !== null) {
          q.push(cur.left);
        }
      }
    }
    count++;
  }
  return res;
};