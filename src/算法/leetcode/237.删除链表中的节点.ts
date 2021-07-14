/*
 * @lc app=leetcode.cn id=237 lang=typescript
 *
 * [237] 删除链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(root: ListNode | null): void {
  while(root.next != null) {
    root.val = root.next.val
    if (root.next.next === null) {
      root.next = null
    } else {
      root = root.next
    }
  }
};
// @lc code=end

