// isMatch
// . 代表任意字符
// * 代表0个或者多个
/*
Some examples:
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "a*") → true
isMatch("aa", ".*") → true
isMatch("ab", ".*") → true
isMatch("aab", "c*a*b") → true
*/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
  if(!p) return false;
  var p = p.match(/[\w.](\*)?/g);
  var s_index = 0;
  var p_index = 0;
  var temp = '';
  const matchStr = (s, p) => {
    
  }
  while(p_index <= p.length){
    if(p[p_index].indexOf('*') === -1){
      //当前选项不存在*

    }else{
      //当前选项存在*

    }
    p_index++;
  }
}