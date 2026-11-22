// Session 08 - Queue solution
// Try Queue.js first. Run each file separately.
// enqueue and dequeue: O(1) time and O(1) extra space per operation.
// The queue itself stores n nodes: O(n) space.

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

  enqueue(value) {
    const node = new Node(value);

    if (this.last === null) {
      this.first = node;
    } else {
      this.last.next = node;
    }

    this.last = node;
    this.size += 1;
    return this.size;
  }

  dequeue() {
    if (this.first === null) return null;

    const removed = this.first;
    this.first = removed.next;
    this.size -= 1;

    if (this.size === 0) {
      this.last = null;
    }

    removed.next = null;
    return removed.value;
  }
}

const queue = new Queue();
console.log(queue.dequeue());        // null
console.log(queue.enqueue("first")); // 1
console.log(queue.enqueue("second")); // 2
console.log(queue.first.value);      // "first"
console.log(queue.last.value);       // "second"
console.log(queue.dequeue());        // "first"
console.log(queue.dequeue());        // "second"
console.log(queue.dequeue());        // null
console.log(queue.size);             // 0
console.log(queue.first, queue.last); // null null

// A queue removes the oldest value; a stack removes the newest value.
// Array shift may move every remaining element to a new index: O(n) time.
