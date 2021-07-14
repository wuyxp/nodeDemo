/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  // 递归模式解决
  if (head === null || head.next === null) return head
  const currentHead = reverseList(head.next)
  head.next.next = head
  head.next = null
  return currentHead
};


// var reverseList1 = function(head) {
//   // 用循环模式解决
//   if (head === null || head.next === null) return head
//   let newHead = null
//   let tmpHead = null
//   while(head !== null) {
//     tmpHead = head.next
//     head.next = newHead
//     newHead = head

//     head = tmpHead
//   }
//   return newHead
// };
// @lc code=end

