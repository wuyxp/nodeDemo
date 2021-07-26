/**
 * AVL 树的出现，主要是解决二叉平衡树失衡的情况，如果失衡就会增加对节点的增删改查的复杂度
 * 所以 AVL 主要是二叉搜索平衡树
 * 其主要原理是，利用平衡因子，在节点在添加二叉树或者删除二叉树的过程中，不断的去平衡
 * 平衡因子是，该节点的左子树与右子树的高度差，如果绝对值大于1，那么就说明二叉树不平衡了，需要平衡一下
 * 平衡的原理主要是对节点的旋转，这个比较抽象，大概的公式就是
 * 1. 如果添加节点的结构在 父节点与祖父节点都是左边的话，也就是 LL 结构，那么就要对祖父节点进行右旋转
 * 2. 如果添加节点的结构在 父节点与祖父节点都是右边的话，也就是 RR 结构，那么就是对祖父节点进行左旋转
 * 3. 如果添加节点的结构在 父节点的左边，但是父节点在祖父节点右边的话，那就是 RL 结构，这个时候就需要先对父节点进行左旋转，变成第一种情况，然后再对祖父节点进行右旋转
 * 4. 如果添加节点的结果在 父节点的右边，但是父节点在祖父节点的左边，那么就是 LR 结构，这个时候就需要先对父节点进行右旋转，变成第二种情况，然后再对祖父节点进行左旋转
 * 
 * 这里面还有一个问题，节点的高度到底如何更新，用递归每次计算肯定是不行的，效率太低，所以在添加节点的时候要对高度进行更新操作
 */

import BST from './binarySearchTree'
import { Node } from './binaryTree'

type avlnodeOfnull<E> = AVLNode<E> | null
class AVLNode<E> extends Node<E> {
  // 高度
  private height = 0 

  constructor(element: E, parent: avlnodeOfnull<E>) {
    super(element, parent)
  }

  // 平衡因子
  public balanceFactor():number {
    const leftHeight = this.left ? (this.left as AVLNode<E>).height : 0
    const rightHeight = this.right ? (this.right as AVLNode<E>).height : 0
    return leftHeight - rightHeight
  }

  // 自动更新高度
  public updateHeight() {
    const leftHeight = this.left ? (this.left as AVLNode<E>).height : 0
    const rightHeight = this.right ? (this.right as AVLNode<E>).height : 0
    this.height = 1 + Math.max(leftHeight, rightHeight)
  }

  // 获取最高的子节点

  public tallerChild(): avlnodeOfnull<E> | null {
    const leftHeight = this.left ? (this.left as AVLNode<E>).height : 0
    const rightHeight = this.right ? (this.right as AVLNode<E>).height : 0
    return leftHeight > rightHeight ? (this.left as AVLNode<E>) : (this.right as AVLNode<E>)
  }
}

class AVLTree<E> extends BST<E> {
  // 新增完节点后，要保持树的平衡性
  protected afterAdd (node: AVLNode<E>) {
    while((node = (node.parent as AVLNode<E>)) !== null) {
      if (this.isBalanced(node)) {
        this.updateHeight(node)
      } else {
        this.rebalance(node)
        break;
      }
    }
  }

  protected afterRemove(node: AVLNode<E>) {
    while((node = (node.parent as AVLNode<E>)) !== null) {
      if (this.isBalanced(node)) {
        this.updateHeight(node)
      } else {
        this.rebalance(node)
        break;
      }
    }
  }

  // 针对不同的树要创建出不同的node节点
  protected createNode(element:E, parent:AVLNode<E>) {
    return new AVLNode(element, parent)
  }

  // 是否平衡
  private isBalanced(node: AVLNode<E>):boolean {
    return Math.abs(node.balanceFactor()) <= 1
  }

  // 更新高度
  private updateHeight(node: AVLNode<E>) {
    node.updateHeight()
  }

  // 平衡节点
  private afterRotate(grand: AVLNode<E>, parent: AVLNode<E>, child: AVLNode<E>) {
    // 让 parent 成为子树的根节点
    parent.parent = grand.parent
    if(grand.isOnlyLeftDegreeNode() && grand.parent) {
      grand.parent.left = parent
    } else if (grand.isOnlyRightDegreeNode() && grand.parent) {
      grand.parent.right = parent
    } else {
      this.root = grand
    }

    // 更新 child 的 parent 
    if (child !== null) {
      child.parent = grand
    }

    grand.parent = parent
    this.updateHeight(grand)
    this.updateHeight(parent)
  }

  // 左旋转
  private rotateLeft(grand: AVLNode<E>) {
    const parent = grand.right as AVLNode<E>
    const child = parent.left as AVLNode<E>
    grand.right = child
    parent.left = grand
    this.afterRotate(grand, parent, child)
  }

  // 右旋转
  private rotateRight(grand: AVLNode<E>) {
    const parent = grand.left as AVLNode<E>
    const child = parent.right as AVLNode<E>
    grand.left = child
    parent.right = grand
    this.afterRotate(grand, parent, child)
  }

  // 这里主要将不平衡的节点进行通过 LL-LR-RR-RL等情况的分析进行平衡
  private rebalance(grand: AVLNode<E>) {
    const parent = grand.tallerChild() as AVLNode<E>
    const child = parent.tallerChild() as AVLNode<E>

    if (parent.isOnlyLeftDegreeNode()) {
      if (child.isOnlyLeftDegreeNode()) { // LL
        this.rotateRight(grand)
      } else {
        this.rotateLeft(parent)
        this.rotateRight(grand)
      }
    } else {
      if (child.isOnlyRightDegreeNode()) { // LL
        this.rotateLeft(grand)
      } else {
        this.rotateRight(parent)
        this.rotateLeft(grand)
      }
    }
  }
}