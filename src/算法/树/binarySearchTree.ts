/**
 * 二叉搜索树
 * 又叫做 二叉排序树 二叉查找树
 * 任意一个节点的值都大于其左子树所有节点的值
 * 任意一个节点的值都小于其右子树所有节点的值
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

export default class BinarySearchTree<E> {

  private _size = 0;
  public root: Node<E> | null = null
  private compare: (node1: E, node2: E) => number;
  constructor(compare: (node1: E, node2: E) => number) {
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

  public print(): void {
    console.log(this.root)
    console.log(this.size())
  }
}