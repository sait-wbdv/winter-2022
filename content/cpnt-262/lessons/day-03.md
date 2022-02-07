---
title: Introduction to Functions
description: Description here
date: 2022-02-07T15:00:00.000Z
released: true
homework: 
---
## Recap
- [in-class code](https://github.com/sait-wbdv/in-class-w22/tree/main/02-07-functions)

## Housekeeping
- [New CPNT 262 Assessment Schedule](/cpnt-262/assessments)

---

## 1. Defining and invoking functions
### Materials
- [Functions - reusable blocks of code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)
- [Build your own function](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Build_your_own_function)

### Demo: Greet function
- [Starter files](https://gist.github.com/acidtone/383cf362c923f5126ecb32621dc7c0d4)
- Gist: [Defining functions](https://gist.github.com/acidtone/e3ed5adfcb4f3c02f1b78f78c9c2bf8b)
- Gist: [Invoking functions](https://gist.github.com/acidtone/679b1b07dcaad4491e8696c871e36436)

## 2. Arguments and parameters
### Materials
- Gist: [Function arguments and parameters](https://gist.github.com/acidtone/977e697e38e389284e839e4b7543ee56)1
- Reference: 
    - [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
    - [`Window.prompt()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)

### Breakout Activity
In pairs, create a function that accepts a number as an argument in kilograms (kgs) and converts the number to pounds (lbs).
1. You can use [these starter files](https://gist.github.com/acidtone/383cf362c923f5126ecb32621dc7c0d4) as a starting point.
2. Declare a function called `toPounds` that accepts a `kilos` parameter.
3. Inside the function, multiply `kilos` by 2.2 to convert to pounds.
4. Log the new amount to the console with `console.log`.
5. If you have time, use the [`Window.prompt()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) method to define `kilos` from user input.

Don't forget the [Pair Programming Dos and Don'ts](https://gist.github.com/acidtone/caa20b2520814a94240043c40301024a).

## 3. Dealing with Coercion
One tricky aspect of Javascript is it will sometimes automatically convert one data type (i.e. a `Number`) to another (a `String`). This can lead to unexpected results.

### Materials
- [JavaScript type coercion explained](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/) on Free Code Camp
- [`Number()` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number): for converting strings into numbers

---

## Lab Time
- [Refactor code into functions](https://gist.github.com/acidtone/90355d3bdbcf770be4a642939f58cfd7).
- [Plugin' Away Achievement](/cpnt-262/assignments/achievement-1)
- Code Challenge: [CSS Toggles with element.classList](http://browsertherapy.com/challenges/css-toggles-with-classlist/)


<home-work :home-work="homework">

### Functions
- MDN Readings:
    - [Functions - reusable blocks of code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)
    - [Build your own function](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Build_your_own_function)
    - [Function return values](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values)
- Videos by Steve Griffith
    - [Introduction to Functions in JavaScript](https://youtu.be/W6QaDqud66Y)
    - [JavaScript Function Parameters](https://youtu.be/dxbsN6_C5PI)
    - [JavaScript Function Return Statements](https://youtu.be/qed2cjdF-30)
    
### Free Code Camp Exercises
- Javascript basics: Exercises 47-55
    - Start: [Write Reusable JavaScript with Functions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/write-reusable-javascript-with-functions)
    - Stop: [Stand in Line](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/stand-in-line)

</home-work>
