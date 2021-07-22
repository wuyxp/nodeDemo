// 假设本地机器无法做加减乘除法，需要通过远程请求让服务端来实现。
// 以加法为例，现有远程API的模拟实现
const addRemote = async (a, b) => new Promise(resolve => {
  setTimeout(() => resolve(a + b), 1000)
})

/**
 * 我下面还有如下思考过程
 * 1. addRemote 是纯函数，所以要有函数记录功能
 * 2. 参数判断，当参数大于2时，要采用二分发去请求，时间耗费为 log(n)
 */


const add = (function() {
  const rMap = {}
  return function (...args) {
    if (args.length < 2) return Promise.resolve(args[0] || 0)
    
    const all = []
    while(args.length > 1) {
      let a1 = args.pop()
      let a2 = args.pop()
      let key = a1 > a2 ? `${a1}-${a2}` :  `${a2}-${a1}`
      if (typeof rMap[key] !== 'undefined') {
        all.push(Promise.resolve(rMap[key]))
      } else {
        all.push(addRemote(a1, a2).then(res => {rMap[key] = res; return res}))
      }
    }
    if (args.length === 1) {
      all.push(Promise.resolve(args[0]))
    }
    return Promise.all(all).then(ars => add(...ars))
  }
})()

// 请用示例验证运行结果:
add(1, 2)
  .then(result => {
      console.log(result) // 3
  })



add(3, 5, 2)
  .then(result => {
      console.log(result) // 10
  })

add(1, 3, 5, 2)
  .then(result => {
      console.log(result) // 10
  })

  add(1, 3, 5, 2, 9)
  .then(result => {
      console.log(result) // 10
  })
  add(1, 2, 9, 2, 9)
  .then(result => {
      console.log(result) // 10
  })

// 效率最低方式
function add1(...args) {
  if (args.length === 2) {
    return addRemote(args[0], args[1])
  } else {
    return addRemote(args[0], args[1]).then(res => add(res, ...args.slice(2)))
  }
}


