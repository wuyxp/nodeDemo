// 渲染 100000000 思路
function renderLi (count = 10) {
  // 每次渲染条数
  const unitCount = 1000

  // 获取要渲染的dom节点
  const ul = document.getElementById("appUl")

  // 执行渲染
  loopRender(count)
  

  function loopRender (total) {
    // 获取单位要渲染的数量
    let tmpNum = unitCount

    // 将剩余要渲染的数量和单位数量进行对比
    if (total < unitCount) {

      // 如果剩余数量比单位数量小，那么直接把剩余数复制给要渲染的数量
      tmpNum = total
    } else {

      // 如果当前剩余数量比单位数量多，那么进行下一次循环
      requestAnimationFrame(function() {
        loopRender(count - unitCount)
      })
    }

    // 创建对象片段
    const fragment = document.createDocumentFragment();
    for(let i=0;i<tmpNum;i++){
      // 每次循环的时候将创建的dom 先加入对象碎片中
      fragment.appendChild(document.createElement('li'))
    }
    // 创建一批 增加一批
    ul.appendChild(fragment)
    
  }

}

renderLi(1000000000)