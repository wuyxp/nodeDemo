/**
 * 二叉搜索树
 * 又叫做 二叉排序树 二叉查找树
 * 任意一个节点的值都大于其左子树所有节点的值
 * 任意一个节点的值都小于其右子树所有节点的值
 * 
 * 前序遍历
 * 中序遍历
 * 后续遍历
 * 层级遍历
 * 计算高度
 */

class Node<E> {
  public left: Node<E> | null = null
  public right: Node<E> | null = null
  public parent: Node<E> | null = null
  public element: E
  constructor(element: E, parent: Node<E> | null) {
    this.element = element
    this.parent = parent
  }
}

type compareFun<E> = (node1: E, node2: E) => number;
type orderFun<E> = (element: E) => void

export default class BinarySearchTree<E> {

  private _size = 0;
  public root: Node<E> | null = null
  private compare: compareFun<E>
  constructor(compare: compareFun<E>) {
    if (compare === undefined || typeof compare !== 'function') {
      this.compare = (n1: E, n2: E) => (n1 as unknown as number) - (n2 as unknown as number)
    } else {
      this.compare = compare
    }
  }

  public size ():number {
    return this._size
  }

  public isEmpty (): boolean {
    return this._size === 0
  }

  public clear (): void {
    // TODO 待定
  }

  public remove (element: E): void {}

  public add (element: E): void {
    if (this._size === 0) {
      this.root = new Node(element, null)
      this._size++
      return
    } else {
      let node  = this.root
      let parent: Node<E> | null = null
      let result: number = 0;
      while(node !== null) {
        result = this.compare(node.element, element)
        parent = node
        if (result > 0) {
          // 左侧大
          node = node.left
        } else if (result < 0) {
          // 右侧大
          node = node.right
        } else {
          // 比较相等
          node.element = element
          return
        }
      }
      if (parent !== null) {
        const newNode = new Node(element, parent)
        if (result > 0) {
          // 左侧大
          parent.left = newNode
        } else if (result < 0) {
          // 右侧大
          parent.right = newNode
        }
        this._size++
      }
    }
  }
  
  public container (element: E): boolean {
    return false
  }

  /**
   * 前序遍历： 先遍历根节点，然后依次遍历 左子树，右子树
   * @param callback 回调
   */
  public preorder (callback: orderFun<E>) {
    if (this.root === null) return
    this._preorder(this.root, callback)
  }

  // 递归方式前序遍历
  private _preorder(node: Node<E> | null, callback: orderFun<E>) {
    if (node === null) return
    typeof callback === 'function' && callback(node.element)
    this._preorder(node.left, callback)
    this._preorder(node.right, callback)
  }

  /**
   * 中序遍历
   * @param callback 回调
   */
  public inorder(callback: orderFun<E>) {
    if (this.root === null) return
    this._inorder(this.root, callback)
  }

  // 递归方式中序遍历
  private _inorder(node: Node<E> | null, callback: orderFun<E>) {
    if (node === null) return
    this._inorder(node.left, callback)
    typeof callback === 'function' && callback(node.element)
    this._inorder(node.right, callback)
  }
  

  /**
   * 后续遍历
   * @param callback 回调
   */
  public postorder(callback: orderFun<E>) {
    if (this.root === null) return
    this._postorder(this.root, callback)
  }

  // 递归方式后序遍历
  private _postorder(node: Node<E> | null, callback: orderFun<E>) {
    if (node === null) return
    this._postorder(node.left, callback)
    this._postorder(node.right, callback)
    typeof callback === 'function' && callback(node.element)
  }
  

  /**
   * 层级遍历并且获取高度:
   * 1. 使用数组来模拟队列，只是用 入队：push，出队：shift，队长度：length
   * 2. 首先入队 root 节点，并且高度 h 设为 1，设当前 行大小 s 为 1，下一行 n = 0
   * 3. 对头出队元素，并且将该元素的 左节点，右节点 分别进行入队操作，进行 n++,s--
   * 4. 当 s = 0 说明当前行完成，h+1，下一行的大小赋值给 s，下一行重置为n = 0
   * 5. 当队列为空时，返回 高度
   * @param callback 回调
   * @returns 返回行高
   */
  public levelorder(callback?: orderFun<E>): number {
    const queue: Node<E>[] = []
    let h = 0 // 行高
    let s = 0 // 当前行的大小 
    let n = 0 // 下一行的大小 

    if (this.root === null) return 0
    queue.push(this.root)
    s = 1

    while(queue.length > 0) {
      const node: Node<E> = queue.shift() as Node<E>
      typeof callback === 'function' && callback(node.element)
      s--;
      
      if (node.left !== null) {
        queue.push(node.left)
        n++
      }
      if (node.right !== null) {
        queue.push(node.right)
        n++
      }
      if (s === 0) {
        // 当前行完成
        h++
        s = n
        n = 0
      }
    }

    return h
  }

  private _printOrder(node:Node<E> | null, pre: string, result: string): string {
    if (node === null) return result
    result = result + pre + node.element + '\n'
    result = this._printOrder(node.left, pre + 'l--', result)
    result = this._printOrder(node.right, pre + 'r--', result)
    return result
  }

  public print(): void {
    if (this.root !== null) {
      let r = '总节点为: ' + this._size + '\n'
      r = r + this._printOrder(this.root, '', '')
      console.log(r);
    } else {
      console.log('节点为空');
    }
  }
}