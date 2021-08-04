/*
 * @lc app=leetcode.cn id=106 lang=typescript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (inorder.length === 0 || postorder.length === 0) return null

  if (inorder.length === 1) return new TreeNode(inorder[0], null, null)
  const rootVal = postorder[postorder.length-1]
  let index = 0;
  for (let i = 0; i < inorder.length; i++) {
    const element = inorder[i];
    if (element === rootVal) {
      index = i
      break;
    }
  }
  
  const leftInorder = inorder.slice(0, index)
  const rightInorder = inorder.slice(index+1, inorder.length)

  const leftPostorder = postorder.slice(0, index)
  const rightPostorder = postorder.slice(index, postorder.length - 1)
  return new TreeNode(
    rootVal, 
    buildTree(leftInorder, leftPostorder),
    buildTree(rightInorder, rightPostorder)
  )
};
// @lc code=end

