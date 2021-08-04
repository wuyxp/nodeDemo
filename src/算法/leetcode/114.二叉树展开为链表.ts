/*
 * @lc app=leetcode.cn id=114 lang=typescript
 *
 * [114] 二叉树展开为链表
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

function router (node) {
  if (node === null) return null
  if (node.left === null && node.right === null) return node
  router(node.left)

  let left = node.left
  let right = node.right

  if (left === null && right !== null) {
    
  } else if (left !== null && right === null) {
    node.right = left 
    node.left = null
  } else {
    node.right = left
    node.left = null
    while(node.right !== null) {
      node = node.right
    }
    node.right = right
  }
  router(node.right)
}
/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  router(root)
};
// @lc code=end

