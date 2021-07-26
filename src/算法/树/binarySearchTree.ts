/**
 * 二叉搜索树
 * 又叫做 二叉排序树 二叉查找树
 * 任意一个节点的值都大于其左子树所有节点的值
 * 任意一个节点的值都小于其右子树所有节点的值
 * 
 */

import BinaryTree, { Node, nodeOfnull } from './binaryTree'

type compareFun<E> = (node1: E, node2: E) => number;
export default class BinarySearchTree<E> extends BinaryTree<E> {

  private compare: compareFun<E>
  constructor(compare: compareFun<E> = (n1, n2) => (n1 as unknown as number) - (n2 as unknown as number)) {
    super()
    this.compare = compare
  }

  protected createNode(element:E, parent:Node<E> | null) {
    return new Node(element, parent)
  }

  public add (element: E): void {
    if (this._size === 0) {
      this.root = this.createNode(element, null)
      this._size++
      this.afterAdd(this.root)
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
        const newNode = this.createNode(element, parent)
        if (result > 0) {
          // 左侧大
          parent.left = newNode
        } else if (result < 0) {
          // 右侧大
          parent.right = newNode
        }
        this.afterAdd(newNode)
        this._size++
      }
    }
  }

  /**
   * 新增节点后调用
   * @param node 新增的node节点
   */
  protected afterAdd(node:Node<E>) {
  }

  /**
   * 删除节点后调用
   * @param node 删除的节点
   */
  protected afterRemove(node:Node<E>) {
  }

  /**
   * 私有方法，根据元素查找对应节点
   * @param element 查找元素值
   * @returns 对应节点
   */
   protected getNode (element: E): nodeOfnull<E> {
    if (this.root === null) return null
    let node: nodeOfnull<E> = this.root
    while(node !== null) {
      const result = this.compare(element, node.element)
      if (result === 0) return node
      if (result > 0) {
        node = node.right
      } else {
        node = node.left
      }
    }
    return null
  }
}