//总共10个球，每次只能拿一个或者两个，有多少种方法拿完！
//居然是个斐波那契数列！！！我操
function getB(num){
  if(num==0||num==1) return num;
  return getB(num-1)+getB(num-2);
}
console.log('使用递推式 ---------------------->')
console.log(getB(1));
console.log(getB(2));
console.log(getB(3));
console.log(getB(4));
console.log(getB(5));
console.log(getB(6));
console.log(getB(7));
console.log(getB(8));


// 使用斐波那契数列可以用上面的递推式，当然斐波那契数列也是个数列，也是有通项公式的。




function fib(num) {
  return (Math.pow(((1 + Math.sqrt(5)) / 2), num) - Math.pow(((1 - Math.sqrt(5)) / 2), num)) / Math.sqrt(5)
}
console.log('使用通项公式 ---------------------->')
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));


console.log('计算大数据的递推式所使用的时间')
console.time('递推式----->')
console.log('10 ---->   ',getB(42)) // 计算时间几乎是指数型增长 40个数1.5s, 41 个数 2.4s，42个数 3.9s
// console.log('100 ---->   ',getB(100)) // 100 也卡死
// console.log('1000 ---->   ',getB(1000)) // 递归1000个就卡死，10000就崩溃
console.timeEnd('递推式----->')


console.log('计算大数据的通项公式所使用的时间')
console.time('通项公式----->')
console.log('10 ---->   ',fib(42))
// console.log('100 ---->   ',fib(100)) // 0.044ms
// console.log('1000 ---->   ',fib(1000)) // 照样没事，0.145ms
console.timeEnd('通项公式----->')
