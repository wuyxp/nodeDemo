// 假设本地机器无法做加减乘除法，需要通过远程请求让服务端来实现。
// 以加法为例，现有远程API的模拟实现
const addRemote = async (a, b) => new Promise(resolve => {
  setTimeout(() => resolve(a + b), 1000)
})



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


function add(...args) {
  if (args.length === 2) {
    return addRemote(args[0], args[1])
  } else {
    return addRemote(args[0], args[1]).then(res => add(res, ...args.slice(2)))
  }
}