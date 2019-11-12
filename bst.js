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
console.log(bstHeight(main()));