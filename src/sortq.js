//两个有序数组，合并成一个有序数组;
let arr1 = [1,3,5,6,8,9,10,15,,,,,,,];
let arr2 = [2,3,5,6,7,8,11,12,15,18,,,,,,,,,,,];

const s = (a1, a2, len, res) => {
  // 省略对a1和a2的校验
  let i = 0;
  if(a1.length === 0 || a2.length === 0){
    res.concat(a1,a2);
    return res;
  }
  while(a1[i++]<=a2[0] && i<a2.length){}
  i--;
  res = res.concat(a1.slice(0,i),a2[0]);
  return s(a2.slice(1), a1.slice(i), len, res);
}
let reslut = s(arr1, arr2, arr1.length+arr2.length, []);

// function merge( A, m, B, n ) {
//   const a1 = arr1
//   return s()
// }

console.log(reslut);

// console.log(merge(arr1, 8, arr2, 10))
