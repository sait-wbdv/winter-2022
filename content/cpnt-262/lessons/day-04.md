---
title: Buttons and Events
description: Description here
date: 2022-02-08T15:00:00.000Z
released: true
homework: 
---
## Recap
- [in-class code](https://github.com/sait-wbdv/in-class-w22/tree/main/02-08-events)

## Housekeeping
- [Changes](https://github.com/sait-wbdv/winter-2022/commit/0543d3fc7ccfd4829fb90c0aa7e0169a27799029) to:
    - Achievement 2: [Before and After](/cpnt-262/assignments/achievement-2)
    - Achievement 3: [Press of a Button](/cpnt-262/assignments/achievement-3)

---

## 1. Spoiler Demo
### Materials
- [Refactor code into functions](https://gist.github.com/acidtone/90355d3bdbcf770be4a642939f58cfd7).

## 2. Introduction to Events
### Materials
- [`document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [`EventTarget.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

### Demo: Triggering functions with a button
- Starter code: Spoilers from Function Refactor session

### Breakout Activity
In pairs: Try to repeat what Tony did in his demo
1. Pick one of the functions from [today's spoilers](https://github.com/sait-wbdv/in-class-w22/tree/main/02-08-events/02-spoiler-finished)
2. Goal: refactor the code so that the prompt(s) start on a button click
3. Create a button element
4. Assign that element to a variable with [`document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
5. Wrap the prompt code into a `clickHandler` function.
6. Add that function as a button click event using [`button.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

## 3. More events and elements
- [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)

---

## Lab Time
### Main Room: Dark Mode Toggle
- Based on [this Issue](https://github.com/sait-wbdv/winter-2022/issues/32)
- Materials: [Ultimate Dark Mode Toggle](https://padlet.com/acidtone/UltimateDarkModeToggle)

---

<home-work :home-work="homework">

### Events and `Element.addEventListener()`
- MDN Readings:
    - [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
        - [`document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
    - [Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
    - [`EventTarget.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
    - [Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- Video by Steve Griffith
    - [Introduction to JavaScript Event Listeners](https://youtu.be/EaRrmOtPYTM) by Steve Griffith

### Changing CSS with JS
- ['Element.classList'](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- [Code Examples](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#Examples)
- Code Challenge: [CSS Toggles with element.classList](http://browsertherapy.com/challenges/css-toggles-with-classlist/)

</home-work>
