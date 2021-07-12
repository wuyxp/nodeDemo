let arr = ['accc','acbb','acdd'];
let arr1 = ['baadfasc','sadgb','bbbbdd'];
let arr2 = ['1241sadgsa','1241sadgsa4sdfasg','1241sasgs'];

function r(arr){
    return arr.slice(1).reduce((str,item) => {
        str = str.substring(0,item.length)
        for(var i=0;i< str.length;i++){
            if(str[i] != item[i]){
                break 
            }
        } 
        return item.substring(0,i)
    },arr[0]) || '-1'
}

console.log(r(arr));
console.log(r(arr1));
console.log(r(arr2));
