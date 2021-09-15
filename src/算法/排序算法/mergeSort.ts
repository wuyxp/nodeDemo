/**
 * 归并排序
 * 1. 不断的拆分数组
 * 2. 不断的合并数组
 * 3. 主要原理是每次合并的数组是一个有序数组的合并过程
 */


 import { copyArray, swap, compare } from './sortUtils'

 // 不断合并数组
 function merge<T> (arr: T[], start:number, mid:number, end:number, temp:T[]):void {
  //  console.log('mmmm-----start: ',start, '-----mid:',mid, '-----end:',end, '----length:', end- start)
  // 这里其实是两个有序数组进行合并的过程
  // 1. 先将左半边数组进行拷贝出来
  for (let i = start; i < mid; i++) {
    temp[i-start] = arr[i]
  }
  // console.log(temp)

  // 2. 定义三个指针，分别指向与拷贝出的左边，原来的数组左边，右边
  let ai = 0  // 拷贝出来数组的指针
  let si = start  // 原始数据所开始的指针 
  let ei = mid   // 后半段开始的指针

  // 3. 不断比较左右，然后将对应的数据填充只原来的数组当中
  while((ai + start) < mid && ei < end) {
    if (compare(temp[ai], arr[ei]) <= 0) {
      arr[si++] = temp[ai++]
    } else {
      arr[si++] = arr[ei++]
    }
  }

  // 假如左边有剩余
  while((ai + start) < mid) {
    arr[si++] = temp[ai++]
  }

}
// [9,7,5,3,2,4,6,1,8]
function sort<T>(arr: T[], start:number, end:number, temp:T[]): void {

  if ((start + 1) >= end) return

  const mid = (start + end) >> 1
  sort(arr, start, mid, temp)
  sort(arr, mid, end, temp)
  // console.log('sss------start: ',start, '-----end:',end, '----length:', end- start)
  
  merge<T>(arr, start, mid, end, temp)
}
export function mergeSort<T>(arr: T[]): T[] {
  if (arr && arr.length < 2) return arr
  const result = copyArray(arr)

 // 先创建一个临时数组变量，用于缓存归并数组排序用

  let temp:T[] = Array((result.length >> 1) + 1)
  sort<T>(result, 0, result.length, temp)
  return result
}
