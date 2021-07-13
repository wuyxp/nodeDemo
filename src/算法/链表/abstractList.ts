abstract class AbstractList<T> implements List<T> {
  
  protected _size = 0

  size(): number {
    return this._size
  }
  isEmpty(): boolean {
    return this._size === 0
  }
  container(element: T): boolean {
    return this.indexOf(element) > -1
  }
  add(element: T): void {
    this.inset(this._size, element)
  }
  abstract inset(index: number, element: T): void 
  abstract get(index: number): T | null
  abstract set(index: number, element: T): void
  abstract remove(index: number): T | null 
  abstract indexOf(element: T): number
  abstract clear(): void
  abstract _ensureCapacity(maxLength: number): void

  _rangeCheckForAdd(index: number): boolean {
    if (index >= 0 && index < this._size) {
      return true
    } else {
      console.error(`index: ${index} 应该在 [0, ${this._size}]`)
      return false
    }
  }
}


export default AbstractList