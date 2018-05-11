/* 
二叉树的层次遍历
https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/description/
给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

返回其自底向上的层次遍历为：

[
  [15,7],
  [9,20],
  [3]
]
*/



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if(!(Array.isArray(root) && root.length>0)){
    return [];
  }
  let index = 0;
  let result = [];
  let tmpindex = 0;
  while(root.length > 0){
    tmpindex = index = 0;
    while(root.length > 2**index){
      index++;
      tmpindex = 2**(index-1);
    }
    result.push(root.splice(tmpindex-1).filter(i => !!i));
  }
  return result;
};


console.log(levelOrderBottom([3,9,20,null,null,15,7]));
// console.log(levelOrderBottom([3,9,20]));