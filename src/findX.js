//已知一个包含连续正整 n - m 的数组(顺序不确定), 去掉一个数 x (n<x<m), 写一个函数找出 x

// 例: 
const arr = [2,7,4,5,8,3];
// 此处参数只有 arr 本身
function findX(arr) {
  // 补全此处的代码
  let length = arr.length;
  if(length <= 2){
    return arr[0]+1;
  }
  if(!arguments[1]){
    arr.sort((a,b) => a-b);
  }
  let min = arr[0];
  let max = arr[length-1];
  let mid = Math.floor(length/2);
  if(arr[mid] <= Math.floor((min+max)/2)){
    return findX(arr.slice(mid), false)
  }else{
    return findX(arr.slice(0,mid), false)
  }
}; 
let num = findX(arr); // 返回 4 
console.log(num);

/*
function findX(arr){
var a = arr.sort();
return a.find((item, index) => {
 return a[index + 1] !== undefined && (item + 1 != a[index + 1]);
}) + 1;
}
*/
