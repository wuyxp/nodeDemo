import AbstractList from "./abstractList"
class Node<T> {
  element: T;
  next: Node<T> | null;
  constructor(element: T) {
    this.element = element
    this.next = null
  }
}
export default class LinkList<T> extends AbstractList<T> {
  first: Node<T> | null = null;
  inset(index: number, element: T): void {
    const node = this._getNode(index)
    const newNode = new Node(element)
    if(node !== null) {
      newNode.next = node.next
      node.next = newNode
      this._size++
    }
  }
  get(index: number): T | null {
    return this._getNode(index)?.element || null
  }
  set(index: number, element: T): void {
    const node = this._getNode(index)
    if(node !== null) {
      node.element = element
    }
  }
  remove(index: number): T | null {
    const node = this._getNode(index-1)
    const currentNode = node?.next
    if(node !== null) {
      node.next = currentNode?.next || null
    }
    return currentNode?.element || null
  }
  indexOf(element: T): number {
    let node = this.first as Node<T>
    let length = -1
    while(node.next !== null && node.element === element){
      node = node.next as Node<T>
      length++
    }
    return length
  }
  clear(): void {
    this._size = 0
    this.first = null
  }
  _getNode (index: number) : Node<T> | null {
    if (this._rangeCheckForAdd(index) || index === this._size) {
      let node = this.first as Node<T>
      while(index-- > 1){
        node = node.next as Node<T>
      }
      return node
    } else {
      return null
    }
  }
  _ensureCapacity(maxLength: number): void {
    throw new Error("Method not implemented.");
  }
}