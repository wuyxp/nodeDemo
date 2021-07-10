/**
 * 实现一个最小栈
 * 1. 出栈，入栈，查找最小值功能
 * 2. 上述三个操作时间复杂度为 1
 */

class Stack {
  constructor() {
    /**
     * 1. 第一次入栈的时候两个都入
     * 2. 入后面的时候，需要比较入栈的数字，如果比上一个小那么那么入两个栈
     * 3. 如果后面的数字比上一个数字大，那么只入第一个栈
     * 4. 弹出栈的时候，要对比两个栈顶
     * 5. 如果两个栈顶相同，那么两个一起出栈
     * 6. 这样第二个栈的顶永远是最小的值
     */
    this.list = []
    this.minList = []
  }
  push(num) {
    this.list.push(num)
  }
  pop() {
    const item = this.list.pop()
    return item
  }

  getMin() {

  }
}

class StackDemo {
  value = [];
  min = [];

  constructor() {
  }
  push(num) {
    this.value.push(num)

    let minLast = this.min[this.min.length - 1];
    if (minLast === undefined || num <= minLast) {
      this.min.push(num)
    }
  }
  pop() {
    if (this.value.length) {
      let p = this.value.pop();
      let minLast = this.min[this.min.length - 1]
      if (minLast === p) {
        this.min.pop()
      }
    }
  }
  getMin() {
    return this.min[this.min.length - 1]
  }
}


let oS = new StackDemo();
oS.push(123)
oS.push(3)
oS.push(23)
oS.push(23)
oS.push(3)
oS.pop()
console.log(oS.getMin())
oS.pop()
console.log(oS.getMin())

const stack = new Stack()

stack.push(5)
stack.push(3)
stack.push(4)
stack.push(2)
stack.push(1)

console.log(stack.list)

stack.pop()
stack.pop()

console.log(stack.list)