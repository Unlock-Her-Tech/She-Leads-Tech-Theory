// Session 09 - Binary Search Tree: Find solution
// Try Find.js first. Run each file separately.
// Input: finite numbers. Returns a node or undefined without changing the tree.
// Time: O(h), where h is tree height (O(log n) balanced; O(n) worst case).
// Extra space: O(1), because the search is iterative.

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

  find(value) {
    let current = this.root;

    while (current !== null) {
      if (value === current.value) return current;
      current = value < current.value ? current.left : current.right;
    }

    return undefined;
  }
}

// The same fixture as Find.js, so insert is not needed for this exercise.
const tree = new BinarySearchTree();
tree.root = new Node(12);
tree.root.left = new Node(7);
tree.root.right = new Node(18);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(9);
tree.root.right.left = new Node(15);
tree.root.right.right = new Node(22);

console.log(tree.find(12) === tree.root);           // true
console.log(tree.find(9) === tree.root.left.right); // true
console.log(tree.find(15).value);                  // 15
console.log(tree.find(99));                        // undefined
console.log(new BinarySearchTree().find(12));      // undefined

// If the target is smaller, every value in the right subtree is too large.
// If the target is larger, every value in the left subtree is too small.
