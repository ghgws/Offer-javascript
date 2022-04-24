/**
 * 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
0 <= n <= 1000
0 <= m <= 1000
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 方法一： 二次遍历暴力解法，时间复杂度O(n2);
var findNumberIn2DArray = function(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }
  return false;
};

// 题目给出行列都递增，因此可以简化(从右上角开始不断排除行和列)
var findNumberIn2DArray = function (matrix, target) {
  if (matrix.length === 0) return false;
  let row = 0, col = matrix[row].length - 1;
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] > target) {
      col--;
    } else if (matrix[row][col] < target) {
      row++;
    } else if (matrix[row][col] === target) {
      return true;
    }
  }
  return false;
};