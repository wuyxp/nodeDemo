let arr = [3,2,5,6,1,2,1,1,4,4,4,1]
function getMost(arr){
  return (arr.sort().join().match(/(?:([^,]+\,)\1*)/g)).sort((a,b) => a.match(/\,/g).length<b.match(/\,/g).length)[0].split().reduce((i,p) => ({key:p.split(',')[0],max:p.split(',').length-1}) ,{});
};
let data = getMost(arr);
console.log(data);

/*
Array.prototype.getMost = function(){
  var obj = this.reduce((p,n) =>(p[n]++ ||(p[n] = 1),(p.max=p.max>=p[n]?p.max:p[n]), (p.key=p.max>p[n]?p.key:n), p), {});
  return 'key: '+ obj.key+ ' len: '+obj.max;
}
*/