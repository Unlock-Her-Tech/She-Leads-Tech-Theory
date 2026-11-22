// Session 09 - Binary Search Tree: Insert solution
// Try Insert.js first. Run each file separately.
// Input: finite numbers. Duplicate values leave the tree unchanged.
// Time: O(h), where h is tree height (O(log n) balanced; O(n) worst case).
// Extra space per insertion: O(1). Total tree space: O(n).

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) return this;

      if (value < current.value) {
        if (current.left === null) {
          current.left = new Node(value);
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = new Node(value);
          return this;
        }
        current = current.right;
      }
    }
  }
}

const tree = new BinarySearchTree();
console.log(tree.root); // null
tree.insert(12).insert(7).insert(18).insert(4).insert(9).insert(15).insert(22);
console.log(tree.root.value);             // 12
console.log(tree.root.left.right.value);  // 9
console.log(tree.root.right.left.value);  // 15
console.log(tree.insert(7) === tree);      // true (duplicate ignored)
console.log(tree.root.left.left.value);   // 4 (unchanged)

// Sorted input creates a chain of right children in this unbalanced BST.
// Following that chain may visit every node, so insertion can take O(n).
