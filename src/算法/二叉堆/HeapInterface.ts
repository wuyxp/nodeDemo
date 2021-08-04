interface heap<T> {
  /**
   * 获取元素数量
   */
  size(): number
  /**
   * 是否为空
   */
  isEmpty(): boolean
  /**
   * 清空
   */
  clear(): void
  /**
   * 添加元素
   */
  add(element:T): void
  /**
   * 获取堆顶元素
   */
  get(): T | null
  /**
   * 删除堆顶元素
   */
  remove(): T | null
  /**
   * 替换堆顶元素
   */
  replace(element:T): T | null
}

export default heap