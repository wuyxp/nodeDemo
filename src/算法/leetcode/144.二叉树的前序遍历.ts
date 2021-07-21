/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
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

function preorderTraversal(root: TreeNode | null): number[] {
  let stack = []

  if (root === null) return []

  let node = root
  let result = []
  stack.push(node)
  result.push(node.val)

  while (stack.length > 0) {

    if (node.left !== null) {
      node = node.left
      result.push(node.val)
      stack.push(node)
    } else if (node.right !== null) {
      node = node.right
      result.push(node.val)
      stack.push(node)
    } else {
      stack.pop()
      if (stack.length === 0) return result
      let newNode = stack[stack.length-1]
      if (newNode.left === node) {
        newNode.left = null
      } else if(newNode.right === node ){
        newNode.right = null
      }
      node = newNode
    }
  }
  return result
};
// @lc code=end

