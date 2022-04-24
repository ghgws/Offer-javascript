/**
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * @param {string} s
 * @return {string}
 */

// 本题的一大考点在于：字符串本质上是字符数组，存在扩容和线性插入的性能问题，但在js中已经做了底层封装
// 方法一：遍历字符串: 利用字符串实际上是字符类型的数组来处理（但是不能在字符串原地修改）
var replaceSpace = function(s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      res += "%20";
      continue;
    }
    res += s[i];
  }
  return res;
};

// 方法二：正则替换
var replaceSpace = function(s) {
  return s.replace(/\s/g, "%20");
};