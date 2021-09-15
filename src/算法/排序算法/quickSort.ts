/**
 * 快速排序
 * 1. 随机一个轴元素，和0位置元素进行替换
 * 2. 遍历剩余元素，分别与轴元素进行比较，然后
 */


import { copyArray, swap, compare, rendomIndex } from './sortUtils'

function sort<T>(arr:T[], begin:number, end: number) {
  if ((begin + 1) >= end) return
  let ti = rendomIndex(begin, end)
  const pivot = arr[ti]
  arr[ti] = arr[0]
  ti = 0
  let si = begin
  let ei = end - 1
  while(si <= ei) {
    while(si <= ei) {
      if (compare(arr[ei], pivot) <= 0) {  // 如果后面元素比轴元素小 替换
        arr[ti] = arr[ei]
        ti = ei--
        break
      } else {
        ei--
      }
    }
    while(si <= ei) {
      if (compare(arr[si], pivot) <= 0) {  // 如果前面元素比轴元素小
        si++
      } else {
        arr[ti] = arr[si]
        ti = si++
        break
      }
    }
  }
  arr[ti] = pivot
  sort(arr, begin, ti)
  sort(arr, ti + 1, end)
}
export function quickSort<T>(arr: T[]): T[] {
  if (arr.length < 2) return arr
  const result = copyArray(arr)
  sort<T>(result, 0, arr.length)
  return result
}
