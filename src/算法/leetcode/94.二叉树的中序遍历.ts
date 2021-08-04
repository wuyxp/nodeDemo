/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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

function deep(node, fun) {
  if (node === null) return null
  deep(node.left, fun)
  fun(node.val)
  deep(node.right, fun)
}
function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return []
  let result:number[] = []

  deep(root, i => result.push(i))
  return result
};
// @lc code=end

