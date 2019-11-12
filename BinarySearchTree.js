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

  remove() {

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