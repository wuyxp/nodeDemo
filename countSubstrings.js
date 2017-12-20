/**
 * Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:
Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
Example 2:
Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 */

 /**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let l = s.length;
  let start = 0;
  let num = 0;
  if(s === Array(s.length-1).fill(s[0])){
    num = (1 + s.length) * (s.length / 2);
  }
  while(start<l){
    let end = start+1;
    while(end <= l){
      if(end === start+1){
        num++;
      }else{
        let s1 = s.slice(start,end).split('').reverse().join('');
        let s2 = s.slice(start,end);
        console.log(s1,s2);
        if( s1 === s2 ){
          num++;
        }
      } 
      end++;
    }
    start++;
  }  
  return num;
};
console.log(countSubstrings('abc'));
console.log(countSubstrings('aaa'));
