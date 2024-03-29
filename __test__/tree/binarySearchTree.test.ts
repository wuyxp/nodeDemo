import Bst from '../../src/算法/树/binarySearchTree'


describe('测试二叉平衡树', () => {
  let b: Bst<number>
  beforeEach(() => {
    b = new Bst((node1, node2) => {
      return node1 - node2
    })
    b.add(10)
    b.add(8)
    b.add(12)
    b.add(4)
    b.add(19)
    b.add(9)
    b.add(11)
    b.add(7)
    b.add(16)
    b.add(2)
    b.add(5)
  })

  test("测试打印", () => {
    b.print()
  })
  test("前序遍历", () => {
    const result:number[] = []
    const exp = [10, 8, 4, 2, 7, 5, 9, 12, 11, 19, 16]
    b.preorder(node => {      
      result.push(node)
    })
    expect(result).toEqual(exp)
  })
  test("中序遍历", () => {
    const result:number[] = []
    const exp = [2, 4, 5, 7, 8, 9, 10, 11, 12, 16, 19]
    b.inorder(node => {      
      result.push(node)
    })
    expect(result).toEqual(exp)
  })
  test("后序遍历", () => {
    const result:number[] = []
    const exp = [2, 5, 7, 4, 9, 8, 11, 16, 19, 12, 10]
    b.postorder(node => {      
      result.push(node)
    })
    expect(result).toEqual(exp)
  })

  test("层序遍历", () => {
    const result:number[] = []
    const exp = [10, 8, 12, 4, 9, 11, 19, 2, 7, 16, 5]
    b.levelorder(node => {      
      result.push(node)
    })
    expect(result).toEqual(exp)
  })

  test("获取行高", () => {
    const h = b.levelorder()
    expect(h).toEqual(5)
  })

  test("判断元素节点是否在包含的树中", () => {
    expect(b.container(19)).toBeTruthy()
    expect(b.container(20)).toBeFalsy()
  })

  test("获取树中的前驱元素", () => {
    expect(b.precursor(8)).toBe(7)
    expect(b.precursor(11)).toBe(10)
    expect(b.precursor(10)).toBe(9)
    expect(b.precursor(16)).toBe(12)
    expect(b.precursor(5)).toBe(4)
    expect(b.precursor(2)).toBe(null)
  })

  test("获取树中的后继元素", () => {
    expect(b.succeeding(7)).toBe(8)
    expect(b.succeeding(10)).toBe(11)
    expect(b.succeeding(9)).toBe(10)
    expect(b.succeeding(12)).toBe(16)
    expect(b.succeeding(4)).toBe(5)
    expect(b.succeeding(19)).toBe(null)
  })

  test("删除叶子节点元素打印测试", () => {
    b.remove(2)
    b.remove(5)
    b.remove(11)
    b.remove(16)
    b.print()
  })

  test("删除度为1的节点元素打印测试", () => {
    b.remove(7)
    b.remove(19)
    b.print()
  })

  test("删除度为2的节点元素打印测试", () => {
    b.remove(4)
    b.remove(12)
    b.remove(10)
    b.print()
  })
})