interface List<T> {
  /**
   * 列表长度
   */
  size(): number;

  /**
   * 返回列表是否为空
   */
  isEmpty(): boolean;

  /**
   * 返回是否包含某元素
   * @param element 
   */
  container(element:T): boolean;

  /**
   * 结尾新增元素
   */
  add(element: T): void;
  
  /**
   * 指定位置插入元素
   * @param index 
   * @param element 
   */
  inset(index:number, element:T): void;

  /**
   * 获取指定位置元素
   * @param index 
   */
  get(index:number): T | null;

  /**
   * 在指定位置覆盖元素
   * @param index 
   * @param element 
   */
  set(index:number, element:T): void;
  
  /**
   * 删除元素
   * @param index 
   */
  remove(index:number): T | null;

  /**
   * 获取指定元素的索引
   * @param element 
   */
  indexOf(element: T): number;

  /**
   * 清除所有元素
   */
  clear(): void;
}