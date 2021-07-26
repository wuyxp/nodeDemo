/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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

function levelOrder(root: TreeNode | null): number[][] {
  if(root === null) return []
  const queue = [root]
  let width = 1 // 当前树宽度
  let nextWidth = 0 // 下一行树宽度
  const result: number[][] = [[]]

  while(queue.length > 0) {
    const cNode = queue.pop()
    const size = result.length-1
    width--

    result[size].push(cNode.val)
    if (cNode.left) {
      queue.unshift(cNode.left)
      nextWidth++
    }
    if (cNode.right) {
      queue.unshift(cNode.right)
      nextWidth++
    }
    if (width === 0 && queue.length > 0) {
      result.push([])
      width = nextWidth 
      nextWidth = 0
    }
    
  }
  return result
};
// @lc code=end

