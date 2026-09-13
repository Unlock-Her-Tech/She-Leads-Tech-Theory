# 🧡 Theory Session 05 — Arrays and Lists

[![She Leads Tech Theory](https://img.shields.io/badge/Theory-LEARN-F97316)](../../README.md)

[Theory home](../../README.md) → **Session 05** → [Simple List](Challenge/Setup.md)

## Learning goals

By the end of this session, you should:

- Have a mental model for how low-level arrays are laid out in computer memory
- Understand what random access means
- Be able to work out which basic array operations are particularly efficient and which are less so:
  - Element access by index: O(1)
  - Linear search: O(n)
  - Element insert at start (or unknown position): O(n)
  - Element insert at end: O(1) usually (if efficient resizing strategy used), O(n) if unlucky
  - Element removal from start (or unknown position): O(n)
  - Element removal from end: O(1)
- Understand how adding layers of abstraction can be a useful way of hiding implementation complexity from consumers of an interface
- Explain how a high-level array or list implementation could abstract away some low-level array operations that aren't usually relevant to high-level tasks
  - Examples: keeping track of the length of a low-level array, dealing with complications that sometimes arise when trying to resize a low-level array
