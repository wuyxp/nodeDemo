import AbstractList from "./abstractList"
/**
 * 循环数组链表，有如下特点
 * 1. 如果该数组还有空间，则不扩容，增加对头指针，front，队尾指针 end
 * 2. 如果对数组增加元素，而数组前部分为空余，而后部分满了，则往前加。那么对对头指针应该指向与 4 那个位置
 *    类似于 [null, null, null, 1, 2, 3] 比如这时候加4，则为 [4, null, null, 1, 2, 3]
 * 3. 如果对数组向前增加，而数组前半部分满了， 而后部分有空余，则往后加，那么对头对尾指针也要发生变化
 *    类似于 [1, 2, 3, null， null] 向对头插入 4 那么则是 [1, 2, 3, null ,4]
 * 4. 在队尾队头减少元素的时候，也要进行更改引用指针
 * 5. 如果新增元素容量不够的时候，要进行扩容，扩容的时候，新开辟空间，将原来空间的内容从front指针开始复制到新容器中
 * 6. 下面的这个数组还是原来的动态数组，还未进行修改。
 */
export default class DynamicArray<T> extends AbstractList<T> {
  
  private _default_length = 10
  private _coefficient = 1.6
  private _array = new Array(this._default_length)

  inset(index: number, element: T): void {
    if (index === this._size) {
      this._array[this._size++] = element
    }
    if (this._rangeCheckForAdd(index) ) {
      this._ensureCapacity(this._size + 1)
      for (let i = this._size; i > index;) {
        this._array[i] = this._array[--i]
      }
      this._array[index] = element
    }
  }
  get(index: number): T | null {
    if (this._rangeCheckForAdd(index) ){
      return this._array[index]
    }
    return null
  }
  set(index: number, element: T): void {
    if (this._rangeCheckForAdd(index) ){
      this._array[index] = element
    }
  }
  remove(index: number): T | null {
    if (this._rangeCheckForAdd(index) ){
      const result = this._array[index]
      for (let i = index; i < this._size - 1; i++) {
        this._array[i] = this._array[i + 1]
      }
      this._array[this._size--] = null
      return result
    }
    return null
  }
  indexOf(element: T): number {
    for (let index = 0; index < this._size; index++) {
      if (element === this._array[index]) {
        return index
      }
    }
    return -1
  }
  clear(): void {
    this._size = 0
    for (let index = 0; index < this._size; index++) {
      this._array[index] = null
    }
  }
  
  _ensureCapacity(maxLength: number): void {
    if (maxLength > this._array.length) {
      const newArray = new Array(Math.round(this._array.length * this._coefficient))
      for (let index = 0; index < this._array.length; index++) {
        newArray[index] = this._array[index];
      }
      this._array = newArray
    }
  }

}