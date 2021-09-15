/**
 * 
第1组：

一、二和

给定一个整数数组，找到两个元素的所有对，它们加起来就是一个特定的目标数。结果应该是不同的，每个结果对中的元素应该按升序排列。

示例1：输入：[1,4，-2,3,0,1]，目标=1；输出：[-2,3]，[0,1]]
 */

function getNumsForTarget(nums, target) {
  const result = []
  const m = {}
  for (let i = 0; i< nums.length; i ++){
    if (m[nums[i]]) return

    for (let j = i; j < nums.length; j++) {
      if ((nums[i] + nums[j] === target) && (nums[j] >= nums[i])) {
        result.push([nums[i], nums[j]])
        m[nums[i]] = true
      }
    }
  }
  return result
}


console.log(getNumsForTarget([1,4,-2,3,0,1], 1));