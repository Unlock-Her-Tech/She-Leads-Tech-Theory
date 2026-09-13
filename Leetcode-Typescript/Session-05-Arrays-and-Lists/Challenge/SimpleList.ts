import { createSimpleArray } from "./SimpleArray.ts";

// Defines the type for the predicates used in several methods below.
// Would typically have a third `array` parameter, removed here for simplicity.
// Do not edit this!
type Predicate<T> = (value: T, index: number) => unknown;

// Defines a SimpleList with functionality emulating that of a JS/TS array.
// Edit only the parts indicated.
export class SimpleList<T> {
  _internalArray: T[];
  _length: number;

  constructor(...initialValues: T[]) {
    const internalArray = createSimpleArray<T>({
      capacity: initialValues.length,
    });
    for (let i = 0; i < initialValues.length; i++) {
      internalArray[i] = initialValues[i];
    }
    this._internalArray = internalArray;
    this._length = initialValues.length;
  }

  [Symbol.toPrimitive](): string {
    let stringRepresentation = "[";
    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        stringRepresentation += ", ";
      }
      stringRepresentation += this._internalArray[i];
    }
    stringRepresentation += "]";
    return stringRepresentation;
  }

  get length(): number {
    // Completed together in class
    return this._length;
  }

  at(index: number): T | undefined {
    // Completed together in class
    if (index >= 0) {
      return this._internalArray[index];
    } else {
      return this._internalArray[this._length + index];
    }
  }

  includes(value: T, fromIndex?: number): boolean {
    // Partially completed together in session (`fromIndex` not considered)
    for (let i = 0; i < this._length; i++) {
      if (this._internalArray[i] === value) {
        return true;
      }
    }
    return false;
  }

  indexOf(value: T, fromIndex?: number): number {
    // Partially completed together in session (`fromIndex` not considered)
    for (let i = 0; i < this._length; i++) {
      if (this._internalArray[i] === value) {
        return i;
      }
    }
    return -1;
  }

  lastIndexOf(value: T, fromIndex?: number): number {
    // Partially completed together in session (`fromIndex` not considered)
    for (let i = this._length - 1; i >= 0; i--) {
      if (this._internalArray[i] === value) {
        return i;
      }
    }
    return -1;
  }

  some(predicate: Predicate<T>): boolean {
    // Given as an example for other methods below with `predicate` parameter
    for (let i = 0; i < this._length; i++) {
      if (predicate(this._internalArray[i], i)) {
        return true;
      }
    }
    return false;
  }

  every(predicate: Predicate<T>): boolean {
    // You should implement this
    throw new Error(".every not implemented!");
  }

  find(predicate: Predicate<T>): T | undefined {
    // You should implement this
    throw new Error(".find not implemented!");
  }

  findIndex(predicate: Predicate<T>): number {
    // You should implement this
    throw new Error(".findIndex not implemented!");
  }

  findLast(predicate: Predicate<T>): T | undefined {
    // You should implement this
    throw new Error(".findLast not implemented!");
  }

  findLastIndex(predicate: Predicate<T>): number {
    // You should implement this
    throw new Error(".findLastIndex not implemented!");
  }

  pop(): T | undefined {
    // You should implement this
    throw new Error(".pop not implemented!");
  }

  shift(): T | undefined {
    // You should implement this
    throw new Error(".shift not implemented!");
  }

  push(...extraValues: T[]): void {
    // You should implement this
    throw new Error(".push not implemented!");
  }

  unshift(...extraValues: T[]): void {
    // You should implement this
    throw new Error(".unshift not implemented!");
  }

  reverse(): SimpleList<T> {
    // You should implement this
    throw new Error(".reverse not implemented!");
  }
}
