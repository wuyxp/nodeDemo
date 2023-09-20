/**
 * 代码题，已知数据格式，实现一个函数 fn ，给一个 id 找出链条中其对应的所有的父级 name （用DFS写了一遍）能用广度优先写一遍吗？
 */

interface ICityData {
  id: string;
  name: string;
  children?: ICityData[]
}

const defQueryPath = (cityData:ICityData, id: string, path: string[]): string[]  => {
  if (cityData?.id === id) return path
  const children = cityData?.children
  if (!children) return []
  for (let i = 0; i < children.length; i++) {
    const gen = defQueryPath(children[i], id, [...path, children[i].name])
    if (gen?.length) {
      return gen
    }
  }
  return []
}

const queryPath = (cityData:ICityData[], id: string) => {
  if(cityData.length === 0 || id === '') return []
  for (let i = 0; i < cityData.length; i++) {
    const gen = defQueryPath(cityData[i], id, [cityData[i].name])
    if (gen?.length) {
      return gen
    }
  }
  return []
}

// 输入 45dss 返回 ['广东省', '深圳市']
const cityData: ICityData[] = [
  {
    id: 'axzx',
    name: '广东省',
    children: [
      {
        id: 'sdsd',
        name: '深圳市',
        children: [
          {
            id: '45dss',
            name: '南山区',
          },
          {
            id: 'sdsd11',
            name: '福田区',
            children: [
              {
                id: 'ddrr2',
                name: 'A街道',
              },
            ],
          },
        ],
      },
      {
        id: '2323d',
        name: '东莞市',
        children: [
          {
            id: 'xxs2',
            name: 'A区',
          },
          {
            id: 'kklio2',
            name: 'B区',
          },
        ],
      },
    ],
  },
];

console.log("www--------->queryPath--111", queryPath(cityData, 'sdsd11'))
console.log("www--------->queryPath--222", queryPath(cityData, 'kklio2'))
