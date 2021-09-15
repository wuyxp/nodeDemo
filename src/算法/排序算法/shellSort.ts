/**
 * 希尔排序，是由一个叫希尔的科学家发明出来的
 * 其原理，
 * 1. 主要是将数组分割为不同步长的列，所谓步长就是总共有几列
 * 2. 把不同列的数字记性排序，这里的排序因为数量从少到多，并且是有序状态，所以适合用插入排序
 * 3. 逐渐减少步长，直至为1列，那么这个数组就是有序数组了
 * 4. 步长官方推荐为 [...16, 8, 4, 2, 1]
 */

 import { copyArray, swap, compare } from './sortUtils'

 export function shellSort<T>(arr: T[]): T[] {
  if (arr && arr.length < 2) return arr
  const result = copyArray(arr)
  // 这里进行希尔排序ß
  return result
}
