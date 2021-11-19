/**
 * 输入一个矩阵，让他们旋转打印出来
 */
const arr = [
  [1, 2, 3, 4],
  [10, 11, 12, 5],
  [9, 8, 7, 6],
]

const rotate = arr => {
  let newArr = [];

  // TODO 省略参数校验
  let row = arr.length;
  if(row <= 0) return [];
  let col = arr[0].length;
  if(col <= 0) return [];
  for(let i = col-1;i>=0;i--){
    let a = [];
    for(let j=0;j<row;j++){
      a.push(arr[j][i]); 
    }
    newArr.push(a);
  }
  return newArr;
}
console.log('源数组')
console.log(arr);
console.log('旋转后的数组');
console.log(rotate(arr));

let result = [];
let nArr = [...arr];
const length = nArr.length * nArr[0].length;
while(result.length <= length-1){
  result = [].concat(result, nArr.shift());
  nArr = rotate(nArr);
}

console.log('打印出来的数列');
console.log(result);

// export default const addone = num => num+1;

