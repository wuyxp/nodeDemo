//总共10个球，每次只能拿一个或者两个，有多少种方法拿完！
//居然是个斐波那契数列！！！我操
function getB(num){
  if(num==1||num==2) return num;
  return getB(num-1)+getB(num-2);
}
console.log(getB(1));
console.log(getB(2));
console.log(getB(3));
console.log(getB(4));
console.log(getB(5));
console.log(getB(6));
console.log(getB(7));
console.log(getB(8));