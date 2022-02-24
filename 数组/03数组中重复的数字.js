/**
 *
在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
2 <= n <= 100000
 * @param {number[]} nums
 * @return {number}
 */
// 方法一：时间复杂度优先，哈希表查找
var findRepeatNumber = function(nums) {
  const set = new Set();
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (set.has(nums[i])) {
      return nums[i];
    } else {
      set.add(nums[i], true);
    }
  }
};

// 方法二：空间复杂度优先，数组原地配合排序查找
var findRepeatNumber = function(nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  let pre = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (pre === nums[i]) {
      return nums[i]
    }
    pre = nums[i];
  }
};