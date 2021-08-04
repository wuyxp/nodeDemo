import heapBase from '../../src/算法/二叉堆/heapBase'


describe('测试最大二叉堆问题', () => {
  let hb: heapBase<number>
  beforeEach(() => {
    hb = new heapBase()
  })
  test("添加二叉堆元素", () => {
    const list = [43, 36, 76, 60, 65, 37, 82, 42, 3, 50, 38, 83, 91, 15, 7, 49]
    list.forEach(i => hb.add(i))
    expect(hb.toString()).toEqual([91,65,83,49,60,82,43,42,3,50,38,37,76,15,7,36].toString())
  })
  test("删除二叉堆元素", () => {
    const list = [43, 36, 76, 60, 65, 37, 82, 42, 3, 50, 38, 83, 91, 15, 7, 49]
    list.forEach(i => hb.add(i))
    expect(hb.remove()).toBe(91)
    expect(hb.toString()).toEqual([83,65,82,49,60,76,43,42,3,50,38,37,36,15,7].toString())
  })
  test("替换二叉堆元素", () => {
    const list = [43, 36, 76, 60, 65, 37, 82, 42, 3, 50, 38, 83, 91, 15, 7, 49]
    list.forEach(i => hb.add(i))
    expect(hb.replace(100)).toBe(91)
    expect(hb.toString()).toEqual([100,65,83,49,60,82,43,42,3,50,38,37,76,15,7,36].toString())
  })
  test("生成二叉堆", () => {
    const list = [43, 36, 76, 60, 65, 37, 82, 42, 3, 50, 38, 83, 91, 15, 7, 49]
    const hbb = heapBase.form(list)
    expect(hbb.toString()).toEqual([91,65,83,60,50,76,82,49,3,36,38,43,37,15,7,42].toString())
  })
})

describe('测试最小二叉堆问题', () => {
  let hb: heapBase<number>
  beforeEach(() => {
    hb = new heapBase()
  })
  test("添加二叉堆元素", () => {
  })
  test("删除二叉堆元素", () => {
  })
  test("查找二叉堆元素", () => {
  })
})