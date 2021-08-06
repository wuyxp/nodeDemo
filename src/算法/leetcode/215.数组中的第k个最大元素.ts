/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start

/**
 * 解决这个题的主要思路是先创建一个 size 为 K 的最小堆，然后遍历数组不断的塞进这个堆
 * @param nums 
 * @param k 
 */

 class Heap {
  _array: number[] = []
  constructor () {
    this._array = []
  }
  add(ele: number) {
    if (this._array.length === 0) {
      this._array[0] = ele
    } else {
      this._array.push(ele)
      this.filtrUp(this._array.length - 1)
    }
  }
  replace (ele: number) {
    if (ele > this._array[0]){
      this._array[0] = ele
      this.filterDown(0)
    }
    
  }
  private filtrUp(index: number) {

    // 根据当前节点，计算父节点索引
    const element = this._array[index]
    let pIndex = index
    while(index > 0) {
      pIndex = (index - 1) >> 1
      if (element < this._array[pIndex]) {
        this._array[index] = this._array[pIndex]
        index = pIndex
      } else {
        break
      }
    }
    this._array[index] = element
  }

  /**
   * 下滤，根据索引，将值与子节点进行比较，要一层一层向下替换
   * @param index 
   */
  private filterDown (index: number) {
    const element = this._array[index]

    let cIndex = (index << 1) + 1
    while (cIndex < this._array.length) {
      // 右子节点索引
      let rIndex = cIndex + 1
      if (rIndex < this._array.length && this._array[rIndex] < this._array[cIndex]) {
        cIndex = rIndex
      }
      if (this._array[cIndex] < element) {
        this._array[index] = this._array[cIndex]
        index = cIndex
        cIndex = (index << 1) + 1
      } else {
        break
      }
    }
    this._array[index] = element
  }
}
function findKthLargest(nums: number[], k: number): number {
  const hp = new Heap()
  for (let index = 0; index < nums.length; index++) {
    if (index < k) {
      hp.add(nums[index])
    } else {
      hp.replace(nums[index])
    }
  }
  return hp._array[0]
};
// @lc code=end

