/**
 * 题目描述
要求使用原地算法，不能只改变节点内部的值，需要对实际的节点进行交换。
例如：
对于给定的单链表{10,20,30,40}，将其重新排序为{10,40,20,30}.
 */

function ListNode(x){
  this.val = x;
  this.next = null;
}

const head = new ListNode(10)
head.next = new ListNode(20)
head.next.next = new ListNode(30)
head.next.next.next = new ListNode(40)
head.next.next.next.next = new ListNode(50)
head.next.next.next.next.next = new ListNode(60)

function logListValue (head) {
  console.log('链表的值是 --------')
  
  while (head) {
    console.log(head.val)
    head = head.next
  }

  console.log('链表值输出结束 ------')
}
logListValue(head)

function reverseList (head) {
  const revserver = null
  while (head) {
    head.next = revserver
    revserver = head
    head = head.next
  }
  return revserver
}

logListValue(reverseList(head))


function reorderList( head ) {
  // write code here
  let copyHead = null
  let resultHead = head
  let index = 0
  let tempIndex = 0
  let reverHead = head
  while(reverHead.next) {
    reverHead.next.prev = reverHead
    reverHead = reverHead.next
    index++
  }
  console.log(head.val)
  console.log(head.next.val)
  console.log(index/2)

  return resultHead
}

const resultHead = reorderList(head)
console.log('=====')

console.log(resultHead.val)
console.log(resultHead.next.val)
console.log(resultHead.next.next.val)
console.log(resultHead.next.next.next.val)