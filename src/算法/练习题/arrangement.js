/**
 * 把所有的排列组合展示出来
 * 123 => 123,132,213,231,312,321
 * 1234 => 1234, 1243, 1324, 1342, 1432, 1423
 * 3 * 2 * 1
 * 4 * 3 * 2 * 1
 */
 function arrangement (arr, res, length) {
  const len = arr.length
  if (len < 1) {
    let last = res[res.length-1];
    if (length > last.length) {
      res[res.length-1] = res[res.length-2].slice(0, length - last.length) + last
    }
    res.push('')
  } else {
    for (let i = 0 ;i < len; i++) {
      let m = arr[i]
      if (res.length > 0) {
        res[res.length-1] = res[res.length-1]+ m
      } else {
        res.push(m)
      }
      arrangement([...arr.slice(0, i), ...arr.slice(i+1)], res, length)
    }
  }
  return res
 }

 function getArrList (arr) {
   let arg = []
    if(Array.isArray(arr)) {
      arg = arr
    } else {
      arg = [...arr]
    }
    return arrangement(arg, [], arg.length).slice(0, -1)
 }

//  console.log(getArrList(['1','2','3']))
console.log(getArrList('123'))
console.log('================================')
console.log(getArrList(['1','2','3', '4']))
//  console.log(getArrList(['1','2','3', '4', '5']))
//  console.log(getArrList(Array.from({length: 10}).map((i,index) => '' + index)))
