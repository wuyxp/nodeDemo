/**
 * 冒泡算法
 */

import { copyArray, swap, compare } from './sortUtils'

// 无优化版本
export function bubble<T>(arr: T[]): T[] {
  const result = copyArray(arr)

  for (let end = result.length; end > 0; end--) {
    for (let i = 1; i < end; i++) {
      if (compare(result[i], result[i-1]) < 0) {
        swap(result, i, i-1)
      }
    }
  }
  return result
}

// 优化版本1
export function bubble1<T>(arr: T[]): T[] {
  const result = copyArray(arr)

  let finsh = true
  for (let end = result.length; end > 0; end--) {
    finsh = true
    for (let i = 1; i < end; i++) {
      if (compare(result[i], result[i-1]) < 0) {
        finsh = false
        swap(result, i, i-1)
      }
    }
    if (finsh) break
  }
  return result
}


// 优化版本3 [9,7,5,3,2,4,6,1,8]
// [9,7,5,3,2,4,6,1,8]
// [7,5,3,2,4,6,1,8,9]
// [5,3,2,4,6,1,7,8,9]
export function bubble2<T>(arr: T[]): T[] {
  const result = copyArray(arr)
  for (let end = result.length; end > 0; end--) {
    let tmpEnd = end
    for (let i = 1; i < end; i++) {
      if (compare(result[i], result[i-1]) < 0) {
        swap(result, i, i-1)
      } else {
        tmpEnd = i + 1
      }
    }
    end = tmpEnd
  }
  return result
}

bubble2([9,7,5,3,2,4,6,1,8])