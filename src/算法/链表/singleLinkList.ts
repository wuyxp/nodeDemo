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
    if (index === 0) {
      const newNode = new Node(element)
      newNode.next = this.first
      this.first = newNode
      this._size++
    } else {
      const node = this._getNode(index-1)
      const newNode = new Node(element)
      if(node !== null) {
        newNode.next = node.next
        node.next = newNode
        this._size++
      }
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
    if (index === 0 ) {
      const currentNode = this.first
      this.first = this.first?.next || null
      this._size--
      return currentNode?.element || null
    }else {
      const node = this._getNode(index-1)
      const currentNode = node?.next
      if(node !== null) {
        node.next = currentNode?.next || null
        this._size--
      }
      return currentNode?.element || null
    } 

  }
  indexOf(element: T): number {
    let node = this.first as Node<T>
    let length = 0
    while(node.next !== null){
      if (node.element === element) {
        return length
      }
      length++
      node = node.next as Node<T>
      
    }
    return -1
  }
  clear(): void {
    this._size = 0
    this.first = null
  }
  _getNode (index: number) : Node<T> | null {
    if (this._rangeCheckForAdd(index) || index === this._size) {
      let node = this.first as Node<T>
      while(index > 0){
        node = node.next as Node<T>
        index--
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