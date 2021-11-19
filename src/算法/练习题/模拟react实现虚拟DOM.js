/**
 * 实现虚拟dom的具体思路
 * createElement -> 生成vDom -> 生成fiber节点 -> 构建effect链表 -> 提交effect
 * 1. 首先实现 createElement
 */

const ELEMENT_TEXT = Symbol.for('ELEMENT_TEXT')  // 文本元素

const TAG_ROOT = Symbol.for('TAG_ROOT') // 根节点
const TAG_HOST = Symbol.for('TAG_HOST') // div p 元素节点
const TAG_TEXT = Symbol.for('TAG_TEXT') // 文本节点

const PLACEMENT = Symbol.for('PLACEMENT') // 副作用标识


/**
 * 从根节点渲染和调度，两个阶段
 * diff 阶段， 对比新旧的虚拟DOM，进行增量，更新或者创建。
 * render 阶段，这个阶段很费时间，因此要对任务进行拆分，拆分的维度是虚拟DOM， 此任务可以暂停
 *  1. 根据虚拟DOM 生成 fiber 树
 *  2. 收集 effectlist
 * 
 * commit阶段，这个阶段要一气呵成，不能中断，进行 DOM 的创建更新阶段
 * @param {*} root 根节点
 */
 let nextUnitOfWork = null  // 下一个工作单元
 let workInProgressRoot = null // RootFiber 根
 function scheduleRoot (root) {
   nextUnitOfWork = root
   workInProgressRoot = root
 }

/**
 * 创建虚拟dom对象
 * @param {string} type 元素的类型
 * @param {object} config 配置对象
 * @param  {...any} children 子元素
 * 
 * @returns {object} 返回创建的对象
 */
function createElement(type, config, ...children) {
  return {
    type,
    props: {
      ...config,
      children: children.map(child => {
        return typeof child === 'object' ? child : {
          type: ELEMENT_TEXT,
          props: {
            text: child,
            children: []
          }
        }
      })
    }
  }
}




const element = createElement('div', {
    id: 'A1',
    key: 'A1',
    style:{border: "1px solid red"}
  },
  'A1',
  createElement('div', {
    id: 'B1',
    key: 'B1',
    style:{border: "2px solid blue"}
  },
    'B1',
    createElement('div', {
      id: 'C1',
      key: 'C1',
      style:{border: "3px solid green"}
    }, 'C1'),
    createElement('div', {
      id: 'C2',
      key: 'C2',
      style:{border: "3px solid green"}
    }, 'C2')
  ),
  createElement('div', {
    id: 'B2',
    key: 'B2',
    style:{border: "2px solid blue"}
  }, 'B2')
)

// console.log(JSON.stringify(element, {}, 2))


function render(element, container) {
  console.log('createElement后的element---->', element, container)
  let rootFiber = {
    tag: TAG_ROOT,
    stateNode: container, // stateNode 如果是 真实元素，那么则是真实元素，否则是元素对象，或者是元素函数
    props: {
      children: [
        element
      ]
    }
  }
  scheduleRoot(rootFiber)
}

render(element, document.getElementById('root'))



/**
 * 给dom设置单独属性
 * @param {*} dom 
 * @param {*} key 
 * @param {*} value 
 */
function setProp (dom, key, value) {
  if (/^on/.test(key)) {
    dom[key.toLowerCase()] = value
  } else if (key === 'style') {
    if (value) {
      for (let styleName in value) {
        dom.style[styleName] = value[styleName]
      }
    }
  } else {
    dom.setAttribute(key, value)
  }
}

/**
 * 给dom设置对应的属性
 * @param {*} dom 
 * @param {*} oldProps 
 * @param {*} newProps 
 */
function setProps (dom, oldProps, newProps) {
  for (let key in oldProps) {}
  for (let key in newProps) {
    if (key !== 'children') {
      setProp(dom, key, newProps[key])
    }
  }
}

/**
 * 更新 DOM 设置对应的属性
 * @param {*} stateNode 
 * @param {*} oldProps 
 * @param {*} newProps 
 */
function updateDOM(stateNode, oldProps, newProps) {
  setProps(stateNode, oldProps, newProps)
}

/**
 * 如果 fiber 下 stateNode 没有节点，那么会走这个方法创建对应的节点
 * @param {*} currentFiber 
 */
function createDOM (currentFiber) {
  if (currentFiber.tag === TAG_TEXT) {
    return document.createTextNode(currentFiber.props.text)
  } else if (currentFiber.tag === TAG_HOST) {
    let stateNode = document.createElement(currentFiber.type)
    updateDOM(stateNode, {}, currentFiber.props)
    return stateNode
  }
}


/**
 * 1. 更新text文本类型的的节点
 * 2. 如果 此fiber 没有创建 DOM 节点，那么先创建 DOM
 * @param {*} currentFiber 
 */
 function updateHostText (currentFiber) {
  if(!currentFiber.stateNode) {
    currentFiber.stateNode = createDOM(currentFiber)
  }
}

/**
 * 创建原生dom节点
 * @param {*} currentFiber 
 */
function updateHost (currentFiber) {
  if(!currentFiber.stateNode) {
    currentFiber.stateNode = createDOM(currentFiber)
  }
  const newChildren = currentFiber.props.children
  reconcileChildren(currentFiber, newChildren)
}

/**
 * 1. 先处理自己，如果是一个原生节点，创建真实DOM
 * 2. 创建子 fiber
 * @param {*} currentFiber 
 */
function updateHostRoot(currentFiber) {
  let newChildren = currentFiber.props.children
  reconcileChildren(currentFiber, newChildren)
}


/**
 * 协调子节点
 * @param {*} currentFiber 
 * @param {*} newChildren 
 */
function reconcileChildren (currentFiber, newChildren) {
  let newChildrenIndex = 0
  let prevSibling = null
  while(newChildrenIndex < newChildren.length) {
    let newChild = newChildren[newChildrenIndex]
    let tag
    if (newChild.type === ELEMENT_TEXT) {
      tag = TAG_TEXT
    } else if(typeof newChild.type === 'string') {
      tag = TAG_HOST
    }

    let newFiber = {
      tag,
      type: newChild.type,
      props: newChild.props,
      stateNode: null,
      return: currentFiber,
      effectTag: PLACEMENT,
      nextEffect: null
    }

    if (newFiber) {
      if (newChildrenIndex  === 0) {
        currentFiber.child = newFiber
      } else {
        prevSibling.sibling = newFiber
      }
      prevSibling = newFiber
    }
    newChildrenIndex++
  }
}
/**
 * 开始向下执行当前任务
 * @param {*} currentFiber 
 * 1. 创建真实 DOM 元素
 * 2. 创建子 fiber
 * 3. 第一次协调会传入进去根节点
 * 4. 后续节点会进入对应的fiber节点
 */
function beginWork (currentFiber) {
  // debugger
  console.log(`当前开始执行了到了第 ${currentFiber} 个节点`, currentFiber)
  // console.time(currentFiber)
  if(currentFiber.tag === TAG_ROOT) {
    updateHostRoot(currentFiber)
  } else if (currentFiber.tag === TAG_TEXT) {
    updateHostText(currentFiber)
  } else if (currentFiber.tag === TAG_HOST) {
    updateHost(currentFiber)
  }
}

/**
 * 此功能收集有副作用的 fiber，然后组成 effect list
 * 1. 这里会构建effect 链表，类似于整棵树的后续遍历功能
 * 2. 每一个fiber有两个属性，firstEffect 指向第一个有副作用的 子 fiber ， lastEffect 指向最后一个有副作用的 fiber
 * 3. 中间的用 nextEffect 做成一个单链表
 * @param {*} vdom 
 */
function completeUnitOfWork (currentFiber) {
  console.log(`当前完成了第 ${currentFiber} 个节点`, currentFiber)
  // console.timeEnd(currentFiber.key)
  let returnFiber = currentFiber.return
  if (returnFiber) {
    // 下面是将当前节点的儿子挂载到父节点上
    if (!returnFiber.firstEffect) {
      returnFiber.firstEffect = currentFiber.firstEffect
    }
    
    if (currentFiber.lastEffect) {
      if (returnFiber.lastEffect) {
        returnFiber.lastEffect.nextEffect = currentFiber.firstEffect
      }
      returnFiber.lastEffect = currentFiber.lastEffect
    }
    
    // 下面是把自己的节点挂载到父节点上
    const effectTag = currentFiber.effectTag
    if (effectTag) {
      if (returnFiber.lastEffect) {
        returnFiber.lastEffect.nextEffect = currentFiber
        returnFiber.lastEffect = currentFiber
      } else {
        returnFiber.firstEffect = returnFiber.lastEffect = currentFiber
      }
    }
  }
}

/**
 * 以上是 render 阶段
 * 下面的 commit 是提交阶段
 */
function commitRoot() {
  let currentFiber = workInProgressRoot.firstEffect
  while(currentFiber) {
    commitWork(currentFiber)
    currentFiber = currentFiber.nextEffect
  }
  workInProgressRoot = null
}

/**
 * 提交每一个fiber 的副作用
 * @param {*} currentFiber 
 */
function commitWork (currentFiber) {
  if (!currentFiber) return
  let returnFiber = currentFiber.return
  console.log('commitWork 内部 ------> ')
  console.log(currentFiber)
  console.log(returnFiber)
  let returnDOM = returnFiber.stateNode
  if (currentFiber.effectTag === PLACEMENT) {
    console.log('commitWork if内部 ------> ', returnDOM, currentFiber.stateNode)
    returnDOM.appendChild(currentFiber.stateNode)
  }
  currentFiber.effectTag = null
}


// 根据浏览器当前帧是否有时间来决定是否要执行工作任务
function workloop (deadline) {  
  let shouldYield = false  // 是否让出时间片
  while(nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
    shouldYield = deadline.timeRemaining() < 1
  }
  // console.log('----->')
  // debugger
  // console.log(nextUnitOfWork)
  if (!nextUnitOfWork && workInProgressRoot) {
    console.log('render 结束')
    commitRoot()
  }
  requestIdleCallback(workloop, {timeout: 100})
}

// 执行当前任务，并且根据执行链条继续执行下面的任务
function performUnitOfWork(nextUnitOfWork) {
  // console.log(nextUnitOfWork)
  beginWork(nextUnitOfWork)
  if (nextUnitOfWork.child) return nextUnitOfWork.child

  while(nextUnitOfWork) {
    completeUnitOfWork(nextUnitOfWork)
    if (nextUnitOfWork.sibling) return nextUnitOfWork.sibling
    nextUnitOfWork = nextUnitOfWork.return
  }
}

requestIdleCallback(workloop, {timeout: 100})
