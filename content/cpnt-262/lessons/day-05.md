---
title: DOM Elements and Page Output
description: Description here
date: 2022-02-09T15:00:00.000Z
released: true
homework: 
---
## Recap
- [in-class code](https://github.com/sait-wbdv/in-class-w22/tree/main/02-09-dom-input-output)


## Housekeeping
- Friday afternoon: 
    - Ash/Tony pair-code session -> WBDV Dark Mode Toggle
- [Updated Schedule](/)

---

## 1. `clickHandler` Overview
### Materials
- [`document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [`EventTarget.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

## 2. Form field variables with DOM output
### Materials
- [Basic native form controls](https://developer.mozilla.org/en-US/docs/Learn/Forms/Basic_native_form_controls)
- [Numeric field](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types#numeric_field)
- [`Node.textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

### Demo: GST Calculator with Form
- Gist: [JS Activity - Form fields and DOM output](https://gist.github.com/acidtone/64c3c63e0ee7de3aa56adfc99deeeef8)
- Starter Code: [01-clickhandler-starter](https://github.com/sait-wbdv/in-class-w22/tree/main/02-09-dom-input-output/01-clickhandler-starter)

### Breakout Activity
In pairs: Try to repeat what Tony did in his demo
1. Pick one of the functions from [today's spoilers](https://github.com/sait-wbdv/in-class-w22/tree/main/02-09-dom-input-output/01-clickhandler-starter)
2. Goal: Create a fully functional form that takes input from a form field and outputs to the page.
3. Follow the instructions on [this page](https://gist.github.com/acidtone/64c3c63e0ee7de3aa56adfc99deeeef8).


## 3. Demo: Vanilla JS Dark Mode Toggle
If there's time, we'll add a Dark Mode to the GST Calculator.
### Materials: 
- [Ultimate Dark Mode Toggle](https://padlet.com/acidtone/UltimateDarkModeToggle)

---

## Lab Time
- JS Activity: [Form fields and DOM output](https://gist.github.com/acidtone/64c3c63e0ee7de3aa56adfc99deeeef8)
    - Bonus Activity: [Ratio to Percentage utility function](https://gist.github.com/acidtone/64c3c63e0ee7de3aa56adfc99deeeef8#bonus-activity)
- Dark Mode Toggle upgrades: [in-class code](https://github.com/sait-wbdv/in-class-w22/tree/main/02-09-dom-input-output/03-gst-calculator-dark-mode). Try the following upgrades to the dark mode toggle:
    - Add a transition to the colour change that matches the timing of the slider;
    - Add more colours to the form that also toggle;
    - Add a dynamic label that changes from "_Enable Dark Mode!_" to "_Dark Mode Enabled!_" to match the current state of the switch.

---

<home-work :home-work="homework">

## Review: Forms
- [Your first form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)
- [Basic native form controls](https://developer.mozilla.org/en-US/docs/Learn/Forms/Basic_native_form_controls)
- [Numeric field](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types#numeric_field)

## HTML Output
- [`Element.innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
- [`Node.textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

</home-work>
