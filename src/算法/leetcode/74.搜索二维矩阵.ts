/*
 * @lc app=leetcode.cn id=74 lang=typescript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {

  if (matrix.length === 0) return false
  if (matrix[0].length === 0) return false

  const row = matrix.length
  const column = matrix[0].length

  const total = row * column
  let start = 0
  let end = total

  while(end > start) {
    let mid = (end + start) >> 1
    let result = matrix[Math.floor(mid / column)][mid % column]
    if (result > target) {
      end = mid
    } else if (result < target) {
      start = mid + 1
    } else {
      return true
    }
  }

  return false
};
// @lc code=end

