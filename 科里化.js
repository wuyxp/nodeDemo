// 快手 能效部门的面试题
// 实现add函数
// 满足
// 1. add(1)(2).sum() // 3

// 2. add(1)(2)(3).sum() // 6

// 3. add(1)(2)(3)(4).sum() // 10


// let addOne = add(1);


// addOne(2) // 3

// addOne(2)  // 3

function add(param) {
  try {
    console.log(param);
  } catch (e) {
    console.dir(e)
  }
}

// add(1)
// add(1)(2)

let p = new Proxy({
  value: 1,
  valueOf() {
    return 1
  },
  toString() {
    return 'a'
  }
}, {
  get(tag, arg, aa) {
    console.log(tag, arg, aa)
  }
})

let o = {
  toString() {
    return 1
  },
  valueOf() {
    return 2
  }
}

console.log(o)
