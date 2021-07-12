// 百度二面 用 冒泡排序实现  数组的sort方法

Array.prototype.bsort = function (fn) {
  //  用冒泡实现
  console.log('this----', this)
  
  for (let i=0;i<this.length; i++) {
    for(let j=i;j<this.length; j++) {
      if (this[i] > this[j]) {
        let temp = this[i]
        this[i] = this[j]
        this[j] = temp
      }
    }
  }

  return this
}


const arr = [5, 4, 2, 3, 1, 6, 8]

arr.bsort()
console.log(arr.bsort())