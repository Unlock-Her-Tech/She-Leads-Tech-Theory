// Session 08 - Stack solution
// Try Stack.js first. Run each file separately.
// push and pop: O(1) time and O(1) extra space per operation.
// The stack itself stores n nodes: O(n) space.

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

  push(value) {
    const node = new Node(value);
    node.next = this.first;
    this.first = node;

    if (this.size === 0) {
      this.last = node;
    }

    this.size += 1;
    return this.size;
  }

  pop() {
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

const stack = new Stack();
console.log(stack.pop());           // null
console.log(stack.push("first"));   // 1
console.log(stack.push("second"));  // 2
console.log(stack.first.value);     // "second"
console.log(stack.last.value);      // "first"
console.log(stack.pop());           // "second"
console.log(stack.pop());           // "first"
console.log(stack.pop());           // null
console.log(stack.size);            // 0
console.log(stack.first, stack.last); // null null

// Removing last would require finding the preceding node: O(n) time.
// Removing first only changes the top pointer, which takes O(1) time.
