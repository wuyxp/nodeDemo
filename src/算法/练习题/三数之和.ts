/**
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
示例 2：

输入：nums = []
输出：[]
示例 3：

输入：nums = [0]
输出：[]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return []
  const result: number[][] = []
  const len = nums.length
  quickSort(nums, 0, len)
  console.log(nums);

  let l = 1
  let r = len - 1
  let end = len - 2
  for (let i = 0; i < end; i++) {
    l = i
    r = len - 1
    const cur = nums[i];
    if (i > 0 && nums[i - 1] === cur) continue
    while (l < r) {
      if ((nums[l] + nums[r] + cur) > 0) {
        r--
      } else if ((nums[l] + nums[r] + cur) < 0) {
        l++
      } else {
        result.push([cur, nums[l], nums[r]])
        l++
        r--
        while (nums[l] === nums[l-1] && l < r) {
          l++
        }
        while (nums[r] === nums[r+1] && l < r) {
          r--
        }
      }
    }
  }
  
  return result
};

function quickSort(nums: number[], begin: number, end: number) {
  if ((end - begin) < 1) return
  let s = begin
  let e = end
  const axisIndex = begin + Math.floor((end - begin) * Math.random())
  const value = nums[axisIndex]
  swap(nums, begin, axisIndex)

  while ((end - begin) > 1) {
    while ((end - begin) > 1) {
      if (nums[end-1] > value) {
        end--
      } else {
        swap(nums, begin++, end - 1)
        break;
      }
    }
    
    while ((end - begin) > 1) {
      if (nums[begin] < nums[end-1]) {
        begin++
      } else {
        swap(nums, begin, end - 1)
        end--
        break
      }
    }
  }
  nums[begin] = value 
  quickSort(nums, s, begin)
  quickSort(nums, end, e)
}

function swap (nums: number[], i: number, j: number) {
  let v = nums[i]
  nums[i] = nums[j]
  nums[j] = v
}

console.log(threeSum([-2,0,1,1,2]))

console.log(threeSum([-1,0,1,2,-1,-4, 3, 6, -3, 0, 8, 2]))

console.log(threeSum([-1,0,1,2,-1,-4]))

console.log(threeSum([0, 0, 0]))