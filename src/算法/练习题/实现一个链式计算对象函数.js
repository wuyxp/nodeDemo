// 实现一个get(0).add(1).sub(2).mul(3)， 返回 -3; 我用 ts 定义包装类写的


class Comput {
  constructor(num){
    this.num = num
  }
  add (n) {
    this.num = this.num + n
    return thismk
  }
  sub (n) {
    this.num = this.num - n
    return this
  }
  mul (n) {
    this.num = this.num * n
    return this
  }
}

function get(num) {
  return new Comput(num)
}