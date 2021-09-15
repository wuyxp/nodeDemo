/*
 * @lc app=leetcode.cn id=415 lang=typescript
 *
 * [415] 字符串相加
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
  let l1 = num1.length
  let l2 = num2.length
  let offset = 0
  let length = 0
  if (l1 > l2) {
    offset = l1 - l2
    length = l1
  } else {
    offset = l2 - l1
    length = l2
  }
  let result = ''
  let tmp:number = 0
  for (let index = 0; index < length; index++) {
    let n1 = l1 > 0 ? Number(num1[--l1]) : 0
    let n2 = l2 > 0 ? Number(num2[--l2]) : 0
    let sum = n1 + n2 + tmp
    tmp = Math.floor(sum / 10)
    result = sum % 10 + result
  }

  if(tmp > 0) {
    result = tmp + result
  }
  return result
};

// @lc code=end

