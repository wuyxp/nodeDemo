/*
 * @lc app=leetcode.cn id=107 lang=typescript
 *
 * [107] 二叉树的层序遍历 II
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

function levelOrderBottom(root: TreeNode | null): number[][] {

  if(root === null) return []
  let queue = [root]
  let result = []
  let tmpResult = []
  let size = 1 // 当前层数
  let nextSize = 0 // 下一层
  let node = root

  while(queue.length > 0) {
    node = queue.shift()
    tmpResult.push(node.val)
    if (node.left !== null) {
      queue.push(node.left)
      nextSize++
    }
    if (node.right !== null) {
      queue.push(node.right)
      nextSize++
    }
    size--
    if (size === 0) {
      result.unshift(tmpResult)
      tmpResult = []
      size = nextSize
      nextSize = 0
    }
  }
  return result
};
// @lc code=end

