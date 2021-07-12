var arr = [2,3,1,3,3,2,1];
var cache = {};
var newArr = [];
for( var i = 0;i<arr.length;i++){
    if(!cache[arr[i]]){
        newArr.push([arr[i]]);
        cache[arr[i]]=(newArr.length);
    } 
    else{
        newArr[cache[arr[i]]-1].push(arr[i])
    }
}
console.log(arr);
console.log('--------');
console.log(newArr.reduce((a,b) => a.concat(b)));

var cache2 = {};
var index2 = 1; 
for(var i=0;i<arr.length;i++){
    !cache2[arr[i]] && (cache2[arr[i]] = index2++);
    setTimeout((function(i){
        return function(){
            console.log(i)
        }
    })(arr[i]),cache2[arr[i]])
}
