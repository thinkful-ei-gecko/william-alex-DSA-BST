const BinarySearchTree = require('./BinarySearchTree');

function main() {

  const BST = new BinarySearchTree();

  // BST.insert(3, '3');
  // BST.insert(1, '1');
  // BST.insert(4, '4');
  // BST.insert(6, '6');
  // BST.insert(9, '9');
  // BST.insert(2, '2');
  // BST.insert(5, '5');
  // BST.insert(7, '7');

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

console.log(JSON.stringify(printPretty(main())));


function BstHeight(tree) {
  //left counter, increment by one for every item in the left of the subtree, so long as there are items.
  //right counter, increment by one for every item in the right of the subtree, so long as there are items.
  //compare left and right counters, whichever is higher wins.


  // left right counter initiated at root;
  // if left, go down left path, increment left counter;
  // if right, go down right path, increment right counter;
  // if left and right, don't increment counter;
  // Should return when it hits a leaf (no left or right), return number for comparison;

  


  
}