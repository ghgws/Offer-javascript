/**
 * @param {number[]} prices
 * @return {number}
 */
// 动态规划
var maxProfit = function(prices) {
  const dp = [0];
  let i = 1;
  let min = prices[0];
  while (i < prices.length) {
    dp[i] = Math.max(0, prices[i] - min);
    min = Math.min(min, prices[i]);
    i++;
  }
  return Math.max(...dp);
};
// 不使用dp数组记录
var maxProfit = function(prices) {
  let res = 0;
  let i = 1;
  let min = prices[0];
  while (i < prices.length) {
    res = res - (prices[i] - min) > 0 ? res : prices[i] - min;
    min = min - prices[i] > 0 ? prices[i] : min;
    i++;
  }
  return res;
};