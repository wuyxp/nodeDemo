/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */


// @lc code=start
/**
 * 以下为备份
 * @param nums 
 * @param target 
 * @returns 
 */
/*
 function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 0) return [-1, -1]
  let index = nums.length >> 1;
  let range = index
  while(index >= 0 && index < nums.length) {
    range = range >> 1
    range = range === 0 ? 1 : range
    if (nums[index] > target) {
      if (nums[index - 1] < target) return [-1, -1]
      index = index - range
    } else if (nums[index] < target) {
      if (nums[index + 1] > target) return [-1, -1]
      index = index + range
    } else {
      break
    }
  }
  console.log('index---',index)
  if (index < 0 || index >= nums.length) return [-1, -1]
  let prev = index
  let next = index
  let result = [-1, -1]
  while (nums[prev] === target || nums[next] === target){
    if (nums[++next] !== target && result[1] === -1) {
      result[1] = next - 1
    }
    if (nums[--prev] !== target && result[0] === -1) {
      result[0] = prev + 1
    }
    
  }
  return result
};

*/
function searchRange(nums: number[], target: number): number[] {
  const result = [-1, -1]
  if (nums.length === 0) return result
  let end = nums.length
  let start = 0
  let index = -1
  let prev = -1
  let next = -1
  let mid = -1
  console.log('0------')
  while(start < end) {
    mid = ((end - start) >> 1) + start
    if (target > nums[mid]) {
      start = mid + 1
    } else if (target < nums[mid]) {
      end = mid
    } else {
      index = mid
      break
    }
  }
  console.log('1------')
  console.log(index)
  if (index < 0) return result
  prev = next = index

  while(nums[prev] === target || nums[next] === target) {
    if (nums[prev] === target) {
      prev--
    }
    if (nums[next] === target) {
      next++
    }
  }
  
  return [prev + 1, next - 1]
};
// @lc code=end

