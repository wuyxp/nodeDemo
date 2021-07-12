// 随机一个多维数组，输出一个展开后的数组
const arr = [1,23,'s',[2,5,[2,'r'],4],'u',[6,[7,[[[9]]]]]];
let array = [];
const flux = arr => {
  //省略判断数组类型等校验。
  arr.forEach((item, i, a) => {
    if(Array.isArray(item)){
      flux(item)
    }else{
      array.push(item);
    }
  });
  return array;
}
const newArr = flux(arr);
console.log('递归添加--->');
console.log(array);

console.log('toString---------->');
console.log(arr.toString().split(','));

console.log('reduce------>');
const f = arr => arr.reduce((p,v,i) => (
  Array.isArray(v)? p = p.concat(f(v)): p.push(v),p
),[])
console.log(f(arr));