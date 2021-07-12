//输入一个字符串，返回这个字符串的所有组合顺序
const g = (str, arr = [], newStr = '') => {
 if(str.length < 1){
   arr.push(newStr);
  }
  if(arr[0] && (arr[0].split('').reverse().join('') === arr[arr.length-1])){
   console.log(arr);
    return arr;
  }
 for (let i = 0; i<str.length; i++){
   let tmpArr = str.split('');
    let m = tmpArr.splice(i,1)[0];
    tmpStr = tmpArr.join('');
   g(tmpStr, arr, newStr+m);
  }
}
 g('abcd');
 g('abc')