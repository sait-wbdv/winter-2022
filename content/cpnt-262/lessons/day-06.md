---
title: Event Objects and Conditional Code
description: Description here
date: 2022-02-10T15:00:00.000Z
released: true
homework: 
---

## Housekeeping
- Achievement 4: [If This, Then That](/cpnt-262/assignments/achievement-4)

---

## 1. Conditional code blocks
The `if`/`else` statement is used to conditionally run code when an expression (code that returns a value) is `true`.

### Materials
- [Boolean values](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)
- [Making decisions in your code - conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
- [Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators)

[Slides](https://sait-wbdv.github.io/slides/w22/cpnt262/js-conditionals.html)

### Demo: Greeter with language support
- [Greeter starter code](https://github.com/sait-wbdv/in-class-w22/tree/main/02-10-conditionals/01-greet-starter)

## 2. Forms: `Event.preventDefault()`
- [`submit` Event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)
- [`Event.preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- [`<select>`: The HTML Select element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)

### Demo: Tip Calculator with `<select>` menu and `Event.preventDefault()`
- JS Activity: [Tip Calculator with drop down menu](https://gist.github.com/acidtone/9adae5b6fcdf8f2b3bab4c814f9f1da6)
- [starter code](https://github.com/sait-wbdv/in-class-w22/tree/main/02-10-conditionals/03-tip-calculator-starter)

### Breakout Activity
In pairs, take the [form created in the demo](https://github.com/sait-wbdv/in-class-w22/tree/main/02-10-conditionals/05-tip-calculator-menu), using `if`, `else if` and/or `else` statements, set the `tipRate` based on the service level selected in the menu.
- Note: The value of the select menu is stored in the `form.service.value` property.

## 3. Equality and Truthiness
Coercion in untyped languages (such as Javascript) produces a concept known as "Truthiness": some values are more equal than others, based on their value type.

### Materials
- [Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

---

## Lab Time
- JS Activity: [Refactor Adding Machine to create Simple Calculator](https://gist.github.com/acidtone/fb9d28505944280f548ad6dde0890102)
- JS Activity: [Tip Calculator with drop down menu](https://gist.github.com/acidtone/9adae5b6fcdf8f2b3bab4c814f9f1da6)
- Question: Why does `3 > 2 > 1` evaluate to `false`?

---

<home-work :home-work="homework">

## Forms
- [`Event.preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- [`submit` Event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)
- [`<select>`: The HTML Select element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)

## Conditional Code
- [Boolean values](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)
- [Making decisions in your code - conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
- [Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
- [Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators)

</home-work>
