const test = [[1,2,3],[4,5],[6,7,8,9]];

/**
 * const test = [[1,2,3],[4,5,6],[7,8,9]];



咋样写递归可以循环出
    1,4,7
    1,4,8
    1,4,9
    1,5,7

    1,5,8
    1,5,9
    1,6,7
    1,6,8
    1,6,9
test 这个数组的总数可能还会增加 不固定，每个数组的总数也不固定

 */

const deep = arr => {

  let defalutIndex = Array(arr.length).fill(0);
 
  let length = arr.length;
  const _arr = (arr, indexs) => arr.map((item, index) => item[indexs[index]]);
  function _deep(indexs, cb) {
    cb.call(null, _arr(arr, indexs));
    let point = 1;
    while(point <= length){
      let t = indexs[length-point]++;
      if(t >= arr[length-point].length-1){
        indexs[length-point] = 0;
        point++;
      }else{
        return _deep(indexs, cb)
      }
    }
  }
  return cb => {
    return _deep(defalutIndex, cb);
  }
}

deep(test)(item => console.log(item));