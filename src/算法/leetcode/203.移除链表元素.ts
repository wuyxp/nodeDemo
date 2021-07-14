/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
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

// TODO 递归法
function removeElements(head: ListNode | null, val: number): ListNode | null {
  // 迭代法
  let resultHead = head
  while(head !== null) {
    if (head.val === val) {
      resultHead = head = head.next
    } else if (head.next !== null && head.next.val === val) {
      head.next = head.next.next
    } else {
      head = head.next
    }
  }
  return resultHead
};
// @lc code=end

