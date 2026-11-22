// Session 08 - Queue (FIFO: First In, First Out)
// Based on Section 21: Stacks + Queues, coding exercises 61 and 62.
// Course: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/
// Implement enqueue and dequeue using a singly linked list, without an array.
// first is the front, last is the back, and size is the number of nodes.
// Both operations should take O(1) time.
// Compare your work with Queue_solution.js after trying the questions.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Question 1: Add a value at the back and return the updated size.
  // How should first and last change when the queue starts empty?
  enqueue(value) {
    // TODO: Implement enqueue.
    throw new Error("enqueue not implemented");
  }

  // Question 2: Remove the front node and return its value.
  // Return null if empty. After removing the only node, reset both pointers.
  dequeue() {
    // TODO: Implement dequeue.
    throw new Error("dequeue not implemented");
  }
}

// Uncomment after implementing the methods. Run this file on its own.
// const queue = new Queue();
// console.log(queue.dequeue());       // null
// console.log(queue.enqueue("first")); // 1
// console.log(queue.enqueue("second")); // 2
// console.log(queue.first.value);     // "first"
// console.log(queue.last.value);      // "second"
// console.log(queue.dequeue());       // "first"
// console.log(queue.dequeue());       // "second"
// console.log(queue.dequeue());       // null
// console.log(queue.size);            // 0
// console.log(queue.first, queue.last); // null null

// Discuss: How does this removal order differ from the stack?
// Why can an array queue using shift take O(n) time to remove an item?
