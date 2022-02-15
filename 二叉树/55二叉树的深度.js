/**
 * 输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。
 * @param {TreeNode} root
 * @return {number}
 */
// 方法一： 广度优先搜索：层序遍历能保证深度最大
var maxDepth = function(root) {
  const q = [];
  let res = 0;
  if (root === null) return res;
  q.push(root);
  while (q.length > 0) {
    const sz = q.length;
    for (let i = 0; i < sz; i++) {
      const cur = q.shift();
      if (cur.left) {
        q.push(cur.left);
      }
      if (cur.right) {
        q.push(cur.right);
      }
    }
    res++;
  }
  return res;
};

// 方法二： 分冶递归，maxDepth（root） = Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
var maxDepth = function(root) {
  if (root === null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// 方法三： 深度优先搜索
var maxDepth = function(root) {
  let res = [];
  let tracks = [];
  // let depth = 0;
  const dfs = (node) => {
    tracks.push(node);
    // depth++;
    if (node.left === null && node.right === null) {
      res.push(tracks.length);
      return;
    }
    if (node.left) {
      dfs(node.left);
      tracks.pop();
      // depth--;
    }
    if (node.right) {
      dfs(node.right);
      tracks.pop();
      // depth--;
    }
  }
  if (root === null) return 0;
  dfs(root);
  return Math.max(...res);
};