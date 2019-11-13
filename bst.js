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

  // BST.insert(5, 5);
  // BST.insert(2, 2);
  // BST.insert(19, 19);
  // BST.insert(1, 1);
  // BST.insert(4, 3);
  // BST.insert(15, 15);
  // BST.insert(10, 10);
  // BST.insert(17, 17);
  // BST.insert(21, 21);
  // BST.insert(20, 20);
  // BST.insert(25, 25);

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
// console.log(isBST({"value":9999999,"left":{"value":1,"left":null,"right":{"value":9,"left":null,"right":null}},"right":{"value":4,"left":null,"right":{"value":6,"left":{"value":5,"left":null,"right":null},"right":{"value":9,"left":{"value":7,"left":null,"right":null},"right":null}}}}));
// console.log(isBST(main()));


//7. 3rd largest node
function thirdLargestNode(tree) {
  //Base case:
  if(!tree.right) { // If it reaches the most bottom right that should be the max value
    if(tree.left) { // If the bottom-right most node on the right side of the tree HAS a left node..that will be the 3rd largest so we return that
      return tree.parent.value;
    }
    if(tree.parent.left) { //If a left-node does NOT exist for the bottom-most right node, then we know that the parent's left node will be the 3rd largest...this also works in the scenario that the 3rd largest would be the first node on the left side of the tree
      return tree.parent.left.value;
    } else {
      return tree.parent.parent.value; //If no left-nodes exist on the right-side of the tree at all and there are more than 3 or more nodes on the right, then we know the bottom-most's parent's parent will be the 3rd largest node
    }
  }

  //Recursive case:
  if(tree.right) {
    return thirdLargestNode(tree.right);
  }
}
// console.log(thirdLargestNode(main()));


//8. Balanced BST
function balancedBST(tree) {
  //Get height of right tree and height of left tree
  //Start at top node
  //Separate function to calculate left and right...if valid return true/else false
  //Recursively call function for node.left and node.right
  //Base Case:
  //root.left or root.right....return true
  //Calc height recursively...
}
console.log(balancedBST(main()));