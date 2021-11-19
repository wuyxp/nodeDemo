// react 中为了将虚拟dom（也就是树状结构遍历的时候可以进行中断效果，则将虚拟dom的树都使用链表链接起来。遍历的时候已链表的形式去遍历即可）

function beginDoWalk (vdom) {
  console.log(`当前开始执行了到了第 ${vdom.key} 个节点`)
  console.time(vdom.key)
 }

 function completeWalk (vdom) {
  console.log(`当前完成了第 ${vdom.key} 个节点`)
  console.timeEnd(vdom.key)
 }
 
const root = {
   key: 'A1',
   children: [
     {
       key: 'B1',
       children: [
         {
           key: 'C1',
           children: []
         },
         {
           key: 'C2',
           children: []
         }
       ]
     },
     {
       key: 'B2',
       children: []
     }
   ]
 }
/**
* 下面执行节点任务，采用深度遍历递归方式，进行执行任务
*/
 function walk(vdom) {
  beginDoWalk(vdom)
   vdom.children.forEach(v => {
     walk(v)
   })
  completeWalk(vdom)
 }

//  walk(root)


 /**
  * fiber 树的结构
  * 每一个 fiber 节点。至少包含三个指针
  * 1. reture 指向父节点
  * 2. child 指向第一个子节点
  * 3. sibling 指向第一个兄弟节点
  * 
  * 每次渲染有两个阶段
  * 1. reconciliation （协调/render阶段）此阶段认为是 diff 阶段，这个阶段可以被中断，这个阶段会找出所有的节点变更，这些变更被称为副作用 Effect
  * 2. commit（提交阶段）将上一个阶段计算出的 Effect 一次性执行了，这个阶段必须同步执行，不能中断
  */

  function sleep (delay) {
    let t = Date.now()
    while(Date.now() - t < delay) {}
  }

 // 构建 fiber 树
 const A1 = {type: 'div', key: 'A1'}
 const B1 = {type: 'div', key: 'B1'}
 const B2 = {type: 'div', key: 'B2'}
 const C1 = {type: 'div', key: 'C1'}
 const C2 = {type: 'div', key: 'C2'}
 const D1 = {type: 'div', key: 'D1'}

 A1.child = B1
 B1.child = C1
 B1.sibling = B2
 B1.return = A1
 B2.return = A1

 C1.sibling = C2
 C1.return = B1
 C2.return = B1

 C2.child = D1
 D1.return = C2

let nextUnitOfWork = A1
function walkFiber(deadline) {
  // 这里需要使用requestIdleCallBack 进行时间片进行分开执行
  while (nextUnitOfWork && (deadline.timeRemaining() > 1 || deadline.didTimeout)) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
  }
  if (!nextUnitOfWork) {
    console.log('render 阶段结束')
  } else {
    requestIdleCallback(walkFiber, {time: 20})
  }
}
function performUnitOfWork (fiber) {
  beginDoWalk(fiber)
  sleep(Math.random() * 200)
  if (fiber.child) return fiber.child
  while(fiber) {
    completeWalk(fiber)
    if (fiber.sibling) return fiber.sibling
    fiber = fiber.return
  }
}

requestIdleCallback(walkFiber, {time: 20})