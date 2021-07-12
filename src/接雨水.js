// https://leetcode-cn.com/problems/trapping-rain-water-ii/description/

/*

给定一个m x n的矩阵，其中的值均为正整数，代表二维高度图每个单元的高度，请计算图中形状最多能接多少体积的雨水。

说明:

m 和 n 都是小于110的整数。每一个单位的高度都大于0 且小于 20000。
*/


/**
 * 找出一个heightMap返回最大的柱
 * @param {number[][]} heightMap
 * @return {number}
 */
const queryMaxHeight = heightMap => heightMap.reduce((maxHeight, item) => Math.max(...item, maxHeight), 0);

/**
 * 找出一个heightMap返回在从上到下当前平面的坐标图
 * @param {number[][]} heightMap
 * @return {number}
 */
const mapHeight = (heightMap, height) => heightMap.reduce((mapHeight, item) => (mapHeight.push(item.map(i => height > i ? 1: 2)), mapHeight), []);

// 根据一个平面heightMap，返回这个平面height中的被包裹的空白数量
const getRowCount = heightMap => {
// 空白是1，围墙是2
  // console.log(heightMap);

    // 从上往下
    let rowLength = heightMap.length;
    if(rowLength === 0 ){
        return 0;
    }
    let celLength = heightMap[0].length;
    for(let i=0;i<celLength;i++){
      for(let j=0; j<rowLength; j++){
        if(heightMap[j][i] < 2){
          heightMap[j][i] = 0;
        }else{
          break;
        }
      }
    }

    // 从左向右
    for(let i=0;i<rowLength;i++){
      for(let j=0; j<celLength; j++){
        if(heightMap[i][j] < 2){
          heightMap[i][j] = 0;
        }else{
          break;
        }
      }
    }

    // 从右向左
    for(let i=rowLength-1;i>=0;i--){
      for(let j=celLength-1; j>=0; j--){
        if(heightMap[i][j] < 2){
          heightMap[i][j] = 0;
        }else{
          break;
        }
      }
    } 

    // 从下往上
    for(let i=0;i<celLength;i++){
      for(let j=rowLength-1; j>=0; j--){
        if(heightMap[j][i] < 2){
          heightMap[j][i] = 0;
        }else{
          break;
        }
      }
    }
    console.log(heightMap);

    for(let i=0;i<rowLength;i++){
      for(let j=0; j<celLength; j++){
        if(heightMap[i][j] === 0){
          if(heightMap[i][j+1] && heightMap[i][j+1] === 1){
            heightMap[i][j+1] = 0;
          }
          var tmp_j = j-1;
          while(tmp_j >= 0 && heightMap[i][tmp_j] === 1){
            heightMap[i][tmp_j] = 0;
            tmp_j--;
          }
        }
      }
    }
    for(let i=0;i<celLength;i++){
      for(let j=0; j<rowLength; j++){
        if(heightMap[j][i] === 0){
          if(heightMap[j][i+1] && heightMap[j][i+1] === 1){
            heightMap[j][i+1] = 0;
          }
          var tmp_j = j-1;
          while(tmp_j >= 0 && heightMap[tmp_j][i] === 1){
            heightMap[tmp_j][i] = 0;
            tmp_j--;
          }
        }
      }
    }

    var count = 0;
    // return heightMap.reduce((count, item) => {
    
    //   return  count+item.filter(i => i===1).length
    // },0);
    for(let i=0;i<rowLength;i++){
      for(let j=0; j<celLength; j++){
        if(heightMap[i][j] === 1){
          if(heightMap[i+1][j] && heightMap[i-1][j] && heightMap[i][j+1] && heightMap[i][j-1]){
            count = count +1;
          }
        }
      }
    }
    return count
}

/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
  var height = queryMaxHeight(heightMap)+1;
  var count = 0;
  for(var i=height;i>=0;i--){
    var maph = mapHeight(heightMap, i);
    // console.log(maph);
    var gc = getRowCount(maph);
    console.log(gc);
    count = count + gc;
  }
  return count
};

var r1 = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]];
var r2 = [[1,3,3,1,3,2],[3,2,1,3,2,3],[3,3,3,2,3,1]];
var r3 = [[12,13,1,12],[13,4,13,12],[13,8,10,12],[12,13,12,12],[13,13,13,13]];
var r4 = [[9,9,9,9,9,9,8,9,9,9,9],[9,0,0,0,0,0,1,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,9],[9,9,9,9,9,9,9,9,9,9,9]];
var r5 = [[9,9,9,9,9,9,8,9,9,9,9],[9,0,0,0,0,0,1,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,9],[9,9,9,9,9,9,9,9,9,9,9]];
var r6 = [[18,13,13,17,12,11],[17,2,6,10,5,10],[11,10,2,8,8,2],[12,6,10,8,8,7],[18,4,7,6,7,4],[20,5,9,2,3,10]];
var r7 = [[19383,10886,12777,16915,17793,18335,15386,10492,16649,11421],[12362,27,8690,59,7763,3926,540,3426,9172,5736],[15211,5368,2567,6429,5782,1530,2862,5123,4067,3135],[13929,9802,4022,3058,3069,8167,1393,8456,5011,8042],[16229,7373,4421,4919,3784,8537,5198,4324,8315,4370],[16413,3526,6091,8980,9956,1873,6862,9170,6996,7281],[12305,925,7084,6327,336,6505,846,1729,1313,5857],[16124,3895,9582,545,8814,3367,5434,364,4043,3750],[11087,6808,7276,7178,5788,3584,5403,2651,2754,2399],[19932,5060,9676,3368,7739,12,6226,8586,8094,7539]];
// console.log(queryMaxHeight(r1));
// console.log('-----------------');
// var hashMap = mapHeight(r1, 3);
// console.log(hashMap);
// console.log('-----------------');
// console.log(getRowCount(hashMap));
console.log(trapRainWater(r7)) // 4




