/**
 * 著名的约瑟夫环问题（举例）
 * 1. 8个人围城一圈
 * 2. 找一个人开始数数
 * 3. 数到3 或者是 3的倍数，枪毙
 * 4. 下面的人接着数
 * 5. 最后剩下那个人
 */
import Cir from './circularDoubleLinkList'
export class JosephRing {
  private list;
  private current: any;
  constructor () {
    this.list = new Cir<number>()
    this.current = null
  }

  next() {
    this.current = this.current.next
  }
  reset() {
    this.current = this.list.first || null
  }
  remove() {
    const curr = this.current
    this.current = this.current.next
    this.list.remove(this.list.indexOf(curr.element))
    return curr
  }
  add(element: number) {
    this.list.add(element)
  }
  size () {
    return this.list.size()
  }
}

/**
 * 生成约瑟夫环
 * @param count 总共几人参与游戏
 * @param index 数到第几人开始枪毙
 * @returns 剩下的人是几号
 */
export default function gen(count: number, index: number) {
  const jos = new JosephRing()
  for (let i = 1; i <= count; i++) {
    jos.add(i)
  }
  jos.reset()
  while(jos.size() > 1) {
    for (let j = 1; j < index; j++) {
      jos.next()
    }
    jos.remove()
  }
  return jos.remove().element
}
