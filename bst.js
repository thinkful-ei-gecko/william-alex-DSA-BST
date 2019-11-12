const BinarySearchTree = require('./BinarySearchTree');

function main() {
  const BST = new BinarySearchTree();

  BST.insert(3, 3);
  BST.insert(1, 1);
  BST.insert(4, 4);
  BST.insert(6, 6);
  BST.insert(9, 9);
  BST.insert(2, 2);
  BST.insert(5, 5);
  BST.insert(7, 7);

  // BST.insert('E', 'E');
  // BST.insert('A', 'A');
  // BST.insert('S', 'S');
  // BST.insert('Y', 'Y');
  // BST.insert('Q', 'Q');
  // BST.insert('U', 'U');
  // BST.insert('E', 'E');
  // BST.insert('S', 'S');
  // BST.insert('T', 'T');
  // BST.insert('I', 'I');
  // BST.insert('O', 'O');
  // BST.insert('N', 'N');

  return BST;
}

function printPretty(BST) {
  if (BST.value === null) {
    return;
  } else {
    return {
      node: BST.value,
      left: BST.left ? printPretty(BST.left) : null,
      right: BST.right ? printPretty(BST.right) : null
    };
  }
}
// console.log(JSON.stringify(printPretty(main())));


// 5. Height
function bstHeight(tree) {
  let leftCounter = 0;
  let rightCounter = 0;

  //Base case:
  if(!tree.left && !tree.right) {
    leftCounter += 1;
    rightCounter += 1;
  }
  
  //Recursive case:
  if(tree.left) {
    leftCounter = 1 + bstHeight(tree.left);
  }
  if(tree.right) {
    rightCounter = 1 + bstHeight(tree.right);
  }

  if(leftCounter >= rightCounter) {
    return leftCounter;
  } else {
    return rightCounter;
  }
}
// console.log(bstHeight(main()));


//6. Is it a BST?
function isBST(tree) {
  //Base cases:
  if(tree === null) {
    return true;
  }

  //Recursive case:
  if(tree.left && tree.left.value > tree.value) {
    return false;
  }
  if(tree.right && tree.right.value < tree.value) {
    return false;
  }
  
  if(!isBST(tree.left) || !isBST(tree.right)) {
    return false;
  }
  return true;
}
console.log(isBST({"value":9999999,"left":{"value":1,"left":null,"right":{"value":9,"left":null,"right":null}},"right":{"value":4,"left":null,"right":{"value":6,"left":{"value":5,"left":null,"right":null},"right":{"value":9,"left":{"value":7,"left":null,"right":null},"right":null}}}}));
console.log(isBST(main()));


//7. 3rd largest node
function thirdLargestNode(tree) {
  if(!tree.right) {
    return tree.parent.parent.value;
  }

  if(tree.right) {
    return thirdLargestNode(tree.right);
  }
}
// console.log(thirdLargestNode(main()));