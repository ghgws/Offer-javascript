// const BinaryListNode = require('../utils/dataStructure/双向链表');
/**
 * 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。
 * @param {Node} root
 * @return {Node}
 */

// 题目要求二叉搜索树到排序的链表，自然想到中序遍历，遍历时操作指针指向即可
function Node(val,left,right) {
  this.val = val;
  this.left = left;
  this.right = right;
};
var treeToDoublyList = function(root) {
  const dfs = (node) => {
    if (node === null) return;
    dfs(node.left);
    // 操作指针使之双向
    prev.right = node;
    node.left = prev;
    prev = prev.right;

    dfs(node.right);
  }
  let prev = new Node(-1), head = prev;
  if (root === null) return null;
  dfs(root);
  // 调整指针使之循环
  prev.right = head.right;
  head.right.left = prev;
  return head.right;
};