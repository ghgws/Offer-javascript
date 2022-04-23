/**
 * 求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
 * @param {number} n
 * @return {number}
 */
// 不能用循环，==> 递归
var sumNums = function(n) {
  // 不能用if设置递归出口，可以用短路运算
  return n && (n + sumNums(n - 1));
};