---
title: CPNT-262 Achievement 4 - If This, Then That
description: A description
---
- Due: Tuesday, Feb 15 @ 11:59pm
- Weight: 5% of the final mark

## Learning Outcomes
This achievement will be marked out of **5 points** where you will:
- **1 point**: Create a drop-down menu, radio button menu or checkbox with a `<form>` element.
- **1 point**: Stop a form submission from refreshing the page using [`Event.preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault).
- **2 points**: Conditionally change an output message or visibly change the page based on the selected value of a drop-down menu, radio button menu or checkbox.
- **1 point**: Document this activity in a Code Journal section of the project README (see last step in the [Instructions](#instructions)).

---

## Instructions
1. Create an `index.html` page with an accessible form.
    - `fieldset` and `legend` elements included;
    - All form fields include a `label`.
2. Add any fields of your choice, a submit button and one of the following:
    - a `<select>` menu with at least three options, OR;
    - a list of radio buttons with at least three options, OR;
    - a single checkbox.
3. Using [`Event.preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault), stop the form from refreshing the page when the form submits.
4. Create a conditional message or make a visible change on the page based on the value of the menu, checkbox.
    - Suggestions for beginners:
        - [Refactor Adding Machine to create Simple Calculator](https://gist.github.com/acidtone/fb9d28505944280f548ad6dde0890102)
    - Other possibilities (use your imagination):
        - Change the page's background colour based on current mood;
        - Show a different response message based on whether a checkbox is checked;
        - Using `Element.innerHTML` output a different image based on a favourite animal.
5. Include a `README.md` file with the following information:
    - Your name, course and assignment title;
    - Attributions: **Did anyone help you?** Give credit to any classmates, articles, tutorials, etc that helped you complete this project.
    - Journal: Include self-assessments, observations, research, etc under the heading "Code Journal". 

Points will be deducted for code that is too similar to examples shown in class.

---

## Submission
1. Create a GitHub repo of your project;
2. Download a ZIP of the project;
3. In Brightspace, submit your ZIP and include the following as a comment in your submission:
    - a link to your GitHub repo;
    - a link to the GitHub Pages site;