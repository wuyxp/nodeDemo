import HeapInterface from './HeapInterface'

type compareFun<T> = (node1: T, node2: T) => number;
class HeapBase<T> implements HeapInterface<T> {
  private compare: compareFun<T>
  
  private static _default_length = 10
  private static _coefficient = 1.6
  private _array = new Array(HeapBase._default_length)
  private _size = 0
  constructor(compare: compareFun<T> = (n1, n2) => (n1 as unknown as number) - (n2 as unknown as number)) {
    this.compare = compare
  }

  /**
   * 传入一个数组，批量创建一个二叉堆
   * 此处批量创建二叉堆，可以采用两种方式
   * 1. 自上而下的上滤，也就是批量的使用 add 方法，此处时间复杂度为O（nlogN）
   * 2. 自下而上的下滤，也就是采用倒叙遍历数组的方式，从第一个包含子节点的节点开始不断下滤，这样可以不断得到二叉堆，此处时间复杂度为O（n）
   * @param elements 
   */
  public static form<T>(elements: T[], compare: compareFun<T> = (n1, n2) => (n1 as unknown as number) - (n2 as unknown as number)):HeapBase<T> {
    const length = elements.length < HeapBase._default_length ? HeapBase._default_length : elements.length
    const copyEles = new Array(length)
    for (let i = 0; i < elements.length; i++) {
      copyEles[i] = elements[i];
    }
    const hb = new HeapBase(compare)
    hb._array = copyEles
    hb._size = elements.length
    for (let hi = (hb._size >> 1) -1; hi >= 0; hi--) {
      hb.filterDown(hi)
    }
    return hb
  }
  size(): number {
    return this._size
  }
  isEmpty(): boolean {
    return this._size === 0
  }
  add(element: T): void {
    this._ensureCapacity(++this._size)
    let index = this._size - 1
    this._array[index] = element
    if (this._size === 1) return

    // 这里要和父节点进行比较，如果有父节点并且比较器返回大于0 则上滤
    this.filtrUp(index)
    
  }
  get(): T | null {
    if (this._size === 0) return null
    return this._array[0]
  }
  remove(): T | null {
    if (this._size === 0) return null
    const element = this._array[0]
    this._array[0] = this._array[--this._size]

    // 这里要将头部值跟子节点进行比较，然后一层一层下滤
    this.filterDown(0)
    return element
  }
  replace(element:T): T | null {
    if(this._size === 0) {
      this.add(element)
      return null
    }
    const result = this._array[0]
    this._array[0] = element
    this.filterDown(0)

    return result
  }
  clear(): void {
    this._size = 0
    for (let index = 0; index < this._size; index++) {
      this._array[index] = null
    }
  }
  
  private _ensureCapacity(maxLength: number): void {
    if (maxLength > this._array.length) {
      const newArray = new Array(Math.round(this._array.length * HeapBase._coefficient))
      for (let index = 0; index < this._array.length; index++) {
        newArray[index] = this._array[index];
      }
      this._array = newArray
    }
  }

  /**
   * 上滤，根据索引，将值与父节点进行比较，要一层一层上滤
   * @param index 
   */
  private filtrUp(index: number) {

    // 根据当前节点，计算父节点索引
    const element = this._array[index]
    let pIndex = index
    while(index > 0) {
      pIndex = (index - 1) >> 1
      if (this.compare(element, this._array[pIndex]) > 0) {
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
    while (cIndex < this._size) {
      // 右子节点索引
      let rIndex = cIndex + 1
      if (rIndex < this._size && this.compare(this._array[rIndex], this._array[cIndex]) > 0) {
        cIndex = rIndex
      }
      if (this.compare(this._array[cIndex], element) > 0) {
        this._array[index] = this._array[cIndex]
        index = cIndex
        cIndex = (index << 1) + 1
      } else {
        break
      }
    }
    this._array[index] = element
  }

  toString () {
    const s = []
    for (let i = 0; i < this._size; i++) {
      s.push(this._array[i]);
    }
    return s.toString()
  }

}

export default HeapBase