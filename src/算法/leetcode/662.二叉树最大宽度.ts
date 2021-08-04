/*
 * @lc app=leetcode.cn id=662 lang=typescript
 *
 * [662] 二叉树最大宽度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function widthOfBinaryTree(root: TreeNode | null): number {

  if (root === null) return 0
  let size = 1
  let height = 1
  let queue = [root]
  let nextSize = 0

  let result: any[][] = [[]]

  let lastLevel = false

  let maxWidth = 0  // 最大的宽度
  let maxHight = 0 // 最大宽度所在的高度 

  let pLeft = -1   // 当前行的 左指针
  let pRight = -1  // 当前行的右指针

  while(!lastLevel) {

    const current = queue.shift()
    size--
    const lastLength = result.length - 1
    if (current) {
      result[lastLength].push(current.val)
      if (pLeft < 0) {
        pLeft = result[lastLength].length
      }
      pRight = result[lastLength].length

      queue.push(current.left)
      queue.push(current.right)
    } else {
      result[lastLength].push(null)
      queue.push(null)
      queue.push(null)
    }
    
    nextSize += 2

    // console.log(size)
    if(size === 0) {
      result.push([])
      lastLevel = (pLeft === -1 && pRight === -1)

      const w = pRight - pLeft + 1
      if (maxWidth < w) {
        maxWidth = w
        maxHight = height
      }

      pLeft = -1
      pRight = -1

      height++
      size = nextSize
      nextSize = 0

    }

    // if (current !== null && current.left !== null || (current !== null && current.right !== null)) {
    //   lastLevel = false
    // }
    

  }

  return maxWidth
};
// @lc code=end

