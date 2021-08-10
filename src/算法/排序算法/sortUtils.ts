/**
 * 排序函数所需的工具方法
 */


export const copyArray: <T>(arr:T[]) => T[] = arr => {
  const result = Array(arr.length)
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
  }
  return result
}

export const swap: <T>(arr:T[] ,index:number, indey:number) => void = (arr, index, indey) => {
  const tmp = arr[index]
  arr[index] = arr[indey]
  arr[indey] = tmp
}

export const compare: <T>(ele1:T, ele2:T) => number = (ele1, ele2) => {
  //TODO 比较方法待完善
  return ele1 > ele2 ? 1 : ele1 === ele2 ? 0 : -1
}
