/*
 * @lc app=leetcode.cn id=559 lang=typescript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

function maxDepth(root: Node | null): number {
    if (root === null) return 0
    let height = 0
    let resultHeight = 0

    function deepNode(node, height) {
      resultHeight = Math.max(resultHeight, height)
      for (let i = 0; i < node.children.length; i++) {
        deepNode(node.children[i], height + 1)
      }
    }
    let node = root
    deepNode(node, height + 1)
    return resultHeight
    
};
// @lc code=end

