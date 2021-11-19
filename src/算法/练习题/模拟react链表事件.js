// 还有一个链表操作，那就是在update中收集 effect 变化的更新状态时机

/**
 * requestAnimationFrame 回调函数会在页面绘制前执行
 * requestIdleCallback 请求空闲回调（浏览器在一帧的过程中如果有空闲时间，那么则会出现次回调函数）
 */

function sleep (delay) {
  let t = Date.now()
  while(Date.now() - t < delay) {}
}

function createWork (i, delay) {
  console.log(`第${i}个任务开始执行`)
  sleep(delay)
  console.log(`第${i}个任务结束执行`)
}

const works = [
  createWork.bind(null, 1, 20),
  createWork.bind(null, 2, 20),
  createWork.bind(null, 3, 20),
  createWork.bind(null, 4, 20),
]

// 这里在浏览器中要用 requestIdleCallback(回调函数, {timeout: 超时时间})
// setImmediate(workloop)
function workloop (
  // 这里如果使用 requestIdleCallback 的话，则会返回一个 dealine 对象，此对象有一个方法 timeRemaining() 返回此时此帧还剩余多少时间，didTimeout 返回此事件是否超时
) {
  performUnitOfWork()

  // 这里真正的判断应该是 
  // while((deadline.timeRemaining() > 0 || deadline.didTimeout) && works.length > 0 ) {}
  if (works.length > 0) {
    setImmediate(workloop)
  }
}

function performUnitOfWork () {
  works.shift()()
}



/**
 * 下面是对队列进行的操作
 * 对于队列会有一个开始指针，和一个结束指针
 */

class Update {
  constructor (payload, nextUpdate) {
    this.payload = payload
    this.nextUpdate = nextUpdate
  }
}

class UpdateQueue {
  constructor () {
    this.baseState = null
    this.firstUpdate = null
    this.lastUpdate = null
  }
  enqueueUpdate (update) {
    if (this.firstUpdate === null) {
      this.firstUpdate = this.lastUpdate = update
    } else {
      this.lastUpdate.nextUpdate = update
      this.lastUpdate = update
    }
  }
  forceUpdate () {
    let currentState = this.baseState || {}
    let currentUpdate = this.firstUpdate

    while(currentUpdate) {
      let nextState = typeof currentUpdate.payload === 'function' ? currentUpdate.payload(currentState) : currentUpdate.payload
      currentState = Object.assign({}, currentState, nextState)
      currentUpdate = currentUpdate.nextUpdate
    }

    this.firstUpdate = this.lastUpdate = null
    this.baseState = currentState
  }
}

const queue = new UpdateQueue()

queue.enqueueUpdate(new Update({name: 'www'}))
queue.enqueueUpdate(new Update({number: 0}))
queue.enqueueUpdate(new Update(state => ({number: state.number + 1})))
queue.enqueueUpdate(new Update(state => ({number: state.number + 2})))
queue.enqueueUpdate(new Update({name: 'abc'}))

queue.forceUpdate()

console.log(queue.baseState)