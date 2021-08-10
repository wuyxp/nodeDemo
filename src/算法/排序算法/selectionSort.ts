/**
 * 选择排序
 */

 import { copyArray, swap, compare } from './sortUtils'

 // 无优化版本
 export function selection<T>(arr: T[]): T[] {
   const result = copyArray(arr)
 
   for (let end = result.length - 1; end > 0; end--) {
     let resultIndex = 1
     for (let i = 0; i < end; i++) {
       if (compare(result[i], result[resultIndex]) > 0) {
         resultIndex = i
       }
     }
     swap(result, resultIndex, end)
   }
   return result
 }
 

 // 选择排序如果优化排序后，则前面查找元素过程中需要进行最大堆的构建