/**
 * 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 最先想到的是两层循环暴力遍历，但这样会超时
// var twoSum = function (nums, target) {
//   const len = nums.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [nums[i], nums[j]];
//       }
//     }
//   }
// };
// 由此联想到哈希表,可以用Map或者用Object模拟
var twoSum = function (nums, target) {
  const map = {};
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const find = target - nums[i];
    if (map[find]) {
      return [nums[i], find];
    } else {
      map[nums[i]] = true;
    }
  }
};

// 这样虽然没有超时，但是时间复杂度和空间复杂度都很高，算法效率不够高。

// 方法二：对撞双指针:数组为升序排列，因此可以根据和与目标值的大小关系调整指针位置
var twoSum = function (nums, target) {
  const len = nums.length;
  let i = 0, j = len - 1;
  while (i < j) {
    const sum = nums[i] + nums[j];
    if (sum === target) {
      return [nums[i], nums[j]];
    } else if (sum < target) {
      i++;
    } else {
      j--;
    }
  }
};

// 方法三：还是利用升序排列，二分查找target-nums[i]
var twoSum = function (nums, target) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    let l = 0, r = len - 1;
    const find = target - nums[i];
    while (l <= r) {
      const m = Math.floor(l + (r - l) / 2);
      if (nums[m] === find) {
        return [nums[i], find];
      } else if(nums[m] < find) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }
};