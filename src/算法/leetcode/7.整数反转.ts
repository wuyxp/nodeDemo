/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
  let s = x.toString()
  let pre = ''
  let start = 0
  let result = ''
  if (s[0] === '-') {
    pre = '-'
    start = 1
  }
  for (let i = start; i < s.length; i++) {
    result = s[i] + result
  }
  const num = Number(pre + result)
  if (num > (Math.pow(2, 31) - 1) || num < (-1 * Math.pow(2, 31))) {
    return 0
  }
  return num
};
// @lc code=end

