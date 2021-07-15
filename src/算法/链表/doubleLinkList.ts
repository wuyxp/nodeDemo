import AbstractList from "./abstractList"
type NodeAllNone<T> = Node<T> | null
class Node<T> {
  element: T;
  next: NodeAllNone<T>;
  prev: NodeAllNone<T>;
  constructor(prev: NodeAllNone<T>, element: T, next: NodeAllNone<T>) {
    this.element = element
    this.next = next
    this.prev = prev
  }
}
export default class LinkList<T> extends AbstractList<T> {
  first: NodeAllNone<T> = null;
  last: NodeAllNone<T> = null;

  inset(index: number, element: T): void {
    if (this._size === 0) {
      this.first = this.last = new Node(null, element, null)
      this._size++
    } else if (index === 0 && this.first !== null) {
      const currentNode = new Node(null, element, this.first)
      this.first.prev = currentNode
      this.first = currentNode
      this._size++
    } else if (index === this._size && this.last !== null) {
      const currentNode = new Node(this.last, element, null)
      this.last.next = currentNode
      this.last = currentNode
      this._size++
    } else {
      const nowNode = this._getNode(index)
      if (nowNode !== null) {
        const currentNode = new Node(nowNode.prev, element, nowNode)
        if (currentNode.prev !== null) {
          currentNode.prev.next = currentNode
        }
        nowNode.prev = currentNode
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
    } else if (index === this._size) {
      const currentNode = this.last
      this.last = this.last?.prev || null
      this._size--
      return currentNode?.element || null
    } else {
      const currentNode = this._getNode(index)
      if (currentNode !== null) {
        if (currentNode.prev !== null) {
          currentNode.prev.next = currentNode.next
        } else if (currentNode.next !== null) {
          currentNode.next.prev = currentNode.prev
        }
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
    this.last = null
  }
  _getNode (index: number) : NodeAllNone<T> {
    if (index === this._size) {
      return this.last
    } else if (index === 0) {
      return this.first
    } else if (this._rangeCheckForAdd(index)) {
      if (index < this._size >> 1) {
        let node = this.first as Node<T>
        while(index > 0){
          node = node.next as Node<T>
          index--
        }
        return node
      } else {
        let node = this.last as Node<T>
        while(index < this._size - 1){
          node = node.prev as Node<T>
          index++
        }
        return node
      }
    } else {
      return null
    }
  }
  _ensureCapacity(maxLength: number): void {
    throw new Error("Method not implemented.");
  }
  toString () {
    let next = this.first
    if (next !== null) {
      let log = []
      while(next !== null) {
        log.push(next.element)
        next = next.next
      }
      return `size: ${this._size}, [${log.join(', ')}]`
    } else {
      return ''
    }
  }
}