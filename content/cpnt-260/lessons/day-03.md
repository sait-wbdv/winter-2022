---
title: Flexbox Page Layout
description: Description here
date: 2022-01-24T15:00:00.000Z
released: false
---

## Activity: A responsive navigation bar

## Review

- links and pathnames
- hierarchy
  - ul and headings
- image width
- syntax padding and spacing bugs

### Gist Notes for Review

- [Flex Nav Bar](https://gist.github.com/lilyx13/f9bd12f1b00627601fbc3a32f4a6bf7b)
- [Semantic Hierarchy](https://gist.github.com/lilyx13/be85b495d534d3482fd7e9b1680e282b)

### HTML and CSS Validators

Use These for your assignments and any code that you want to check.

- [HTML Validator](https://validator.w3.org/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)

---

## Overview

1. Plan it out

- Solving design problems with flexbox

2. Brute force

- Position elements in Flex Containers
- Nesting flexbox containers

3. Walkthrough
4. Optimize/Test

---

## Topic 1: Introduction to Flexbox

_Create responsive and interesting designs with flexbox_

### Terminology

`display`
: This property is used to set the layout of an element and its children. Read more in [this Mdn article](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
main-axis
: This is defined by the `flex-direction`. If your flex-direction is set to row _(this is the default)_, then the main axis is horizontal. If your flex-direction is set to column, then the main axis is vertical. - items are set along this axis by using `justify-content`
cross-axis
: This is the other axis of a flex layout. It changes depending on your flex-direction - Items are positioned along this axis by using `align-items`

### Notes

- [Tony's Flexbox header gist](https://gist.github.com/acidtone/1ff8aabed305f862c10f1ff6b8908a04)
  - Applied example of flexbox basics

---

## Topic 2: Position Elements in Flex Containers

_Arrange a site's content_

### Terminology

flex container
: The parent element of flex items. A flex container can also be a flex item. Use properties such as `flex-wrap`, `flex-flow` etc to customize how the items in the container will be positioned and respond to one another.
flex item
: Children of flex containers. Use properties such as `flex-grow`, `flex-shrink`, `align-self` to customize how flex items look and function

### Notes

- [Ashlyn's Flexbox Codepen](https://codepen.io/ashlyn-knox/pen/qBmzyrG)
  - Ignore the scss nesting for now, but we will be getting into that later in the program

## Activity: [Make a Page Layout with Flexbox]({{ '/activities/html-css/flexbox-layout' | url }})

---

### Topic 3: Simple Signup Forms

_Basics of creating forms_

### Notes

- use `form` tag for using interaction
- `input type="text"` will create a 1 line input field
- `input type="textarea"` will create a text box
- `label for="input-box-id"` for your input fields
- `button type="submit" will create a submit button`

#### Resources

- [Mdn Your first Form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)
  - For now we don't need to worry about sending form data to a web server.
- [Smashing Magazine article on form usability](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/)

---

## Activity 2: [Designing a Signup page with flexbox]({{ 'activities/html-css/simple-signup/ | url }})

---

## Walkthrough

- Code review
- Bug Hunting
- Discussion
- Comment and plan code changes

---

## Optimize

_End of Day Activity_

- Implement changes noted in comments
- Validate Code
- Deploy and Submit

---

## Prep for next day

- Read [Mdn Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- Read [Mdn Media Queries and Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/rwd_skills)
- Read [FreeCodeCamp Article](https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/)
  - Background theory
- Watch the first 10 minutes of [Are you writing css the wrong way?](https://youtu.be/0ohtVzCSHqs)
- Read [Font Awesome Icons Basic Use](https://fontawesome.com/v5.15/how-to-use/on-the-web/referencing-icons/basic-use)
- **Read [CSS tricks: Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)**
  - While the mdn docs are important to read, this page has a very comprehensive and attractively formatted layout
  - Everything in purple is about flex **containers**
  - Everything in yellow is about flex **items**

---
