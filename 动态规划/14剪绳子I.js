/**
 * 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
 * @param {number} n
 * @return {number}
 */
// 状态：长度n和段数
// dp的含义：长度-1的所有剪绳子方法的最大乘积
// 状态转移方程: f(n) = Math.max(f(n - k)* Math.max(f(k), k))
var cuttingRope = function(n) {
  const dp = [0, 1, 1, 2]; // n = 2, 3
  let i = 4;
  while (i <= n) {
    let max = 0;
    for (let j = 1; j <= i / 2; j++) {
      max = Math.max(max, Math.max(dp[j], j) * Math.max(dp[i - j], i - j));
    }
    dp[i] = max;
    i++;
  }
  return dp[n];
};

// 实际上，只有n=2，3两种情况存在dp[i - j] < i - j;
// 因此，可以进一步简化为如下
var cuttingRope = function (n) {
  if (n === 2) return 1;
  if (n === 3) return 2; // n = 2, 3
  const dp = [0, 1, 2, 3]; // 手动替换成i - j
  let i = 4;
  while (i <= n) {
    let max = 0;
    for (let j = 1; j <= i / 2; j++) {
      max = Math.max(max, dp[i - j] * dp[j]);
    }
    dp[i] = max;
    i++;
  }
  return dp[n];
};