import Bst from '../../src/算法/树/binarySearchTree'


describe('测试二叉平衡树', () => {
  test("测试打印", () => {
    const b = new Bst((node1: number, node2: number) => {
      return node2 - node1
    })
    b.add(10)
    b.add(8)
    b.add(12)
    // b.add(4)
    // b.add(19)
    // b.add(9)
    // b.add(11)
    // b.add(7)
    // b.add(16)
    // b.add(2)
    // b.add(5)

    b.print()
    // expect(r).toBe(7)
  })
})