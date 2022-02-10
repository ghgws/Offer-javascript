/**
 * @param {Array} arr
 * @param {Number} i
 * @param {Number} j
 */
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

module.exports = swap;