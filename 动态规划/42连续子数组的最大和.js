/**
 * 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
 * @param {number[]} nums
 * @return {number}
 */
// 方法一：动态规划
var maxSubArray = function(nums) {
  const dp = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] > 0) {
      dp[i] = nums[i] + dp[i - 1];
    } else {
      dp[i] = Math.max(nums[i], dp[i - 1]);
    }
  }
  return Math.max(...dp);
};
// 方法二：在线处理,时间复杂度O(n)
var maxSubArray = function(nums) {
  let temp = 0, max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    temp += nums[i];
    if (temp > max) {
      max = temp;
    }
    if (temp < 0) { // 如果累加为负，则从头开始
      temp = 0;
    }
  }
  return max;
};