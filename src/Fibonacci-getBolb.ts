//总共10个球，每次只能拿一个或者两个，有多少种方法拿完！
//居然是个斐波那契数列！！！我操
export function getB(num: number): number{
  if(num==0||num==1) return num;
  return getB(num-1)+getB(num-2);
}

// 使用斐波那契数列可以用上面的递推式，当然斐波那契数列也是个数列，也是有通项公式的。

export function fib(num: number): number {
  return Math.round((Math.pow(((1 + Math.sqrt(5)) / 2), num) - Math.pow(((1 - Math.sqrt(5)) / 2), num)) / Math.sqrt(5))
}


// 使用遍历模式

export function fibA(num: number): number {

  if (num < 3) return 1
  let result = 1
  let current = 1
  for (let index = 1; index < num; index++) {
    result = result + current
    current = result - current
  }
  return current
}
// console.log('前几项的和')

function sumFib(n: number) {
  let result = 0
  for(let i=1; i<=n; i++) {
    result += fib(i)
  }
  return result
}


// console.log('计算大数据的递推式所使用的时间')
// console.time('递推式----->')
// console.log('10 ---->   ',getB(42)) // 计算时间几乎是指数型增长 40个数1.5s, 41 个数 2.4s，42个数 3.9s
// // console.log('100 ---->   ',getB(100)) // 100 也卡死
// // console.log('1000 ---->   ',getB(1000)) // 递归1000个就卡死，10000就崩溃
// console.timeEnd('递推式----->')


// console.log('计算大数据的通项公式所使用的时间')
// console.time('通项公式----->')
// console.log('10 ---->   ',fib(42))
// // console.log('100 ---->   ',fib(100)) // 0.044ms
// // console.log('1000 ---->   ',fib(1000)) // 照样没事，0.145ms
// console.timeEnd('通项公式----->')
