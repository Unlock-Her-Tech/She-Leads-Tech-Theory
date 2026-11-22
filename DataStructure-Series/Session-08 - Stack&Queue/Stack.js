// Session 08 - Stack (LIFO: Last In, First Out)
// Implement push and pop using a singly linked list, without an array.
// first is the top, last is the bottom, and size is the number of nodes.
// Both operations should take O(1) time.
// Compare your work with Stack_solution.js after trying the questions.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Question 1: Add a value at the top and return the updated size.
  // How should first and last change when the stack starts empty?
  push(value) {
    // TODO: Implement push.
    throw new Error("push not implemented");
  }

  // Question 2: Remove the top node and return its value.
  // Return null if empty. After removing the only node, reset both pointers.
  pop() {
    // TODO: Implement pop.
    throw new Error("pop not implemented");
  }
}

// Uncomment after implementing the methods. Run this file on its own.
// const stack = new Stack();
// console.log(stack.pop());         // null
// console.log(stack.push("first")); // 1
// console.log(stack.push("second")); // 2
// console.log(stack.first.value);   // "second"
// console.log(stack.last.value);    // "first"
// console.log(stack.pop());         // "second"
// console.log(stack.pop());         // "first"
// console.log(stack.pop());         // null
// console.log(stack.size);          // 0
// console.log(stack.first, stack.last); // null null

// Discuss: Why do we add and remove at first rather than at last?
