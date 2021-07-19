/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
// 这个是模仿入栈，出栈的算法结果
function isValid(s: string): boolean {

  let r = ''
  for (let i = 0; i < s.length; i++) {
    const e = s[i];
    if(e === '[' || e === '(' || e === '{') {
      r = e + r
    } else {
      if (r.length === 0) return false
      if (
        (e === ']' && r[0] === '[') ||
        (e === ')' && r[0] === '(') ||
        (e === '}' && r[0] === '{')
      ) {
        r = r.slice(1)
      } else {
        return false
      }
    }
  }
  return r.length === 0
};
// @lc code=end

