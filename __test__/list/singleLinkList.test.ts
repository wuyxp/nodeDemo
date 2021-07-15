import LinkList from '../../src/算法/链表/singleLinkList'

describe('测试动态数组相关逻辑', () => {
  let da: LinkList<number>
  beforeEach(() => {
    da = new LinkList()
  })

  test("获取列表长度", () => {
    expect(da.size()).toBe(0)
    da.add(1)
    da.add(2)
    da.add(3)
    expect(da.size()).toBe(3)
  })
  test("返回列表是否为空", () => {
    expect(da.isEmpty()).toBeTruthy()
    da.add(3)
    expect(da.isEmpty()).toBeFalsy()
  })
  test("返回是否包含某元素", () => {
    da.add(1)
    da.add(2)
    da.add(3)
    expect(da.container(1)).toBeTruthy()
    expect(da.container(5)).toBeFalsy()
  })
  test("结尾新增元素", () => {
    da.add(1)
    da.add(2)
    da.add(3)
    da.add(3)
    da.add(3)
    expect(da.get(da.size() - 1)).toBe(3)
  })
  test("指定位置插入元素", () => {
    da.add(1)
    da.add(2)
    da.add(3)
    da.inset(1, 10)
    expect(da.get(1)).toBe(10)
  })
  test("获取指定位置元素", () => {
    da.add(1)
    da.add(2)
    da.add(3)
    expect(da.get(2)).toBe(3)
  })
  test("在指定位置覆盖元素", () => {
    da.add(1)
    da.add(2)
    da.add(3)
    expect(da.get(2)).toBe(3)
    da.set(2, 10)
    expect(da.get(2)).toBe(10)
  })
  test("删除元素", () => {
    da.add(1)
    da.add(2)
    da.add(3)
    da.remove(1)
    expect(da.get(1)).toBe(3)
  })
  test("获取指定元素的索引", () => {
    da.add(1)
    da.add(2)
    da.add(3)
    da.add(5)
    da.add(3)
    da.add(3)
    expect(da.indexOf(5)).toBe(3)
  })
  test("清除所有元素", () => {
    expect(da.size()).toBe(0)
    da.add(1)
    da.add(2)
    da.add(3)
    expect(da.size()).toBe(3)
    da.clear()
    expect(da.size()).toBe(0)
  })
})