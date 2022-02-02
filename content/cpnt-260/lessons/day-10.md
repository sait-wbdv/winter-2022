---
title: CSS Animations and Review Day
description: Description here
date: 2022-02-02T15:00:00.000Z
released: true
---

## Morning Overview

### [Assignment 4: Home Page](/cpnt-260/assignments/assignment-4/)

- Due: February 7
- Focus:
  - Hero Section
  - 1 section of content (can be text, images, a combination)
  - A Live Form

### Topics

- Topic 1: Live Forms
  - Activity: code reviews
- Topic 2: Transitions and Keyframes
  - Activity: add a simple animation to a past activity
- Topic 3: CPNT-260 Key Takeaway Review
- Lab Time
  - File management tutorial (15ish min)
  - Breakout rooms
    - lab facilitators will offer support

---

## Live Forms and Form Review

- For your assignment, you will be using formspree to make your forms actually submit info to somewhere
- [formspree site](https://formspree.io/)
- **Task** add the url from formspree to the action, and set the `method="post"`

### Form Review

- [Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- Your form should be inside `form` tags
- Use `fieldset` to wrap groups of inputs
  - This is **necessary** for checkboxes and radio groups
  - you can also group related fields together (like contact info) by using fieldset
- every input needs a `label`
  - whatever you write in an input's `id` should be also written in the label's `for`
  - you can wrap the input in the label if you want.
- the `name` is used to reference form data after it has been submitted
- `input type="submit"` is used to create a form submission button. It should be inside the `form` tags

### Breakout Session: Form Code Walkthrough (30 min)

- In pairs, you will conduct a walkthrough of each other's form activities to note issues in one another's code.
- Driver/Navigator Format
  - Look at Driver's Code, Driver adds comments
  - Navigator comments on errors in code
- **DO NOT FIX ANY CODE** Just add comments above lines with syntax or logic errors. use TODO
- Example:

```
<!-- TODO label for should refer to the id -->
<label for="text-box">User Name</label>
<!-- TODO fix type -->
<input type="text-box" name="text-box" id="name">
```

---

## Transitions

<iframe height="300" style="width: 100%;" scrolling="no" title="Transition Lab" src="https://codepen.io/lilyx/embed/gOXrzJV?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/lilyx/pen/gOXrzJV">
  Transition Lab</a> by lilyx (<a href="https://codepen.io/lilyx">@lilyx</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

- Transition syntax example: `transition: background-color 0.5s ease-in-out;
- [Mdn docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
- Transitions are generally better to use than keyframes as they are more performant
- Try create a `cubic-bezier()` curves in place of `ease` or `ease-in-out`
  - [CSS Tricks: Cubic Bezier](https://css-tricks.com/advanced-css-animation-using-cubic-bezier/)
    - Very math heavy write up. Lots of diagrams

#### [Transition Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)

- You can separate your transition declaration into:

  - `transition-property` -- the property being selected
  - `transition-duration` -- how long the animation takes
  - `transition-timing-function` -- defines how the transition moves through time
  - `transition-delay` -- you can set a delay on the animation

- You can short hand all the above values like this:

```
div {
  transition: <property> <duration> <timing-function> <delay>;
}
```

#### Extra Reading

- [Fun with blurred text](https://css-tricks.com/fun-with-blurred-text/

### Keyframes

<iframe height="300" style="width: 100%;" scrolling="no" title="Keyframe Lab" src="https://codepen.io/lilyx/embed/oNoxyav?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/lilyx/pen/oNoxyav">
  Keyframe Lab</a> by lilyx (<a href="https://codepen.io/lilyx">@lilyx</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

- [CSS Tricks](https://css-tricks.com/snippets/css/keyframe-animation-syntax/)
- [Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
- Keyframes are like the transition-timing-function on steroids.
- The `identifier` is what you use to refer to your keyframe
- Syntax:

```
@keyframes identifier {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
/* Then apply the keyframe like this */
.class-name {
  animation: identifier 5s infinite;
}
```

- In the above example, the animation would take 5 seconds to complete and repeat in a loop infinitely
  - it could be set to only repeat a set number of times
- Instead of `from` and `to` you can use **percentages**

#### Extra Reading

- [Fun with blurred text](https://css-tricks.com/fun-with-blurred-text/

---

## CPNT-260 Takeaways

- HTML like a bunch of nesting dolls. A series of containers full of items (which are also containers)
- Syntax and filestructure matters
- `class`es override values set directly on html elements. and `id`'s override `class`
- Use flexbox and grid to set up your layouts
  - avoid using margin and padding to position items, these are used for minor tweaks
- Use semantic html tags
  - `div` is just for **style** and small groupings
- white space is your friend (almost always add a bit of padding on buttons)
- make your fonts responsive with clamp
- It is often useful to use containers to set sizes of objects
- **Avoid spam coding** Think things through

---

## Lab Time

- Lab Facilitators:
  - Jess
  - Fesal

### Tutorial on Cleaning up Project Files by Jessica

- Organizing Code
- Naming Conventions
- File structure

### Work on Projects

- Code Walkthroughs and 1 on 1s with facilitators
- [Project 3 Gallery](/cpnt-260/assignments/assignment-3)
- [Project 4 Home Page](/cpnt-260/assignments/assignment-3)
- Form Optimization
- Experiment with Animations
