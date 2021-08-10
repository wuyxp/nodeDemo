// 通过过滤数组，将生成原数组的新增字段，删除字段
function filterArrayByArray(currentArray, filterArray, key) {
  let del = [...currentArray];
  let add = [...filterArray];
  let common = []

  for (let i = 0; i < currentArray.length; i++) {
    for (let j = 0; j < filterArray.length; j++) {
      if (currentArray[i][key] === filterArray[j][key]) {
        add = add.filter(item => item[key] != currentArray[i][key])
        del = del.filter(item => item[key] != currentArray[i][key])
        common.push(currentArray[i])
      }
    }
  }

  return {
    add,
    del,
    common
  }
}

const r1 = [ 
  { id: 10, text: '文化', user_id: 3 },
  { id: 3, text: '数学', user_id: 3 }
]

const r2 = [ 
  { id: 1, text: '历史', user_id: 3 },
  { id: 10, text: '文化', user_id: 3 },
  { id: 5, text: '语文', user_id: 3 },
]

const result = filterArrayByArray(r1, r2, 'id')
console.log(result)