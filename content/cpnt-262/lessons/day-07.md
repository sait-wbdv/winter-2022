---
title: Validating Values
description: Description here
date: 2022-02-11T15:00:00.000Z
released: true
homework: 
---

## Recap
- [in-class code](https://github.com/sait-wbdv/in-class-w22/tree/main/02-11-validation)

## Housekeeping
- Question: Why does `3 > 2 > 1` evaluate to `false`?
- This afternoon: Dark Mode in VueJS/Nuxt

---

# 1. Utility Functions
### Materials
- [Function return values](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values)

### Demo: Ratio to Percentage Converter
- [Bonus Activity](https://gist.github.com/acidtone/64c3c63e0ee7de3aa56adfc99deeeef8#bonus-activity) from Wednesday
- [Starter code](https://github.com/sait-wbdv/in-class-w22/tree/main/02-11-validation)

## 2. Value validation
### Materials
- [Slides: Value Validation](https://sait-wbdv.github.io/slides/w22/cpnt262/js-value-validation.html)
- [Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [Logical AND (`&&`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [Logical OR (`||`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Logical NOT (`!`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT)

### Breakout Activity
In pairs, refactor the [GST Calculator](https://github.com/sait-wbdv/in-class-w22/tree/main/02-11-validation/03-validation-activity) so that:
- `NaN` no longer appears in the response
- `toPercentage()` will return `false` for negative numbers
- The response for negative numbers is "Please use a positive rate."
- Any others?

## 3. Scope
### Materials
- Article: [A Simple Explanation of Scope in JavaScript](https://dmitripavlutin.com/javascript-scope/)
- [Slides: Scope terminology](https://sait-wbdv.github.io/slides/w22/cpnt262/scope-terminology.html)

## 4. Activity: Text area counter
### Materials
- [`<textarea>` HTML Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
- [Element.getAttribute()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute)

### Activity
- [Text area character counter](https://gist.github.com/acidtone/74727a562940ead812f46c1b1b870d19)


---

<home-work :home-work="homework">

### Forms
- [Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [`<textarea>` HTML Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)

### Logical operators
- [Logical AND (`&&`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [Logical OR (`||`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Logical NOT (`!`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT)

### Scope
- Article: [A Simple Explanation of Scope in JavaScript](https://dmitripavlutin.com/javascript-scope/)

</home-work>



