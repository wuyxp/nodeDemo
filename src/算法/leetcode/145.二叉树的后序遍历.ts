/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
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

// 再用迭代器模式后续遍历，这里主要用到的是压栈的操作吧
function postorderTraversal(root: TreeNode | null): number[] {

  let node = root
  let result: number[] = []
  if (node === null) return []
  let stack = [node] // 模拟栈的操作，只用 shift unshift length peek

  while(stack.length > 0) {
    
    let peek = stack[0]
    if (peek.left !== null) {
      stack.unshift(peek.left)
    } else if (peek.right !== null) {
      stack.unshift(peek.right)
    } else {
      let current = stack.shift()
      if (stack.length === 0) {
        result.push(current.val)
        return result
      }
      let p = stack[0]
      result.push(peek.val)
      if (p.left === current) {
        p.left = null
      } else {
        p.right = null
      }
    }
  }
  return result;
};

// 先用递归模式开始
function postorderTraversal1(root: TreeNode | null): number[] {

  let node = root
  let result: number[] = []
  if (node === null) return []

  function deepTree(node) {
    if (node.left !== null) deepTree(node.left)
    if (node.right !== null) deepTree(node.right)
    result.push(node.val)
  }
  deepTree(node)
  return result;
};
// @lc code=end

