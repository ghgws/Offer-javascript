var CQueue = function() {
  this.s1 = [];
  this.s2 = []; // js中数组模拟栈
};

/**
 * 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
 * @param {number} value
 * @return {void}
 */

CQueue.prototype.appendTail = function(value) {
  this.s2.push(value);
};

/**
 * @return {number}
 */
// 方法一：先出栈到另一个栈，删除最后一个出栈元素后再反向出栈恢复。
// 这个方法有点笨，时间复杂度O(n)
CQueue.prototype.deleteHead = function() {
  if (!this.s1.length && !this.s2.length) {
    return -1;
  } else {
    while (this.s2.length > 1) {
      this.s1.push(this.s2.pop());
    }
    let cur = this.s2.pop();
    while (this.s1.length) {
      this.s2.push(this.s1.pop());
    }
    return cur;
  }
};

// 方法二：先全部出栈，从栈顶到栈底即为队列顺序
CQueue.prototype.deleteHead = function() {
  if (!this.s1.length) {
    if (!this.s2.length) {
      return -1;
    }
    while (this.s2.length) {
      this.s1.push(this.s2.pop());
    }
  }
  return this.s1.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */