/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null || head.next === null) return false
    let slowPoint = head
    let fastPoint = head.next
    while(true) {
      if (slowPoint.next === null || fastPoint.next === null || fastPoint.next.next === null) return false
      if(slowPoint === fastPoint) return true
      slowPoint = slowPoint.next
      fastPoint = fastPoint.next.next
    }
};
// @lc code=end

