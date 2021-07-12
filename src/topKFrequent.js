/**
 * 
 * Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
  Output: ["i", "love"]
  Explanation: "i" and "love" are the two most frequent words.
  Note that "i" comes before "love" due to a lower alphabetical order.
 */

/**
 * Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
  Output: ["the", "is", "sunny", "day"]
  Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
  with the number of occurrence being 4, 3, 2 and 1 respectively.
 */

 /**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  let arr = [];
  words.reduce((d, i)=>{
    d[i] ? d[i]++ : d[i] =1;
    let t = 0;
    while(d[i] <= d[arr[t]] && t<arr.length){
      if(d[i] == d[arr[t]] && i<arr[t]){
        break;
      }
      t++;
    }
    arr.splice(t,0,i);
    return d;
  }, {});
  return [...new Set(arr)].slice(0,k);
};

var words1 = ["love", "i", "leetcode", "i", "love", "coding"]; 
var words2 = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"]; 

console.log(topKFrequent(words1,2));
console.log(topKFrequent(words2,4));