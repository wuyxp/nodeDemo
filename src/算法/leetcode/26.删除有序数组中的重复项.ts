/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start

// 看评论想一种新办法, 双指针，然后
function removeDuplicates(nums: number[]): number {
  let last = 0
  for (let index = 1; index < nums.length; index++) {
    if (nums[last] !== nums[index]) {
      nums[++last] = nums[index]
    }
  }
  return last + 1
};

// 该方法由于用到了 数组的splice 方法，效率很低
// function removeDuplicates(nums: number[]): number {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i + 1]){
//       nums.splice(i, 1)
//       i--
//     }
//   }
//   return nums.length
// };
// @lc code=end

