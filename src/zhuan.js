console.log('输入1，2，3，4，5，6，7，8，9，10，11，12');
console.log('输出1，2，3，4，8，12，11，10，9，5，6，7');

const ARR = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
const ROW = 4, LINE = 4;

//console.log(ARR)
//console.log(ROW)
var index = 0;
var arr = [];
while(arr.length <= ARR.length){
    for(var i=index;i<(ROW-index);i++){
        arr.push(ARR[(ROW*index)+i]); 
    }
    for(var j=(index);j<(LINE-index);j++){
        arr.push(ARR[(j+1)*ROW-1]);
    }
    for(var m=(index+1);m<(ROW-index);m++){
        arr.push(ARR[(ROW-index)*(LINE-index)-1-m])
    }
    for(var n=(index+1);n<(LINE-index-1);n++){
        arr.push(ARR[(LINE-index-1-1)*(ROW)+index])
    }
    index++;
}



console.log(arr);
