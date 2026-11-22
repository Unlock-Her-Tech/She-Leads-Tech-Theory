// Session 09 - Binary Trees: Insert into a Binary Search Tree
// Based on Section 22: Binary Search Trees, coding exercise 64.
// Course: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/
// A binary tree has at most two children per node. A BST also keeps smaller
// values in the left subtree and larger values in the right subtree.
// Compare your work with Insert_solution.js after trying the question.

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

  // Question: Insert a finite number at the correct position in the BST.
  // Make the first node the root. Return this tree to allow method chaining.
  // For this exercise, ignore duplicate values and return this tree unchanged.
  // Use iteration; do not convert the tree into an array or rebalance it.
  insert(value) {
    // TODO: Implement insert.
    throw new Error("insert not implemented");
  }
}

// Uncomment after implementing insert. Run this file on its own.
// const tree = new BinarySearchTree();
// console.log(tree.root); // null
// tree.insert(12).insert(7).insert(18).insert(4).insert(9).insert(15).insert(22);
//
//          12
//         /  \
//        7    18
//       / \   / \
//      4   9 15 22
//
// console.log(tree.root.value);             // 12
// console.log(tree.root.left.right.value);  // 9
// console.log(tree.root.right.left.value);  // 15
// console.log(tree.insert(7) === tree);      // true (duplicate ignored)
// console.log(tree.root.left.left.value);   // 4 (unchanged)

// Discuss: What happens to the tree's shape if you insert 1, 2, 3, 4, 5?
// Explain why insertion takes O(h) time for a tree of height h:
// O(log n) when balanced, but O(n) in the worst case.
