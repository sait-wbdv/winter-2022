---
title: Exploring Open Data
description: Description here
date: 2022-02-17T15:00:00.000Z
released: true
homework: 
---

## Housekeeping
- Assignment 1: [Fetch Data from an API](/cpnt-262/assignments/assignment-1)
- `async` functions with arrow syntax (question from yesterday)

---

## 1. Demo: `randomIndex()` utility function
### Materials
- Gist: [Find a random item in an Array](https://gist.github.com/acidtone/2a3cac26a229aa95685e5cf6344f2e4e)

## 2. Error Handling with `try...catch`
### Materials
- [The Basics of Exception Handling in JavaScript](https://www.section.io/engineering-education/exception-handling-in-javascript/)
- MDN: [`try`/`catch` blocks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

[Slides: Handling Exceptions](https://sait-wbdv.github.io/slides/w22/cpnt262/js-exceptions.html)

## 3. Demo: Disney Character API
### Materials
- MDN Readings
    - [dot notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#dot_notation)
    - [Object basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
    - [Working_with_Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [REST APIs: Practice endpoints](https://gist.github.com/acidtone/673dfc5c11ce06e9e8cd6ce33609eb3c)
- [List of Public APIs](https://github.com/public-apis/public-apis)

### Breakout Activity: Find the array
You will be working in pairs. Using your knowledge of [dot notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#dot_notation), and the randomIndex function created this morning:
1. `fetch` a list of data from an [open API](https://github.com/public-apis/public-apis);
2. isolate the the array of items if it's deeply nested;
3. using the `randomIndex()` function, `console.log()` (or output to the HTML page) a random item from the list.

## 4. ES Modules
### Materials
- [Introduction to ES Modules](https://flaviocopes.com/es-modules/)

---

## Lab Time
- Ash covering

---

<home-work :home-work="homework">

### Public JSON APIs
- Using this [List of Public APIs](https://github.com/public-apis/public-apis), find an endpoint (a URL that returns a `json` object) that returns either an object or an array of objects. You will use this for an activity.

### ES Modules
- [Introduction to ES Modules](https://flaviocopes.com/es-modules/)
- Optional: [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
    - This article goes into waaaay more detail than we need but it's a good read if you're curious.

### Error handling
- [The Basics of Exception Handling in JavaScript](https://www.section.io/engineering-education/exception-handling-in-javascript/)
- MDN: [`try`/`catch` blocks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

</home-work>