/**
 * 编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为 汉明重量).）。
 * @param {number} n - a positive integer
 * @return {number}
 */
// 方法一：利用位与运算循环检查每一位是否为1，时间复杂度O(n)
var hammingWeight = function(n) {
  let count = 0;
  for (let i = 0; i < 32; i++) {
    if (n & (1 << i)) {
      count++;
    }
  }
  return count;
};

// 方法二：位运算优化:利用n&(n-1)不断去除最右侧的1.
var hammingWeight = function (n) {
  let count = 0;
  while (n !== 0) {
    n = n & (n - 1);
    count++;
  }
  return count;
};