console.log('quicksort');

var arr = [85, 24, 63, 45, 17, 31, 96, 50];
console.log(arr);
function quicksort(arr){
  if(arr.length<=1) return arr;
  var pivotIndex = Math.floor(arr.length/2);
  var pivot = arr.splice(pivotIndex,1)[0];
  var left = [];
  var right = [];
  for(var i = 0,len=arr.length;i<len;i++){
    if(arr[i]< pivot){
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }
  return quicksort(left).concat([pivot],quicksort(right));
}
console.log(quicksort(arr));
