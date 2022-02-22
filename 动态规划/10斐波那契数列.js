/**
 * 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。
 * 斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
 * @param {number} n
 * @return {number}
 */
// 斐波那契数列不属于动态规划问题，但具有类似的特点
var fib = function(n) {
  const dp = [];
  dp[0] = 0;
  dp[1] = 1;
  let i = 2;
  while (i <= n) {
    dp[i] = dp[i - 2] + dp[i - 1];
    dp[i] = dp[i] > 1000000007 ? (dp[i] % 1000000007) : dp[i];
    i++;
  }
  return dp[n];
};