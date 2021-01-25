// 实现不使用async await, 实现函数 createFlow 延迟一秒输出1, 然后2延迟3秒输出3, 然后4
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const log = console.log
createFlow([
    () => delay(1000).then(() => log(1)),
    () => log(2),
    () => delay(3000).then(() => log(3)),
    () => log(4),
])

function createFlow(delayArr) {
  if(delayArr.length === 0) return;
  const firstCB = delayArr.shift()
  const cb = firstCB();
  if(cb && typeof cb.then === 'function') {
    cb.then((val) => {
      createFlow(delayArr)
    })
  } else {
    Promise.resolve(cb).then((val) => {
      createFlow(delayArr)
    })
  }
}
  

/*
function createFlow(delayArr) {
    function * mail() {
      for(let i =0;i<delayArr.length;i++){
        yield delayArr[i];
      }
    }
    const gen = mail();
    
    run();
    function run(){
      const g = gen.next()
      if(g.done) return;
      const cb = g.value();
      if(cb && typeof cb.then === 'function') {
        cb.then((val) => {
          run()
        })
      } else {
        Promise.resolve(cb).then((val) => {
          run()
        })
      }
    }
}
*/