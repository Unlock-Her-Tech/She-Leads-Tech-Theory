# 📙 She Leads Tech — Theory

> **LEARN:** Understand the reasoning behind technical patterns through guided sessions, notes and worked examples.

[![Part of She Leads Tech](https://img.shields.io/badge/She%20Leads%20Tech-LEARN-F97316)](https://github.com/Unlock-Her-Tech)
[![Language](https://img.shields.io/badge/language-TypeScript-3178C6?logo=typescript&logoColor=white)](Leetcode-Typescript/)

## Where this repository fits

**📙 Theory** → [🧩 Practice](https://github.com/Unlock-Her-Tech/She-Leads-Tech-Practice) → [✅ Review](https://github.com/Unlock-Her-Tech/She-Leads-Tech-Review)

Theory is the guided-learning part of She Leads Tech. Use it during a live session or when revisiting a concept. Each session introduces a pattern, works through one or more problems and compares solution approaches.

When you can explain the idea in your own words, continue to **Practice** and apply it independently.

## What you will find here

- Session overviews and learning goals
- Problem statements and hints
- Teaching notes and key concepts
- Live-coded and worked solutions
- Comparisons between simple and optimised approaches
- Time and space complexity discussions

Independent exercise sets belong in [Practice](https://github.com/Unlock-Her-Tech/She-Leads-Tech-Practice). Quizzes, recall prompts and progress checks belong in [Review](https://github.com/Unlock-Her-Tech/She-Leads-Tech-Review).

## TypeScript sessions

| Session | Main topic | Problems | Open session |
| ---: | --- | --- | --- |
| 01 | Maps, frequency counting and Big O | Valid Anagram — LeetCode 242 | [Session 01](Leetcode-Typescript/Session-01-Maps-and-Frequency/) |
| 02 | Palindromes, sets and two pointers | Longest Palindrome — LeetCode 409; Longest Palindromic Substring — LeetCode 5 | [Session 02](Leetcode-Typescript/Session-02-Palindromes/) |
| 03 | Fixed-length sliding windows | Maximum Average Subarray I — LeetCode 643 | [Session 03](Leetcode-Typescript/Session-03-Fixed-Length-Sliding-Windows/) |
| 04 | Sliding-window reinforcement | Maximum Subarray Sum | [Session 04](Leetcode-Typescript/Session-04-Sliding-Window-Reinforcement/) |

## Repository structure

```text
Leetcode-Typescript/
└── Session-XX-Topic-Name/
    ├── README.md
    └── Problems/
        └── Problem-Name/
            ├── Problem.md
            ├── Notes.md
            ├── ExampleUsage.ts      # optional
            └── Solutions/
                └── ApproachName.ts
```

- The session `README.md` gives the learning goals, order and links for the whole session.
- `Problems/` keeps one or more worked problems together.
- `Problem.md` contains the prompt, examples, constraints and hints.
- `Notes.md` explains the concepts, approach, complexity and takeaways.
- `Solutions/` contains the code demonstrated or discussed in the session.
- `ExampleUsage.ts` is optional and should appear only when runnable examples add value.

## How to use a session

1. Open the session README and review its learning goals.
2. Read `Problem.md` without opening the solution files.
3. Describe a simple approach and identify the likely data structure or pattern.
4. Use `Notes.md` during or after the guided explanation.
5. Compare the solution approaches and their complexity.
6. Explain why the preferred approach works in your own words.
7. Continue to the related [Practice](https://github.com/Unlock-Her-Tech/She-Leads-Tech-Practice) material.

## Get the repository

Clone the repository if you want a local copy of the session material:

```bash
git clone https://github.com/Unlock-Her-Tech/She-Leads-Tech-Theory.git
cd She-Leads-Tech-Theory
```

Use a fork if you want to propose improvements. Select **Fork** on GitHub, clone your fork and open a pull request when your changes are ready.

## Adding future sessions

Keep new sessions consistent with the existing structure:

1. Use the next two-digit number and a descriptive topic name: `Session-05-Variable-Length-Sliding-Windows`.
2. Add a session README with its goals, prerequisites, problems and next step.
3. Create one folder inside `Problems/` for each worked problem.
4. Keep prompts in `Problem.md`, teaching explanations in `Notes.md` and code in `Solutions/`.
5. Name solution files by approach, such as `BruteForceSolution.ts` or `SlidingWindowSolution.ts`.
6. Add the session to the table in this README.
7. Test every code example and check every relative link before opening a pull request.

Avoid folders named `final`, files named `copy`, or contributor names in filenames. Git already preserves earlier versions and authorship.

## Our approach

> **Structure is the solution to the problem.**

We focus on understanding the problem, recognising reusable patterns, comparing approaches and building confidence through collaborative learning.

## Join a session

See upcoming sessions and register at [She Leads Tech Practice](https://luma.com/sheleadstechpractice).

---

Part of [Unlock Her Tech](https://github.com/Unlock-Her-Tech) · Learn the concept, practise the pattern, review your understanding.
