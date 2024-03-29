//  红包算法
/*
fn(100, 5)
=> [1, 5, 50, 40, 4]
*/
// 100随机分成5份。
// 随机的，可以相同，但必须大于1
const getRandom = (min, max) => parseInt(min + Math.random() * (max-min));
const fn = (total, num) => {

  let result = 0;
  let arr = [];
  return (function deep(arr, total, num){
    if(num === 1){
      arr.push(total);
      return arr;
    }else{
      arr.push(result = getRandom(1, (total/num) * 2));
    }
    return deep(arr, total-result, num-1);
  })(arr, total, num)
}
// 返回数组

// 测试函数
const test = (fn, total) => num => total === fn(total, num).reduce((r, i) => r+i, 0);

let n1 = fn(100, 10);
let s1 = n1.reduce((r, i) => r+i, 0)
console.log(n1, s1);
console.log(test(fn, 200)(20));
console.log(test(fn, 500)(50));
console.log(test(fn, 1000)(100));