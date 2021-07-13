import AbstractList from "./abstractList"
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