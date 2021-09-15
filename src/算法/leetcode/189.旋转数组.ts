/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */

 function rotate(nums: number[], k: number): void {

  if (nums.length === 0 || k === 0) return
  const length = nums.length

  let kk = k % length
  for (let i = 0; i< kk; i++) {
    let tindex = (i + kk) < length ? i + kk : (i + kk - length)
    let cindex = (length - kk + i) < length ? length - kk + i : (length - kk + i - length)
    let si = nums[i]
    let ti = nums[tindex]
    let ci = nums[cindex]

    nums[i] = ci
    nums[cindex] = ti
    nums[tindex] = si

    console.log(nums)
  }
};

rotate([1, 2, 3], 2)
// @lc code=end

