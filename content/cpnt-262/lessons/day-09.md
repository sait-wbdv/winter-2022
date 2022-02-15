---
title: Loops and Random Things
description: Description here
date: 2022-02-15T15:00:00.000Z
released: true
homework: 
---

## Housekeeping
- Lab Time shenanigans with Ash
- [Achievement 5](/cpnt-262/assignments/achievement-5)
    - Due: Friday, Feb 18 @ 11:59pm
    - Weight: 5% of the final mark

---

## 1. Spoiler Demos
### Materials
- [starter code](https://github.com/sait-wbdv/in-class-w22/tree/main/02-14-arrays-strings/05-array-string-lab-starter) from yesterday

### Demo
- Using `String.split()`, refactor the `<textarea>` counter to be a word counter.

## 2. `for` Loop
### Materials
- MDN: [`for` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)

### Demo: Output 1-100 as a bulleted list
- Starter Code: [Print 1-to-100 with a `for` Loop](https://gist.github.com/acidtone/e87aa5564ae1b286beca66b07d52550f)

### Breakout Activity
In groups of two or three, attempt the code-interview question listed under [Activity](https://gist.github.com/acidtone/e87aa5564ae1b286beca66b07d52550f#activity) of [Print 1-to-100 with a `for` Loop](https://gist.github.com/acidtone/e87aa5564ae1b286beca66b07d52550f).

## 3. Utility Function: Random integer
### Materials
- Gist: [Find a random item in an Array](https://gist.github.com/acidtone/2a3cac26a229aa95685e5cf6344f2e4e)

### Demo: Pick `x` number of random items
- Inspiration: Tony's [Namor App](https://acidtone.github.io/namor/) (random phrase generator that uses a `for` loop)

---

## Lab Time
1. Classic interview question: using a `for` loop, print a series of numbers from 1 to 100 such that:
    - if the number is divisible by 3, print 'Fizz';
    - if the number is divisible by 5, print 'Buzz';
    - if the number is divisible by both 3 and 5, print 'FizzBuzz';
    - otherwise, print the number.
    - Example output: `1, 2, Fizz, 4, Buzz, 5, Fizz, ... , 13, 14, FizzBuzz, Fizz, 17,` etc.
2. `for` Loop Activities:
    - [Create a comma-separated list of nouns](https://gist.github.com/acidtone/24877bf2188f79d8b963116eed7449f5)
    - [Create a gallery of Lorem Picsum images from an array of image id's](https://gist.github.com/acidtone/c258994667d221be15ea794548d13b59)

### Stretch Labs
Instead of a `for` loop, complete the above activities using a `Array.forEach()` loop:
- [`Array.forEach()` - Create a comma-separated list of nouns](https://gist.github.com/acidtone/5c8b6c954dadb7f9e60cbb98cddc0230)
- [`Array.forEach()` - Create a gallery of Lorem Picsum images from an array of image id's](https://gist.github.com/acidtone/0c3caca6908b650c17b605f4242ff004)

See [Basic loop with `Array.prototype.forEach()`](https://gist.github.com/acidtone/aca3574779b81c3ec6d19e3d075fb3ed) to see an example of `.forEach()`.

---

<home-work :home-work="homework">

### Example Project
- Tony's [Namor App](https://acidtone.github.io/namor/) (random phrase generator that uses a `for` loop)

### Math
- MDN Readings:
    - [`Math` Builtin Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
        - [`Math.random()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
        - [`Math.floor()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
- Gist: [Find a random item in an Array](https://gist.github.com/acidtone/2a3cac26a229aa95685e5cf6344f2e4e)

### Loops
- MDN: [`for` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)
- Video: [`for` Loop](https://www.youtube.com/watch?v=s9wW2PpJsmQ) by Mosh Hamedani
- Gist: [Print 1-to-100 with a `for` Loop](https://gist.github.com/acidtone/e87aa5564ae1b286beca66b07d52550f)

### HTML Output
- MDN Readings: 
    - [`Element.innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
    - [Addition assignment (`+=`) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment)

</home-work>
