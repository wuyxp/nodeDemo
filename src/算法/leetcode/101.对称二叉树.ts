/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true
  return sameValueNode(root.left, root.right)
  function sameValueNode(n1: TreeNode | null, n2: TreeNode | null): boolean {
    if (n1 === null && n2 === null) return true
    if ((n1 !== null && n2 === null) || (n1 === null && n2 !== null)) return false

    if (n1.val !== n2.val) return false

    return sameValueNode(n1.left, n2.right) && sameValueNode(n1.right, n2.left)
  }

};
// @lc code=end

