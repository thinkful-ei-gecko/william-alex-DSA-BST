//1. Draw a BST
// './Assets/DrawBST_Number.jpeg'

//2. Remove root
// './Assets/RemoveRoot_Number.jpeg'

//3. Create a BST class

class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.value = value,
      this.key = key,
      this.parent = parent,
      this.left = null,
      this.right = null
  }

  insert(key, value) {
    if (this.key === null) {
      this.key = key;
      this.value = value;
    }
    else if (this.key >= key) {
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value)
      }
    }
    else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this)
      } else {
        this.right.insert(key, value)
      }
    }
  }

  remove(key) {
    //If node has no children
    //If node has 1 child, set that child to key
    //If node has 2 children, set right child to key, associate left child to that key, remove old right child because redundant.

    if (this.key === key) {
      if (this.right && this.left) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }
      if (this.right) {
        this._replaceWith(this.right);
      }
      if (this.left) {
        this._replaceWith(this.left);
      }
      this.key === null;
    }
    else if (key < this.key && this.left) {
      this.left.remove(key);
    }
    else if (this.key > this.key && this.right) {
      this.right.remove(key)
    }
    else {
      throw new Error(`Item not found`);
    }

  }

  _findMin() {
    if (this.left) {
      this.left._findMin()
    }
    else {
      return this;
    }
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      }
      else if (this == this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    }
    else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  find(key) {
    if (this.key == key) {
      return this.value;
    }
    else if (this.key >= key && this.left) {
      return this.left.find(item)
    } else if (this.key < key && this.right) {
      return this.right.find(item)
    }
    else {
      throw new Error(`Item doesn't exist`);
    }
  }

}

module.exports = BinarySearchTree;