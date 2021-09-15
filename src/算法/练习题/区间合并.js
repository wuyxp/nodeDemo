// function merge(intervals) {
//   if (intervals.length <= 1) return []
//   const result = [intervals[0]]
//   // 循环剩余数组
//   for(let i = 1; i<intervals.length; i++) {
//     let isMerge = false
//     // 循环合并后的数组
//     for (let j = 0; j<result.length;j++) {
//       if (intervals[i].start >= result[j].start && intervals[i].start <= result[j].end) {
//         if (intervals[i].end >= result[j].end ) {
//           result[j].end = intervals[i].end
//           isMerge = true
//         }
//       } else if (intervals[i].end <= result[j].end && intervals[i].end >= result[j].start) {
//         if (intervals[i].start <= result[j].start ) {
//           result[j].start = intervals[i].start
//           isMerge = true
//         }
//       }
//     }
//     if (!isMerge) {
//       result.push(intervals[i]) 
//     }
//   }
//   return result
// }
function merge(intervals) {

  if (intervals.length <= 1) return intervals
  // TODO
  intervals = intervals.sort((a, b) => {
    return a.start - b.start;
  })
  for (let i = 0; i < intervals.length - 1; i++) {
    const a1 = intervals[i]
    const a2 = intervals[i+1]
    if (isOverlapped(a1, a2)) {
      intervals[i] = {
        start: Math.min(a1.start, a2.start),
        end: Math.max(a1.end, a2.end)
      }
      intervals.splice(i + 1, 1);
      i--
    }
  }
  return intervals;
}

function isOverlapped(...arr) {
  if (arr[1].start >= arr[0].start && arr[1].start <= arr[0].end) {
    return true;
  }
  if (arr[1].end >= arr[0].start && arr[1].end <= arr[0].end) {
    return true;
  }
  return false;
}

// test case
const a = {
  start: 3,
  end: 5
};
const b = {
  start: 4,
  end: 6
};
const c = {
  start: 7,
  end: 8
};
const d = {
  start: 1,
  end: 3
}


// merge([a, b, c]); // [{ start: 3, end: 6 }, { start: 7, end: 8 }]
console.log(merge([a, b, c, d])); // [{ start: 3, end: 6 }, { start: 7, end: 8 }]