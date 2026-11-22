// Session 09 - Binary Trees: Find in a Binary Search Tree
// Based on Section 22: Binary Search Trees, coding exercise 65.
// Course: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/
// This exercise uses the BST ordering rule, not an arbitrary binary tree.
// Compare your work with Find_solution.js after trying the question.

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

  // Question: Find a finite number using the BST ordering rule.
  // Return the existing node object when found, not just its value or true.
  // Return undefined if the value is absent, including when the tree is empty.
  // Use iteration and leave all nodes and links unchanged.
  find(value) {
    // TODO: Implement find.
    throw new Error("find not implemented");
  }
}

// A ready-made tree lets you practise find independently of insert.
//          12
//         /  \
//        7    18
//       / \   / \
//      4   9 15 22
const tree = new BinarySearchTree();
tree.root = new Node(12);
tree.root.left = new Node(7);
tree.root.right = new Node(18);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(9);
tree.root.right.left = new Node(15);
tree.root.right.right = new Node(22);

// Uncomment after implementing find. Run this file on its own.
// console.log(tree.find(12) === tree.root);             // true
// console.log(tree.find(9) === tree.root.left.right);   // true
// console.log(tree.find(15).value);                    // 15
// console.log(tree.find(99));                          // undefined
// console.log(new BinarySearchTree().find(12));        // undefined

// Discuss: Why can each comparison rule out one entire subtree?
// Explain O(h) search time: O(log n) when balanced, O(n) in the worst case.
