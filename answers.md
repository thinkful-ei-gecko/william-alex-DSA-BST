# BST

## 1. Draw a BST

'./Assets/DrawBST_Number.jpeg

## 2. Remove root

'./Assets/RemoveRoot_Number.jpeg

## 3. Create a BST class

## 4. What does this function do?

```javascript
function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}
```

This function takes a tree and returns the sum of all its branches. Its runtime is O(n) because it iterates once for each node in the tree.

## 5. Height of a BST