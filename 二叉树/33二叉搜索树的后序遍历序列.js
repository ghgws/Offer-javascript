/**
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。
 * @param {number[]} postorder
 * @return {boolean}
 */
// 数组的最后一个值必为根节点；由此可以进行序列的拆分。
// 之后的主要任务就是对拆分后的序列进行二叉搜索树的判断
// 方法一：分冶递归
var verifyPostorder = function(postorder) {
  const isBST = (order, l, r) => {
    const rootVal = order[r];
    if (l >= r) return true;
    // 寻找左右子树的分界
    let p = l;
    while (order[p] < rootVal) {
      p++;
    }
    // 此时order[p]是第一个大于根节点的节点值,记下p
    let q = p;
    while (order[p] > rootVal) {
      p++;
    }
    // 如果是二叉搜索树，上面循环结束时应有p === r；反之不成立(必要不充分)，但可以递归判断
    return p === r && isBST(order, l, q - 1) && isBST(order, q, r - 1);
  }
  return isBST(postorder, 0, postorder.length - 1);
};

// 方法二：单调栈
var verifyPostorder = function(postorder) {
  const s = [];
  let prev; // 在while循环中寻找下一个左右分界（根节点）
  // 逆向遍历对于二叉搜索树而言，就是root -> right -> left
  for (let i = postorder.length - 1; i >= 0; i--) {
    if (prev && postorder[i] > prev) {
      return false;
    }
    while (s.length > 0 && postorder[i] < s[s.length - 1]) {
      prev = s.pop();
    }
    s.push(postorder[i]);
  }
  return true;
};