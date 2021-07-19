/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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
 * 这个使用变量引用的方式，主要思路是
 * 1. 画图表示节点的联系关系
 * 2. 我必须要先定一个新节点，也就是 null
 * 3. 开始遍历节点，每遍历一个节点
 * 4. 把当前节点的 next 先给一个临时遍历进行操作
 * 5. 然后再把当前遍历 head 通过 head.next 进行赋值，防止一会next会变化
 * 6. 把临时变量的 next 要指向给新节点
 * 7. 在重新把新节点修改为这个临时变量的引用
 * 8. 这样可以保证新节点引用永远指向的最新节点
 * @param head 
 * @returns 
 */
/*
// 下面尝试用递归的方式写写
function reverseList(head: ListNode | null): ListNode | null {
  let result = null
  while(head !== null) {
    let current = head
    head = head.next

    current.next = result
    result = current
    
  }

  return result
};
*/

/**
 * 尝试使用递归方式去完成，之前写出来过，目前还是毫无头绪，等后续再学学算法再来解决
 * @param head 
 * @returns 
 */
function reverseList(head: ListNode | null): ListNode | null {
  // if (head === null) return head
  // let result = reverseList(head.next)
  // result.next = 
  // return result
}
// @lc code=end

