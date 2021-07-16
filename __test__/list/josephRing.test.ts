import josephRing from '../../src/算法/链表/josephRing'


describe('测试约瑟夫环问题', () => {
  test("8 个人，第三个人枪毙", () => {
    const r = josephRing(8, 3)
    expect(r).toBe(7)
  })
})