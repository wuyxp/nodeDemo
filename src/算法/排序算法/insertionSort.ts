
/**
 * 插入排序
 * 1. 无优化版本，类似于玩扑克牌，抓一张牌，去前面找个位置插入进去
 * 2. 优化版本，主要优化在找位置的方式，是采用的二分查找法
 */

 import { copyArray, swap, compare } from './sortUtils'

 // 无优化版本 [9,7,5,3,2,4,6,1,8]
 /**
  * [9,7,5,3,2,4,6,1,8]
  * [7,9,5,3,2,4,6,1,8]
  * [5,7,9,3,2,4,6,1,8]
  * [3,5,7,9,2,4,6,1,8]
  * [2,3,5,7,9,4,6,1,8]
  * [2,3,4,5,7,9,6,1,8]
  * [2,3,4,5,6,7,9,1,8]
  * [1,2,3,4,5,6,7,9,8]
  * [1,2,3,4,5,6,7,8,9]
  */
 export function insertion<T>(arr: T[]): T[] {
   const result = copyArray(arr)
 
   for (let endIndex = 1; endIndex < arr.length; endIndex++) {
     
    // 这里查找要插入的位置
    let curIndex = endIndex - 1
    while(curIndex >= 0 && compare(result[curIndex], result[endIndex]) > 0){
      curIndex--
    }
    curIndex = curIndex + 1
    
    // 这里要进行替换
    let tmp = result[endIndex]
    for (let wi = endIndex; wi > curIndex; wi--) {
      result[wi] = result[wi - 1]
    }
    result[curIndex] = tmp
   }
   return result
 }
 


// 这里采用二分查找法去查找需要插入的索引位置
 function getIndex(arr: any[], startIndex:number, endIndex: number, currentIndex:number): number {
    if (startIndex >= endIndex - 1) return startIndex
    const midIndex = (endIndex + startIndex) >> 1
    if (compare(arr[currentIndex], arr[midIndex]) > 0) {
      return getIndex(arr, midIndex+1, endIndex, currentIndex)
    } else {
      return getIndex(arr, startIndex, midIndex, currentIndex)
    }
 }

 export function insertion1<T>(arr: T[]): T[] {
  const result = copyArray(arr)

  for (let endIndex = 1; endIndex < arr.length; endIndex++) {
    
    // 这里查找要插入的位置
    const curIndex = getIndex(result, 0, endIndex, endIndex)
    
    // 这里要进行替换
    let tmp = result[endIndex]
    for (let wi = endIndex; wi > curIndex; wi--) {
      result[wi] = result[wi - 1]
    }
    result[curIndex] = tmp
  }
  return result
}

