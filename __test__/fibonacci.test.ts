import {getB, fib, fibA} from '../src/算法/练习题/Fibonacci-getBolb'
test("通项公式 斐波那契数列 ", () => {
  // expect(fib(1)).toBe(1)
  // expect(fib(2)).toBe(1)
  // expect(fib(3)).toBe(2)
  // expect(fib(4)).toBe(3)

  expect(fib(10)).toBe(55)
})

test("递归 斐波那契数列 ", () => {
  // expect(getB(1)).toBe(1)
  // expect(getB(2)).toBe(1)
  // expect(getB(3)).toBe(2)
  // expect(getB(4)).toBe(3)

  expect(getB(10)).toBe(55)
})

test("遍历模式的循环数列", () => {
  expect(fibA(10)).toBe(55)
})