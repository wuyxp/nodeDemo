/*
输入:一个二维数组，每一个元素为 0 或者 1 输出:最多有多少个 1 是连续的 连续的定义:上下左右相邻
*/
/**
 * 1. 遍历，从右，从下，从左，从右，遇到1加，遇到0停
 * 2. 标记，遍历过的标记出来。
 */
const testInput = [
  [1, 0, 0, 1, 0], 
  [1, 0, 1],
  [0, 0, 1, 0, 1], 
  [1, 0, 1, 0, 1], 
  [1, 0, 1, 1],
];

function getNumber(arr, i, j){
  let num = 1;
  arr[i][j] = 0;
  if(arr[i-1]&& arr[i-1][j]){  //上边
      num += getNumber(arr,i - 1, j);
  }
   
  if(arr[i+1]&& arr[i+1][j]){  //下边
      num += getNumber(arr,i + 1, j);
  }
   
  if(arr[i][j-1]){   //左边
      num += getNumber(arr,i, j - 1);
  }
   
  if(arr[i][j+1]){   //右边
      num += getNumber(arr,i, j + 1 );
  }
  return num
}
  function getMax(arr){
      let max = 0
      for(let i =0 ;i<arr.length;i++){
          for(let j = 0; j< arr[i].length; j++){
              const ele = arr[i][j]
              if(ele === 1){
                  const cur = getNumber(arr, i,j)
                  cur > max  && (max = cur)
              }
          }
      }
      return max
  }

  // const start = window.performance.now()
  console.log(getMax(testInput))
  // console.log('用时:',window.performance.now() - start)






  var temp = [96, 86, 69, 12, 97, 40, 48, 42, 14, 82, 53, 68, 29, 51]
    function fun1(arr, n) {
      if (n == arr.length - 1) {
        return arr[n]
      }
      var v = fun1(arr, n + 1)
      return arr[n] > v ? arr[n] : v
    }
    console.log(fun1(temp, 0), 'fun1')

  var temp2 = [11, 21, 82, 91, 38, 84, 77, 94, 71, 74, 52]
  function fun2(arr, i, j) {
    if (j - i == 1) {
      return arr[i] > arr[j] ? arr[i] : arr[j]
    }
    var t = Math.ceil((i + j) / 2)
    var x = fun2(arr, i, t)
    var y = fun2(arr, t, j)
    return x > y ? x : y
  }
  console.log(fun2(temp2, 0, temp2.length - 1), 'fun2')