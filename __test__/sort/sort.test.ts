import { bubble, bubble1, bubble2 } from '../../src/算法/排序算法/bubbleSort'
import { selection } from '../../src/算法/排序算法/selectionSort'
import { heapSort } from '../../src/算法/排序算法/heapSort'
import { insertion, insertion1 } from '../../src/算法/排序算法/insertionSort'
import { mergeSort } from '../../src/算法/排序算法/mergeSort'
import { quickSort } from '../../src/算法/排序算法/quickSort'

describe('测试所有排序方法', () => {
  let arr: number[] = []
  beforeEach(() => {
    arr = [9,7,5,3,2,4,6,1,8]
  })

  test("测试冒泡排序方法", () => {
    expect(bubble<number>(arr)).toEqual([1,2,3,4,5,6,7,8,9])
  })

  test("测试冒泡排序方法-优化版本1", () => {
    expect(bubble1<number>(arr)).toEqual([1,2,3,4,5,6,7,8,9])
  })

  test("测试冒泡排序方法-优化版本2", () => {
    expect(bubble2<number>(arr)).toEqual([1,2,3,4,5,6,7,8,9])
  })

  test("选择排序方法", () => {
    expect(selection<number>(arr)).toEqual([1,2,3,4,5,6,7,8,9])
  })

  test("堆排序方法", () => {
    expect(heapSort<number>(arr)).toEqual([1,2,3,4,5,6,7,8,9])
  })

  test("插入排序1", () => {
    expect(insertion<number>(arr)).toEqual([1,2,3,4,5,6,7,8,9])
  })

  test("插入排序2", () => {
    expect(insertion1<number>(arr)).toEqual([1,2,3,4,5,6,7,8,9])
  })

  test("归并排序", () => {
    expect(mergeSort<number>(arr)).toEqual([1,2,3,4,5,6,7,8,9])
  })

  test("快速排序", () => {
    expect(quickSort<number>(arr)).toEqual([1,2,3,4,5,6,7,8,9])
  })
})