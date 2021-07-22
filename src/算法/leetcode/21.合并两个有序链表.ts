/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

// 非递归模式
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null) {
    return l2
  }
  if (l2 === null) {
    return l1
  }
  let node
  if (l1.val <= l2.val){
    node = l1
  } else {
    node = l2
    let tmp = l2.next
    node.next = l1
    l2 = tmp
    l1 = node
  }
  while(l1 !== null && l2 !== null) {
    if (l1.next === null) {
      l1.next = l2
      return node
    } else if (l2 === null) {
      return node
    } else {
      let tmp
      let tmp1
      if (l1.next.val <= l2.val) {
        l1 = l1.next
      } else {
        tmp = l2.next
        tmp1 = l1.next
        l1.next = l2
        l1.next.next = tmp1
        l2 = tmp
      }
    }
  }
  return node
};

// 递归模式
function mergeTwoLists1(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null) return l2
  if (l2 === null) return l1
  let first
  if (l1.val < l2.val) {
    first = l1
    l1 = l1.next
  } else {
    first = l2
    l2 = l2.next
  }
  first.next = mergeTwoLists(l1, l2)
  return first
};
// @lc code=end

