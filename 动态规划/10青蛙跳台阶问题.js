/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
 * @param {number} n
 * @return {number}
 */
// 典型的动态规划问题
// 状态：台阶的级数n；
// dp的含义：前一级台阶的跳法数量
// 选择：跳1或跳2
// 状态转移方程：f(n) = f(n - 1) + f(n - 2)
var numWays = function(n) {
  const dp = [1, 1];
  let i = 2;
  while (i <= n) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
    i++;
  }
  return dp[n];
};
// 不开辟数组空间保存
var numWays = function(n) {
  if (n === 0 || n === 1) return 1;
  let a = 1, b = 1;
  for (let i = 2; i <= n; i++) {
    b = a + b;
    a = b - a;
    b = b >= 1000000007 ? b - 1000000007 : b;
  }
  return b;
};