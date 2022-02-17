/**
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
 * 树中节点总数在范围 [0, 5000] 内
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
// 显然dfs：
// 回溯条件：1.叶子节点，即node.left === null && node.right === null; 2.路径总和等于target 或者这个节点已遍历完毕
// 回溯步骤：路径栈弹出；和恢复。
var pathSum = function (root, target) {
  const tracks = []; // 记录最后结果
  const track = []; // 记录路径选择
  let sum = 0;
  const dfs = (node) => {
    sum += node.val;
    track.push(node.val);
    if (node.left === null && node.right === null) {
      if (sum === target) {
        tracks.push(track.slice());
      }
      sum -= node.val;
      return;
    }
    // 选择后再撤销
    if (node.left !== null) {
      dfs(node.left);
      track.pop();
    }
    if (node.right !== null) {
      dfs(node.right);
      track.pop();
    }
    sum -= node.val;
  }
  if (root === null) return tracks;
  dfs(root);
  return tracks;
};