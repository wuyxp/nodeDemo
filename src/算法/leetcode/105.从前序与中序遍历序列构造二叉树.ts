/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {

  if (preorder.length === 0) return null
  const rootVal = preorder[0]
  let index = 0
  for (let i = 0; i < inorder.length; i++) {
    if(rootVal === inorder[i]) {
      index = i
      break
    }
  }
  const leftPreorderNumber = preorder.slice(1, index + 1)
  const leftInorderNumber = inorder.slice(0, index)

  const rightPreorderNumber = preorder.slice(index+1, preorder.length)
  const rightInorderNumber = inorder.slice(index+1, inorder.length)

  const root = new TreeNode(
    rootVal, 
    buildTree(leftPreorderNumber, leftInorderNumber),
    buildTree(rightPreorderNumber, rightInorderNumber)
    )

  return root
};
// @lc code=end

