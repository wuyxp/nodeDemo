/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

// 此处用递归，
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

  let index = 0
  function anymo(head: ListNode | null, n: number): ListNode | null  {

    if (head === null) return null
    head.next = anymo(head.next, n)
    index++
    if (index === n) {
      return head.next
    }

    return head
  }

  return anymo(head, n)
  
};
/*
// 快慢指针
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const result = head
  let slow = head
  let fast = head
  let index = 0
  
  while(fast.next !== null) {
    if (index === n) {
      slow = slow.next
    } else {
      index++
    }
    fast = fast.next
  }

  if (index === (n-1)) {
    return result.next
  }
  
  if(slow.next !== null) {
    slow.next = slow.next.next
  }
  return result
};
*/
/*
// 效率最差的两边遍历循环
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let size = 0
  const result = head
  while(head !== null) {
    size++
    head = head.next
  }
  
  const length = size - n - 1;
  let index = 0;
  head = result
  if (size === n) {
    return result.next
  }
  while(index !== length) {
    head = head.next
    index++
  }
  if (head && head.next !== null) {
    head.next = head.next.next
  } else {
    head.next = null
  }
  
  return result
};
*/
// @lc code=end

