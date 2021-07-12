var arr = [1,2,6,4,7,2,4];
(function(){
    var _uniq = function(arr){
        if(!Array.isArray(arr)) return [];
        if(typeof Set === 'function'){
            return [...new Set(arr)]
        }else{
            var newArr = [],j = arr.length,i=0;
            for(i;i<j;i++){
                if(newArr.indexOf(arr[i]) >= 0){
                    continue;
                }else{
                    newArr.push(arr[i])
                }
            }
            return newArr;
        }
    }
    var _sort = function(arr){
        return arr.sort(function(a,b){return a>b})
    }
    Array.prototype.uniqAndSort = function(){
        return _sort(_uniq(this))
    }
})();
console.log(arr);
console.log(arr.uniqAndSort());