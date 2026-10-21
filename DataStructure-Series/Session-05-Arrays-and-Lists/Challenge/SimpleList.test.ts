// Tests so you can see whether your implemented functionality is working.
// You shouldn't edit these permanently, but feel free to do so temporarily.
import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { SimpleList } from "./SimpleList.ts";

describe("SimpleList.length", () => {
  it("returns 0 for an empty array", () => {
    const e: never[] = [];
    assert.equal(new SimpleList(...e).length, e.length);
  });

  it("returns 1 for a singleton array", () => {
    const n = [123];
    assert.equal(new SimpleList(...n).length, n.length);
  });

  it("returns 4 for an array with 4 elements", () => {
    const s = ["hi", "there", "party", "people"];
    assert.equal(new SimpleList(...s).length, s.length);
  });
});

describe("SimpleList.at", () => {
  it("returns correct element for a non-negative, in-range index", () => {
    const s1 = ["yay"];
    const s2 = ["hi", "there"];
    const s3 = ["good", "day", "to", "you"];
    assert.equal(new SimpleList(...s1).at(0), s1.at(0));
    assert.equal(new SimpleList(...s2).at(1), s2.at(1));
    assert.equal(new SimpleList(...s3).at(2), s3.at(2));
  });

  it("returns correct element for a negative, in-range index", () => {
    const s1 = ["yay"];
    const s2 = ["hi", "there"];
    const s3 = ["good", "day", "to", "you"];
    assert.equal(new SimpleList(...s1).at(-1), s1.at(-1));
    assert.equal(new SimpleList(...s2).at(-2), s2.at(-2));
    assert.equal(new SimpleList(...s3).at(-3), s3.at(-3));
  });

  it("returns undefined for a non-negative, out-of-range index", () => {
    const e: never[] = [];
    const s = ["hi", "there"];
    assert.equal(new SimpleList(...e).at(0), e.at(0));
    assert.equal(new SimpleList(...s).at(2), s.at(2));
  });

  it("returns undefined for a negative, out-of-range index", () => {
    const e: never[] = [];
    const s = ["oh", "no"];
    assert.equal(new SimpleList(...e).at(-1), e.at(-1));
    assert.equal(new SimpleList(...s).at(-3), s.at(-3));
  });
});

describe("SimpleList.includes", () => {
  it("returns true if an element is present (no fromIndex)", () => {
    const n = [3, 2, 1];
    const s = ["yay"];
    assert.equal(new SimpleList(...n).includes(1), n.includes(1));
    assert.equal(new SimpleList(...n).includes(2), n.includes(2));
    assert.equal(new SimpleList(...s).includes("yay"), s.includes("yay"));
  });

  it("returns false if an element is absent (no fromIndex)", () => {
    const e: string[] = [];
    const n = [3, 2, 1];
    const s = ["yay"];
    assert.equal(new SimpleList(...e).includes("what"), e.includes("what"));
    assert.equal(new SimpleList(...n).includes(4), n.includes(4));
    assert.equal(new SimpleList(...s).includes("whoa"), s.includes("whoa"));
  });

  it("returns true if an element is present (with non-negative, in-range fromIndex)", () => {
    const n = [1, 2, 3, 4, 3, 2, 1];
    const s = ["I", "am", "who", "I", "am"];
    assert.equal(new SimpleList(...n).includes(3, 3), n.includes(3, 3));
    assert.equal(new SimpleList(...s).includes("I", 1), s.includes("I", 1));
  });

  it("returns true if an element is present (with negative, in-range fromIndex)", () => {
    const n = [1, 2, 3, 4, 3, 2, 1];
    const s = ["I", "am", "who", "I", "am"];
    assert.equal(new SimpleList(...n).includes(3, -4), n.includes(3, -4));
    assert.equal(new SimpleList(...s).includes("I", -2), s.includes("I", -2));
  });

  it("returns false if an element is absent (with non-negative, in-range fromIndex)", () => {
    const n = [1, 2, 3, 4, 3, 2, 1];
    const s = ["I", "am", "who", "I", "am"];
    assert.equal(new SimpleList(...n).includes(3, 5), n.includes(3, 5));
    assert.equal(new SimpleList(...s).includes("I", 4), s.includes("I", 4));
  });

  it("returns false if an element is absent (with negative, in-range fromIndex)", () => {
    const n = [1, 2, 3, 4, 3, 2, 1];
    const s = ["I", "am", "who", "I", "am"];
    assert.equal(new SimpleList(...n).includes(3, -2), n.includes(3, -2));
    assert.equal(new SimpleList(...s).includes("I", -1), s.includes("I", -1));
  });

  it("returns false with non-negative, out-of-range fromIndex", () => {
    const e: string[] = [];
    const s = ["oh", "no"];
    assert.equal(new SimpleList(...e).includes("oh", 0), e.includes("oh", 0));
    assert.equal(new SimpleList(...s).includes("no", 4), s.includes("no", 4));
  });

  it("returns true if an element is present (with negative, out-of-range fromIndex)", () => {
    const n = [10, 20, 30, 40];
    const s = ["I", "am", "me"];
    assert.equal(new SimpleList(...n).includes(10, -5), n.includes(10, -5));
    assert.equal(new SimpleList(...s).includes("am", -5), s.includes("am", -5));
  });

  it("returns false if an element is absent (with negative, out-of-range fromIndex)", () => {
    const n = [10, 20, 30, 40];
    const s = ["I", "am", "me"];
    assert.equal(new SimpleList(...n).includes(50, -5), n.includes(50, -5));
    assert.equal(new SimpleList(...s).includes("is", -5), s.includes("is", -5));
  });
});

describe("SimpleList.indexOf", () => {
  it("returns correct index if an element is present (no fromIndex)", () => {
    const n = [3, 2, 1, 2, 10];
    const s = ["yay", "boo", "yay"];
    assert.equal(new SimpleList(...n).indexOf(2), n.indexOf(2));
    assert.equal(new SimpleList(...n).indexOf(10), n.indexOf(10));
    assert.equal(new SimpleList(...s).indexOf("yay"), s.indexOf("yay"));
  });

  it("returns -1 if an element is absent (no fromIndex)", () => {
    const e: string[] = [];
    const n = [3, 2, 1];
    const s = ["yay"];
    assert.equal(new SimpleList(...e).indexOf("what"), e.indexOf("what"));
    assert.equal(new SimpleList(...n).indexOf(4), n.indexOf(4));
    assert.equal(new SimpleList(...s).indexOf("whoa"), s.indexOf("whoa"));
  });

  it("returns correct index if an element is present (with non-negative, in-range fromIndex)", () => {
    const n = [1, 2, 3, 4, 3, 2, 1];
    const s = ["I", "am", "who", "I", "am"];
    assert.equal(new SimpleList(...n).indexOf(3, 3), n.indexOf(3, 3));
    assert.equal(new SimpleList(...s).indexOf("I", 3), s.indexOf("I", 3));
  });

  it("returns correct index if an element is present (with negative, in-range fromIndex)", () => {
    const n = [1, 2, 3, 4, 3, 2, 1];
    const s = ["I", "am", "who", "I", "am"];
    assert.equal(new SimpleList(...n).indexOf(3, -4), n.indexOf(3, -4));
    assert.equal(new SimpleList(...s).indexOf("I", -2), s.indexOf("I", -2));
  });

  it("returns -1 if an element is absent (with non-negative, in-range fromIndex)", () => {
    const n = [1, 2, 3, 4, 3, 2, 1];
    const s = ["I", "am", "who", "I", "am"];
    assert.equal(new SimpleList(...n).indexOf(3, 5), n.indexOf(3, 5));
    assert.equal(new SimpleList(...s).indexOf("I", 4), s.indexOf("I", 4));
  });

  it("returns -1 if an element is absent (with negative, in-range fromIndex)", () => {
    const n = [1, 2, 3, 4, 3, 2, 1];
    const s = ["I", "am", "who", "I", "am"];
    assert.equal(new SimpleList(...n).indexOf(3, -2), n.indexOf(3, -2));
    assert.equal(new SimpleList(...s).indexOf("I", -1), s.indexOf("I", -1));
  });

  it("returns -1 with non-negative, out-of-range fromIndex", () => {
    const e: string[] = [];
    const s = ["oh", "no"];
    assert.equal(new SimpleList(...e).indexOf("oh", 0), e.indexOf("oh", 0));
    assert.equal(new SimpleList(...s).indexOf("no", 2), s.indexOf("no", 2));
  });

  it("returns correct index if an element is present (with negative, out-of-range fromIndex)", () => {
    const n = [10, 20, 30, 40];
    const s = ["I", "am", "me"];
    assert.equal(new SimpleList(...n).indexOf(10, -5), n.indexOf(10, -5));
    assert.equal(new SimpleList(...s).indexOf("am", -5), s.indexOf("am", -5));
  });

  it("returns -1 if an element is absent (with negative, out-of-range fromIndex)", () => {
    const n = [10, 20, 30, 40];
    const s = ["I", "am", "me"];
    assert.equal(new SimpleList(...n).indexOf(50, -5), n.indexOf(50, -5));
    assert.equal(new SimpleList(...s).indexOf("is", -5), s.indexOf("is", -5));
  });
});

describe("SimpleList.lastIndexOf", () => {
  it("returns correct index if an element is present (no fromIndex)", () => {
    const n = [3, 2, 1, 2, 10];
    const s = ["yay", "boo", "yay"];
    assert.equal(new SimpleList(...n).lastIndexOf(2), n.lastIndexOf(2));
    assert.equal(new SimpleList(...n).lastIndexOf(3), n.lastIndexOf(3));
    assert.equal(new SimpleList(...s).lastIndexOf("yay"), s.lastIndexOf("yay"));
  });

  it("returns -1 if an element is absent (no fromIndex)", () => {
    const e: string[] = [];
    const n = [3, 2, 1];
    const s = ["yay"];
    assert.equal(new SimpleList(...e).lastIndexOf("no"), e.lastIndexOf("no"));
    assert.equal(new SimpleList(...n).lastIndexOf(4), n.lastIndexOf(4));
    assert.equal(new SimpleList(...s).lastIndexOf("um"), s.lastIndexOf("um"));
  });

  it("returns correct index if an element is present (with non-negative, in-range fromIndex)", () => {
    const n = [1, 2, 3, 4, 3, 2, 1];
    const s = ["I", "am", "who", "I", "am"];
    assert.equal(new SimpleList(...n).lastIndexOf(3, 3), n.lastIndexOf(3, 3));
    assert.equal(
      new SimpleList(...s).lastIndexOf("I", 3),
      s.lastIndexOf("I", 3),
    );
  });

  it("returns correct index if an element is present (with negative, in-range fromIndex)", () => {
    const n = [1, 2, 3, 4, 3, 2, 1];
    const s = ["I", "am", "who", "I", "am"];
    assert.equal(new SimpleList(...n).lastIndexOf(3, -4), n.lastIndexOf(3, -4));
    assert.equal(
      new SimpleList(...s).lastIndexOf("I", -2),
      s.lastIndexOf("I", -2),
    );
  });

  it("returns -1 if an element is absent (with non-negative, in-range fromIndex)", () => {
    const n = [1, 2, 3, 4, 3, 2, 1];
    const s = ["I", "am", "who", "I", "am"];
    assert.equal(new SimpleList(...n).lastIndexOf(3, 1), n.lastIndexOf(3, 1));
    assert.equal(
      new SimpleList(...s).lastIndexOf("who", 1),
      s.lastIndexOf("who", 1),
    );
  });

  it("returns -1 if an element is absent (with negative, in-range fromIndex)", () => {
    const n = [1, 2, 3, 4, 3, 2, 1];
    const s = ["I", "am", "who", "I", "am"];
    assert.equal(new SimpleList(...n).lastIndexOf(3, -6), n.lastIndexOf(3, -6));
    assert.equal(
      new SimpleList(...s).lastIndexOf("who", -4),
      s.lastIndexOf("who", -4),
    );
  });

  it("returns correct index if an element is present (with non-negative, out-of-range fromIndex)", () => {
    const n = [10, 20, 30, 40];
    const s = ["I", "am", "me"];
    assert.equal(new SimpleList(...n).lastIndexOf(40, 4), n.lastIndexOf(40, 4));
    assert.equal(
      new SimpleList(...s).lastIndexOf("I", 10),
      s.lastIndexOf("I", 10),
    );
  });

  it("returns -1 if an element is absent (with non-negative, out-of-range fromIndex)", () => {
    const n = [10, 20, 30, 40];
    const s = ["I", "am", "me"];
    assert.equal(new SimpleList(...n).lastIndexOf(50, 4), n.lastIndexOf(50, 4));
    assert.equal(
      new SimpleList(...s).lastIndexOf("is", 10),
      s.lastIndexOf("is", 10),
    );
  });

  it("returns -1 with negative, out-of-range fromIndex", () => {
    const e: string[] = [];
    const s = ["oh", "no"];
    assert.equal(
      new SimpleList(...e).lastIndexOf("oh", -1),
      e.lastIndexOf("oh", -1),
    );
    assert.equal(
      new SimpleList(...s).lastIndexOf("oh", -3),
      s.lastIndexOf("oh", -3),
    );
  });
});

describe("SimpleList.some", () => {
  it("returns false for an empty array", () => {
    const e: number[] = [];
    const alwaysTrue = () => true;
    assert.equal(new SimpleList(...e).some(alwaysTrue), e.some(alwaysTrue));
  });

  it("returns true if at least one element satisfies the predicate (no indexes)", () => {
    const n = [1, 3, 5, 6];
    const s = ["apple", "banana", "cherry"];
    const isOne = (value: number) => value === 1;
    const isEven = (value: number) => value % 2 === 0;
    const startsWithB = (value: string) => value.startsWith("b");
    assert.equal(new SimpleList(...n).some(isOne), n.some(isOne));
    assert.equal(new SimpleList(...n).some(isEven), n.some(isEven));
    assert.equal(new SimpleList(...s).some(startsWithB), s.some(startsWithB));
  });

  it("returns false if no element satisfies the predicate (no indexes)", () => {
    const n = [1, 3, 5, 7];
    const s = ["apple", "banana", "cherry"];
    const isEven = (value: number) => value % 2 === 0;
    const startsWithZ = (value: string) => value.startsWith("z");
    assert.equal(new SimpleList(...n).some(isEven), n.some(isEven));
    assert.equal(new SimpleList(...s).some(startsWithZ), s.some(startsWithZ));
  });

  it("returns true if at least one element satisfies a predicate (with indexes)", () => {
    const n = [3, 0, 2, 5];
    const s = ["hi", "hey", "hello", "hooray"];
    const isEqualToIndex = (value: number, index: number) => value === index;
    const isAfterIndexTwo = (_value: string, index: number) => index > 2;
    assert.equal(
      new SimpleList(...n).some(isEqualToIndex),
      n.some(isEqualToIndex),
    );
    assert.equal(
      new SimpleList(...s).some(isAfterIndexTwo),
      s.some(isAfterIndexTwo),
    );
  });

  it("returns false if no element satisfies a predicate (with indexes)", () => {
    const n = [1, 2, 3, 4];
    const s = ["hi", "hey", "hello"];
    const isEqualToIndex = (value: number, index: number) => value === index;
    const isAfterIndexTwo = (_value: string, index: number) => index > 2;
    assert.equal(
      new SimpleList(...n).some(isEqualToIndex),
      n.some(isEqualToIndex),
    );
    assert.equal(
      new SimpleList(...s).some(isAfterIndexTwo),
      s.some(isAfterIndexTwo),
    );
  });
});

describe("SimpleList.every", () => {
  it("returns true for an empty array", () => {
    const e: number[] = [];
    const alwaysFalse = () => false;
    assert.equal(new SimpleList(...e).every(alwaysFalse), e.every(alwaysFalse));
  });

  it("returns true if every element satisfies the predicate (no indexes)", () => {
    const n = [2, 4, 6, 8];
    const s = ["apple", "banana"];
    const isEven = (value: number) => value % 2 === 0;
    const hasA = (value: string) => value.includes("a");
    assert.equal(new SimpleList(...n).every(isEven), n.every(isEven));
    assert.equal(new SimpleList(...s).every(hasA), s.every(hasA));
  });

  it("returns false if at least one element fails the predicate (no indexes)", () => {
    const n = [1, 3, 5, 6];
    const s = ["apple", "banana", "cherry"];
    const isOdd = (value: number) => value % 2 === 1;
    const isAboveOne = (value: number) => value > 1;
    const hasE = (value: string) => value.includes("e");
    assert.equal(new SimpleList(...n).every(isOdd), n.every(isOdd));
    assert.equal(new SimpleList(...n).every(isAboveOne), n.every(isAboveOne));
    assert.equal(new SimpleList(...s).every(hasE), s.every(hasE));
  });

  it("returns true if every element satisfies a predicate (with indexes)", () => {
    const n = [0, 1, 2, 3];
    const s = ["a", "b", "c"];
    const isEqualToIndex = (value: number, index: number) => value === index;
    const isOnOrAfterIndexZero = (_value: string, index: number) => index >= 0;
    assert.equal(
      new SimpleList(...n).every(isEqualToIndex),
      n.every(isEqualToIndex),
    );
    assert.equal(
      new SimpleList(...s).every(isOnOrAfterIndexZero),
      s.every(isOnOrAfterIndexZero),
    );
  });

  it("returns false if at least one element fails a predicate (with indexes)", () => {
    const n = [0, 1, 2, 4];
    const s = ["a", "b", "c"];
    const isEqualToIndex = (value: number, index: number) => value === index;
    const isAfterIndexZero = (_value: string, index: number) => index > 0;
    assert.equal(
      new SimpleList(...n).every(isEqualToIndex),
      n.every(isEqualToIndex),
    );
    assert.equal(
      new SimpleList(...s).every(isAfterIndexZero),
      s.every(isAfterIndexZero),
    );
  });
});

describe("SimpleList.find", () => {
  it("returns undefined for an empty array", () => {
    const e: number[] = [];
    const alwaysTrue = () => true;
    assert.equal(new SimpleList(...e).find(alwaysTrue), e.find(alwaysTrue));
  });

  it("returns the first element satisfying the predicate (no indexes)", () => {
    const n = [1, 4, 6, 7, 8];
    const s = ["apple", "banana", "cherry", "blueberry"];
    const isBelowTwo = (value: number) => value < 2;
    const isEven = (value: number) => value % 2 === 0;
    const isAboveSeven = (value: number) => value > 7;
    const startsWithB = (value: string) => value.startsWith("b");
    assert.equal(new SimpleList(...n).find(isBelowTwo), n.find(isBelowTwo));
    assert.equal(new SimpleList(...n).find(isEven), n.find(isEven));
    assert.equal(new SimpleList(...n).find(isAboveSeven), n.find(isAboveSeven));
    assert.equal(new SimpleList(...s).find(startsWithB), s.find(startsWithB));
  });

  it("returns undefined if no element satisfies the predicate (no indexes)", () => {
    const n = [1, 3, 5, 7];
    const s = ["apple", "banana", "cherry", "blueberry"];
    const isEven = (value: number) => value % 2 === 0;
    const startsWithZ = (value: string) => value.startsWith("z");
    assert.equal(new SimpleList(...n).find(isEven), n.find(isEven));
    assert.equal(new SimpleList(...s).find(startsWithZ), s.find(startsWithZ));
  });

  it("returns the first element satisfying a predicate (with indexes)", () => {
    const n = [1, 2, 4, 5, 8];
    const s = ["hi", "a", "hey", "hello", "yo"];
    const isDoubleIndex = (value: number, index: number) => value === index * 2;
    const isLongerThanIndex = (value: string, index: number) =>
      value.length > index;
    assert.equal(
      new SimpleList(...n).find(isDoubleIndex),
      n.find(isDoubleIndex),
    );
    assert.equal(
      new SimpleList(...s).find(isLongerThanIndex),
      s.find(isLongerThanIndex),
    );
  });

  it("returns undefined if no element satisfies a predicate (with indexes)", () => {
    const n = [2, 3, 5, 7];
    const s = ["", "a", "hi", "hey"];
    const isDoubleIndex = (value: number, index: number) => value === index * 2;
    const isLongerThanIndex = (value: string, index: number) =>
      value.length > index;
    assert.equal(
      new SimpleList(...n).find(isDoubleIndex),
      n.find(isDoubleIndex),
    );
    assert.equal(
      new SimpleList(...s).find(isLongerThanIndex),
      s.find(isLongerThanIndex),
    );
  });
});

describe("SimpleList.findIndex", () => {
  it("returns -1 for an empty array", () => {
    const e: number[] = [];
    const alwaysTrue = () => true;
    assert.equal(
      new SimpleList(...e).findIndex(alwaysTrue),
      e.findIndex(alwaysTrue),
    );
  });

  it("returns the index of the first element satisfying the predicate (no indexes)", () => {
    const n = [1, 4, 6, 7, 8];
    const s = ["apple", "banana", "cherry", "blueberry"];
    const isBelowTwo = (value: number) => value < 2;
    const isEven = (value: number) => value % 2 === 0;
    const isAboveSeven = (value: number) => value > 7;
    const startsWithB = (value: string) => value.startsWith("b");
    assert.equal(
      new SimpleList(...n).findIndex(isBelowTwo),
      n.findIndex(isBelowTwo),
    );
    assert.equal(new SimpleList(...n).findIndex(isEven), n.findIndex(isEven));
    assert.equal(
      new SimpleList(...n).findIndex(isAboveSeven),
      n.findIndex(isAboveSeven),
    );
    assert.equal(
      new SimpleList(...s).findIndex(startsWithB),
      s.findIndex(startsWithB),
    );
  });

  it("returns -1 if no element satisfies the predicate (no indexes)", () => {
    const n = [1, 3, 5, 7];
    const s = ["apple", "banana", "cherry", "blueberry"];
    const isEven = (value: number) => value % 2 === 0;
    const startsWithZ = (value: string) => value.startsWith("z");
    assert.equal(new SimpleList(...n).findIndex(isEven), n.findIndex(isEven));
    assert.equal(
      new SimpleList(...s).findIndex(startsWithZ),
      s.findIndex(startsWithZ),
    );
  });

  it("returns the index of the first element satisfying a predicate (with indexes)", () => {
    const n = [1, 2, 4, 5, 8];
    const s = ["hi", "a", "hey", "hello", "yo"];
    const isDoubleIndex = (value: number, index: number) => value === index * 2;
    const isLongerThanIndex = (value: string, index: number) =>
      value.length > index;
    assert.equal(
      new SimpleList(...n).findIndex(isDoubleIndex),
      n.findIndex(isDoubleIndex),
    );
    assert.equal(
      new SimpleList(...s).findIndex(isLongerThanIndex),
      s.findIndex(isLongerThanIndex),
    );
  });

  it("returns -1 if no element satisfies a predicate (with indexes)", () => {
    const n = [2, 3, 5, 7];
    const s = ["", "a", "hi", "hey"];
    const isDoubleIndex = (value: number, index: number) => value === index * 2;
    const isLongerThanIndex = (value: string, index: number) =>
      value.length > index;
    assert.equal(
      new SimpleList(...n).findIndex(isDoubleIndex),
      n.findIndex(isDoubleIndex),
    );
    assert.equal(
      new SimpleList(...s).findIndex(isLongerThanIndex),
      s.findIndex(isLongerThanIndex),
    );
  });
});

describe("SimpleList.findLast", () => {
  it("returns undefined for an empty array", () => {
    const e: number[] = [];
    const alwaysTrue = () => true;
    assert.equal(
      new SimpleList(...e).findLast(alwaysTrue),
      e.findLast(alwaysTrue),
    );
  });

  it("returns the last element satisfying the predicate (no indexes)", () => {
    const n = [1, 4, 6, 7, 8];
    const s = ["apple", "banana", "cherry", "blueberry"];
    const isBelowTwo = (value: number) => value < 2;
    const isEven = (value: number) => value % 2 === 0;
    const isAboveSeven = (value: number) => value > 7;
    const startsWithB = (value: string) => value.startsWith("b");
    assert.equal(
      new SimpleList(...n).findLast(isBelowTwo),
      n.findLast(isBelowTwo),
    );
    assert.equal(new SimpleList(...n).findLast(isEven), n.findLast(isEven));
    assert.equal(
      new SimpleList(...n).findLast(isAboveSeven),
      n.findLast(isAboveSeven),
    );
    assert.equal(
      new SimpleList(...s).findLast(startsWithB),
      s.findLast(startsWithB),
    );
  });

  it("returns undefined if no element satisfies the predicate (no indexes)", () => {
    const n = [1, 3, 5, 7];
    const s = ["apple", "banana", "cherry", "blueberry"];
    const isEven = (value: number) => value % 2 === 0;
    const startsWithZ = (value: string) => value.startsWith("z");
    assert.equal(new SimpleList(...n).findLast(isEven), n.findLast(isEven));
    assert.equal(
      new SimpleList(...s).findLast(startsWithZ),
      s.findLast(startsWithZ),
    );
  });

  it("returns the last element satisfying a predicate (with indexes)", () => {
    const n = [1, 2, 4, 5, 8];
    const s = ["hi", "a", "hey", "hello", "yo"];
    const isDoubleIndex = (value: number, index: number) => value === index * 2;
    const isLongerThanIndex = (value: string, index: number) =>
      value.length > index;
    assert.equal(
      new SimpleList(...n).findLast(isDoubleIndex),
      n.findLast(isDoubleIndex),
    );
    assert.equal(
      new SimpleList(...s).findLast(isLongerThanIndex),
      s.findLast(isLongerThanIndex),
    );
  });

  it("returns undefined if no element satisfies a predicate (with indexes)", () => {
    const n = [2, 3, 5, 7];
    const s = ["", "a", "hi", "hey"];
    const isDoubleIndex = (value: number, index: number) => value === index * 2;
    const isLongerThanIndex = (value: string, index: number) =>
      value.length > index;
    assert.equal(
      new SimpleList(...n).findLast(isDoubleIndex),
      n.findLast(isDoubleIndex),
    );
    assert.equal(
      new SimpleList(...s).findLast(isLongerThanIndex),
      s.findLast(isLongerThanIndex),
    );
  });
});

describe("SimpleList.findLastIndex", () => {
  it("returns -1 for an empty array", () => {
    const e: number[] = [];
    const alwaysTrue = () => true;
    assert.equal(
      new SimpleList(...e).findLastIndex(alwaysTrue),
      e.findLastIndex(alwaysTrue),
    );
  });

  it("returns the index of the last element satisfying the predicate (no indexes)", () => {
    const n = [1, 4, 6, 7, 8];
    const s = ["apple", "banana", "cherry", "blueberry"];
    const isBelowTwo = (value: number) => value < 2;
    const isEven = (value: number) => value % 2 === 0;
    const isAboveSeven = (value: number) => value > 7;
    const startsWithB = (value: string) => value.startsWith("b");
    assert.equal(
      new SimpleList(...n).findLastIndex(isBelowTwo),
      n.findLastIndex(isBelowTwo),
    );
    assert.equal(
      new SimpleList(...n).findLastIndex(isEven),
      n.findLastIndex(isEven),
    );
    assert.equal(
      new SimpleList(...n).findLastIndex(isAboveSeven),
      n.findLastIndex(isAboveSeven),
    );
    assert.equal(
      new SimpleList(...s).findLastIndex(startsWithB),
      s.findLastIndex(startsWithB),
    );
  });

  it("returns -1 if no element satisfies the predicate (no indexes)", () => {
    const n = [1, 3, 5, 7];
    const s = ["apple", "banana", "cherry", "blueberry"];
    const isEven = (value: number) => value % 2 === 0;
    const startsWithZ = (value: string) => value.startsWith("z");
    assert.equal(
      new SimpleList(...n).findLastIndex(isEven),
      n.findLastIndex(isEven),
    );
    assert.equal(
      new SimpleList(...s).findLastIndex(startsWithZ),
      s.findLastIndex(startsWithZ),
    );
  });

  it("returns the index of the last element satisfying a predicate (with indexes)", () => {
    const n = [1, 2, 4, 5, 8];
    const s = ["hi", "a", "hey", "hello", "yo"];
    const isDoubleIndex = (value: number, index: number) => value === index * 2;
    const isLongerThanIndex = (value: string, index: number) =>
      value.length > index;
    assert.equal(
      new SimpleList(...n).findLastIndex(isDoubleIndex),
      n.findLastIndex(isDoubleIndex),
    );
    assert.equal(
      new SimpleList(...s).findLastIndex(isLongerThanIndex),
      s.findLastIndex(isLongerThanIndex),
    );
  });

  it("returns -1 if no element satisfies a predicate (with indexes)", () => {
    const n = [2, 3, 5, 7];
    const s = ["", "a", "hi", "hey"];
    const isDoubleIndex = (value: number, index: number) => value === index * 2;
    const isLongerThanIndex = (value: string, index: number) =>
      value.length > index;
    assert.equal(
      new SimpleList(...n).findLastIndex(isDoubleIndex),
      n.findLastIndex(isDoubleIndex),
    );
    assert.equal(
      new SimpleList(...s).findLastIndex(isLongerThanIndex),
      s.findLastIndex(isLongerThanIndex),
    );
  });
});

describe("SimpleList.pop", () => {
  it("returns undefined for an empty array", () => {
    const e: number[] = [];
    const eSimpleList = new SimpleList(...e);
    assert.equal(eSimpleList.pop(), e.pop());
    assert.equal(eSimpleList.length, e.length);
  });

  it("returns the last element", () => {
    const n = [1, 2, 3];
    const s = ["hi"];
    const nSimpleList = new SimpleList(...n);
    const sSimpleList = new SimpleList(...s);
    assert.equal(nSimpleList.pop(), n.pop());
    assert.equal(sSimpleList.pop(), s.pop());
  });

  it("removes the last element", () => {
    const n = [1, 2, 3];
    const s = ["hi"];
    const nSimpleList = new SimpleList(...n);
    const sSimpleList = new SimpleList(...s);
    nSimpleList.pop();
    n.pop();
    sSimpleList.pop();
    s.pop();
    assert.equal(nSimpleList.length, n.length);
    assert.equal(String(nSimpleList), `[${n.join(", ")}]`);
    assert.equal(sSimpleList.length, s.length);
    assert.equal(String(sSimpleList), `[${s.join(", ")}]`);
  });

  it("removes elements one at a time until empty", () => {
    const s = ["apple", "banana", "cherry"];
    const sSimpleList = new SimpleList(...s);
    for (let i = 0; i < 4; i++) {
      assert.equal(sSimpleList.pop(), s.pop());
      assert.equal(sSimpleList.length, s.length);
      assert.equal(String(sSimpleList), `[${s.join(", ")}]`);
    }
  });
});

describe("SimpleList.shift", () => {
  it("returns undefined for an empty array", () => {
    const e: number[] = [];
    const eSimpleList = new SimpleList(...e);
    assert.equal(eSimpleList.shift(), e.shift());
    assert.equal(eSimpleList.length, e.length);
  });

  it("returns the first element", () => {
    const n = [1, 2, 3];
    const s = ["hi"];
    const nSimpleList = new SimpleList(...n);
    const sSimpleList = new SimpleList(...s);
    assert.equal(nSimpleList.shift(), n.shift());
    assert.equal(sSimpleList.shift(), s.shift());
  });

  it("removes the first element", () => {
    const n = [1, 2, 3];
    const s = ["hi"];
    const nSimpleList = new SimpleList(...n);
    const sSimpleList = new SimpleList(...s);
    nSimpleList.shift();
    n.shift();
    sSimpleList.shift();
    s.shift();
    assert.equal(nSimpleList.length, n.length);
    assert.equal(String(nSimpleList), `[${n.join(", ")}]`);
    assert.equal(sSimpleList.length, s.length);
    assert.equal(String(sSimpleList), `[${s.join(", ")}]`);
  });

  it("removes elements one at a time until empty", () => {
    const s = ["apple", "banana", "cherry"];
    const sSimpleList = new SimpleList(...s);
    for (let i = 0; i < 4; i++) {
      assert.equal(sSimpleList.shift(), s.shift());
      assert.equal(sSimpleList.length, s.length);
      assert.equal(String(sSimpleList), `[${s.join(", ")}]`);
    }
  });
});

describe("SimpleList.push", () => {
  it("does nothing when called with no values", () => {
    const e: number[] = [];
    const s = ["hi", "there"];
    const eSimpleList = new SimpleList(...e);
    const sSimpleList = new SimpleList(...s);
    eSimpleList.push();
    e.push();
    sSimpleList.push();
    s.push();
    assert.equal(eSimpleList.length, e.length);
    assert.equal(String(eSimpleList), `[${e.join(", ")}]`);
    assert.equal(sSimpleList.length, s.length);
    assert.equal(String(sSimpleList), `[${s.join(", ")}]`);
  });

  it("adds a single value to the end", () => {
    const e: number[] = [];
    const s = ["hi", "there"];
    const eSimpleList = new SimpleList(...e);
    const sSimpleList = new SimpleList(...s);
    eSimpleList.push(7);
    e.push(7);
    sSimpleList.push("friends");
    s.push("friends");
    assert.equal(eSimpleList.length, e.length);
    assert.equal(String(eSimpleList), `[${e.join(", ")}]`);
    assert.equal(sSimpleList.length, s.length);
    assert.equal(String(sSimpleList), `[${s.join(", ")}]`);
  });

  it("adds multiple values to the end in order", () => {
    const e: number[] = [];
    const s = ["hi", "there"];
    const eSimpleList = new SimpleList(...e);
    const sSimpleList = new SimpleList(...s);
    eSimpleList.push(1, 2, 3);
    e.push(1, 2, 3);
    sSimpleList.push("my", "good", "friends");
    s.push("my", "good", "friends");
    assert.equal(eSimpleList.length, e.length);
    assert.equal(String(eSimpleList), `[${e.join(", ")}]`);
    assert.equal(sSimpleList.length, s.length);
    assert.equal(String(sSimpleList), `[${s.join(", ")}]`);
  });

  it("adds values one at a time", () => {
    const s = ["apple"];
    const sSimpleList = new SimpleList(...s);
    for (const value of ["banana", "cherry", "date"]) {
      sSimpleList.push(value);
      s.push(value);
      assert.equal(sSimpleList.length, s.length);
      assert.equal(String(sSimpleList), `[${s.join(", ")}]`);
    }
  });

  it("adds values after elements have been removed with pop", () => {
    const s = ["apple", "banana", "cherry"];
    const sSimpleList = new SimpleList(...s);
    sSimpleList.pop();
    s.pop();
    sSimpleList.push("date", "elderberry");
    s.push("date", "elderberry");
    assert.equal(sSimpleList.length, s.length);
    assert.equal(String(sSimpleList), `[${s.join(", ")}]`);
  });
});

describe("SimpleList.unshift", () => {
  it("does nothing when called with no values", () => {
    const e: number[] = [];
    const s = ["hi", "there"];
    const eSimpleList = new SimpleList(...e);
    const sSimpleList = new SimpleList(...s);
    eSimpleList.unshift();
    e.unshift();
    sSimpleList.unshift();
    s.unshift();
    assert.equal(eSimpleList.length, e.length);
    assert.equal(String(eSimpleList), `[${e.join(", ")}]`);
    assert.equal(sSimpleList.length, s.length);
    assert.equal(String(sSimpleList), `[${s.join(", ")}]`);
  });

  it("adds a single value to the start", () => {
    const e: number[] = [];
    const s = ["hi", "there"];
    const eSimpleList = new SimpleList(...e);
    const sSimpleList = new SimpleList(...s);
    eSimpleList.unshift(7);
    e.unshift(7);
    sSimpleList.unshift("oh");
    s.unshift("oh");
    assert.equal(eSimpleList.length, e.length);
    assert.equal(String(eSimpleList), `[${e.join(", ")}]`);
    assert.equal(sSimpleList.length, s.length);
    assert.equal(String(sSimpleList), `[${s.join(", ")}]`);
  });

  it("adds multiple values to the start in order", () => {
    const e: number[] = [];
    const s = ["hi", "there"];
    const eSimpleList = new SimpleList(...e);
    const sSimpleList = new SimpleList(...s);
    eSimpleList.unshift(1, 2, 3);
    e.unshift(1, 2, 3);
    sSimpleList.unshift("well", "oh", "my");
    s.unshift("well", "oh", "my");
    assert.equal(eSimpleList.length, e.length);
    assert.equal(String(eSimpleList), `[${e.join(", ")}]`);
    assert.equal(sSimpleList.length, s.length);
    assert.equal(String(sSimpleList), `[${s.join(", ")}]`);
  });

  it("adds values one at a time", () => {
    const s = ["apple"];
    const sSimpleList = new SimpleList(...s);
    for (const value of ["banana", "cherry", "date"]) {
      sSimpleList.unshift(value);
      s.unshift(value);
      assert.equal(sSimpleList.length, s.length);
      assert.equal(String(sSimpleList), `[${s.join(", ")}]`);
    }
  });

  it("adds values after elements have been removed with shift", () => {
    const s = ["apple", "banana", "cherry"];
    const sSimpleList = new SimpleList(...s);
    sSimpleList.shift();
    s.shift();
    sSimpleList.unshift("date", "elderberry");
    s.unshift("date", "elderberry");
    assert.equal(sSimpleList.length, s.length);
    assert.equal(String(sSimpleList), `[${s.join(", ")}]`);
  });
});

describe("SimpleList.reverse", () => {
  it("does nothing for an empty array", () => {
    const e: never[] = [];
    const eSimpleList = new SimpleList(...e);
    eSimpleList.reverse();
    e.reverse();
    assert.equal(eSimpleList.length, e.length);
    assert.equal(String(eSimpleList), `[${e.join(", ")}]`);
  });

  it("does nothing for a singleton array", () => {
    const n = [123];
    const s = ["hi"];
    const nSimpleList = new SimpleList(...n);
    const sSimpleList = new SimpleList(...s);
    nSimpleList.reverse();
    n.reverse();
    sSimpleList.reverse();
    s.reverse();
    assert.equal(nSimpleList.length, n.length);
    assert.equal(String(nSimpleList), `[${n.join(", ")}]`);
    assert.equal(sSimpleList.length, s.length);
    assert.equal(String(sSimpleList), `[${s.join(", ")}]`);
  });

  it("reverses an array with an odd number of elements", () => {
    const n = [1, 2, 3, 4, 5];
    const s = ["hi", "there", "friend"];
    const nSimpleList = new SimpleList(...n);
    const sSimpleList = new SimpleList(...s);
    nSimpleList.reverse();
    n.reverse();
    sSimpleList.reverse();
    s.reverse();
    assert.equal(nSimpleList.length, n.length);
    assert.equal(String(nSimpleList), `[${n.join(", ")}]`);
    assert.equal(sSimpleList.length, s.length);
    assert.equal(String(sSimpleList), `[${s.join(", ")}]`);
  });

  it("reverses an array with an even number of elements", () => {
    const n = [1, 2, 3, 4];
    const s = ["hi", "there"];
    const nSimpleList = new SimpleList(...n);
    const sSimpleList = new SimpleList(...s);
    nSimpleList.reverse();
    n.reverse();
    sSimpleList.reverse();
    s.reverse();
    assert.equal(nSimpleList.length, n.length);
    assert.equal(String(nSimpleList), `[${n.join(", ")}]`);
    assert.equal(sSimpleList.length, s.length);
    assert.equal(String(sSimpleList), `[${s.join(", ")}]`);
  });

  it("returns the same list it was called on", () => {
    const s = ["hi", "there", "friend"];
    const sSimpleList = new SimpleList(...s);
    assert.equal(sSimpleList.reverse() === sSimpleList, s.reverse() === s);
  });

  it("restores the original order when called twice", () => {
    const s = ["apple", "banana", "cherry", "date"];
    const sSimpleList = new SimpleList(...s);
    sSimpleList.reverse();
    s.reverse();
    sSimpleList.reverse();
    s.reverse();
    assert.equal(sSimpleList.length, s.length);
    assert.equal(String(sSimpleList), `[${s.join(", ")}]`);
  });

  it("reverses correctly after elements have been removed with pop", () => {
    const s = ["apple", "banana", "cherry"];
    const sSimpleList = new SimpleList(...s);
    sSimpleList.pop();
    s.pop();
    sSimpleList.reverse();
    s.reverse();
    assert.equal(sSimpleList.length, s.length);
    assert.equal(String(sSimpleList), `[${s.join(", ")}]`);
  });
});
