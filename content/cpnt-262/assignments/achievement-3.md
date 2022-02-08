---
title: CPNT-262 Achievement 3 - Press of a Button
description: A description
---
- Due: Sunday, Feb 13 @ 11:59pm
- Weight: 5% of the final mark

## Learning Outcomes
This achievement will be marked out of **5 points** where you will:
- **1 point**: Assign a DOM element to a variable using `const` and [`document.querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector).
- **2 points**: Add an Event Listener to this DOM variable using [`Element.addEventListener`](https://www.w3schools.com/jsref/met_element_addeventlistener.asp) that logs DOM information to the Console.
- **1 point**: Bonus point for doing one of the following:
    - _not_ using a `<button>` as the DOM element;
    - not using `click` as the event trigger;
    - visibly changing the page in some way.
- **1 point**: Document this activity in a Code Journal section of the project README (see last step in the [Instructions](#instructions)).

Points will be deducted for code that is too similar to examples shown in class.

---

## Instructions
1. Take a section of code that outputs [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) content using `console.log`.
    - Suggestions for beginners:
        - Log the text of the button using [`Element.innerText`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)
    - Any other code will do as long as:
        - it's not broken;
        - it prints information found in the DOM.
2. Wrap the code into a named function.
    - The code should _not_ execute when the page loads.
3. Attach this function to a `<button>` element on the HTML page.
4. Click the button to invoke your function and output DOM content to the DOM.
5. Include a `README.md` file with the following information:
    - Your name, course and assignment title;
    - Attributions: **Did anyone help you?** Give credit to any classmates, articles, tutorials, etc that helped you complete this project.
    - Journal: Include self-assessments, observations, research, etc under the heading "Code Journal". 

---

## Submission
1. Create a GitHub repo of your project;
2. Download a ZIP of the project;
3. In Brightspace, submit your ZIP and include the following as a comment in your submission:
    - a link to your GitHub repo;
    - a link to the GitHub Pages site;