/**
 * 二叉树
 * 
 * 前序遍历
 * 中序遍历
 * 后续遍历
 * 层级遍历
 * 计算高度
 * 
 * 基类
 */

 export class Node<E> {
  public left: nodeOfnull<E> = null
  public right: nodeOfnull<E> = null
  public parent: nodeOfnull<E> = null
  public element: E
  constructor(element: E, parent: nodeOfnull<E>) {
    this.element = element
    this.parent = parent
  }

  public isLeafNode<E>(): boolean {
    if (this === null) return false
    return this.left === null && this.right === null
  }

  public isTowDegreeNode<E>(): boolean {
    if (this === null) return false
    return this.left !== null && this.right !== null
  }

  public isOnlyLeftDegreeNode<E>(): boolean {
    if (this === null) return false
    return this.left !== null && this.right === null
  }

  public isOnlyRightDegreeNode<E>(): boolean {
    if (this === null) return false
    return this.left === null && this.right !== null
  }
}

export type nodeOfnull<E> = Node<E> | null
export type orderFun<E> = (element: E) => void

export default abstract class BinaryTree<E> {

  protected _size = 0;
  public root: Node<E> | null = null

  public size ():number {
    return this._size
  }

  public isEmpty (): boolean {
    return this._size === 0
  }

  public clear (): void {
    this._size = 0 
    this.root = null
  }

  public remove (element: E): void {
    let node = this.getNode(element)
    if (node === null) return

    // 度为二的节点， 需要找前驱或者后继节点来替换，然后删除前驱或者后继节点即可

    if (node.isTowDegreeNode()) {
      let successor = this.succeedingNode(node)
      if (successor !== null) {
        node.element = successor.element
        node = successor
      } 
    }

    // 只有一个节点，并且是根节点，那么直接删除
    if (node === this.root && this._size === 1) {
      this.afterRemove(node)
      this.root = null
      this._size = 0
      return
    }

    // 叶子节点直接删除
    if (node.isLeafNode() && node.parent !== null) {
      this.afterRemove(node)
      if (node.parent.left === node) {
        node.parent.left = null
      } else {
        node.parent.right = null
      }
      return 
    }

    // 度为一的节点
    if (node.isOnlyLeftDegreeNode() || node.isOnlyRightDegreeNode()) {
      let current = (node.left ? node.left : node.right) as Node<E>
      current.parent = node.parent
      // 当前节点不是根节点
      if (node.parent !== null) {
        
        if (node.parent.left === node) {
          node.parent.left = current
        } else {
          node.parent.right = current
        }
      } else {
        // 当前是根节点
        this.root = current
      }
      this.afterRemove(node)
      return
    }
  }

  abstract add (element: E): void
  /**
   * 删除节点后调用
   * @param node 删除的节点
   */
  protected afterRemove(node:Node<E>) {
  }
  
  /**
   * 根据元素值返回树是否包含该元素
   * @param element 输入值
   * @returns 是否包含
   */
  public container (element: E): boolean {
    return this.getNode(element) !== null
  }


  /**
   * 根据中序查找值模式，获取该值的前一个值
   * @param node 当前值
   * @returns 返回前驱值
   */
  public precursor (element: E): E | null {
    const node =  this.precursorNode(this.getNode(element))
    return node ? node.element : null
  }

  /**
   * 根据中序查找值模式，获取该值的后一个值
   * @param node 当前值
   * @returns 返回后继值
   */
  public succeeding (element: E): E | null {
    const node =  this.succeedingNode(this.getNode(element))
    return node ? node.element : null
  }

  /**
   * 根据中序查找节点模式，获取该节点的前一个节点
   * @param node 当前节点
   * @returns 返回前驱节点
   */
   protected precursorNode (node: nodeOfnull<E>): nodeOfnull<E> {
    if (node === null) return null

    // left 节点不为空，那么查找 left 节点下的所有 right 节点
    if (node.left !== null) {
      let cNode = node.left
      while(cNode.right !== null) {
        cNode = cNode.right
      }
      return cNode
    }

    let cNode = node.parent
    if (cNode !== null) {
      // left 节点为空，但是父节点不为空，并且在父节点的rigth的上，那么返回父节点即可
      if (cNode.right === node) return cNode

      // left 节点为空，但是父节点不为空，并且在父节点的left的上，那么查找父节点的父节点一直到祖父节点的右节点
      while(cNode !== null) {
        if (cNode.parent === null) return null
        if (cNode.parent.right === cNode) return cNode.parent
        cNode = cNode.parent
      }
    }
    // left 节点为空，父节点为空，那就是说明当前及时 root节点，返回null即可
    return null
  }

  /**
   * 根据中序查找节点模式，获取该节点的后一个节点
   * @param node 当前节点
   * @returns 返回后继节点
   */
   protected succeedingNode (node: nodeOfnull<E>): nodeOfnull<E> {
    if (node === null) return null

    // right 节点不为空，那么查找 right 节点下的所有 left 节点
    if (node.right !== null) {
      let cNode = node.right
      while(cNode.left !== null) {
        cNode = cNode.left
      }
      return cNode
    }

    let cNode = node.parent
    if (cNode !== null) {
      // rigth 节点为空，但是父节点不为空，并且在父节点的left的上，那么返回父节点即可
      if (cNode.left === node) return cNode

      // right 节点为空，但是父节点不为空，并且在父节点的right的上，那么查找父节点的父节点一直到祖父节点的左节点
      while(cNode !== null) {
        if (cNode.parent === null) return null
        if (cNode.parent.left === cNode) return cNode.parent
        cNode = cNode.parent
      }
    }
    // left 节点为空，父节点为空，那就是说明当前及时 root节点，返回null即可
    return null
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
  protected _preorder(node: Node<E> | null, callback: orderFun<E>) {
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
  protected _inorder(node: Node<E> | null, callback: orderFun<E>) {
    if (node === null) return
    this._inorder(node.left, callback)
    typeof callback === 'function' && callback(node.element)
    this._inorder(node.right, callback)
  }
  

  /**
   * 私有方法，根据元素查找对应节点
   * @param element 查找元素值
   * @returns 对应节点
   */
   protected abstract getNode (element: E): nodeOfnull<E>

  /**
   * 后续遍历
   * @param callback 回调
   */
  public postorder(callback: orderFun<E>) {
    if (this.root === null) return
    this._postorder(this.root, callback)
  }

  // 递归方式后序遍历
  protected _postorder(node: Node<E> | null, callback: orderFun<E>) {
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

  protected _printOrder(node:Node<E> | null, pre: string, result: string): string {
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